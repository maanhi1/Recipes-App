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
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Search  */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.fieldSearch}
            placeholder="Search"
            placeholderTextColor={"#86869E"}
          >
            <Icon
              style={{ position: "absolute" }}
              name="search-outline"
              color={"#86869E"}
              size={18}
            />
          </TextInput>
          <Icon
            style={{ padding: 4, marginLeft: 5 }}
            name="options-outline"
            color={"#86869E"}
            size={30}
          />
        </View>
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
        {/* Dishes */}
        <View>
          <View style={styles.dishContainer}>
            {/* More ... */}
            <View style={styles.dishItem}>
              <Image
                style={styles.imgDish}
                source={require("../../assets/image.jpg")}
              />
              <View style={styles.dishContainer2}>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>

                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 10 }}>
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
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>

                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 10 }}>
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
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>

                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 10 }}>
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
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>

                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 10 }}>
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
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  Lasagna Pasta
                </Text>

                <View style={styles.dishContainer3}>
                  <Image
                    style={styles.imgUser}
                    source={require("../../assets/image.jpg")}
                  />
                  <Text style={{ fontSize: 13, marginTop: 5, marginLeft: 10 }}>
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
    marginTop: 10,
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
    borderRadius: 10,
    width: width / 2 - 20,
    height: 150,
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
});
