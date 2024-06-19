import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import BottomNavigation from "./src/components/BottomNavigation";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen></LoginScreen>
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
});
