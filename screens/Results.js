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
import axios from "axios";
export class Results extends Component {
  constructor(props) {
    super(props);

    this.setState({
      to: this.props.to,
      from: this.props.from,
      date: this.props.date,
    });
  }

  state = {
    trips: [],
    isLoading: false,
    to: this.props.to,
    from: this.props.from,
    date: this.props.date,
  };

  fetchData = async () => {
    var formdata = new FormData();
    formdata.append("from", this.state.from);
    formdata.append("to", this.state.to);
    formdata.append("date", this.state.date);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://172.20.10.4/pajane/searchBus.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result == "No trip found") {
          this.setState({ trips: [] });
        } else {
          this.setState({ trips: result });
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => this.setState({ isLoading: false }));
  };
  componentDidMount() {
    this.setState({ isLoading: true }, this._getData);
  }
  _getData = () => {
    setTimeout(() => {
      // this.setState({ isLoading: false });
      this.fetchData();
    }, 2000);
  };

  render() {
    let { items, isLoading } = this.state;
    return (
      <Modal
        visible={this.props.ResultIsVisible}
        animationType="slide"
        hasBackdrop={true}
        backdropOpacity={0.6}
        backdropColor="#000000"
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        animationInTiming={1}
        animationOutTiming={1}
        backdropTransitionInTiming={1}
        backdropTransitionOutTiming={1}
      >
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

          <View style={{ paddingTop: 5, height: "100%" }}>
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
                // bounces={false}
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
                  <TouchableOpacity
                    onPress={(item) => this.props.bookingdetails(item)}
                  >
                    <Bus
                      busName={item.OperatorName}
                      from={item.From}
                      to={item.To}
                      date={item.date}
                      station={item.station}
                      seats={item.seats - item.seatsBooked}
                      price={item.price}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                refreshing={isLoading}
                onRefresh={this._getData}
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
