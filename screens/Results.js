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

          <View style={{ paddingTop: 5, marginBottom: 90 }}>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            >
              <Bus
                busName={"Power Tools"}
                from={"Ndola"}
                to={"Lusaka"}
                date={"Friday, 5, Feb"}
                station={"Broadway"}
                seats={34}
                price={180}
              />
              <Bus
                busName={"Likili"}
                from={"Ndola"}
                to={"Chingola"}
                date={"Friday, 5, Feb"}
                station={"Main Masala"}
                seats={12}
                price={95}
              />
              <Bus
                busName={"Scorpion"}
                from={"Lusaka"}
                to={"Kitwe"}
                date={"Friday, 5, Feb"}
                station={"InterCity"}
                seats={3}
                price={220}
              />
              <Bus
                busName={"Mbwe"}
                from={"Ndola"}
                to={"Lusaka"}
                date={"Friday, 5, Feb"}
                station={"Broadway"}
                seats={34}
                price={175}
              />
              <Bus
                busName={"Scorpion"}
                from={"Lusaka"}
                to={"Kitwe"}
                date={"Friday, 5, Feb"}
                station={"InterCity"}
                seats={3}
                price={220}
              />
              <Bus
                busName={"Mbwe"}
                from={"Ndola"}
                to={"Lusaka"}
                date={"Friday, 5, Feb"}
                station={"Broadway"}
                seats={34}
                price={175}
              />
              <Bus
                busName={"Scorpion"}
                from={"Lusaka"}
                to={"Kitwe"}
                date={"Friday, 5, Feb"}
                station={"InterCity"}
                seats={3}
                price={220}
              />
              <Bus
                busName={"Mbwe"}
                from={"Ndola"}
                to={"Lusaka"}
                date={"Friday, 5, Feb"}
                station={"Broadway"}
                seats={34}
                price={175}
              />
            </ScrollView>
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
