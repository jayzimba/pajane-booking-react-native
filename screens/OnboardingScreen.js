import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.replace("Home")}
      onSkip={() => navigation.replace("Home")}
      pages={[
        {
          backgroundColor: "#124e78",
          image: (
            <Image source={require("../assets/logo.png")} style={styles.img} />
          ),
          title: "Welcome",
          subtitle:
            "Pajane bus booking App,the only way to travel with comfort",
        },
        {
          backgroundColor: "#1B6EA9",
          image: (
            <Image
              source={require("../assets/vector.png")}
              style={styles.img}
            />
          ),
          title: "Book On The Go",
          subtitle:
            "Book your bus ticket today from any where, anytime and on any mobile device",
        },
        {
          backgroundColor: "#0761A2",
          image: (
            <Image
              source={require("../assets/bus-png-40029.png")}
              style={styles.img}
            />
          ),
          title: "Find Your Bus Operator",
          subtitle:
            "We have all your favourite bus operators listed to provide you with variety of booking choices",
        },
        {
          backgroundColor: "#053D65",
          image: (
            <Image source={require("../assets/dots.png")} style={styles.img} />
          ),
          title: "Keep Track Of your Trip",
          subtitle:
            "Monitor your trip while on the bus using our trip tracking feature",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 350,
    resizeMode: "center",
  },
});
