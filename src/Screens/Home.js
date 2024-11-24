import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterReducer";
import { getUsers } from "../store/usersAction";

const Home = () => {
  const dispatch = useDispatch();
  const { value, name } = useSelector((state) => state.counter);
  const { users } = useSelector((state) => state.users);
  console.log("users: ", users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text>{value}</Text>
      <Text>{name}</Text>
      <Button
        title="-"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Button
        title="+"
        onPress={() => {
          dispatch(increment());
        }}
      />

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
