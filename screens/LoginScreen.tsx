import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  BackHandler,
  Dimensions,
  Animated,
  Keyboard,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import Colors from "../constants/Colors";
import { login } from "../constants/Api";
import { IUser } from "../model/user.model";
import LoadingIndicator from "../components/LoadingIndicator";
import { StackActions } from "@react-navigation/native";
import * as Crypto from "expo-crypto";
import publicIP from "react-native-public-ip";
import i18n from "i18n-js";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const IMAGE_HEIGHT = 145;
const IMAGE_HEIGHT_SMALL = 100;

@inject("SessionsStore")
@observer
export default class LoginScreen extends React.Component<IProps> {
  [x: string]: any;
  @observable isForgotPasswordMode: boolean = false;

  @observable userName: string = "";
  @observable password: string = "";

  @observable isFocusUserInput: boolean = false;
  @observable isFocusPassInput: boolean = false;

  @observable isShowLoadingIndicator: boolean = false;

  constructor(props) {
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  UNSAFE_componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  handleBackButtonClick = () => {
    if (this.isForgotPasswordMode) {
      this.isForgotPasswordMode = !this.isForgotPasswordMode;
    }
    // this.props.navigation.goBack(null);
    return true;
  };

  handleForgotPassword = () => {
    this.isForgotPasswordMode = true;
  };

  onFocus(isUserFocus: boolean) {
    isUserFocus
      ? (this.isFocusUserInput = true)
      : (this.isFocusPassInput = true);
  }

  onBlur(isUserFocus: boolean) {
    isUserFocus
      ? (this.isFocusUserInput = false)
      : (this.isFocusPassInput = false);
  }

  handleRegister = () => {
    this.props.navigation.navigate("Register");
  };

  handleLoginWithTrialAccount = () => {
    this.loginAsync("ddnhat0411", "123456");
  }

  handleLogin = () => {
    if (this.userName.length === 0 || this.password.length === 0) {
      // alert("Please input your user name and password.");
      // alert(t("foo"));
      return;
    }
    this.loginAsync(this.userName, this.password);
  };

  loginAsync(userName: string, password: string) {
    this.isShowLoadingIndicator = true;
    publicIP()
      .then((IP) => {
        console.log("Login with ip:", IP);
        if (!(IP && IP.length > 0)) {
          return;
        }
        Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA1,
          password
        )
          .then((digest) => {
            if (!digest && !(digest.length > 0)) {
              alert("Something was wrong, please try again!");
              return;
            }
            login(userName, digest, Platform.OS, IP)
              .then((response) => response.json())
              .then((responseData) => {
                // console.log(JSON.stringify(responseData));
                if (responseData.Error_Code === "0") {
                  const token = responseData.Token;
                  if (token && token.length > 0 && responseData.UserInfo) {
                    const user = responseData.UserInfo as IUser;
                    user.Token = token;
                    this.props.SessionsStore.saveUserInfo(user).then(() => {
                      this.props.navigation.dispatch(
                        StackActions.replace("Home")
                      );
                    });
                  }
                } else {
                  alert(responseData.Error_Msg);
                }
                this.isShowLoadingIndicator = false;
              })
              .catch((e) => {
                console.log(e);
                this.isShowLoadingIndicator = false;
              });
          })
          .catch((error) => {
            console.log(error);
            this.isShowLoadingIndicator = false;
          });
      })
      .catch((error) => {
        console.log(error);
        this.isShowLoadingIndicator = false;
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={styles.main}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <ScrollView>
            <View>
              <Image
                source={require("../assets/images/Smart-House-square.png")}
                style={styles.banner}
              />
              {!this.isForgotPasswordMode && (
                <View style={styles.logo}>
                  <Animated.Image
                    source={require("../assets/images/login-logo.png")}
                    style={[
                      styles.logoImage,
                      // { width: this.imageHeight, height: this.imageHeight}
                    ]}
                  ></Animated.Image>
                </View>
              )}
            </View>

            {!this.isForgotPasswordMode ? (
              <View style={styles.loginForm}>
                <Text style={styles.title}>{i18n.t("UserName")}</Text>
                <TextInput
                  onBlur={() => this.onBlur(true)}
                  onFocus={() => this.onFocus(true)}
                  style={{
                    ...styles.inputUserPass,
                    ...(this.isFocusUserInput ? styles.focus : styles.blur),
                  }}
                  onChangeText={(text) => (this.userName = text)}
                  value={this.userName}
                />
                <Text style={{ marginTop: 16, ...styles.title }}>
                  {i18n.t("Password")}
                </Text>
                <TextInput
                  onBlur={() => this.onBlur(false)}
                  onFocus={() => this.onFocus(false)}
                  style={{
                    ...styles.inputUserPass,
                    ...(this.isFocusPassInput ? styles.focus : styles.blur),
                  }}
                  onChangeText={(text) => (this.password = text)}
                  value={this.password}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  accessibilityRole="button"
                  activeOpacity={0.6}
                  onPress={this.handleLogin}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginTilte}>{i18n.t("Login")}</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 4, marginBottom: 4, alignItems: 'center' }}>
                  <Text>{i18n.t("OR")}</Text>
                </View>
                <TouchableOpacity
                  accessibilityRole="button"
                  activeOpacity={0.6}
                  onPress={this.handleLoginWithTrialAccount}
                  style={styles.trialButton}
                >
                  <Text style={{ color: Colors.white }}>
                    {i18n.t("TrialAccount")}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: 29,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    accessibilityRole="button"
                    activeOpacity={0.6}
                    onPress={this.handleRegister}
                    style={{
                      height: 50,
                      ...styles.title,
                    }}
                  >
                    <Text style={{ color: Colors.black }}>
                      {i18n.t("Register")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    accessibilityRole="button"
                    activeOpacity={0.6}
                    onPress={this.handleForgotPassword}
                    style={{
                      height: 50,
                      ...styles.title,
                    }}
                  >
                    <Text style={{ color: Colors.black }}>
                      {i18n.t("ForgotPassword")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
                <View style={styles.forgotForm}>
                  <TouchableOpacity
                    style={styles.titleView}
                    onPress={this.handleBackButtonClick}
                  >
                    <View style={{ marginTop: 3 }}>
                      <Ionicons name="ios-arrow-back" size={32} color="black" />
                    </View>
                    <Text style={styles.forgotTitle}>
                      {i18n.t("ForgotPassword")}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...styles.title, marginTop: 60 }}>
                    Số điện thoại
                </Text>
                  <View style={{ position: "relative" }}>
                    <TextInput
                      onBlur={() => this.onBlur(true)}
                      onFocus={() => this.onFocus(true)}
                      style={{
                        ...styles.inputUserPass,
                        ...(this.isFocusUserInput ? styles.focus : styles.blur),
                        paddingRight: 130,
                      }}
                      onChangeText={(text) => (this.userName = text)}
                      value={this.userName}
                    />
                    <TouchableOpacity
                      accessibilityRole="button"
                      activeOpacity={0.6}
                      style={styles.otp}
                    >
                      <Text style={styles.otpBtnLabel}>Nhận OTP</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{ marginTop: 16, ...styles.title }}>Mã OTP</Text>
                  <TextInput
                    onBlur={() => this.onBlur(false)}
                    onFocus={() => this.onFocus(false)}
                    style={{
                      ...styles.inputUserPass,
                      ...(this.isFocusPassInput ? styles.focus : styles.blur),
                    }}
                    onChangeText={(text) => (this.password = text)}
                    value={this.password}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity
                    accessibilityRole="button"
                    activeOpacity={0.6}
                    style={styles.loginButton}
                  >
                    <Text style={styles.loginTilte}>
                      GỬI MẬT KHẨU MỚI VỀ ĐIỆN THOẠI
                  </Text>
                  </TouchableOpacity>
                </View>
              )}
          </ScrollView>
          <LoadingIndicator isShow={this.isShowLoadingIndicator} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  main: { width: "100%", height: "100%" },
  logo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "70%",
  },
  logoImage: {
    width: 145,
    height: 188,
  },
  banner: {
    width: "100%",
    height: 250,
  },
  loginForm: {
    marginTop: 90,
    paddingHorizontal: 44,
  },
  forgotForm: {
    marginTop: 10,
    paddingHorizontal: 44,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    paddingHorizontal: 10,
  },
  focus: {
    borderBottomColor: Colors.tintColor,
  },
  blur: {
    borderBottomColor: "#E5E5E5",
  },
  inputUserPass: {
    height: 40,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  loginTilte: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 21,
    height: 50,
    backgroundColor: Colors.actionColor,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  trialButton: {
    height: 30,
    backgroundColor: Colors.tintColor,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotTitle: {
    fontSize: 28,
    lineHeight: 37,
    width: "100%",
    textAlign: "center",
  },
  otp: {
    position: "absolute",
    right: 0,
    height: 37,
    backgroundColor: Colors.tintColor,
    borderRadius: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  otpBtnLabel: {
    fontSize: 14,
    lineHeight: 19,
    color: Colors.white,
    fontWeight: "bold",
  },
  titleView: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
