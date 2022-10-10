import {
  Text,
  View,
  Modal,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  Pressable,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { Component } from "react";
import FadeLoader from "../components/FadeLoader";
import { QuickBookings } from "./../components/QuickBookings";
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
import Bus from "../components/Bus";
export class Results extends Component {
  fetchData = async () => {
    const response = await fetch("http://172.20.10.4:1345/buses");
    const quick_booking = await response.json();
    this.setState({ trips: quick_booking });
  };
  componentDidMount() {
    this.setState({ isLoading: true }, this._getData);
  }
  _getData = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.fetchData();
    }, 2000);
  };

  constructor(props) {
    super(props);
  }

  state = {
    trips: [],
    isLoading: false,
  };

  render() {
    return (
      <Modal visible={this.props.ResultIsVisible} animationType="slide">
        <SafeAreaView style={styles.mainContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              justifyContent: "space-between",
              marginEnd: 40,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={this.props.closeModal}
                style={{ marginRight: 10 }}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>

              <Text style={{ fontSize: 18, fontWeight: "700", color: "#000" }}>
                {this.props.from}
              </Text>
              <SimpleLineIcons
                name="direction"
                size={20}
                color="black"
                style={{ marginHorizontal: 15 }}
              />
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#000" }}>
                {this.props.to}
              </Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Filter Clicked")}>
              <MaterialIcons
                style={{}}
                name="filter-list"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 5, marginBottom: 90 }}>
            {this.state.isLoading ? (
              <ActivityIndicator
                size="large"
                color="#05C25D"
                animating
                style={{
                  marginVertical: "70%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            ) : (
              <FlatList
                bounces={false}
                data={this.state.trips}
                keyExtractor={(item, index) => item.id.toString()}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        marginVertical: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="frowno" size={50} color="black" />
                      <Text
                        style={{
                          color: "black",
                          fontSize: 20,
                          fontWeight: "500",
                          textAlign: "center",
                          marginHorizontal: 50,
                          marginTop: 10,
                        }}
                      >
                        No bus was found, please try again
                      </Text>
                    </View>
                  );
                }}
                renderItem={({ item, index }) => (
                  // <Pressable onPress={this.props.bookingdetails}>
                  <Bus
                    busName={item.name}
                    from={item.pick_up}
                    to={item.drop_point}
                    date={item.date}
                    station={item.station}
                    seats={item.available_seats}
                    price={item.price}
                    clicked={(item) => this.props.bookingdetails(item)}
                  />
                  // </Pressable>
                )}
                keyExtractor={(item) => item.id}
                ite
              />
            )}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 2,
  },
});
export default Results;
