import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomBtn = ({ onPress = () => {}, btnStyle = {}, btnText }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnStyle, btnStyle }}
    >
      <MaterialCommunityIcons name="bus-marker" size={24} color="#124e78" />
    </TouchableOpacity>
  );
};
export default CustomBtn;

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
});
