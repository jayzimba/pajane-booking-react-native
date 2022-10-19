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
  Image,
  ImageBackground,
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
import * as Animatable from "react-native-animatable";

const transit = require("../assets/notInTransit.png");
const qrcode = require("../assets/qrcode_sample.png");
const waterMark = require("../assets/paidWaterMark.png");
export class BookingDone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal visible={this.props.ResultIsVisible} animationType="slide">
        <SafeAreaView style={styles.mainContainer}>
          <ImageBackground
            source={waterMark}
            resizeMode="contain"
            imageStyle={{ opacity: 0.1 }}
          >
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
                  style={{
                    marginRight: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Ionicons name="chevron-back" size={24} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>Home</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginHorizontal: 10,
              }}
            >
              {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Payment")}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity> */}

              <View style={{ width: "95%" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Ticket Booked Succefully
                </Text>
              </View>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 30 }}
            >
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                  height: 800,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 1,

                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 22,
                      fontWeight: "800",
                      marginVertical: 10,
                    }}
                  >
                    Ongoing Trip
                  </Text>
                  <View
                    style={{
                      paddingHorizontal: 8,
                      backgroundColor: "#05C25D",
                      borderRadius: 12,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "800",
                        marginVertical: 5,
                      }}
                    >
                      Booked
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    padding: 10,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "800",
                      color: "#000",
                    }}
                  >
                    Passengers
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                      paddingBottom: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#000",
                        marginEnd: 10,
                      }}
                    >
                      {1} Adult
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#000",
                      }}
                    >
                      {0} Children
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "800",
                      color: "#000",
                    }}
                  >
                    Bus: {"Power tools"}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ paddingVertical: 10 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "400",
                          color: "#000",
                        }}
                      >
                        {"Lusaka"} {" -> "} {"Ndola"}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: "#000",
                        }}
                      >
                        Friday, 5, Aug
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      Booked Seat:
                    </Text>
                    <View
                      style={{
                        paddingVertical: 1,
                        paddingHorizontal: 10,
                        marginHorizontal: 5,
                        backgroundColor: "#05C25D",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#fff",
                        }}
                      >
                        24
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000",
                      }}
                    >
                      Time of Departure:{" "}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#000" }}>
                      {"09:30"} HRS{" "}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000",
                      }}
                    >
                      Payment Mode:{" "}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#000" }}>
                      {"Airtel Money"}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: "#000",
                      }}
                    >
                      PAID:{"  "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: "#000",
                      }}
                    >
                      K{300}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 20,
                        fontWeight: "800",
                        marginVertical: 10,
                      }}
                    >
                      Ticket Details
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        paddingLeft: 5,
                        borderColor: "#dedede",
                        borderWidth: 1,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={qrcode}
                        style={{
                          resizeMode: "contain",
                          width: 150,
                          height: 150,
                          marginLeft: -10,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: "column",
                          paddingHorizontal: 8,
                        }}
                      >
                        <View style={{ flexDirection: "column" }}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 5,
                                marginTop: 2,
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              Ticket #:
                            </Text>

                            <Text style={{ marginVertical: 5, marginTop: 2 }}>
                              {464899887856}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 5,
                                marginTop: 2,
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              Bus ID:
                            </Text>
                            <Text style={{ marginVertical: 5, marginTop: 2 }}>
                              {"BDC 345"}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 5,
                                marginTop: 2,
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              Total Passegers:
                            </Text>

                            <Text>{3}</Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 5,
                                marginTop: 2,
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              Date Issued:
                            </Text>
                            <Text>{"21/03/22"}</Text>
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 5,
                                marginTop: 2,
                                color: "#000",
                                fontWeight: "bold",
                              }}
                            >
                              Exp date:
                            </Text>

                            <Text>22/03/22</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity onPress={this.props.busTracking}>
                      <Animatable.View
                        animation="rubberBand"
                        duration={1500}
                        iterationCount={10}
                        iterationDelay={7000}
                        style={{
                          backgroundColor: "#05C25D",
                          borderRadius: 5,
                          justifyContent: "center",
                          alignItems: "center",
                          marginHorizontal: 40,
                          marginVertical: 10,
                          padding: 10,
                        }}
                      >
                        <MaterialIcons
                          name="track-changes"
                          size={24}
                          color="white"
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "800",
                            marginVertical: 5,
                          }}
                        >
                          Track Your Bus Now
                        </Text>
                      </Animatable.View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      </Modal>
    );
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 2,
  },
  img: {
    width: "50%",
    height: 100,
    alignItems: "center",
    resizeMode: "cover",
  },
  headerHolder: {
    flexDirection: "row",
    width: width,
    height: height * 0.1,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 5,
  },
  tripsHolder: {
    marginTop: 10,
    marginHorizontal: 30,
    width: width - 20,
    height: height,
  },
});
export default BookingDone;
