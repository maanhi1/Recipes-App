import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//Screen tab
import IngredientsTab from "./IngredientsTab";
import RecipeTab from "./RecipeTab";
import CommentTab from "./CommentTab";

const { width, height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

const DetailDish = ({ navigation, route }) => {
  const { dishId } = route.params;

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/datadish/${dishId}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra detailDish:", error);
      });
  }, [dishId]);

  const [selectedTab, setSelectedTab] = useState("Recipe");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Ingredients":
        return <IngredientsTab dishId={dishId} />;
      case "Recipe":
        return <RecipeTab dishId={dishId} />;
      case "Comment":
        return <CommentTab dishId={dishId} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {data.map((items) => (
        <View key={items.dishId}>
          <View style={styles.icon}>
            <View style={styles.iconContainer}>
              <Icon
                name="chevron-back-outline"
                color={"#000"}
                size={25}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="bookmark-outline"
                color={"#000"}
                size={25}
                onPress={() => {
                  console.log("Save dishId " + dishId);
                }}
              />
            </View>
          </View>

          <Image style={styles.imageDish} source={{ uri: items.imagesDish }} />
          <View style={styles.userContainer}>
            <View style={styles.userContainer1}>
              <Image
                style={{ height: 60, width: 60, borderRadius: 50 }}
                source={{ uri: items.imageUser }}
              />
              <View style={styles.userContainer2}>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 17,
                  }}
                >
                  {items.userName}
                </Text>
                {/* Nho fix daytime*/}
                <Text style={{ color: "#000" }}>Posted on date 2/6/2024</Text>
              </View>
              <Icon
                style={{ marginLeft: 50, marginTop: 20 }}
                name="ellipsis-vertical"
                color={"#DFDFDF"}
                size={25}
              />
            </View>
          </View>

          <ScrollView>
            {/*Heading text */}
            <View style={styles.headingContainer}>
              <Text style={{ fontSize: 20 }}>{items.dishName}</Text>
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  marginLeft: 30,
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Icon name="star" color={"#ebbd1a"} size={17} />
                <Text style={{ marginLeft: 10 }}>4.8</Text>
              </View>
            </View>
            <Text
              style={{
                marginLeft: 30,
                marginTop: 15,
                color: "#838383",
                lineHeight: 30,
                width: width - 60,
                fontSize: 13,
              }}
            >
              {items.description}
            </Text>
            {/* Detail  */}
            <View style={styles.detailContainer1}>
              {/* Kcal */}
              <View style={styles.detailContainer2}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require("../../assets/detaikDish/kcal.jpg")}
                ></Image>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  {items.calo}
                </Text>
              </View>
              {/* G */}
              <View style={styles.detailContainer2}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require("../../assets/detaikDish/protein.jpg")}
                ></Image>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  {items.protein}
                </Text>
              </View>
              {/* Time */}
              <View style={styles.detailContainer2}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require("../../assets/detaikDish/time.jpg")}
                ></Image>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  {items.cookingTime}
                </Text>
              </View>
              {/* Level*/}
              <View style={styles.detailContainer2}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={require("../../assets/detaikDish/level.png")}
                ></Image>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>Easy</Text>
              </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.itemTab,
                  selectedTab === "Ingredients" && styles.selectedItemTab,
                ]}
                onPress={() => setSelectedTab("Ingredients")}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === "Ingredients" && styles.selectedTabText,
                  ]}
                >
                  Ingredients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.itemTab,
                  selectedTab === "Recipe" && styles.selectedItemTab,
                ]}
                onPress={() => setSelectedTab("Recipe")}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === "Recipe" && styles.selectedTabText,
                  ]}
                >
                  Recipe
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.itemTab,
                  selectedTab === "Comment" && styles.selectedItemTab,
                ]}
                onPress={() => setSelectedTab("Comment")}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === "Comment" && styles.selectedTabText,
                  ]}
                >
                  Comment
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>{renderTabContent()}</View>
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default DetailDish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff",
  },
  userContainer: {
    backgroundColor: "#fff",
    width: width - 20,
    height: 70,
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: width - 110,
    marginLeft: 10,
    elevation: 3,
    zIndex: 2,
  },
  imageDish: {
    width: width,
    height: 300,
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
    marginTop: 70,
  },
  detailContainer1: {
    flexDirection: "row",
  },
  detailContainer2: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 10,
    height: 30,
    marginHorizontal: 10,
  },
  tabContainer: {
    flex: 1,
    marginTop: 30,
    width: width,
  },
  userContainer2: {
    marginLeft: 20,
    marginTop: 10,
  },
  userContainer1: {
    flexDirection: "row",
    marginLeft: 30,
  },
  tabContainer: {
    flexDirection: "row",
    width: width - 20,
    backgroundColor: "#eeeeee",
    borderRadius: 50,
    height: 45,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  itemTab: {
    flex: 1,
    width: width / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItemTab: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: (width - 20) / 3,
    height: 45,
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "auto",
  },
  tabText: {
    fontSize: 18,
    color: "#000",
  },
  selectedTabText: {
    color: "#fff",
  },
});
