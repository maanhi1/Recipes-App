import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default function App() {
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
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image
            style={styles.imageDish}
            source={require("../../assets/image.jpg")}
          ></Image>
          <View style={styles.containerUser}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/image.jpg")}
            ></Image>
            <Text
              style={{
                marginTop: 170,
                marginLeft: 20,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Tho con cua me
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                marginTop: 110,
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              Posted (...)
            </Text>
            <View style={styles.hrLine} />
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
                    onPress={() => getDetailDishSearchScreen(items.dishId)}
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    marginTop: 50,
  },
  imageDish: {
    width: width - 25,
    height: 150,
    borderRadius: 10,
    opacity: 0.7,
    position: "relative",
    marginLeft: 12,
  },
  imageUser: {
    height: 130,
    width: 130,
    borderRadius: 100,
    borderColor: "#D6D6D6",
    borderWidth: 5,
    marginTop: 100,
    marginLeft: 30,
  },
  containerUser: {
    flexDirection: "row",
    position: "absolute",
  },
  hrLine: {
    width: width - 100,
    backgroundColor: "#E6E6E6",
    height: 2,
    marginTop: 8,
  },
  dishContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    marginTop: 20,
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
    position: "relative",
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
