import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Button,
  TextInputComponent,
  Image,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Header from "./../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Mobile from "./../components/Mobile";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { color } from "react-native-reanimated";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  EvilIcons,
} from "@expo/vector-icons";
import { BookingDone } from "./BookingDone";
import { useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

// flutterwave
import { PayWithFlutterwave, close } from "flutterwave-react-native";

const slides = {
  card: require("../assets/vmc.jpeg"),
  airtel: require("../assets/airtel.jpg"),
  mtn: require("../assets/mtn.jpg"),
};

interface RedirectParams {
  status: "successful" | "cancelled";
  transaction_id?: string;
  tx_ref: string;
}

/* An example function called when transaction is completed successfully or canceled */
const handleOnRedirect = (data: RedirectParams) => {
  console.log(data);
};

/* An example function to generate a random transaction reference */
const generateTransactionRef = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `flw_tx_ref_${result}`;
};

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const PaymentScreen = ({ navigation }) => {
  const [ResultIsVisible, setResultIsVisible] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [mobileMoneyOption, setMobileMoneyOption] = useState("");
  const [mobileMoneyAirtel, setMobileMoneyAirtel] = useState("");
  const [mobileMoneyMTN, setMobileMoneyMTN] = useState("");
  const [AirtelSelectedOption, setAirtelSelectedOption] = useState(false);
  const [MTNSelectedOption, setMTNSelectedOption] = useState(false);
  const [phone, setPhone] = useState("");
  //testing modal popup
  const [visible, setVisible] = React.useState(false);
  const [viewTicket, setViewTicket] = React.useState(false);

  const showBookingDone = () => {
    setResultIsVisible((prev) => true);
  };

  const closeShowResults = () => {
    setResultIsVisible((prev) => false);
  };

  const goToTracking = () => {
    console.log("am clicked");
    setResultIsVisible(false);
    navigation.navigate("Booking");
    navigation.navigate("TrackBus");
  };
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
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
            Payment Options
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 30,
              color: "#124e78",
            }}
          >
            Total amount to pay
          </Text>

          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 7,
              elevation: 7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0.3,
                height: 1,
              },
              shadowOpacity: 0.2,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignContent: "center",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: "#124e78",
                letterSpacing: 1.5,
              }}
            >
              K {route.params.price}
            </Text>
          </View>

          <View
            style={{
              height: 45,
              width: "70%",
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 50,
              elevation: 7,
              shadowColor: "#000",
              shadowOffset: {
                width: 0.3,
                height: 1,
              },
              shadowOpacity: 0.2,
              backgroundColor: "#fff",
              alignItems: "center",
              marginVertical: 10,
              paddingStart: 10,
            }}
          >
            <TextInput
              placeholder="pajane gift code?"
              maxLength={6}
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#a8a8a8",
                fontStyle: "italic",
              }}
            />

            <TouchableOpacity
              style={{
                borderRadius: 50,
                height: "100%",
                width: 100,
                backgroundColor: "#05C25D",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                  color: "#fff",
                }}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CollapsibleView
          title={
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Pay using your Visa or Master card</Text>
            </TouchableOpacity>
          }
          style={{ borderWidth: 0, widt: "100%" }}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text>Card Holder</Text>
            <View
              style={{
                height: 40,
                width: "90%",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
                elevation: 7,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0.3,
                  height: 1,
                },
                shadowOpacity: 0.2,
                backgroundColor: "#fff",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 2,
                paddingStart: 10,
              }}
            >
              <TextInput
                placeholder="card holder name"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                }}
              />
            </View>
            <Text>Card Number</Text>
            <View
              style={{
                height: 40,
                width: "90%",
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
                elevation: 7,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0.3,
                  height: 1,
                },
                shadowOpacity: 0.2,
                backgroundColor: "#fff",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 2,
                paddingStart: 10,
              }}
            >
              <TextInput
                placeholder="card number"
                maxLength={15}
                keyboardType="numbers-and-punctuation"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#a8a8a8",
                }}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <View style={{ flexDirection: "column", marginEnd: 30 }}>
                <Text>Expire</Text>
                <View
                  style={{
                    height: 40,
                    width: 100,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 5,
                    elevation: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0.3,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    marginVertical: 10,
                    marginHorizontal: 2,
                    paddingStart: 10,
                  }}
                >
                  <TextInput
                    placeholder="Exp-date"
                    maxLength={5}
                    keyboardType="numbers-and-punctuation"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#a8a8a8",
                    }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text>CVC</Text>

                <View
                  style={{
                    height: 40,
                    width: 70,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 5,
                    elevation: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0.3,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    marginVertical: 10,
                    marginHorizontal: 2,
                    paddingStart: 10,
                  }}
                >
                  <TextInput
                    placeholder="CVC"
                    maxLength={3}
                    keyboardType="numbers-and-punctuation"
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#a8a8a8",
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                title="Click To Close Modal"
                onPress={() => {
                  setVisible(true);
                  setViewTicket(true);
                }}
                style={styles.payButtton}
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
                  Pay With Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </CollapsibleView>
        <Text
          style={{
            fontWeight: "bold",
            color: "#000",
            fontSize: 18,
            marginVertical: 20,
          }}
        >
          Pay using
        </Text>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <SafeAreaView>
            <EvilIcons
              name="arrow-left"
              size={35}
              color="black"
              onPress={() => {
                setisVisible(!isVisible);
                setVisible(true);
                setViewTicket(true);
              }}
              style={{
                margin: 10,
              }}
            />
            {/*All views of Modal*/}
            <SafeAreaView style={styles.modal}>
              <Text style={styles.text}>
                Enter Your {mobileMoneyOption} Number
              </Text>
              <Animatable.View
                animation="fadeInUp"
                duration={1000}
                style={{ width: "100%" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <View style={styles.line}></View>
                  <Entypo
                    name="phone"
                    size={20}
                    color="black"
                    style={{ marginHorizontal: 5 }}
                  />
                  <Text style={{ marginLeft: 5, fontSize: 18 }}>+260</Text>
                  <TextInput
                    placeholder="Enter your mobile number"
                    fontSize={16}
                    maxLength={9}
                    marginHorizontal={10}
                    returnKeyType="done"
                    keyboardType="phone-pad"
                    onChangeText={(phone) => {
                      if (mobileMoneyOption == "Airtel Money") {
                        setMobileMoneyAirtel("+260 " + phone.toString());
                        setAirtelSelectedOption(true);
                        setMTNSelectedOption(!AirtelSelectedOption);
                        setMobileMoneyMTN("");
                        setPhone(mobileMoneyAirtel);
                      } else if (mobileMoneyOption == "MTN Money") {
                        setMobileMoneyMTN("+260 " + phone.toString());
                        setMobileMoneyAirtel("");
                        setMTNSelectedOption(true);
                        setAirtelSelectedOption(!MTNSelectedOption);
                        setPhone(mobileMoneyMTN);
                      }
                    }}
                  />
                </View>

                {/* <TouchableOpacity
                  title="Click To Close Modal"
                  onPress={() => {
                    setisVisible(!isVisible);
                    setVisible(true);
                    setViewTicket(true);
                  }}
                  style={styles.payButtton}
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
                </TouchableOpacity> */}
                <PayWithFlutterwave
                  onRedirect={(data: RedirectParams) => {
                    console.log(data);
                    setisVisible(true);
                  }}
                  options={{
                    tx_ref: Date.now().toString(),

                    authorization: "FLWPUBK-aa9cc71e514393d4bfc408610089dcf2-X",
                    customer: {
                      email: "customer@pajane.com",
                      phone_number: phone,
                      name: "JayJay Code",
                    },
                    amount: 2,
                    currency: "ZMW",
                    payment_options: "ussd, card",
                  }}
                  customButton={(props) => (
                    <TouchableOpacity
                      style={styles.payButtton}
                      onPress={props.onPress}
                      isBusy={props.isInitializing}
                      disabled={false}
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
                  )}
                />
              </Animatable.View>
            </SafeAreaView>
          </SafeAreaView>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            setisVisible(!isVisible);
            setMobileMoneyOption("Airtel Money");
          }}
        >
          <Mobile
            imageUri={slides.airtel}
            headingPayment="Airtel Money"
            number={mobileMoneyAirtel}
            selected={AirtelSelectedOption}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setisVisible(!isVisible);
            setMobileMoneyOption("MTN Money");
          }}
        >
          <Mobile
            imageUri={slides.mtn}
            headingPayment="MTN Money"
            number={mobileMoneyMTN}
            selected={MTNSelectedOption}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={viewTicket ? styles.payButtton : styles.DisabledpayButtton}
          onPress={() => {
            setResultIsVisible(true);
          }}
          disabled={!viewTicket}
        >
          <Ionicons name="receipt" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            View Ticket
          </Text>
        </TouchableOpacity>

        {ResultIsVisible && (
          <BookingDone
            visible={ResultIsVisible}
            closeModal={() => {
              setResultIsVisible(false);
              navigation.navigate("Booking");
            }}
            busTracking={goToTracking}
          />
        )}
      </ScrollView>

      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setResultIsVisible(false);
                setVisible(false);
              }}
            >
              <Image
                source={require("../assets/x.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Animatable.View duration={3000} animation="bounceIn">
            <Image
              source={require("../assets/success.png")}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </Animatable.View>
        </View>

        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          Payment Made successfully
        </Text>
      </ModalPoup>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 95,
    paddingBottom: 30,
  },
  payButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#05C25D",
    borderRadius: 5,
  },
  DisabledpayButtton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#a5a5a5",
    borderRadius: 5,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "80%",
    borderRadius: 10,
    marginTop: 80,
    marginLeft: 40,
  },
  line: {
    marginVertical: 10,
    height: 25,
    width: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#000",
    marginVertical: 50,
    fontSize: 18,
    fontWeight: "700",
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
