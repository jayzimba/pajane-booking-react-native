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
import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const bgImage = require("../assets/zambia.png");
const google = require("../assets/google.jpeg");
const logo = require("../assets/family.jpg");

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddrss] = useState("");
  const [password, setPassword] = useState("");

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
        Login
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp"
        duration={1500}
        style={{ width: "100%" }}
      >
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
            secureTextEntry={true}
            width={100}
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
            Login with
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              marginBottom: 20,
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
            style={styles.signInBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#fff" }}>
              Login
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
            style={styles.toSignUp}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#000",
              }}
            >
              Dont have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  signInBtn: {
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
  toSignUp: {
    alignItems: "center",
    justifyContent: "center",
  },
});
