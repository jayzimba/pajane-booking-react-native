import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import DatePicker from "react-native-modern-datepicker";
const HeroSection = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <View style={styles.HeroSection}>
      <Image
        source={require("../assets/bus-png-40029.png")}
        style={styles.imgHero}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", color: "#000", fontSize: 18 }}>
            Search for Bus Ticket
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#124e78", fontSize: 12 }}
            >
              Take a Tour
            </Text>
            <Text style={{ color: "#000", fontSize: 12, fontWeight: "500" }}>
              visit your city today?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  HeroSection: {},
  imgHero: {
    width: "100%",
    height: 200,
    alignItems: "center",
    resizeMode: "center",
  },
});
