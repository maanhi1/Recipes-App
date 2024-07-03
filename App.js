import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//Screens
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import BottomNavigation from "./src/components/BottomNavigation";
import Vidu from "./src/screens/vidu";
import DetailDish from "./src/screens/DetailDish";
import FilterScreent from "./src/screens/FilterScreen";
import SettingScreen from "./src/screens/SettingScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import CommentTab from "./src/screens/CommentTab";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignupScreen></SignupScreen> */}
      <BottomNavigation></BottomNavigation>
      {/* <DetailDish></DetailDish> */}
      {/* <FilterScreent></FilterScreent> */}
      {/* <Vidu /> */}
      {/* <SettingScreen></SettingScreen> */}
      {/* <UserProfileScreen></UserProfileScreen> */}
      {/* <CommentTab></CommentTab> */}
      {/* <HomeScreen></HomeScreen> */}
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
