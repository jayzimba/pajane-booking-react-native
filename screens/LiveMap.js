import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import * as Location from "expo-location";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
const LiveMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.0312,
        longitudeDelta: 0.0221,
      });
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <Header />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          elevation: 1000,
          zIndex: 1000,
          backgroundColor: "#ebebeb",
          height: 60,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 10,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 5,
          },

          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="dot-circle-o" size={12} color="#000" />
            <View>
              <Text style={{ marginLeft: 5, fontSize: 14, fontWeight: "700" }}>
                Lusaka
              </Text>

              <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
                InterCity
              </Text>
            </View>
          </View>
          <DashedLine
            dashLength={5}
            dashGap={3}
            dashColor="#000"
            style={{ width: "10%", marginHorizontal: 10 }}
          />
          <MaterialCommunityIcons
            name="bus-side"
            size={24}
            color="#000"
            style={{ marginHorizontal: 10 }}
          />
          <DashedLine
            dashLength={5}
            dashGap={3}
            dashColor="#000"
            style={{ width: "10%", marginHorizontal: 10 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="location-on" size={12} color="#000" />
            <View>
              <Text style={{ marginLeft: 5, fontSize: 14, fontWeight: "700" }}>
                Ndola
              </Text>

              <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: "500" }}>
                InterCity
              </Text>
            </View>
          </View>
        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={mapRegion}
        style={styles.map}
      >
        <Marker coordinate={{ latitude: -15.421556, longitude: 28.286217 }}>
          <Callout>
            <Text>InterCity</Text>
          </Callout>
          <View
            style={{
              borderWidth: 2,
              padding: 5,
              borderRadius: 50,
              borderColor: "#124e78",
              shadowColor: "#555",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.9,
            }}
          >
            <View
              style={{
                borderWidth: 2,
                padding: 5,
                borderRadius: 50,
                borderColor: "#124e78",
              }}
            >
              <MaterialCommunityIcons
                name="bus-multiple"
                size={30}
                color="#124e78"
              />
            </View>
          </View>
        </Marker>
      </MapView>
    </SafeAreaView>
  );
};
export default LiveMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // marginHorizontal: 10,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
