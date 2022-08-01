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

export default class ticket extends Component {
  state = {
    data: [],
    PajaneCustomerCare: "",
  };

  fetchData = async () => {
    const response = await fetch("http://192.168.8.100:1345/trips");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.headerHolder}>
          <Image
            source={require("../assets/bus-png-40029.png")}
            style={styles.img}
          />
          <Animatable.Text
            animation="bounceIn"
            duration={1000}
            style={{
              color: "#fff",
              fontSize: 24,
              marginLeft: 20,
              fontWeight: "600",
            }}
          >
            Your Trips
          </Animatable.Text>
        </View>

        <ScrollView
          style={styles.tripsHolder}
          showsVerticalScrollIndicator={false}
        >
          {this.state.data.map((item, index) => (
            <View key={item.id}>
              <TicketCard
                from={item.from}
                from_station={item.from_station}
                date={item.date}
                to={item.to}
                to_station={item.to_station}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
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
