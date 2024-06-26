import React, { useEffect, useState } from "react";
import axios from "axios";
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

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.87:3000/detail_dish") // Thay 192.168.1.11 bằng địa chỉ IP của máy
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (
          response.data !== null &&
          typeof response.data === "object"
        ) {
          setData([response.data]);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {data.map((items) => (
          <View>
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
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 17,
                    }}
                  >
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
              <Text style={{ fontSize: 25 }}>{ỉtems.dishName}</Text>
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
                <Text style={{ marginLeft: 5 }}>{ỉtems.calo}</Text>
              </View>
              {/* g */}
              <View style={styles.detailContainer2}>
                <Icon name="star" color={"#ebbd1a"} size={17} />
                <Text style={{ marginLeft: 5 }}>{ỉtems.protein}</Text>
              </View>
              {/* time */}
              <View style={styles.detailContainer2}>
                <Icon name="star" color={"#ebbd1a"} size={17} />
                <Text style={{ marginLeft: 5 }}>{ỉtems.cookingTime}</Text>
              </View>
              {/* level*/}
              <View style={styles.detailContainer2}>
                <Icon name="star" color={"#ebbd1a"} size={17} />
                <Text style={{ marginLeft: 5 }}>{ỉtems.dificultyLevel}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <NavigationContainer>
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
    </View>
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
