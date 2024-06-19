import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// npm installed axios --save
import axios from "axios";

export default function App() {
  // khởi tạo biến rỗng để set giá trị
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  //Xử lý chức năng SignIn
  useEffect(() => {
    const handleSignUp = async () => {
      if (!email || !password) {
        console.error("Please fill in all fields");
        return;
      }

      console.log("Sending data:", { email, password });

      try {
        const response = await axios.post(`${BACKEND_URL}/user.php`, {
          email,
          password,
        });
        console.log("Response:", response.data);
      } catch (error) {
        if (error.response) {
          // Request was made and server responded with a status code
          console.error(
            "Server responded with non-2xx status:",
            error.response.status
          );
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error setting up the request:", error.message);
        }
        console.error("Error config:", error.config);
      }
    };

    if (isSubmit) {
      handleSignUp();
      setIsSubmit(false);
    }
  }, [isSubmit, email, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's get</Text>
      <Text style={styles.header}>started</Text>
      <Text style={styles.subHeader}>Share the recipe </Text>
      <Text style={styles.subHeader}>and enjoy it with others!</Text>

      {/* Field của Email */}
      <TextInput
        placeholder="Enter your Email"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      {/* Field của password */}
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => setIsSubmit(true)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.footerLink}>Sign In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 55,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 37,
    color: "#B2B2B2",
    marginVertical: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 5,
    paddingHorizontal: 100,
    marginVertical: 14,
    height: 54,
  },

  customButton: {
    backgroundColor: "#000000",
    paddingVertical: 13,
    paddingHorizontal: 110,
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
