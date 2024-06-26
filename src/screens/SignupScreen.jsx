import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordRef = useRef(null); // Ref for password TextInput

  const handleSignUp = () => {
    // Kiểm tra dữ liệu đầu vào
    if (!userName || !email || !password || !confirmPassword) {
      Alert.alert("Please fill in all fields");
      return;
    }
    // Kiểm tra input email phải có @gmail
    if (!email.includes("@gmail.com")) {
      Alert.alert("Email must contain @gmail.com");
      return;
    }

    // Kiểm tra input username phải tối thiểu 5 và tối đa 10 kí tự
    if (userName.length < 5 || userName.length > 10) {
      Alert.alert("Username must contain 5 - 10 characters");
      return;
    }

    // Kiểm tra định dạng email (cần bao gồm chữ và số)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Email must contain both letters and numbers");
      return;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (
      password !== confirmPassword ||
      password.length < 5 ||
      password.length > 10
    ) {
      Alert.alert("Passwords must match and contain 5 - 10 characters");
      setPassword("");
      setConfirmPassword("");
      if (passwordRef.current) {
        passwordRef.current.focus(); // Set focus to password TextInput
      }
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
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.headertop}>Let's get</Text>
        <Text style={styles.header}>Started</Text>
        <Text style={styles.subtop}>Share the recipe</Text>
        <Text style={styles.sub}>and enjoy it with others!</Text>

        {/* Username input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            name="user"
            size={20}
            color="#6E6E6E"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Username"
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        {/* Email input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            name="envelope"
            size={20}
            color="#6E6E6E"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            name="lock"
            size={20}
            color="#6E6E6E"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Enter your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            ref={passwordRef} // Assigning ref to password TextInput
          />
        </View>

        {/* Confirm password input */}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            name="lock"
            size={20}
            color="#6E6E6E"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: "#333" }]}
            placeholder="Confirm your Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Sign Up button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headertop: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 100,
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
