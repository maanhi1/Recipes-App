import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screen
import DetailDish from "./DetailDish";

const { width, height } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.7:3000/datadish")
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
      .get(`http://192.168.1.7:3000/categories`)
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

  const [dishInHomeScreen, setDishInHomeScreen] = useState();
  const getDetailDishInHomeScreen = (dishId) => {
    axios
      .get(`http://192.168.1.7:3000/datadish/${dishId}`)
      .then((response) => {
        setDishInHomeScreen(response.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>
            {category.map((items) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
                key={items.categoryId}
              >
                <Text style={styles.buttonText}>{items.categoryName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Slider */}
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={3}
          loop={true}
        >
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/1.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/2.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/3.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/4.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/5.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 120, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/6.jpg")}
            />
          </View>
        </Swiper>
        {/* Dishes */}
        <View>
          <View style={styles.heading}>
            <Text>Recommend</Text>
          </View>
          <View style={styles.dishContainer}>
            {data.length > 0 ? (
              data.map((items) => (
                <TouchableOpacity
                  key={items.dishId}
                  style={styles.dishItem}
                  activeOpacity={0.8}
                  // onPress={}
                  onPress={() => getDetailDishInHomeScreen(items.dishId)}
                  // onPress={() => navigation.navigate("Detail")}
                >
                  <View style={styles.dishItemContainer}>
                    <Image
                      style={styles.imgDish}
                      source={{ uri: items.imagesDish }}
                    />
                    <View style={styles.dishContainer2}>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 16,
                          width: 190,
                          marginTop: 3,
                        }}
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
                          style={{ fontSize: 13, marginTop: 3, marginLeft: 8 }}
                        >
                          {items.userName}
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginLeft: 45,
                          width: 150,
                          fontSize: 10,
                          color: "#686868",
                          lineHeight: 20,
                        }}
                        numberOfLines={3}
                        ellipsizeMode="tail"
                      >
                        {items.description}
                      </Text>
                      <Icon
                        style={styles.bookmarkIcon}
                        name="bookmark-outline"
                        color={"#000"}
                        size={20}
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

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerTitle: "" }}
          name="Detail"
          component={DetailDish}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  dishContainer: {
    marginTop: 10,
  },
  dishContainer3: {
    flexDirection: "row",
    marginTop: 10,
  },
  dishContainer2: {
    marginTop: 5,
    marginLeft: 5,
    position: "relative",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 60,
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
  wrapper: {
    height: 150,
    marginTop: 10,
  },
  heading: {
    marginTop: 20,
    marginLeft: 15,
  },
  dishItem: {
    width: width - 20,
    marginBottom: 15,
    marginLeft: 10,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "#A8A8A8",
    height: 150,
    backgroundColor: "#FFFFFF",
    elevation: 3,
  },
  imgDish: {
    borderRadius: 10,
    width: width / 2 - 50,
    height: 130,
    marginTop: 10,
    marginLeft: 10,
  },
  imgUser: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginLeft: 10,
  },
  dishItemContainer: {
    flexDirection: "row",
  },
  bookmarkIcon: {
    position: "absolute",
    marginTop: 110,
    marginLeft: 170,
  },
});
