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
} from "@expo/vector-icons";
import Bus from "../components/Bus";
export class Results extends Component {
  fetchData = async () => {
    const response = await fetch("http://172.20.10.4:1345/buses");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
  componentDidMount() {
    this.fetchData();
  }

  constructor(props) {
    super(props);
  }
  state = {
    data: [],
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

              <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
                {this.props.from} to {this.props.to}
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
            <FlatList
              bounces={false}
              data={this.state.data}
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
