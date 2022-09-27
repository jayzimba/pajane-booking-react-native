import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import axios from "axios";

const bgImage = require("../assets/zambia.png");
const google = require("../assets/google.jpeg");
const logo = require("../assets/family.jpg");

const SignUpScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://172.20.10.4/pajane/register.php",
          JSON.stringify({
            fullName: name,
            address: address,
            phone: phone,
            password: password,
          })
        )
        .then((response) => {
          console.log(response);
          setSubmit(false);
          //NAVIGATE USER BASED ON RESPONSE
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (submit) authenticate();
  }, [submit]);

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        animation="zoomIn"
        duration={1500}
        source={require("../assets/vector.png")}
        resizeMode="contain"
        style={{ width: "100%", height: 200, marginBottom: 10 }}
      />
      <Animatable.Text
        animation="fadeInDown"
        duration={1500}
        style={{
          fontWeight: "700",
          fontSize: 22,
          letterSpacing: 1,
          color: "#000",
          marginVertical: 10,
        }}
      >
        Go Places
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        duration={1500}
        style={{ width: "100%" }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line}></View>
          <Ionicons
            name="person"
            size={20}
            color="black"
            style={{ marginHorizontal: 5 }}
          />
          <TextInput
            placeholder="Full name"
            fontSize={16}
            marginHorizontal={10}
            autoCapitalize="none"
            returnKeyType="done"
            keyboardType="default"
            onChangeText={(fullname) => setName(fullname)}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line}></View>
          <Entypo
            name="location"
            size={20}
            color="black"
            style={{ marginHorizontal: 5 }}
          />
          <TextInput
            placeholder="Address"
            fontSize={16}
            autoCapitalize="none"
            marginHorizontal={10}
            returnKeyType="done"
            keyboardType="default"
            onChangeText={(Address) => setAddress(Address)}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line}></View>
          <Entypo
            name="phone"
            size={20}
            color="black"
            style={{ marginHorizontal: 5 }}
          />
          <Text style={{ marginLeft: 5 }}>+260</Text>
          <TextInput
            placeholder="Enter your mobile number"
            fontSize={16}
            maxLength={9}
            marginHorizontal={10}
            returnKeyType="done"
            keyboardType="phone-pad"
            onChangeText={(phone) => setPhone("+260" + phone)}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line}></View>
          <Entypo
            name="lock"
            size={20}
            color="black"
            style={{ marginHorizontal: 5 }}
          />

          <TextInput
            placeholder="Password"
            fontSize={16}
            marginHorizontal={10}
            maxLength={8}
            returnKeyType="done"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={true}
            width={100}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontWeight: "400",
              fontSize: 14,
              color: "#000",
            }}
          >
            Or Connect With Social
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 8,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#dedede",
              width: "80%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={google}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <Text style={{ fontWeight: "400", fontSize: 18, color: "#000" }}>
                Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() =>
              // navigation.navigate("Login")
              setSubmit(true)
            }
          >
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#fff" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={styles.toLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#000",
              }}
            >
              Already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  line: {
    marginVertical: 10,
    height: 25,
    width: 1,
    backgroundColor: "#000",
  },
  signUpBtn: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eded",
    // marginHorizontal: 30,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#05C25D",
  },
  toLogin: {
    alignItems: "center",
    justifyContent: "center",
  },
});
