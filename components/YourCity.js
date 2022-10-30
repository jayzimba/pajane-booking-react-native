import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function YourCity() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const assignCity = (e) => {
    setAddress(e);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      setLocation(location);
      setAddress(address[0].city);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    // console.log(address);
  }

  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={18} color="#124e78" />
      <Text style={styles.paragraph}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 14,
    color: "c",
    fontWeight: "500",
  },
});
