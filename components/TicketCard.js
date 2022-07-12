import { StyleSheet, Text, View, Image } from "react-native";
import React, { PureComponent } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export class TicketCard extends PureComponent {
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#e6f5ff", "#fff"]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
            backgroundColor: "#fff",
            borderRadius: 8,
            marginHorizontal: 5,
            paddingHorizontal: 10,
            marginVertical: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#124e78",
                fontSize: 16,
                fontWeight: "800",
              }}
            >
              {this.props.from}
            </Text>
            <Text
              style={{
                color: "#124e78",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {this.props.from_station}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/from-to.png")}
              style={{ width: 130, height: 40 }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <MaterialCommunityIcons
                name="bus-clock"
                size={18}
                color="#124e78"
              />
              <Text
                style={{
                  color: "#124e78",
                  fontSize: 14,
                  fontWeight: "400",
                }}
              >
                {this.props.date}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#124e78",
                fontSize: 16,
                fontWeight: "800",
              }}
            >
              {this.props.to}
            </Text>
            <Text
              style={{
                color: "#124e78",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {this.props.to_station}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default TicketCard;

const styles = StyleSheet.create({});
