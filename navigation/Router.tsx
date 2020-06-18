import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NhaVietTechInfoScreen from "../screens/NhaVietTechInfoScreen";
import ToolsScreen from "../screens/ToolsScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Info"
        component={NhaVietTechInfoScreen}
        options={{ headerShown: true, headerBackTitle: "Trở về", headerTitle: "Hỗ trợ" }}
      />
      <HomeStack.Screen
        name="Tools"
        component={ToolsScreen}
        options={{ headerShown: true, headerBackTitle: "Trở về", headerTitle: "Dịch vụ" }}
      />
    </HomeStack.Navigator>
  );
}

export {
  HomeStackScreen
};
