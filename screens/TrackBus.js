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
  Easing,
  Platform,
  FlatList,
  Alert,
  TextInput,
  Dimensions,
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useRef, useEffect, useState, Component } from "react";
import Header from "./../components/Header";
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
  SimpleLineIcons,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import * as Location from "expo-location";
import { QuickBookings } from "./../components/QuickBookings";
import { Results } from "./Results";
import { connect } from "react-redux";
import { axios } from "axios";

import { GOOGLE_API_KEY } from "../ENVIRONMENTS";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BlinkingText from "./../components/BlinkingText";

class TrackBus extends Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = {
      rotateValueHolder: new Animated.Value(0),
    };
  }

  //copied for testing 1
  componentDidMount = () => {
    this.startImageRotateFunction();
    this.mapRef.fitToSuppliedMarkers(
      [{ latitude: -15.2424, longitude: 28.1713 }],
      false // not animated
    );
  };

  startImageRotateFunction = () => {
    Animated.loop(
      Animated.timing(this.state.rotateValueHolder, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Booking")}
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Home</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BlinkingText />
            <Animated.View
              style={{
                marginEnd: 10,
                alignSelf: "center",
                transform: [
                  {
                    rotate: this.state.rotateValueHolder.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              }}
            >
              <MaterialIcons name="track-changes" size={24} color="black" />
            </Animated.View>
          </View>
        </View>
        <View style={{ marginVertical: 7, marginLeft: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Booking ID:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {23456789765445}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Bus Name:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {"Power Tools"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Plate Number:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {"ABC 234"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              To:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {"Ndola"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              From:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {"Lusaka"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Station:
            </Text>
            <Text
              style={{
                marginVertical: 2,
                color: "black",
                marginStart: 5,
                fontSize: 12,
              }}
            >
              {"Inter City"}
            </Text>
          </View>
        </View>

        <MapView
          ref={(ref) => {
            this.mapRef = ref;
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: -15.2424, longitude: 28.1713 }}
           image={require("../assets/greenMarker.png")} />
        </MapView>
      </SafeAreaView>
    );
  }
}

export default TrackBus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
