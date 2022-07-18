import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { PureComponent } from "react";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
export class QuickBookings extends PureComponent {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          borderLeftWidth: 0.5,
          borderColor: "#dddddd",
          paddingHorizontal: 10,
          marginEnd: 20,
          paddingVertical: 10,
          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="dot-circle-o" size={12} color="#124e78" />
          <Text
            style={{
              color: "#124e78",
              fontWeight: "700",
              marginHorizontal: 5,
            }}
          >
            {this.props.from}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-on" size={12} color="#124e78" />
          <Text
            style={{
              color: "#124e78",
              fontWeight: "700",
              marginHorizontal: 5,
            }}
          >
            {this.props.destination}
          </Text>
        </View>
        <Text
          style={{
            color: "#124e78",
            fontWeight: "500",
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        >
          {this.props.busName}
        </Text>
        <Text
          style={{
            color: "#124e78",
            fontWeight: "500",
            marginHorizontal: 5,
            marginVertical: 3,
          }}
        >
          K{this.props.fee}
        </Text>

        <TouchableOpacity style={styles.buttonSearch2}>
          <Text style={{ color: "#05C25D", fontSize: 18, fontWeight: "600" }}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonSearch2: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#05C25D",
    padding: 8,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default QuickBookings;