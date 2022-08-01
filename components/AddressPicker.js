import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { GOOGLE_API_KEY } from "../ENVIRONMENTS";

const AddressPicker = ({ placeholdeText, label, fetchAddress }) => {
  const onPressAddress = (data, details) => {
    // console.log("details---->", details);

    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    fetchAddress(lat, lng);
  };
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder={placeholdeText}
        fetchDetails
        styles={{ textInput: styles.input }}
        onPress={onPressAddress}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
          components: "country:zm",
        }}
      />
    </>
  );
};

export default AddressPicker;

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
    position: "absolute",
    width: "90%",
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
    marginEnd: 5,
  },
});
