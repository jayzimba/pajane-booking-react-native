import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DatePickerComponent from "../components/DatePickerComponent";
import DatePicker, {
  getToday,
  getFormatedDate,
  moment,
} from "react-native-modern-datepicker";
import React, { Children, useState, useRef, useEffect } from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Counter from "react-native-counters";
import { useRoute } from "@react-navigation/native";
import { AdultSlice } from "../features/AdultSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const MoreDetails = ({ navigation }) => {
  const route = useRoute();

  //notification consts
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [AcceptTC, setAcceptTC] = useState(false);
  const [Total, setTotal] = useState(route.params.price);

  const [AdultCount, setAdultCount] = useState(1);
  const [ChildrenCount, setChildrenCount] = useState(0);
  const [dateOfdeparture, setDateOfDeparture] = useState(getFormatedDate(getToday(), "DD MMM, YYYY"))
  const [remindMe, setRemindMe] = useState(false);

  const increamentAdultCount = () => {
    if (AdultCount >= 5) {
      setAdultCount((previousCount) => previousCount);
    } else {
      setAdultCount((previousCount) => previousCount + 1);
    }
  };
  const increamentChildrenCount = () => {
    if (ChildrenCount >= 2) {
      setChildrenCount((previousCount) => previousCount);
    } else {
      setChildrenCount((previousCount) => previousCount + 1);
    }
  };

  const decreamentAdultCount = () => {
    if (AdultCount <= 1) {
      setAdultCount((previousCount) => previousCount);
    } else {
      setAdultCount((previousCount) => previousCount - 1);
    }
  };
  const decreamentChildrenCount = () => {
    if (ChildrenCount <= 0) {
      setChildrenCount((previousCount) => previousCount);
    } else {
      setChildrenCount((previousCount) => previousCount - 1);
    }
  };

  const changeTC = (value) => {
    setAcceptTC(value);
  };

  useEffect(() => {
    const getPermission = async () => {
      if (Constants.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Enable push notifications to use the app!");
          await storage.setItem("expopushtoken", "");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem("expopushtoken", token);
      } else {
        alert("Must use physical device for Push Notifications");
      }

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#05C25D",
        });
      }
    };

    getPermission();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ marginHorizontal: 10 }}>
          <Header />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <View style={{ width: "85%" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                textAlign: "center",
              }}
            >
              More Booking Details
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                fontWeight: "500",
                color: "#000",
              }}
            >
              Passenger Details
            </Text>

            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                Passengers
              </Text>
              <View style={{ alignItems: "flex-end", marginEnd: 85 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#000",
                      marginEnd: 10,
                    }}
                  >
                    Adult Passengers
                  </Text>

                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={decreamentAdultCount}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#124e78",
                      fontWeight: "500",
                      marginHorizontal: 11,
                    }}
                  >
                    {AdultCount}
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={increamentAdultCount}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                    marginLeft: 90,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#000",
                      marginEnd: 10,
                    }}
                  >
                    Children
                  </Text>

                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={decreamentChildrenCount}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#124e78",
                      fontWeight: "500",
                      marginHorizontal: 11,
                    }}
                  >
                    {ChildrenCount}
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={increamentChildrenCount}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                Summary
              </Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#000",
                    marginEnd: 10,
                  }}
                >
                  {AdultCount} Adult
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#000",
                  }}
                >
                  {ChildrenCount} Children
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white", padding: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                {route.params.busName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#000",
                    }}
                  >
                    {route.params.from} {" -> "} {route.params.to}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#000",
                    }}
                  >
                    {dateOfdeparture}

                  </Text>
                </View>
                <View style={{ marginEnd: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "800",
                      color: "#000",
                    }}
                  >
                    K {route.params.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  Seat:
                </Text>
                <View
                  style={{
                    paddingVertical: 1,
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                    backgroundColor: "#05C25D",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    {route.params.seatsAvailable}
                  </Text>
                </View>
                {AdultCount > 1 || ChildrenCount > 0 ? (
                  <View
                    style={{ justifyContent: "center", alignItems: "center", flexDirection:"row" }}
                  >
                    <Text> To </Text>

                    <View
                      style={{
                        paddingVertical: 1,
                        paddingHorizontal: 10,
                        marginHorizontal: 5,
                        backgroundColor: "#05C25D",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#fff",
                        }}
                      >
                        {route.params.seatsAvailable +
                          (AdultCount - 1 + ChildrenCount)}
                      </Text>
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                Extras
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#000",
                    marginEnd: 10,
                  }}
                >
                  Remind me before bus arrival
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "43%",
                    justifyContent: "space-between",
                    backfaceColor: "red",
                  }}
                >
                  <View>
                    <Switch
                      trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                      thumbColor={"#05C25D"}
                      ios_backgroundColor="#f4f3f4"
                      onValueChange={async () => {
                        setRemindMe(!remindMe);
                        if (!remindMe) {
                          await Notifications.scheduleNotificationAsync({
                            content: {
                              title: "Pajana Bus Arrival Reminder Has Been Set",
                              body: "we will remind you 30 minutes before your bus reaches your station, thank you for trusting Pajane",
                              data: { data: "data goes here" },
                            },
                            trigger: {
                              seconds: 1,
                            },
                          });
                        }
                      }}
                      value={remindMe}
                    />
                  </View>
                  {/* 
                   const onClick = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pajana Bus Arrival Reminder Has Been Set",
        body: "we will remind you 30 minutes before your bus reaches your station thank for trusting us",
        data: { data: "data goes here" },
      },
      trigger: {
        seconds: 1,
      },
    });
  }; */}

                  {remindMe ? (
                    <Ionicons
                      name="notifications-circle-outline"
                      size={30}
                      color="#05C25D"
                    />
                  ) : (
                    <Ionicons
                      name="notifications-off-circle-outline"
                      size={30}
                      color="#e8e8e8"
                    />
                  )}
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                TermS & Conditions
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#000",
                    marginEnd: 10,
                    lineHeight: 18,
                  }}
                >
                  While accessing, using, browsing or making a booking through
                  Pajane booking, users have to accept that they have agreed to
                  the terms and conditions of our application. In case of any
                  violation, PajaneBooking reserves all the rights for taking
                  any legal actions against them. PajaneBooking acts as an
                  “Intermediary” solely to assist customers in gathering travel
                  information, determining the availability of travel-related
                  products and services, making legitimate reservations or
                  otherwise transacting business with travel suppliers, and for
                  facilitating travel requirements. You acknowledge that
                  PajaneBooking merely provides intermediary services in order
                  to facilitate these services. PajaneBooking is not the last
                  mile service provider to you and therefore PajaneBooking shall
                  not be deemed to be responsible for any lack or deficiency of
                  services provided by any person or entity including bus
                  operator, activity provider or similar agency, you shall
                  engage, hire from the content available on the app.
                </Text>
              </View>
              <BouncyCheckbox
                size={18}
                fillColor="#05C25D"
                unfillColor="#FFFFFF"
                text="Accept terms and conditions"
                iconInnerStyle={{ borderWidth: 1 }}
                onPress={(isChecked: boolean) => changeTC(isChecked)}
                style={{ marginVertical: 15 }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Animatable.View animation="fadeInUp" duration={1500}>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text style={styles.textStyles}>Total</Text>
            <Text style={styles.textStyles}>
              K {Total * (AdultCount + ChildrenCount)}
            </Text>
          </View>

          <TouchableOpacity
            style={AcceptTC ? styles.payButtton : styles.payButttonDisabled}
            onPress={() =>
              navigation.navigate("Payment", {
                price: Total * (AdultCount + ChildrenCount),
              })
            }
            disabled={!AcceptTC}
          >
            <Ionicons name="cash" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "700",
                marginLeft: 10,
              }}
            >
              Continue To Pay
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.9,
    padding: 5,
    borderBottomRightRadius: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 230,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  textStyles: {
    fontSize: 18,
    fontWeight: "700",
  },
  payButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#05C25D",
    borderRadius: 5,
  },
  payButttonDisabled: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#a5a5a5",
    borderRadius: 5,
  },
});
