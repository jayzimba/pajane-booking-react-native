import {
  Text,
  View,
  Modal,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import FadeLoader from "../components/FadeLoader";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
export default class Bus extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
          elevation: 7,
          marginHorizontal: 15,
          marginVertical: 7,
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.2,
        }}
      >
        <View style={{ backgroundColor: "white", padding: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: "#000",
            }}
          >
            Power Tools
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
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
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  marginTop: 10,
                }}
              >
                InterCity
              </Text>
            </View>
            <View style={{ marginEnd: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                K{255}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
                Seats Available:
              </Text>
              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  backgroundColor: "#05C25D",
                  borderRadius: 5,
                  marginStart: 5,
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
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                padding: 2,
                width: "30%",
                borderWidth: 0.3,
                borderRadius: 2,
                marginHorizontal: 10,
                justifyContent: "space-evenly",
              }}
            >
              <MaterialCommunityIcons
                name="air-conditioner"
                size={20}
                color="black"
              />
              <FontAwesome name="wifi" size={20} color="black" />
              <MaterialIcons name="luggage" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
