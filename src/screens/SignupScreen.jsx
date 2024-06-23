import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Kiểm tra input email phải có @gmail
    if (!email.includes("@gmail.com")) {
      Alert.alert("Email must contain @gmail.com");
      return;
    }
    // Kiểm tra input username phải tối thiểu 6 tối đa 10 kí tự
    if (userName.length < 5 || userName.length > 10) {
      Alert.alert("Username must contain 5 - 10 characters");
      return;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    // Tạo đối tượng newUser từ các trường userName, email, password
    const newUser = {
      userName,
      email,
      password,
    };

    // Gửi request POST đến server
    axios
      .post("http://192.168.0.104:3000/datauser", newUser)
      .then((response) => {
        console.log("Đăng ký thành công:", response.data);
        Alert.alert("Đăng ký thành công");
        // Reset form
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.error("Đăng ký thất bại:", error);
        Alert.alert("Đăng ký thất bại");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headertop}>Let's get</Text>
      <Text style={styles.header}>Started</Text>
      <Text style={styles.subtop}>Share the recipe</Text>
      <Text style={styles.sub}>and enjoy it with others!</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          name="user"
          size={20}
          color="#6E6E6E"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: "#333" }]} // Màu chữ đen
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          name="envelope"
          size={20}
          color="#6E6E6E"
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { color: "#333" }]} // Màu chữ đen
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 20,
    width: 300,
    height: 54,
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
