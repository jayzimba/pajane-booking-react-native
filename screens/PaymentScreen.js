import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Mobile from "./../components/Mobile";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { BookingDone } from "./BookingDone";
import { useRoute } from "@react-navigation/native";
const slides = {
  card: require("../assets/vmc.jpeg"),
  airtel: require("../assets/airtel.jpg"),
  mtn: require("../assets/mtn.jpg"),
};

const PaymentScreen = ({ navigation }) => {
  const [ResultIsVisible, setResultIsVisible] = useState(false);

  const showBookingDone = () => {
    setResultIsVisible((prev) => true);
  };

  const closeShowResults = () => {
    setResultIsVisible((prev) => false);
  };

  const goToTracking = () => {
    console.log("am clicked");
    setResultIsVisible(false);
    navigation.navigate("Booking");
    navigation.navigate("TrackBus");
  };
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
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
            Payment Options
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 30,
              color: "#124e78",
            }}
          >
            Total amount to pay
          </Text>

          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 7,
              elevation: 7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0.3,
                height: 1,
              },
              shadowOpacity: 0.2,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignContent: "center",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: "#124e78",
                letterSpacing: 1.5,
              }}
            >
              K {route.params.price}
            </Text>
          </View>

          <View
            style={{
              height: 45,
              width: "70%",
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 50,
              elevation: 7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0.3,
                height: 1,
              },
              shadowOpacity: 0.2,
              backgroundColor: "#fff",
              alignItems: "center",
              marginVertical: 10,
              paddingStart: 10,
            }}
          >
            <TextInput
              placeholder="pajane gift code?"
              maxLength={6}
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#a8a8a8",
                fontStyle: "italic",
              }}
            />

            <TouchableOpacity
              style={{
                borderRadius: 50,
                height: "100%",
                width: 100,
                backgroundColor: "#05C25D",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                  color: "#fff",
                }}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CollapsibleView
          title={
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Pay using your Visa or Master card</Text>
            </TouchableOpacity>
          }
          style={{ borderWidth: 0, widt: "100%" }}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text>Card Holder</Text>
            <View
              style={{
                height: 40,
                width: "90%",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
                elevation: 7,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0.3,
                  height: 1,
                },
                shadowOpacity: 0.2,
                backgroundColor: "#fff",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 2,
                paddingStart: 10,
              }}
            >
              <TextInput
                placeholder="card holder name"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                }}
              />
            </View>
            <Text>Card Number</Text>
            <View
              style={{
                height: 40,
                width: "90%",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
                elevation: 7,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0.3,
                  height: 1,
                },
                shadowOpacity: 0.2,
                backgroundColor: "#fff",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 2,
                paddingStart: 10,
              }}
            >
              <TextInput
                placeholder="card number"
                maxLength={15}
                keyboardType="numbers-and-punctuation"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                }}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <View style={{ flexDirection: "column", marginEnd: 30 }}>
                <Text>Expire</Text>
                <View
                  style={{
                    height: 40,
                    width: 100,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 5,
                    elevation: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0.3,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    marginVertical: 10,
                    marginHorizontal: 2,
                    paddingStart: 10,
                  }}
                >
                  <TextInput
                    placeholder="Exp-date"
                    maxLength={5}
                    keyboardType="numbers-and-punctuation"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#a8a8a8",
                    }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text>CVC</Text>
                <View
                  style={{
                    height: 40,
                    width: 70,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 5,
                    elevation: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0.3,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    marginVertical: 10,
                    marginHorizontal: 2,
                    paddingStart: 10,
                  }}
                >
                  <TextInput
                    placeholder="CVC"
                    maxLength={3}
                    keyboardType="numbers-and-punctuation"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#a8a8a8",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </CollapsibleView>
        <Text
          style={{
            fontWeight: "bold",
            color: "#000",
            fontSize: 18,
            marginVertical: 20,
          }}
        >
          Other Payment Options
        </Text>

        <Mobile imageUri={slides.airtel} headingPayment="Airtel Money" />
        <Mobile imageUri={slides.mtn} headingPayment="MTN Money" />

        <TouchableOpacity
          style={styles.payButtton}
          onPress={() => setResultIsVisible(true)}
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
            Pay Now
          </Text>
        </TouchableOpacity>

        {ResultIsVisible && (
          <BookingDone
            visible={ResultIsVisible}
            closeModal={() => {
              setResultIsVisible(false);
              navigation.navigate("Booking");
            }}
            busTracking={goToTracking}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 95,
    paddingBottom: 30,
  },
  payButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#05C25D",
    borderRadius: 5,
  },
});
