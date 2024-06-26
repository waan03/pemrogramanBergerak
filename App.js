const Stack = createNativeStackNavigator();
import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoadingScreen from "./screens/LoadingScreen";
import MainMenu from "./screens/MainMenu";
import MainMenuOrganik from "./screens/MainMenuOrganik";
import MainMenuAnorganik from "./screens/MainMenuAnorganik";
import MainMenuCustomerService from "./screens/MainMenuCustomerService";
import Login from "./screens/Login";
import Register from "./screens/SignUp";
import Profile from "./screens/Profile"
import Profile1 from "./screens/Profile1"
import Pagenotfound from "./screens/404"  

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [isShowSplashScreen, setIsShowSplashScreen] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });

  const [fontsLoaded, error] = useFonts({
    "ReadexPro-Light": require("./assets/fonts/ReadexPro-Light.ttf"),
    "ReadexPro-Regular": require("./assets/fonts/ReadexPro-Regular.ttf"),
    "ReadexPro-Medium": require("./assets/fonts/ReadexPro-Medium.ttf"),
    "Koulen-Regular": require("./assets/fonts/Koulen-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {isShowSplashScreen ? <LoadingScreen />:(
          <Stack.Navigator
            initialRouteName="LoadingScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenu"
              component={MainMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuOrganik"
              component={MainMenuOrganik}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuAnorganik"
              component={MainMenuAnorganik}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuCustomerService"
              component={MainMenuCustomerService}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="404"
              component={Pagenotfound}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) }
      </NavigationContainer>
    </>
  );
};
export default App;
