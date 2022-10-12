import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Platform,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useRef, useEffect, useState, Component } from "react";
import Header from "./../components/Header";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import DatePickerComponent from "../components/DatePickerComponent";
import DatePicker, {
  getToday,
  getFormatedDate,
  moment,
} from "react-native-modern-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import * as Location from "expo-location";
import { QuickBookings } from "./../components/QuickBookings";
import { Results } from "./Results";
import { connect } from "react-redux";
import { axios } from "axios";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state.date = getFormatedDate(getToday(), "YYYY-MM-DD");
  }

  state = {
    data: [],
    PajaneCustomerCare: "",
    ResultIsVisible: false,
    isDatePicker: false,
    currentLocation: "Pick up Point",
    Ptext: "",
    Dtext: "",
    startSerch: false,
    dstartSerch: false,
    AcceptTC: false,
  };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     const address = await Location.reverseGeocodeAsync(location.coords);
  //     setTown(address[0].city);
  //     // console.log(address[0].city);
  //   })();
  // }, []);

  setTown = (e) => {
    e.preventDefault();
    this.setState({ ResultIsVisible: e });
  };

  // const [currentLocation, setCurrentLocation] = useState("Pick up Point");
  // const [destination, setDestination] = useState(town);

  //pick up point
  showInput = (e) => {
    e.preventDefault();
    this.setState({ startSerch: true });
  };
  hideInput = (e) => {
    e.preventDefault();
    this.setState({ startSerch: false });
  };
  updatePickUpPoint = () => {
    setCurrentLocation();
  };
  //drop of point
  dshowInput = (e) => {
    e.preventDefault();
    this.setState({ dstartSerch: true });
  };
  dhideInput = (e) => {
    e.preventDefault();
    this.setState({ dstartSerch: false });
  };
  dupdatePickUpPoint = () => {
    setDestination();
  };
  onChangePText = (e) => {
    this.setState({ Ptext: e.trim() });
    if (this.state.Ptext != "" && this.state.Dtext != "") {
      this.setState({ AcceptTC: true });
    } else {
      this.setState({ AcceptTC: false });
    }
  };
  onChangeDText = (e) => {
    this.setState({ Dtext: e.trim() });
    if (this.state.Ptext != "" && this.state.Dtext != "") {
      this.setState({ AcceptTC: true });
    } else {
      this.setState({ AcceptTC: false });
    }
  };

  showResults = (e) => {
    e.preventDefault();
    this.setState({ ResultIsVisible: true });
  };
  closeShowResults = (e) => {
    e.preventDefault();
    this.setState({ ResultIsVisible: false });
  };

  bookingdetails = (e) => {
    this.props.navigation.navigate("MoreDetails", {
      busName: "powertools",
      price: 300,
      to: this.state.Ptext,
      from: this.state.Dtext,
    });
    this.setState({ ResultIsVisible: false });
  };

  showDatePicker = () => {
    this.setState({ isDatePicker: true });
  };

  makeCall = () => {
    if (Platform.OS == "android") {
      PajaneCustomerCare = "tel:${+260963676321}";
    } else {
      PajaneCustomerCare = "telprompt:${+260963676321}";
    }

    Linking.openURL(PajaneCustomerCare);
  };

  fetchData = async () => {
    const response = await fetch("http://172.20.10.4:1345/buses");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
  componentDidMount() {
    this.fetchData();
  }

  getDateData = (e) => {
    return this.state.date;
  };
  setSelectedDate = (e) => {
    this.setState({ isDatePicker: false });
    e = getFormatedDate(e, "YYYY-MM-DD");
    this.setState({ date: e });
  };

  getTrips = async () => {
    axios
      .post(
        "http://172.20.10.4/pajane/searchBus.php",
        JSON.stringify({
          to: this.state.Ptext,
          from: this.state.Dtext,
        })
      )
      .then((response) => {
        console.log(response);
        setSubmit(false);
        //NAVIGATE USER BASED ON RESPONSE
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ marginHorizontal: 10 }}>
          <Header />
        </View>
        <ScrollView
          nestedScrollEnabled={false}
          showsVerticalScrollIndicator={false}
        >
          {/* <HeroSection /> */}

          <View style={styles.HeroSection}>
            <Image
              source={require("../assets/bus-png-40029.png")}
              style={styles.imgHero}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontWeight: "bold", color: "#000", fontSize: 18 }}
                >
                  Search for Bus Ticket
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => Alert.alert("Take a tour clicked")}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#124e78",
                      fontSize: 12,
                    }}
                  >
                    Take a Tour
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 12, fontWeight: "500" }}
                  >
                    visit your city today?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <SearchSection setTo={this.setTo} setFrom={this.setFrom} /> */}
          <View style={styles.c}>
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
              {this.state.startSerch ? (
                <TextInput
                  style={styles.searchInput}
                  placeholderTextColor="#fff"
                  onChangeText={(t) => this.onChangePText(t)}
                  selectionColor="#fff"
                  color="#fff"
                  enablesReturnKeyAutomatically
                  onSubmitEditing={this.hideInput}
                  autoFocus={true}
                />
              ) : (
                <TouchableOpacity onPress={this.showInput}>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
                  >
                    {this.state.Ptext == ""
                      ? "pick up point"
                      : this.state.Ptext}
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
              {this.state.dstartSerch ? (
                <TextInput
                  style={styles.searchInput}
                  placeholderTextColor="#fff"
                  selectionColor="#fff"
                  color="#fff"
                  onChangeText={(t) => this.onChangeDText(t)}
                  enablesReturnKeyAutomatically
                  onSubmitEditing={this.dhideInput}
                  autoFocus={true}
                />
              ) : (
                <TouchableOpacity onPress={this.dshowInput}>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}
                  >
                    {this.state.Dtext == ""
                      ? "Drop-Off Point"
                      : this.state.Dtext}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <DatePickerComponent
            showDatePicker={this.showDatePicker}
            date={this.state.date}
          />
          {this.state.isDatePicker && (
            <DatePicker
              onSelectedChange={(date) => this.setSelectedDate(date)}
              options={{
                backgroundColor: "#fff",
                textHeaderColor: "#124e78",
                textDefaultColor: "#124e78",
                selectedTextColor: "#05C25D",

                mainColor: "#124e78",
                textSecondaryColor: "#124e78",
              }}
              mode="calendar"
              minimumDate={getToday()}
            />
          )}
          <TouchableOpacity
            style={
              this.state.AcceptTC
                ? styles.searchButtton
                : styles.searchButttonDisabled
            }
            onPress={this.showResults}
            disabled={!this.state.AcceptTC}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
              Find Bus
            </Text>
          </TouchableOpacity>
          {this.state.ResultIsVisible && (
            <Results
              visible={this.state.ResultIsVisible}
              closeModal={this.closeShowResults}
              bookingdetails={this.bookingdetails}
              to={this.state.Dtext}
              from={this.state.Ptext}
              date={this.state.date}
              //from and to props
            />
          )}
          <Text
            style={{
              fontWeight: "bold",
              color: "#000",
              fontSize: 18,
              marginVertical: 20,
            }}
          >
            Quick Booking
          </Text>
          <View style={{ marginBottom: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.data.map((item, index) => (
                <View key={item.id}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("BookingDetails")
                    }
                  >
                    <QuickBookings
                      from={item.pick_up}
                      destination={item.drop_point}
                      fee={item.price}
                      station={item.station}
                      busName={item.name}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              3 Reasons to use{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#05C25D",
                  fontSize: 23,
                }}
              >
                Booking
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              1
            </Text>
            <MaterialIcons name="payments" size={24} color="#05C25D" />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              Multiple Payment Methods
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              2
            </Text>
            <AntDesign name="customerservice" size={24} color="#05C25D" />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              24/7 Customer support
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              3
            </Text>
            <MaterialCommunityIcons
              name="cash-refund"
              size={24}
              color="#05C25D"
            />
            <Text
              style={{
                fontSize: 18,
                color: "#124e78",
                fontWeight: "700",
                marginHorizontal: 5,
              }}
            >
              Cancellation
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "#05C25D", fontSize: 23 }}
              >
                Booking
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
              }}
            >
              We Can Reach You There
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Image
              source={require("../assets/zambia.png")}
              style={{
                resizeMode: "contain",
                width: "100%",
                height: 400,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bus-marker"
                size={24}
                color="#124e78"
              />
              <Text
                style={{ fontWeight: "bold", color: "#124e78", fontSize: 23 }}
              >
                Pajane
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "#05C25D", fontSize: 23 }}
              >
                Booking
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              We Assist You at Every Step Of Your Journey
            </Text>
          </View>
          <ImageBackground
            source={require("../assets/markers.png")}
            resizeMode="cover"
            style={{
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <Image
              source={require("../assets/customerCare.png")}
              resizeMode="center"
            />
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to,
    date: state.date,
    bus: state.bus,
    seat: state.seat,
    price: state.price,
    children: state.children,
    adult: state.adult,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    setFrom: () => dispacth({ type: "SET_FROM" }),
    setTo: () => dispacth({ type: "SET_TO" }),
    setDate: () => dispacth({ type: "SET_DATE" }),
    setBus: () => dispacth({ type: "SET_BUS" }),
    setSeat: () => dispacth({ type: "SET_SEAT" }),
    setPrice: () => dispacth({ type: "SET_PRICE" }),
    setChildren: () => dispacth({ type: "SET_CHILDREN" }),
    setAdult: () => dispacth({ type: "SET_ADULT" }),
  };
};
export default connect(mapStateToProps)(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  buttonSearch: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#05C25D",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonSearch2: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#05C25D",
    padding: 8,
    borderRadius: 10,
    marginVertical: 5,
  },
  HeroSection: {},
  imgHero: {
    width: "100%",
    height: 200,
    alignItems: "center",
    resizeMode: "center",
  },
  c: {
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
  searchButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#05C25D",
    borderRadius: 10,
  },
  searchButttonDisabled: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#a5a5a5",
    borderRadius: 10,
  },
});
