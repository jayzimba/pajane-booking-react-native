import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Header from "./../components/Header";
import CreditCardDisplay from "react-native-credit-card-display";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Mobile from "../components/Mobile";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

const Cards = (props) => {
  const [cardHolder, setCardHolder] = useState("Geoffrey Zimba");
  const [cvc, setCvc] = useState("233");
  const [expiration, setExpiration] = useState("04/25");
  const [cardNumber, setCardNumber] = useState("4234876178960064");

  const slides = {
    airtel: require("../assets/airtel.jpg"),
    mtn: require("../assets/mtn.jpg"),
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#000",
            fontSize: 18,
            marginVertical: 20,
          }}
        >
          Payment Options
        </Text>

        <View style={styles.cardView}>
          <CreditCardDisplay
            number={cardNumber}
            cvc={cvc}
            expiration={expiration}
            name={cardHolder}
            width="98%"
            fontSize={16}
            borderRadius={20}
            friction={1}
            cardStyles={{
              // Shadow
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 5,
                height: 5,
              },
            }}
          />
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
              <MaterialCommunityIcons
                name="credit-card-plus-outline"
                size={24}
                color="#124e78"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#124e78",
                  marginHorizontal: 10,
                }}
              >
                Edit Your Payment Card
              </Text>
            </TouchableOpacity>
          }
          style={{ borderWidth: 0 }}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text>Card Holder</Text>
            <View
              style={{
                height: 40,
                width: "100%",
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
                maxLength={15}
                keyboardType="default"
                value={cardHolder}
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  color: "#000",
                  letterSpacing: 1,
                }}
              />
            </View>
            <Text>Card Number</Text>
            <View
              style={{
                height: 40,
                width: "100%",
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
                maxLength={15}
                keyboardType="numeric"
                value={cardNumber}
                style={{
                  width: "100%",
                  fontSize: 20,
                  fontWeight: "300",
                  color: "#000",
                  letterSpacing: 5,
                  paddingHorizontal: 20,
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
                    maxLength={5}
                    keyboardType="numbers-and-punctuation"
                    value={expiration}
                    style={{
                      fontSize: 20,
                      fontWeight: "300",
                      color: "#000",
                      letterSpacing: 2,
                      paddingHorizontal: 5,
                    }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text>CVV</Text>
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
                    maxLength={3}
                    keyboardType="numbers-and-punctuation"
                    value={cvc}
                    style={{
                      fontSize: 20,
                      fontWeight: "300",
                      color: "#000",
                      letterSpacing: 3,
                      paddingHorizontal: 0,
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

        <Mobile
          imageUri={slides.airtel}
          headingPayment="Airtel Money"
          number="+260777603060"
        />
        <Mobile
          imageUri={slides.mtn}
          headingPayment="MTN Money"
          number="+260963676321"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  cardView: {
    alignItems: "center",
    marginVertical: 20,
  },
});
