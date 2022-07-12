import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const Mobile = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.mobileSection}>
        <View style={styles.colorSection}></View>
        <Image source={props.imageUri} style={styles.logo} />
        <View
          style={{
            marginVertical: 10,
            marginStart: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headingPayment}> {props.headingPayment}</Text>
          <Text style={styles.number}>{props.number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  mobileSection: {
    height: 80,
    flexDirection: "row",
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  colorSection: {
    height: "100%",
    width: 10,
    flexDirection: "row",
    backgroundColor: "#124e78",
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  logo: {
    width: 70,
    height: 80,
  },
  headingPayment: {
    fontSize: 18,
    fontWeight: "600",
    color: "#124e78",
    marginBottom: 5,
  },
  number: {
    fontSize: 14,
    fontWeight: "400",
  },
});
