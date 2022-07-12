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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export class Results extends Component {
  constructor(props) {
    super(props);
  }
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
                Lusaka to Ndola
              </Text>
            </View>
            <MaterialIcons
              style={{}}
              name="filter-list"
              size={24}
              color="black"
            />
          </View>

          <ScrollView style={{ paddingVertical: 10 }}>
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
            <FadeLoader />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 60,
    marginHorizontal: 20,
  },
});
export default Results;
