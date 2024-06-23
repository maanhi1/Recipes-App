import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { email, password };

    axios
      .post("http://192.168.0.104:3000/login", user)
      .then((response) => {
        console.log("Đăng nhập thành công:", response.data);
        Alert.alert("Đăng nhập thành công");
      })
      .catch((error) => {
        console.error("Đăng nhập thất bại:", error);
        Alert.alert(
          "Đăng nhập thất bại",
          error.response?.data?.error || "Có lỗi xảy ra"
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headertop}>Let's</Text>
      <Text style={styles.header}>Sign you in</Text>
      <Text style={styles.subtop}>Welcome back</Text>
      <Text style={styles.sub}>You’ve been missed!</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          name="envelope"
          size={19}
          color="#6E6E6E"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: "#333" }]} // Màu chữ đen
          placeholder="Enter your Email"
          defaultValue={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          name="lock"
          size={19}
          color="#6E6E6E"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: "#333" }]} // Màu chữ đen
          placeholder="Enter your Password"
          secureTextEntry
          defaultValue={password}
          onChangeText={setPassword}
        />
      </View>
      <Text
        style={[
          styles.forgotText,
          { position: "absolute", right: 20, bottom: 240 },
        ]}
      >
        ForgotPassword?
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headertop: {
    fontSize: 50,
    fontWeight: "bold",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtop: {
    fontSize: 20,
    color: "#B2B2B2",
    marginTop: 15,
  },
  sub: {
    fontSize: 20,
    color: "#B2B2B2",
    marginBottom: 35,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 20,
    width: 300,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
    color: "#d3d3d3",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14,
  },
  forgotText: {
    marginBottom: 47,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 10,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
