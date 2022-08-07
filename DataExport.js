import { Text, View } from "react-native";
import React, { Component } from "react";

export class DataExport extends Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch("http://192.168.8.101:1345/quick_booking");
    const quick_booking = await response.json();
    this.setState({ data: quick_booking });
  };
}

export default dataExport;
