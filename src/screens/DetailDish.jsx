import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//Screen
import IngredientsTab from "./IngredientsTab";
import RecipeTab from "./RecipeTab";
import CommentTab from "./CommentTab";

const { width, height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View style={styles.iconContainer}>
          <Icon name="chevron-back-outline" color={"#000"} size={25} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="bookmark-outline" color={"#000"} size={25} />
        </View>
      </View>

      <Image
        style={styles.imageDish}
        source={require("../../assets/image.jpg")}
      />

      <View style={styles.userContainer}>
        <View style={styles.userContainer1}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={require("../../assets/image.jpg")}
          />
          <View style={styles.userContainer2}>
            <Text style={{ color: "#000", fontWeight: 700, fontSize: 17 }}>
              Thỏ con của mẹ
            </Text>
            <Text style={{ color: "#000" }}>Posted on date 2/6/2024</Text>
          </View>
          <Icon
            style={{ marginLeft: 50, marginTop: 10 }}
            name="ellipsis-vertical"
            color={"#DFDFDF"}
            size={25}
          />
        </View>
      </View>

      {/*Heading text */}
      <View style={styles.headingContainer}>
        <Text style={{ fontSize: 25 }}>Lasagna Pasta</Text>
        <Icon
          style={{ marginLeft: 130, marginTop: 10 }}
          name="star"
          color={"#ebbd1a"}
          size={17}
        />
        <Text style={{ marginLeft: 10, marginTop: 9 }}>4.8</Text>
      </View>
      {/* Detail  */}
      <View style={styles.detailContainer1}>
        {/* kcal */}
        <View style={styles.detailContainer2}>
          <Icon name="star" color={"#ebbd1a"} size={17} />
          <Text style={{ marginLeft: 5 }}>790 kcal</Text>
        </View>
        {/* g */}
        <View style={styles.detailContainer2}>
          <Icon name="star" color={"#ebbd1a"} size={17} />
          <Text style={{ marginLeft: 5 }}>79g</Text>
        </View>
        {/* time */}
        <View style={styles.detailContainer2}>
          <Icon name="star" color={"#ebbd1a"} size={17} />
          <Text style={{ marginLeft: 5 }}>30 min</Text>
        </View>
        {/* level*/}
        <View style={styles.detailContainer2}>
          <Icon name="star" color={"#ebbd1a"} size={17} />
          <Text style={{ marginLeft: 5 }}>Easy</Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <View style={{ flex: 1 }}>
        <View style={styles.tabContainer}>
          <Tab.Navigator
            screenOptions={{
              tabBarScrollEnabled: true,
              tabBarStyle: { backgroundColor: "#EEEEEE", borderRadius: 50 },
              tabBarItemStyle: { width: width / 3 },
            }}
          >
            <Tab.Screen name="Ingredients" component={IngredientsTab} />
            <Tab.Screen name="Recipe" component={RecipeTab} />
            <Tab.Screen name="Comment" component={CommentTab} />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  userContainer: {
    backgroundColor: "#fff",
    width: width - 20,
    height: 70,
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: width - 60,
    marginLeft: 10,
    elevation: 10,
  },
  imageDish: {
    width: width,
    height: 350,
    borderRadius: 5,
    opacity: 0.6,
  },
  icon: {
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  iconContainer: {
    backgroundColor: "#F8F3F380",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  heading: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 30,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },
  detailContainer1: {
    flexDirection: "row",
  },
  detailContainer2: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    padding: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 20,
  },
  tabContainer: {
    flex: 1,
    marginTop: 110,
    width: width,
  },
  userContainer2: {
    marginLeft: 20,
  },
  userContainer1: {
    flexDirection: "row",
    marginLeft: 30,
  },
});
