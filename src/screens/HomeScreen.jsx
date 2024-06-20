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
          // autoplay={true}
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
            <Text style={{ marginLeft: 200 }}>See all</Text>
          </View>
          <View style={styles.dishContainer}>
            {/* More ... */}
            <View style={styles.dishItem}>
              <View style={styles.dishItemContainer}>
                <Image
                  style={styles.imgDish}
                  source={require("../../assets/image.jpg")}
                />
                <View style={styles.dishContainer2}>
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Lasagna Pasta
                  </Text>
                  <View style={styles.dishContainer3}>
                    <Image
                      style={styles.imgUser}
                      source={require("../../assets/image.jpg")}
                    />
                    <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 8 }}>
                      Thỏ con của mẹ
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
                  >
                    Just take about 30 minutes. The recipe is very clear and
                    easy to follow. Let’s try it
                  </Text>
                  <Icon
                    style={{
                      marginLeft: 170,
                    }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={20}
                  />
                </View>
              </View>
            </View>
            {/* Vi du */}
            <View style={styles.dishItem}>
              <View style={styles.dishItemContainer}>
                <Image
                  style={styles.imgDish}
                  source={require("../../assets/image.jpg")}
                />
                <View style={styles.dishContainer2}>
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Lasagna Pasta
                  </Text>
                  <View style={styles.dishContainer3}>
                    <Image
                      style={styles.imgUser}
                      source={require("../../assets/image.jpg")}
                    />
                    <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 8 }}>
                      Thỏ con của mẹ
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
                  >
                    Just take about 30 minutes. The recipe is very clear and
                    easy to follow. Let’s try it
                  </Text>
                  <Icon
                    style={{
                      marginLeft: 170,
                    }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={20}
                  />
                </View>
              </View>
            </View>
            {/* Vi du */}
            <View style={styles.dishItem}>
              <View style={styles.dishItemContainer}>
                <Image
                  style={styles.imgDish}
                  source={require("../../assets/image.jpg")}
                />
                <View style={styles.dishContainer2}>
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Lasagna Pasta
                  </Text>
                  <View style={styles.dishContainer3}>
                    <Image
                      style={styles.imgUser}
                      source={require("../../assets/image.jpg")}
                    />
                    <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 8 }}>
                      Thỏ con của mẹ
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
                  >
                    Just take about 30 minutes. The recipe is very clear and
                    easy to follow. Let’s try it
                  </Text>
                  <Icon
                    style={{
                      marginLeft: 170,
                    }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={20}
                  />
                </View>
              </View>
            </View>
            {/* Vi du */}

            <View style={styles.dishItem}>
              <View style={styles.dishItemContainer}>
                <Image
                  style={styles.imgDish}
                  source={require("../../assets/image.jpg")}
                />
                <View style={styles.dishContainer2}>
                  <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Lasagna Pasta
                  </Text>
                  <View style={styles.dishContainer3}>
                    <Image
                      style={styles.imgUser}
                      source={require("../../assets/image.jpg")}
                    />
                    <Text style={{ fontSize: 13, marginTop: 3, marginLeft: 8 }}>
                      Thỏ con của mẹ
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
                  >
                    Just take about 30 minutes. The recipe is very clear and
                    easy to follow. Let’s try it
                  </Text>
                  <Icon
                    style={{
                      marginLeft: 170,
                    }}
                    name="bookmark-outline"
                    color={"#000"}
                    size={20}
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
    marginTop: 10,
  },
  dishContainer3: {
    flexDirection: "row",
    marginTop: 5,
  },
  dishContainer2: {
    marginTop: 5,
    marginLeft: 5,
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
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
});
