import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screem
import FilterScreen from "./FilterScreen";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.23:3000/datadish")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);

  const [category, setcategory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/categories`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setcategory(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);

  const [dishSearchScreen, setDishSearchScreen] = useState();
  const getDetailDishSearchScreen = (dishId) => {
    axios
      .get(`http://192.168.1.23:3000/datadish/${dishId}`)
      .then((response) => {
        setDishSearchScreen(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  };

  const [dishInSearchScreenByCategoryId, setDishInSearchScreenByCategoryId] =
    useState();
  const getDishByCategoryId = (categoryId) => {
    axios
      .get(`http://192.168.1.23:3000/filterDishByCategoryId/${categoryId}`)
      .then((response) => {
        setDishInSearchScreenByCategoryId(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Search  */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.fieldSearch}
            placeholder="Search"
            placeholderTextColor={"#86869E"}
          />
          <Icon
            style={{ padding: 4, marginLeft: 5 }}
            name="options-outline"
            color={"#86869E"}
            size={30}
            onPress={() => navigation.navigate("Filter")}
          />
        </View>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>
            {category.map((items) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  getDishByCategoryId(items.categoryId);
                }}
                key={items.categoryId}
              >
                <Text style={styles.buttonText}>{items.categoryName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Dishes */}
        <View>
          <View style={styles.dishContainer}>
            {data.length > 0 ? (
              data.map((items) => (
                <TouchableOpacity
                  key={items.dishId}
                  style={styles.dishItem}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("Detail", { dishId: items.dishId })
                  }
                >
                  <View>
                    <Image
                      style={styles.imgDish}
                      source={{ uri: items.imagesDish }}
                    />
                    <View style={styles.rating}>
                      <Icon name="star" size={18} color={"#EBBD1A"}></Icon>
                      <Text style={{ marginLeft: 5, fontWeight: 600 }}>
                        5.0
                      </Text>
                    </View>
                  </View>
                  <View style={styles.dishContainer2}>
                    <Text
                      style={{ marginTop: 8, marginLeft: 10 }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {items.dishName}
                    </Text>

                    <View style={styles.dishContainer3}>
                      <Image
                        style={styles.imgUser}
                        source={{ uri: items.imageUser }}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 5,
                          marginLeft: 10,
                          width: 90,
                        }}
                      >
                        {items.userName}
                      </Text>
                      <Icon
                        style={{ marginTop: 5, marginLeft: 10 }}
                        name="bookmark-outline"
                        color={"#000"}
                        size={18}
                        onPress={() => {}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text>Không có dữ liệu</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dishContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    marginTop: 25,
    position: "relative",
  },
  dishContainer3: {
    flexDirection: "row",
    marginTop: 13,
  },
  dishContainer2: {
    backgroundColor: "#fff",
    width: width / 2 - 20,
    position: "absolute",
    height: 75,
    marginTop: 140,
    elevation: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#DEDEDEB2",
    marginLeft: 10,
    padding: 8,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 17,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  dishItem: {
    width: (width - 30) / 2,
    marginBottom: 90,
    alignItems: "center",
    marginLeft: 10,
  },
  imgDish: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: width / 2 - 20,
    height: 140,
  },
  imgUser: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginLeft: 8,
  },
  searchContainer: {
    marginTop: 60,
    flexDirection: "row",
  },
  fieldSearch: {
    backgroundColor: "#F3F4F9",
    height: 40,
    borderRadius: 30,
    position: "relative",
    paddingLeft: 20,
    width: width - 70,
    marginLeft: 10,
  },
  rating: {
    flexDirection: "row",
    backgroundColor: "#F8F3F3CC",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 23,
    opacity: 0.8,
    zIndex: 2,
    position: "absolute",
    marginLeft: 10,
    marginTop: 10,
  },
});
