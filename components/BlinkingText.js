// React Native Blinking Animation
// https://aboutreact.com/react-native-blinking-animation/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const BlinkingText = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <Text style={[styles.textStyle, { display: showText ? "none" : "flex" }]}>
        Locating Bus
      </Text>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    marginRight:5,
    fontWeight: "500",
    fontSize:14,
    color: "#000",
  },
});

export default BlinkingText;
