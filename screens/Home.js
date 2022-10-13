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
import Home1 from "./Home1";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import DatePickerComponent from "../components/DatePickerComponent";
import DatePicker, {
  getToday,
  getFormatedDate,
  moment,
} from "react-native-modern-datepicker";
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
import MoreDetails from "./MoreDetails";
import PaymentScreen from "./PaymentScreen";
import Ticket from "./Ticket";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BookingDone } from "./BookingDone";
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const initialState = {
  from: "Ndola",
  to: "Lusaka",
  date: "",
  bus: "",
  seat: 0,
  price: 0,
  children: 0,
  adult: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case "SET_TO":
      return { to: "Ndola" };
    case "SET_FROM":
      return { from: "Lusaka" };
  }
  return state;
};
const store = createStore(reducer);
export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <StatusBar
            style="dark"
            barStyle="light-content"
            backgroundColor="white"
            // barStyle="dark-content"
            hidden={false}
            animated
          />
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Booking" component={Home1} />
            <AppStack.Screen name="MoreDetails" component={MoreDetails} />
            <AppStack.Screen name="Payment" component={PaymentScreen} />
            <AppStack.Screen name="Ticket" component={Ticket} />
            <AppStack.Screen name="BookingDone" component={BookingDone} />
          </AppStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
