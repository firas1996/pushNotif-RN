import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Contact from "../Screens/Contact";
import Profile from "../Screens/Profile";
import Notif from "../Screens/Notif";

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      //   screenOptions={{ headerShown: false }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notif" component={Notif} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
