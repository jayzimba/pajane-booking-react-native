import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import DatePicker, {
  getToday,
  getFormatedDate,
  moment,
} from "react-native-modern-datepicker";

export default class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state.date = getFormatedDate(getToday(), "DD MMM,YYYY");
  }

  state = {
    date: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
            flexDirection: "row",
          }}
        >
          <Fontisto
            name="date"
            size={15}
            color="#fff"
            style={{ marginEnd: 10 }}
          />
          <TouchableOpacity onPress={this.props.showDatePicker}>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              departure date - {this.props.date}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#124e78",
    borderRadius: 10,
    paddingStart: 10,
    marginTop: 2,
  },
});
