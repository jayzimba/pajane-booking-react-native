import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import * as Location from "expo-location";
import DatePicker, {
  getToday,
  getFormatedDate,
  moment,
} from "react-native-modern-datepicker";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../ENVIRONMENTS";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddressPicker from "./../components/AddressPicker";
import CustomBtn from "./../components/CustomBtn";
import BottomSheet from "@gorhom/bottom-sheet";
import QuickBookings from "../components/QuickBookings";
import Results from "./Results";

const LiveMap = ({ navigation }) => {
  const [dateOfdeparture, setDateOfDeparture] = useState(getFormatedDate(getToday(), "YYYY-MM-DD"))
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);
  const [distance, setTDistance] = useState(0);
  const fetchData = async () => {
    const response = await fetch("http://192.168.8.102:1345/quick_booking");
    const quick_booking = await response.json();
    setData({ quick_booking });
  };
  const [ResultIsVisible, setResultIsVisible] = useState(false);
  const handleModal = async () => {
    const toAddrressHolder = await Location.reverseGeocodeAsync(
      destinationCords
    );
    setToAddress(toAddrressHolder[0].city);
    setResultIsVisible(!ResultIsVisible);
  };

  // ref
  const bottomSheetRef = useRef < BottomSheet > null;
  const [isOpen, setIsOpen] = useState(true); // callbacks

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const setRef = (element) => {
    bottomSheetRef = element;
  };
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  // const handleOpenPress = useCallback((index) => {
  //   bottomSheetRef.current?.snapToIndex(index);
  //   setIsOpen(true);
  // }, []);

  const { width, height } = Dimensions.get("window");
  const [location, setLocation] = useState(null);
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.04;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [INITIAL_POSITION, SetINITIAL_POSITION] = useState(null);
  const [address, setAddress] = useState("");
  const [toAddress, setToAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(address[0].city);
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
  const destination = {};

  const [state, setState] = useState({
    pickUpCords: { latitude: 0, longitude: 0 },
    destinationCords: { latitude: 0, longitude: 0 },
  });

  const { pickUpCords, destinationCords } = state;
  const dataSet = state;

  const onPressLocation = () => {
    fetchValues(state);
    fetchDestinationCoords(state);
  };

  const onDone = () => {
    fetchValues(state);
    fetchDestinationCoords(state);
  };

  const fetchAddressCoords = async (lat, lng) => {
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
  const fetchDestinationCoords = async (lat, lng) => {
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

  const fetchValues = async (data) => {
    setState({
      pickUpCords: {
        latitude: data.pickUpCords.latitude,
        longitude: data.pickUpCords.longitude,
      },
      destinationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude,
      },
    });
  };

  const bookingdetails = () => {
    navigation.navigate("MoreDetails");
    setResultIsVisible(false);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {/* <Marker
          coordinate={destinationCords}
          image={require("../assets/greenMarker.png")}
        />
        <Marker
          coordinate={pickUpCords}
          image={require("../assets/Oval.png")}
        /> */}

        {destinationCords.latitude == 0 ||
        destinationCords.longitude == 0 ? null : (
          <MapViewDirections
            origin={INITIAL_POSITION}
            destination={destinationCords}
            apikey={GOOGLE_API_KEY}
            strokeWidth={4}
            strokeColor="#124e78"
            optimizeWaypoints={true}
            onReady={(result) => {
              // alert(address);
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
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <View style={{ marginBottom: 10 }} />
        <AddressPicker
          fetchAddress={fetchDestinationCoords}
          placeholdeText="where are you going?"
          label="Drop point"
          onPlaceSelected={(data) => {
            alert(data.toString());
          }}
          getAddressDetails={(data) => {
            console.log(data);
          }}
        />

        <TouchableOpacity
          style={{
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <CustomBtn onPress={handleModal} />
        </TouchableOpacity>
      </View>

      {ResultIsVisible && (
        <Results
          visible={ResultIsVisible}
          closeModal={handleModal}
          bookingdetails={bookingdetails}
          to={toAddress}
          from={address}
          date={dateOfdeparture}
          //from and to props
        />
      )}
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
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    // shadowColor: "black",
    // elevation: 7,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    // elevation: 4,
    padding: 10,
    // borderRadius: 8,
    top: Constants.statusBarHeight - 2,
  },
  input: {
    borderColor: "#888",
    borderWidth: 0.5,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
