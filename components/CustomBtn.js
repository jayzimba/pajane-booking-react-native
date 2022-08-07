import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomBtn = ({ onPress = () => {}, btnStyle = {}, btnText }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnStyle, btnStyle }}
    >
      <MaterialCommunityIcons name="bus-marker" size={24} color="#fff" />
      <Text style={{ color: "#fff", marginHorizontal: 10 }}>Find Bus</Text>
    </TouchableOpacity>
  );
};
export default CustomBtn;

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 5,
    backgroundColor: "#124e78",
    paddingVertical: 7,
  },
});
