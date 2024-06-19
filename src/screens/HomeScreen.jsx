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
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Button */}

        <View style={styles.buttonContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Dinner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Snacks And Appetizer</Text>
            </TouchableOpacity>
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
              style={{ height: 100, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/1.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 100, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/2.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 100, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/3.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 100, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/4.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={{ height: 100, width: width - 20, borderRadius: 20 }}
              source={require("../../assets/banners/5.jpg")}
            />
          </View>
        </Swiper>
        {/* Dishes */}
        <View>
          <View style={styles.heading}>
            <Text>Recommend</Text>
            <Text style={{ marginLeft: 200 }}>See all</Text>
          </View>
          <View style={styles.dishContainer}>
            {/* More ... */}
            <View style={styles.dishItem}>
              <Image
                style={styles.imgDish}
                source={require("../../assets/image.jpg")}
              />
              <View style={styles.dishContainer2}>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Description
                </Text>
                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 6 }}>
                    Thỏ con của mẹ
                  </Text>
                  <Icon
                    style={{ marginTop: 5, marginLeft: 10 }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={18}
                  />
                </View>
              </View>
            </View>
            {/* vidu */}
            <View style={styles.dishItem}>
              <Image
                style={styles.imgDish}
                source={require("../../assets/image.jpg")}
              />
              <View style={styles.dishContainer2}>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Description
                </Text>
                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 6 }}>
                    Thỏ con của mẹ
                  </Text>
                  <Icon
                    style={{ marginTop: 5, marginLeft: 10 }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={18}
                  />
                </View>
              </View>
            </View>
            {/* vidu */}
            <View style={styles.dishItem}>
              <Image
                style={styles.imgDish}
                source={require("../../assets/image.jpg")}
              />
              <View style={styles.dishContainer2}>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Description
                </Text>
                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 6 }}>
                    Thỏ con của mẹ
                  </Text>
                  <Icon
                    style={{ marginTop: 5, marginLeft: 10 }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={18}
                  />
                </View>
              </View>
            </View>
            {/* vidu */}
            <View style={styles.dishItem}>
              <Image
                style={styles.imgDish}
                source={require("../../assets/image.jpg")}
              />
              <View style={styles.dishContainer2}>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>
                <Text style={{ marginTop: 3, marginLeft: 10 }}>
                  Description
                </Text>
                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 6 }}>
                    Thỏ con của mẹ
                  </Text>
                  <Icon
                    style={{ marginTop: 5, marginLeft: 10 }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={18}
                  />
                </View>
              </View>
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
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 5,
  },
  dishContainer2: {
    backgroundColor: "#fff",
    width: width / 2 - 20,
    position: "absolute",
    height: 85,
    marginTop: 150,
    elevation: 5,
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
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  wrapper: {
    height: 120,
    marginTop: 10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  dishItem: {
    width: (width - 30) / 2, // Chia đôi chiều rộng
    marginBottom: 60,
    alignItems: "center",
    marginLeft: 10,
  },
  imgDish: {
    borderRadius: 10,
    width: width / 2 - 20,
    height: 200,
  },
  imgUser: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 10,
  },
});
