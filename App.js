import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//Screens
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import BottomNavigation from "./src/components/BottomNavigation";
import Vidu from "./src/screens/vidu";
import DetailDish from "./src/screens/DetailDish";
import FilterScreent from "./src/screens/FilterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignupScreen></SignupScreen> */}
      <BottomNavigation />
      {/* <DetailDish></DetailDish> */}
      {/* <FilterScreent></FilterScreent> */}
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
