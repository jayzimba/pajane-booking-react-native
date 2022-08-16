import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const PaymentScreen = ({ navigation }) => {
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
            K 255
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
            placeholder=" have a gift card?"
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
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
});
