import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./../components/Header";
import Ticket from "./Ticket";
import { LinearGradient } from "expo-linear-gradient";

const Trips = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 10, paddingHorizontal: 20 }}>
        <Header />
      </View>

      <LinearGradient colors={["#124e78", "#fff", "#fff"]} style={styles.main}>
        <Ticket />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {},
  main: {
    paddingHorizontal: 5,
  },
});
