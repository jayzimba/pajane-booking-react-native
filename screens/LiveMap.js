import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import * as Location from "expo-location";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../ENVIRONMENTS";
import Constants from "expo-constants";
import { useRef } from "react";
import MapViewDirections from "react-native-maps-directions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddressPicker from "./../components/AddressPicker";
import CustomBtn from "./../components/CustomBtn";

const LiveMap = (props) => {
  const { width, height } = Dimensions.get("window");
  const [location, setLocation] = useState(null);
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [INITIAL_POSITION, SetINITIAL_POSITION] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      SetINITIAL_POSITION({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    })();
  }, []);
  const mapRef = useRef();

  const start = { latitude: -15.2424, longitude: 28.1713 };
  const destination = { latitude: -12.823195, longitude: 28.217574 };

  const [state, setState] = useState({
    pickUpCords: {},
    destinationCords: {},
  });
  const { pickUpCords, destinationCords } = state;

  const onDone = () => {
    // console.log("searching");
  };

  const fetchAddressCoords = (lat, lng) => {
    // console.log("latitude: ", lat);
    // console.log("longitude: ", lng);

    setState({
      ...state,
      pickUpCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };
  const fetchDestinationCoords = (lat, lng) => {
    // console.log("latitude: ", lat);
    // console.log("longitude: ", lng);

    setState({
      ...state,
      destinationCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  console.log("pickUpCoords===>>>", pickUpCords);
  console.log("destinationCoords===>>>", destinationCords);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        <Marker
          coordinate={start}
          image={require("../assets/greenMarker.png")}
        />
        <Marker
          coordinate={destination}
          image={require("../assets/Oval.png")}
        />
        <MapViewDirections
          origin={start}
          destination={destination}
          apikey={GOOGLE_API_KEY}
          strokeWidth={4}
          strokeColor="#124e78"
          optimizeWaypoints={true}
          onReady={(result) => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 250,
                left: 30,
                top: 250,
              },
            });
          }}
        />
      </MapView>

      <View style={styles.searchContainer}>
        <AddressPicker
          fetchAddress={fetchAddressCoords}
          placeholdeText="From City"
          label="Pick up point"
          onPlaceSelected={() => {}}
        />
        <View style={{ marginBottom: 10 }} />
        <AddressPicker
          fetchAddress={fetchDestinationCoords}
          placeholdeText="To City"
          label="Drop point"
          onPlaceSelected={() => {}}
        />
        <CustomBtn onPress={onDone} />
      </View>
    </View>
  );
};

export default LiveMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    flexDirection: "row",
    position: "absolute",
    width: "95%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 0.5,
  },
});
