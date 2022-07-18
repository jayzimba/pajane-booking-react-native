import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Platform,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useRef, useState, Component } from "react";
import Header from "./../components/Header";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import DatePickerComponent from "../components/DatePickerComponent";
import { ScrollView } from "react-native-gesture-handler";

import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import { QuickBookings } from "./../components/QuickBookings";
import { Results } from "./Results";
import DatePicker, {
  getToday,
  getMoth,
  getFormatedDate,
} from "react-native-modern-datepicker";
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state.date = getFormatedDate(getToday(), "DD MMM,YYYY");
  }

  state = {
    data: [],
    PajaneCustomerCare: "",
    ResultIsVisible: false,
    to: "",
    from: "",
    date: "",
    isDatePicker: false,
  };

  showResults = (e) => {
    e.preventDefault();
    this.setState({ ResultIsVisible: true });
  };
  closeShowResults = (e) => {
    e.preventDefault();
    this.setState({ ResultIsVisible: false });
  };

  setTo = (e) => {
    e.preventDefault();
    this.setState({ to: e });
  };
  setFrom = (e) => {
    e.preventDefault();
    this.setState({ from: e });
  };
  showDatePicker = () => {
    this.setState({ isDatePicker: true });
  };

  makeCall = () => {
    if (Platform.OS == "android") {
      PajaneCustomerCare = "tel:${+260963676321}";
    } else {
      PajaneCustomerCare = "telprompt:${+260963676321}";
    }

    Linking.openURL(PajaneCustomerCare);
  };

  fetchData = async () => {
    const response = await fetch("http://192.168.8.100:1345/quick_booking");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
  componentDidMount() {
    this.fetchData();
  }

  getDateData = (e) => {
    return this.state.date;
  };
  setSelectedDate = (e) => {
    this.setState({ isDatePicker: false });
    e = getFormatedDate(e, "DD MMM,YYYY");
    this.setState({ date: e });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ marginHorizontal: 10 }}>
          <Header />
        </View>
        <ScrollView
          nestedScrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          <HeroSection />
          <SearchSection />
          <DatePickerComponent
            showDatePicker={this.showDatePicker}
            date={this.state.date}
          />
          {this.state.isDatePicker && (
            <DatePicker
              onSelectedChange={(date) => this.setSelectedDate(date)}
              options={{
                backgroundColor: "#fff",
                textHeaderColor: "#124e78",
                textDefaultColor: "#124e78",
                selectedTextColor: "#05C25D",

                mainColor: "#124e78",
                textSecondaryColor: "#124e78",
              }}
              mode="calendar"
              minimumDate={getToday()}
            />
          )}
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={this.showResults}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
              Search
            </Text>
          </TouchableOpacity>
          {this.state.ResultIsVisible && (
            <Results
              visible={this.state.ResultIsVisible}
              closeModal={this.closeShowResults}

              //from and to props
            />
          )}
          <Text
            style={{
              fontWeight: "bold",
              color: "#000",
              fontSize: 18,
              marginVertical: 20,
            }}
          >
            Quick Booking
          </Text>
          <View style={{ marginBottom: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.data.map((item, index) => (
                <View key={item.id}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("BookingDetails")
                    }
                  >
                    <QuickBookings
                      from={item.pickup}
                      destination={item.destination}
                      fee={item.price}
                      busName={item.bus}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              3 Reasons to use{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#05C25D",
                  fontSize: 23,
                }}
              >
                Booking
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              1
            </Text>
            <MaterialIcons name="payments" size={24} color="#05C25D" />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              Multiple Payment Methods
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              2
            </Text>
            <AntDesign name="customerservice" size={24} color="#05C25D" />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              24/7 Customer support
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              3
            </Text>
            <MaterialCommunityIcons
              name="cash-refund"
              size={24}
              color="#05C25D"
            />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              Cancellation
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "#05C25D", fontSize: 23 }}
              >
                Booking
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
              }}
            >
              We Can Reach You There
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Image
              source={require("../assets/zambia.png")}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: 400,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "#05C25D", fontSize: 23 }}
              >
                Booking
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              We Assist You at Every Step Of Your Journey
            </Text>
          </View>
          <ImageBackground
            source={require("../assets/markers.png")}
            resizeMode="cover"
            style={{
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <Image
              source={require("../assets/customerCare.png")}
              resizeMode="center"
            />
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  buttonSearch: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#05C25D",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonSearch2: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#05C25D",
    padding: 8,
    borderRadius: 10,
    marginVertical: 5,
  },
});
