import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

// const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

interface Props {
  isShow: boolean;
}

export default class LoadingIndicator extends React.Component<Props> {
  render() {
    const { isShow } = this.props;
    if (isShow)
      return (
        <TouchableOpacity activeOpacity={0.5} style={styles.main}>
          <View style={styles.mainIndicator}>
            <ActivityIndicator size="large" color={Colors.tintColor} />
          </View>
        </TouchableOpacity>
      );
    else return null;
  }
}

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    width: "100%",
    height: deviceHeight,
    backgroundColor: Colors.black,
    opacity: 0.5
  },
  mainIndicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 9999
  }
});
