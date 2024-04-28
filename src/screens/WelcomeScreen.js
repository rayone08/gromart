import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const WelcomeScreen = () => {
  const animation = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={animation}
          style={styles.animation}
          source={require("../../assets/lottie/food-logo.json")}
        />
      </View>
      <StatusBar style='dark' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Food Mart</Text>
        <Text style={styles.subtitle}>Explore some delicious food here</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
  container: {
    backgroundColor: "#f64e32",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animationContainer: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.4,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: windowWidth * 0.1,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: windowWidth * 0.05,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
  },
  buttonText: {
    color: "#f64e32",
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
  },
};

export default WelcomeScreen;
