import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { PureComponent } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const transit = require("../assets/notInTransit.png");
const qrcode = require("../assets/qrcode_sample.png");
const waterMark = require("../assets/paidWaterMark.png");
export class TicketCard extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.constainer}>
        <Image
          source={qrcode}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
          }}
        />
        <View style={{ width: "70%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.busName}>{this.props.busName}</Text>
            <Text style={styles.price}>ZMW {this.props.price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Ionicons name="location-outline" size={12} color="black" />
            <Text style={styles.from}>{this.props.from}</Text>
            <Text style={styles.from}> - </Text>
            <Ionicons name="location" size={14} color="black" />
            <Text style={styles.to}>{this.props.to}</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginVertical: 5,
                marginTop: 2,
                color: "#000",
                fontWeight: "500",
              }}
            >
              Ticket No:
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
                marginVertical: 1,
                color: "#000",
                fontSize: 12,
              }}
            >
              {this.props.date}
            </Text>

            <Text style={{ fontSize: 12, fontWeight: "bold", marginLeft: 5 }}>
              Status:
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
                color: "#05C25D",
              }}
            >
              Booked
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TicketCard;

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 5,
    flexDirection: "row",
    paddingLeft: 5,
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    padding: 5,
  },
  busName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  from: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  to: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    color: "#124e78",
    fontWeight: "bold",
    fontSize: 16,
  },
});
