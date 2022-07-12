import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Header = () => {
  let PajaneCustomerCare = "";

  const makeCall = () => {
    if (Platform.OS == "android") {
      PajaneCustomerCare = "tel:${+260963676321}";
    } else {
      PajaneCustomerCare = "telprompt:${+260963676321}";
    }

    Linking.openURL(PajaneCustomerCare);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons name="bus-marker" size={24} color="#124e78" />
        <Text style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}>
          Pajane
        </Text>
        <Text style={{ fontWeight: "bold", color: "#05C25D", fontSize: 23 }}>
          Booking
        </Text>
      </View>

      <TouchableOpacity onPress={makeCall}>
        <AntDesign name="customerservice" size={24} color="#124e78" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
