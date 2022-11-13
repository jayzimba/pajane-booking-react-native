import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import TicketCard from "../components/TicketCard";
import * as Animatable from "react-native-animatable";
import { render } from "react-dom";
import Header from "./../components/Header";
const transit = require("../assets/notInTransit.png");
const qrcode = require("../assets/qrcode_sample.png");
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userID: 1,
    data: [],
    PajaneCustomerCare: "",
  };

  _keyExtractor(item, index) {
    return index.toString();
  }

  fetchTickets = async () => {
    var formdata = new FormData();
    formdata.append("userID", "3");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://172.20.10.4/pajane/fetchTickets.php", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result == "No ticket found") {
          this.setState({ data: [] });
          console.log("data empty");
        } else {
          this.setState({ data: result });
          console.log("data found");
        }
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.fetchTickets();
  }

  render() {
    return this.state.data.length <= 0 ? (
      <SafeAreaView>
        <View style={{ marginHorizontal: 10, paddingHorizontal: 20 }}>
          <Header />
        </View>
        <View
          style={{
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="bus-alert" size={200} color="#dedede" />
          <Text style={{ marginStart: -20, fontSize: 16, color: "#8d8d8d" }}>
            Booking history is empty
          </Text>
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={{ paddingBottom: 50, marginBottom: 100 }}>
        <View style={{ marginHorizontal: 10, paddingHorizontal: 10 }}>
          <Header />
        </View>
        <FlatList
          bounces={true}
          data={this.state.data}
          keyExtractor={this._keyExtractor.bind(this)}
          renderItem={({ item, index }) => (
            <TicketCard
              busName={"Likili"}
              from={item.From}
              to={item.To}
              date={item.date}
              price={item.price}
            />
          )}
          // keyExtractor={(item, index) => item.BookingID}
        />
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
    marginTop: 10,
    marginHorizontal: 30,
    width: width - 20,
    height: height,
  },
});
