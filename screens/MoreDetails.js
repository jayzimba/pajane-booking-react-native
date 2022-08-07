import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const MoreDetails = ({ navigation }) => {
  const [remindMe, setRemindMe] = useState(false);

  const toggleReminder = () => {
    setRemindMe(!remindMe);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ marginHorizontal: 10 }}>
          <Header />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <View style={{ width: "85%" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                textAlign: "center",
              }}
            >
              More Booking Details
            </Text>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                fontWeight: "500",
                color: "#000",
              }}
            >
              Passenger Details
            </Text>
            {/* <Text
              style={{
                marginTop: 20,
                fontSize: 14,
                color: "#000",
              }}
            >
              Name:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              textContentType="name"
              keyboardType="default"
              autoComplete="name"
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 14,
                color: "#000",
              }}
            >
              Email:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              textContentType="email"
              keyboardType="email-address"
              autoComplete="email"
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 14,
                color: "#000",
              }}
            >
              Phone number:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              keyboardType="numeric"
              autoComplete="tel"
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 14,
                color: "#000",
              }}
            >
              NRC:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="NRC xxxxxx/xx/x"
              keyboardType="numeric"
            /> */}

            <View
              style={{
                backgroundColor: "white",
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
                Summary
              </Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
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
                  {2} Children
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white", padding: 10 }}>
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
                </View>
                <View style={{ marginEnd: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "800",
                      color: "#000",
                    }}
                  >
                    K255
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
                  Seat:
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
            </View>
            <View
              style={{
                backgroundColor: "white",
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
                Extras
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#000",
                    marginEnd: 10,
                  }}
                >
                  Remind me
                </Text>
                <View pointerEvents="none">
                  <Switch
                    onValueChange={toggleReminder}
                    value={remindMe}
                    trackColor={{ true: "#05C25D", false: "grey" }}
                    thumbColor="#124e78"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Animatable.View animation="fadeInUp" duration={1500}>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text style={styles.textStyles}>Total</Text>
            <Text style={styles.textStyles}>K255</Text>
          </View>

          <TouchableOpacity
            style={styles.payButtton}
            onPress={() => navigation.navigate("Payment")}
          >
            <Ionicons name="cash" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "700",
                marginLeft: 10,
              }}
            >
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.9,
    padding: 5,
    borderBottomRightRadius: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 230,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  textStyles: {
    fontSize: 18,
    fontWeight: "700",
  },
  payButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#05C25D",
    borderRadius: 5,
  },
});
