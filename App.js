import React, { useRef, useEffect, useState } from "react";

import ignoreWarnings from "ignore-warnings";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Platform,
  Linking,
  LogBox,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Home from "./screens/Home";
import Trips from "./screens/Trips";
import CustomerCare from "./screens/CustomerCare";
import Cards from "./screens/Cards";
import Profile from "./screens/LiveMap";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import LiveMap from "./screens/LiveMap";
import Results from "./screens/Results";
import Ticket from "./screens/Ticket";
import MoreDetails from './screens/MoreDetails';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const tabOffsetValue = useRef(new Animated.Value(3)).current;
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  let PajaneCustomerCare = "";

  const makeCall = () => {
    if (Platform.OS == "android") {
      PajaneCustomerCare = "tel:${+260963676321}";
    } else {
      PajaneCustomerCare = "telprompt:${+260963676321}";
    }

    Linking.openURL(PajaneCustomerCare);
  };

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="OnBoarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="SignUp" component={SignUpScreen} />
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Results" component={Results} />
          <AppStack.Screen name="MoreDetails" component={MoreDetails} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="white"
          // barStyle="dark-content"
          hidden={false}
          animated
        />

        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#fafafa",
              position: "absolute",
              bottom: 20,
              marginHorizontal: 15,
              //max height
              height: 70,
              borderRadius: 20,
              // Shadow
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 3,
                height: 3,
              },
              paddingHorizontal: 20,
            },
          }}
        >
          <Tab.Screen
            name="Search"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    position: "absolute",
                    top: "40%",
                  }}
                >
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={24}
                    color={focused ? "#05C25D" : "#124e78"}
                  />
                </View>
              ),
            }}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 0.1,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
          <Tab.Screen
            name="My Trips"
            component={Trips}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    position: "absolute",
                    top: "40%",
                  }}
                >
                  <MaterialCommunityIcons
                    name="bus-multiple"
                    size={24}
                    color={focused ? "#05C25D" : "#124e78"}
                  />
                </View>
              ),
            }}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 1.0,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
          <Tab.Screen
            name="Support"
            component={CustomerCare}
            options={{
              tabBarIcon: ({ focused }) => (
                <TouchableOpacity onPress={makeCall}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#124e78",
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 30,
                      borderColor: "#fafafa",
                      borderWidth: 1,
                      shadowColor: "#000",
                      shadowOpacity: 0.3,
                      shadowOffset: {
                        width: 3,
                        height: 3,
                      },
                    }}
                    listeners={({ navigation, route }) => ({
                      // Onpress Update....
                      tabPress: (e) => {
                        Animated.spring(tabOffsetValue, {
                          toValue: getWidth() * 1.9,
                          useNativeDriver: true,
                        }).start();
                      },
                    })}
                  >
                    <Image
                      source={require("./assets/customer-care.png")}
                      style={{ width: 25, height: 25, tintColor: "#fff" }}
                    />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Cards"
            component={Cards}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    position: "absolute",
                    top: "40%",
                  }}
                >
                  <MaterialIcons
                    name="payment"
                    size={24}
                    color={focused ? "#05C25D" : "#124e78"}
                  />
                </View>
              ),
            }}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 2.8,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
          <Tab.Screen
            name="LiveMap"
            component={LiveMap}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    position: "absolute",
                    top: "40%",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-search"
                    size={24}
                    color={focused ? "#05C25D" : "#124e78"}
                  />
                </View>
              ),
            }}
            listeners={({ navigation, route }) => ({
              // Onpress Update....
              tabPress: (e) => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 3.7,
                  useNativeDriver: true,
                }).start();
              },
            })}
          />
        </Tab.Navigator>

        <Animated.View
          style={{
            width: getWidth() - 30,
            height: 2,
            backgroundColor: "#124e78",
            position: "absolute",
            bottom: 88,
            left: 40,
            borderRadius: 50,
            transform: [{ translateX: tabOffsetValue }],
          }}
        ></Animated.View>
      </NavigationContainer>
    );
  }

  function getWidth() {
    let width = Dimensions.get("window").width;

    // Horizontal Padding = 20...
    width = width - 35;

    // Total five Tabs...
    return width / 5;
  }
};

export default App;
