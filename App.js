import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import BottomNavigation from "./src/components/BottomNavigation";
import Vidu from "./src/screens/vidu";
import User from "./src/screens/user";
import CommentTab from "./src/screens/CommentTab";
import RecipeTab from "./src/screens/RecipeTab";
import IngredientsTab from "./src/screens/IngredientsTab";
import AddRecipeScreen from "./src/screens/AddRecipeScreen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignupScreen></SignupScreen> */}
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
