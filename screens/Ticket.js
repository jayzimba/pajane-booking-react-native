import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TicketCard from "../components/TicketCard";
import * as Animatable from "react-native-animatable";
import { render } from "react-dom";
import { MaterialIcons } from "@expo/vector-icons";
const transit = require("../assets/notInTransit.png");

export default class ticket extends Component {
  state = {
    data: [],
    PajaneCustomerCare: "",
  };

  fetchData = async () => {
    const response = await fetch("http://192.168.8.101:1345/trips");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View
        style={{
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="bus-alert" size={200} color="#dedede" />
        <Text style={{ marginStart: -20, fontSize: 16, color: "#8d8d8d8d" }}>
          You Have No Ongoing Trip
        </Text>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    width: "50%",
    height: 100,
    alignItems: "center",
    resizeMode: "cover",
  },
  headerHolder: {
    flexDirection: "row",
    width: width,
    height: height * 0.1,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 5,
  },
  tripsHolder: {
    marginTop: 30,
    marginBottom: 190,
    height: height,
  },
});
