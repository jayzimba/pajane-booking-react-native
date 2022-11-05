import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FadeLoading } from "react-native-fade-loading";
const FadeLoader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginRight: 10,
        marginEnd: 10,
        marginVertical: 10,
      }}
    >
      <FadeLoading
        style={{ width: 100, height: 100 }}
        primaryColor="#f8f8f8"
        secondaryColor="lightgray"
        duration={1000}
      />
      <View style={{ width: "50%", marginStart: 10 }}>
        <FadeLoading
          style={{ height: 10 }}
          primaryColor="#f8f8f8"
          secondaryColor="lightgray"
          duration={1000}
        />
        <FadeLoading
          style={{ height: 10, marginVertical: 10, width: 70 }}
          primaryColor="#f8f8f8"
          secondaryColor="lightgray"
          duration={1000}
        />
        <View style={{ flexDirection: "row" }}>
          <FadeLoading
            style={{ height: 10, width: 50, marginEnd: 20 }}
            primaryColor="#f8f8f8"
            secondaryColor="lightgray"
            duration={1000}
          />
          <FadeLoading
            style={{ height: 10, width: 20 }}
            primaryColor="#f8f8f8"
            secondaryColor="lightgray"
            duration={1000}
          />
        </View>
        <FadeLoading
          style={{
            width: 50,
            height: 30,
            marginVertical: 10,
            alignItems: "center",
          }}
          primaryColor="#f8f8f8"
          secondaryColor="lightgray"
          duration={1000}
        />
      </View>
    </View>
  );
};

export default FadeLoader;

const styles = StyleSheet.create({});
