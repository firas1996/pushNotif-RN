import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate("Notif");
        }}
        title="Go To Notif"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
