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

import React, { Children, useState } from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Counter from "react-native-counters";
import { useRoute } from "@react-navigation/native";
import { AdultSlice } from "../features/AdultSlice";

const MoreDetails = ({ navigation }) => {
  const route = useRoute();

  const [remindMe, setRemindMe] = useState(false);
  const [AcceptTC, setAcceptTC] = useState(false);
  const [Total, setTotal] = useState(route.params.price);

  const [adult, setAdults] = useState(0);

  const increamentPassenger = () => {
    setAdults(adult + 1);
  };
  const decreamentPassenger = () => {
    setAdults(adult - 1);
  };

  const [adult, setAdults] = useState(0);

  const increamentPassenger = () => {
    setAdults(adult + 1);
  };
  const decreamentPassenger = () => {
    setAdults(adult - 1);
  };

  const [adult, setAdults] = useState(0);

  const increamentPassenger = () => {
    setAdults(adult + 1);
  };
  const decreamentPassenger = () => {
    setAdults(adult - 1);
  };

  const changeTC = (value) => {
    setAcceptTC(value);
  };
  const toggleReminder = () => {
    setRemindMe(!remindMe);
  };

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
                  {/* <Counter
                    start={1}
                    min={1}
                    max={5}
                    buttonTextStyle={{ color: "#124e78" }}
                    countTextStyle={{ color: "#124e78" }}
                    buttonStyle={{ borderColor: "#124e78" }}
                  /> */}
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={() => decreamentPassenger}
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
                    {adult}
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#124e78",
                    }}
                    onPress={() => increamentPassenger}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
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
                    Children
                  </Text>
                  <Counter
                    start={0}
                    min={1}
                    max={2}
                    buttonTextStyle={{ color: "#124e78" }}
                    countTextStyle={{ color: "#124e78" }}
                    buttonStyle={{ borderColor: "#124e78" }}
                  />
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
                  {adult} Adult
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#000",
                  }}
                >
                  {adult} Children
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
                    {"Lusaka"} {" -> "} {"Ndola"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#000",
                    }}
                  >
                    Friday, 5, Aug
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
                    24
                  </Text>
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
                <View pointerEvents="none">
                  <Switch
                    onValueChange={toggleReminder}
                    value={remindMe}
                    trackColor={{ true: "#05C25D", false: "grey" }}
                    thumbColor="#124e78"
                  />
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
              K {Total * (Adultcount + Childrencount)}
            </Text>
          </View>

          <TouchableOpacity
            style={AcceptTC ? styles.payButtton : styles.payButttonDisabled}
            onPress={() =>
              navigation.navigate("Payment", {
                price: Total * (Adultcount + Childrencount),
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
    marginHorizontal: 10,
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
