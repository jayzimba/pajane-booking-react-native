import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Mobile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mobileSection}>
        <View style={styles.colorSection}></View>
        <Image source={props.imageUri} style={styles.logo} />
        <View
          style={{
            width: "64%",
            flexDirection: "row",
            marginStart: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              marginVertical: 10,
              marginStart: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.headingPayment}> {props.headingPayment}</Text>
            <Text style={styles.number}>{props.number}</Text>
          </View>

          {props.selected ? (
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons
                name="radio-button-checked"
                size={20}
                color="#05C25D"
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
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
    width: 100,
    height: 81,
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
