import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "./../components/Header";
import CreditCardDisplay from "react-native-credit-card-display";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Mobile from "../components/Mobile";

const Cards = (props) => {
  const slides = {
    airtel: require("../assets/airtel.jpg"),
    mtn: require("../assets/mtn.jpg"),
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsHorizontalScrollIndicator={false}>
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
            number={4234876178960064}
            cvc={208}
            expiration="04/25"
            name="PATRICIA CHEWE"
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
          <FontAwesome5 name="chevron-down" size={18} color="#124e78" />
        </TouchableOpacity>

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
