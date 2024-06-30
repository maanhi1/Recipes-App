import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 20,
            }}
          >
            My favorites
          </Text>
        </View>
        {/* Dishes */}
        <View style={styles.dishContainer}>
          <TouchableOpacity style={styles.dishItems} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.imageDish}
                source={require("../../assets/image.jpg")}
              ></Image>
              <View style={styles.containeeIcon}>
                <View style={styles.rating}>
                  <Icon name="star" size={20} color={"#EBBD1A"}></Icon>
                  <Text style={{ marginLeft: 8 }}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                  <Icon name="bookmark-outline" size={15}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.containeeDes}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5 }}>
                  Beef Steak
                </Text>
                <View style={styles.description}>
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 50 }}
                    source={require("../../assets/image.jpg")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Tho con cua me
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 50,
                      marginLeft: 8,
                      marginTop: 3,
                    }}
                    source={require("../../assets/detaikDish/time.jpg")}
                  ></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    25 mins
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Moderate
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dishItems} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.imageDish}
                source={require("../../assets/image.jpg")}
              ></Image>
              <View style={styles.containeeIcon}>
                <View style={styles.rating}>
                  <Icon name="star" size={20} color={"#EBBD1A"}></Icon>
                  <Text style={{ marginLeft: 8 }}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                  <Icon name="bookmark-outline" size={15}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.containeeDes}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5 }}>
                  Beef Steak
                </Text>
                <View style={styles.description}>
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 50 }}
                    source={require("../../assets/image.jpg")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Tho con cua me
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 50,
                      marginLeft: 8,
                      marginTop: 3,
                    }}
                    source={require("../../assets/detaikDish/time.jpg")}
                  ></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    25 mins
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Moderate
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dishItems} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.imageDish}
                source={require("../../assets/image.jpg")}
              ></Image>
              <View style={styles.containeeIcon}>
                <View style={styles.rating}>
                  <Icon name="star" size={20} color={"#EBBD1A"}></Icon>
                  <Text style={{ marginLeft: 8 }}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                  <Icon name="bookmark-outline" size={15}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.containeeDes}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5 }}>
                  Beef Steak
                </Text>
                <View style={styles.description}>
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 50 }}
                    source={require("../../assets/image.jpg")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Tho con cua me
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 50,
                      marginLeft: 8,
                      marginTop: 3,
                    }}
                    source={require("../../assets/detaikDish/time.jpg")}
                  ></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    25 mins
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Moderate
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dishItems} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.imageDish}
                source={require("../../assets/image.jpg")}
              ></Image>
              <View style={styles.containeeIcon}>
                <View style={styles.rating}>
                  <Icon name="star" size={20} color={"#EBBD1A"}></Icon>
                  <Text style={{ marginLeft: 8 }}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                  <Icon name="bookmark-outline" size={15}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.containeeDes}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5 }}>
                  Beef Steak
                </Text>
                <View style={styles.description}>
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 50 }}
                    source={require("../../assets/image.jpg")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Tho con cua me
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 50,
                      marginLeft: 8,
                      marginTop: 3,
                    }}
                    source={require("../../assets/detaikDish/time.jpg")}
                  ></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    25 mins
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Moderate
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dishItems} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.imageDish}
                source={require("../../assets/image.jpg")}
              ></Image>
              <View style={styles.containeeIcon}>
                <View style={styles.rating}>
                  <Icon name="star" size={20} color={"#EBBD1A"}></Icon>
                  <Text style={{ marginLeft: 8 }}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                  <Icon name="bookmark-outline" size={15}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.containeeDes}>
                <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 5 }}>
                  Beef Steak
                </Text>
                <View style={styles.description}>
                  <Image
                    style={{ width: 20, height: 20, borderRadius: 50 }}
                    source={require("../../assets/image.jpg")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Tho con cua me
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 50,
                      marginLeft: 8,
                      marginTop: 3,
                    }}
                    source={require("../../assets/detaikDish/time.jpg")}
                  ></Image>

                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    25 mins
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 8,
                      marginTop: 3,
                      color: "#686868",
                    }}
                  >
                    Moderate
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
    marginLeft: 15,
    marginTop: 20,
  },
  dishItems: {
    height: 180,
    marginBottom: 15,
  },
  imageDish: {
    marginBottom: 15,
    width: width - 35,
    height: 160,
    borderRadius: 15,
    opacity: 0.7,
    position: "relative",
  },
  containeeIcon: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 8,
    marginLeft: 10,
  },
  rating: {
    flexDirection: "row",
    backgroundColor: "#F8F3F3CC",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 25,
    opacity: 0.8,
  },
  bookmark: {
    backgroundColor: "#F8F3F3CC",
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 210,
  },
  containeeDes: {
    backgroundColor: "#FFF",
    height: 60,
    borderRadius: 15,
    width: width - 35,
    position: "absolute",
    marginTop: 115,
    elevation: 3,
    zIndex: 3,
  },
  description: {
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 20,
  },
});
