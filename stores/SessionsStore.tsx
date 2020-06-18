import { observable, action } from "mobx";
import { AsyncStorage } from "react-native";
import { IUser } from "../model/user.model";

class SessionsStore {
  @observable isLogin = false;
  @observable isSolarLogin = false;
  @observable plants: IPlant[] = [];
  @observable news: INews;

  @action
  async saveUserInfo(userInfo) {
    try {
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.isLogin = true;
    } catch (error) {
      console.log(error.message);
    }
  }

  @action
  async saveSolarUserInfo(userInfo) {
    try {
      await AsyncStorage.setItem("userSolarInfo", JSON.stringify(userInfo));
      this.isSolarLogin = true;
    } catch (error) {
      console.log(error.message);
    }
  }

  @action 
  async getSolarUserInfo(){
    return await AsyncStorage.getItem("userSolarInfo");
  }

  @action
  async getUI() {
    return await AsyncStorage.getItem("userInfo");
  }

  @action
  getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem("userInfo");
      if (value) {
        const user = JSON.parse(value);
        if (user) return user;
      }
    } catch (error) {
      console.log(error.message);
    }
    return null;
  };

  @action
  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("userInfo");
      if (value) {
        const data = JSON.parse(value) as IUser;
        if (data && data.Token && data.Token.length > 0) {
          this.isLogin = true;
          return data.Token;
        }
      }
    } catch (error) {
      console.log(error.message);
      return "";
    }
    this.clearUserInfo();
    return "";
  };

  @action
  checkingUserLogin = () => {
    this.getUI().then(data => {
      if (data) this.isLogin = true;
    });
  };

  @action getUS = async () => {
    return await AsyncStorage.getItem("userInfo");
  };

  @action
  clearUserInfo = async () => {
    try {
      await AsyncStorage.removeItem("userInfo");
      await AsyncStorage.removeItem("userSolarInfo");
      this.isLogin = false;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default new SessionsStore();
