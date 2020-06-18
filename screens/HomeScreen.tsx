import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import {
  SolarIcon,
  SeedlingIcon,
  NewspaperIcon,
  HomeIcon,
  GripHorizontalIcon,
  ChalkboardIcon,
} from "../components/SvgIcon";
import { ProgressDialog } from "react-native-simple-dialogs";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { loginSolar } from "../constants/Api";
import { ISolarUser } from "../model/solar.model";
import { IUser, ISubAccounts } from "../model/user.model";

@inject("SessionsStore")
@observer
export default class HomeScreen extends React.Component<IProps> {
  @observable progressVisible: boolean = false;

  handleOpenSolar = () => {
    this.props.SessionsStore.getUserInfo().then((user: IUser) => {
      if (user) {
        const subUser = user.SubAccounts;
        if (subUser && subUser.length > 0) {
          const growattAccount = subUser.filter(
            (user) => user.SubAccoutType === "SL"
          );
          if (growattAccount.length > 0) {
            const growattAccountFirst = growattAccount[0];
            const { SubUName, SubPassword } = growattAccountFirst;
            if (
              SubUName &&
              SubUName.length > 0 &&
              SubPassword &&
              SubPassword.length > 0
            ) {
              this.loginWithSolarAccount(growattAccountFirst);
            } else {
              alert("You don't have Solar account. Please contact with us.");
            }
          }
        }
      }
    });
  };

  loginWithSolarAccount(SubAccounts: ISubAccounts) {
    this.progressVisible = true;
    loginSolar(SubAccounts)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.Error_Code === "0") {
          if (responseData.SubUser) {
            const user = responseData.SubUser as ISolarUser;
            if (responseData.Plants && responseData.Plants.length > 0) {
              user.Plants = responseData.Plants;
            }
            this.props.SessionsStore.saveSolarUserInfo(user).then(() => {
              this.props.navigation.navigate("Solar");
            });
          }
        } else {
          setTimeout(() => {
            alert(responseData.Error_Msg);
          }, 1000);
        }
        this.progressVisible = false;
      })
      .catch((e) => {
        console.log(e);
        this.progressVisible = false;
      });
  }

  funcNotFound = () => {
    alert("Chức năng hiện đang được cập nhật.");
  }

  openSupport = () => {
    this.props.navigation.navigate("Info");
  }

  openTools = () => {
    this.props.navigation.navigate("Tools");
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <ProgressDialog
          visible={this.progressVisible}
          title="Đang kết nối"
          message="Vui lòng đợi giây lát..."
          animationType="fade"
          activityIndicatorColor={Colors.actionColor}
          activityIndicatorSize="large"
        />
        <ScrollView>
          <View style={styles.logo}>
            <Image
              source={require("../assets/images/login-logo.png")}
              style={[styles.logoImage]}
            ></Image>
          </View>
          <View style={{ ...styles.main, marginTop: hp("3%") }}>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.handleOpenSolar}
            >
              <View style={styles.icon}>
                <SolarIcon></SolarIcon>
              </View>
              <Text style={styles.title}>Năng lượng mặt trời</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.funcNotFound}
            >
              <View style={styles.icon}>
                <HomeIcon></HomeIcon>
              </View>
              <Text style={styles.title}>Nhà thông minh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.funcNotFound}
            >
              <View style={styles.icon}>
                <GripHorizontalIcon></GripHorizontalIcon>
              </View>
              <Text style={styles.title}>Đại lý NhaVietTech</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.main, marginTop: hp("1%") }}>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.funcNotFound}
            >
              <View style={styles.icon}>
                <NewspaperIcon></NewspaperIcon>
              </View>
              <Text style={styles.title}>Tin tức</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.openTools}
            >
              <View style={styles.icon}>
                <SeedlingIcon></SeedlingIcon>
              </View>
              <Text style={styles.title}>Dịch vụ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainItem}
              onPress={this.openSupport}
            >
              <View style={styles.icon}>
                <ChalkboardIcon></ChalkboardIcon>
              </View>
              <Text style={styles.title}>Hỗ trợ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: Colors.white,
  },
  logo: {
    width: "100%",
    alignItems: "center",
  },
  logoImage: {
    width: wp("45%"),
    height: hp("35%"),
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  mainItem: {
    width: wp("31%"),
    height: hp("20%"),
    backgroundColor: "#fff",
    borderRadius: wp("2%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { width: 84, height: 67 },
  title: {
    fontSize: wp("5%"),
    color: Colors.tintColor,
    textAlign: "center",
    marginTop: 10,
  },
});
