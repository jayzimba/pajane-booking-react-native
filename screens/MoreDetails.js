import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const MoreDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <Header />
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginRight: 8 }}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity> */}
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
      <Text
        style={{
          marginTop: 20,
          fontSize: 14,
          color: "#000",
        }}
      >
        Passenger Details
      </Text>
      <TextInput style={styles.input} placeholder="Passenger name" />
    </SafeAreaView>
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
});
