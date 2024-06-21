import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from "axios";

export default function App() {
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const newUser = {
      userName,
      accountName,
      email,
      password,
    };

    axios
      .post("http://192.168.0.104:3000/datauser", newUser)
      .then((response) => {
        console.log("Đăng ký thành công:", response.data);
        Alert.alert("Đăng ký thành công");
        // Reset form
        setUserName("");
        setAccountName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Đăng ký thất bại:", error);
        Alert.alert("Đăng ký thất bại");
      });
  };

  return (
    <View style={styles.container}>
      <Text>Đăng ký người dùng mới</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Account Name"
        value={accountName}
        onChangeText={setAccountName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: "100%",
  },
});
