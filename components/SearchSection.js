import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import * as Location from "expo-location";

const SearchSection = (props, { navigation }) => {
  const [town, setTown] = useState();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      setTown(address[0].city);
      // console.log(address[0].city);
    })();
  }, []);

  const [Ptext, onChangePText] = React.useState("");
  const [Dtext, onChangeDText] = React.useState("");
  const [startSerch, setStartSearch] = React.useState(false);
  const [dstartSerch, setdStartSearch] = React.useState(false);

  const [currentLocation, setCurrentLocation] = useState("Pick up Point");
  const [destination, setDestination] = useState(town);

  //pick up point
  const showInput = () => {
    setStartSearch(true);
  };
  const hideInput = () => {
    setStartSearch(false);
  };
  const updatePickUpPoint = () => {
    setCurrentLocation();
  };
  //drop of point
  const dshowInput = () => {
    setdStartSearch(true);
  };
  const dhideInput = () => {
    setdStartSearch(false);
  };
  const dupdatePickUpPoint = () => {
    setDestination();
  };

  const getto = () => {
    return Dtext;
  };

  const getfrom = () => {
    return Ptext;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <FontAwesome name="dot-circle-o" size={12} color="white" />
        <DashedLine
          axis="vertical"
          dashLength={5}
          dashColor="#fff"
          dashGap={10}
          style={{ flex: 1, marginVertical: 5 }}
        />

        <MaterialIcons name="location-on" size={12} color="white" />
      </View>

      {/*  */}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 10,
          paddingHorizontal: 1,
        }}
      >
        {startSerch ? (
          <TextInput
            style={styles.searchInput}
            onChangeText={props.setFrom}
            placeholderTextColor="#fff"
            selectionColor="#fff"
            color="#fff"
            enablesReturnKeyAutomatically
            onSubmitEditing={hideInput}
            autoFocus={true}
          />
        ) : (
          <TouchableOpacity onPress={showInput}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
              {Ptext == "" ? "pick up point - " + town : Ptext}
            </Text>
          </TouchableOpacity>
        )}

        <View style={{ flexDirection: "row" }}>
          <DashedLine
            dashLength={5}
            dashGap={3}
            dashColor="#fff"
            style={{ flex: 1, marginVertical: 10, marginEnd: 5 }}
          />
          <MaterialCommunityIcons
            name="swap-vertical-bold"
            size={20}
            color="white"
          />
        </View>
        {dstartSerch ? (
          <TextInput
            style={styles.searchInput}
            onChangeText={props.setTo}
            placeholderTextColor="#fff"
            selectionColor="#fff"
            color="#fff"
            enablesReturnKeyAutomatically
            onSubmitEditing={dhideInput}
            autoFocus={true}
          />
        ) : (
          <TouchableOpacity onPress={dshowInput}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
              {Dtext == "" ? "Drop-Off Point" : Dtext}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchSection;

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#124e78",
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
  },
  searchInput: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
