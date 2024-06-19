import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageDish}
            source={require("../../assets/wait.jpg")}
          />
          <View style={styles.textDish}>
            <Icon name="image" size={25} />
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                marginLeft: 20,
                marginTop: 2,
              }}
            >
              Add representative photo
            </Text>
          </View>
        </View>
        {/* field text */}
        <View style={styles.fieldContainer}>
          {/* field name */}
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Recipe Name</Text>
          <TextInput
            style={styles.fieldName}
            placeholder="Type recipe name..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          {/* field name */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Recipe Description
          </Text>
          <TextInput
            style={styles.fieldName}
            placeholder="Type recipe description..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          {/* field nutri */}
          <View style={styles.fieldNutri}>
            <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
              Nutritional content
            </Text>
            <View style={styles.inputNutri}>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 160,
                  paddingLeft: 20,
                }}
                placeholder="Calories"
                placeholderTextColor={"#C6C6C6"}
              ></TextInput>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 150,
                  paddingLeft: 20,
                }}
                placeholder="Protein"
                placeholderTextColor={"#C6C6C6"}
              ></TextInput>
            </View>
          </View>
          {/* field time & level */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                Time to Cook
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 160,
                  marginTop: 10,
                }}
              >
                Type recipe name...
              </TextInput>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
                Complexity
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 150,
                  marginTop: 10,
                }}
              >
                Type recipe name...
              </TextInput>
            </View>
          </View>
          {/* field ingredients */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Ingredients
          </Text>
          <TextInput
            style={styles.fieldName}
            placeholder="Type ingredients name..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          <TextInput
            style={styles.fieldName}
            placeholder="Type ingredients name..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}> + Add Ingredients</Text>
          </TouchableOpacity>

          {/* field steps */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Recipe Steps
          </Text>
          <TextInput
            style={styles.fieldStep}
            placeholder="Type Step ... of the description for this dish..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          <TextInput
            style={styles.fieldStep}
            placeholder="Type Step ... of the description for this dish..."
            placeholderTextColor={"#C6C6C6"}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}> + Add Step</Text>
          </TouchableOpacity>
          {/* Button */}
          <TouchableOpacity style={styles.buttonAdd} onPress={() => {}}>
            <Text style={{ color: "#fff" }}> Save</Text>
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
    position: "relative",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textDish: {
    flexDirection: "row",
    position: "absolute",
  },
  imageDish: {
    height: 250,
    width: 350,
    opacity: 0.12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#757171C9",
  },
  fieldContainer: {
    padding: 20,
  },
  inputNutri: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  fieldName: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
  },
  button: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
  },
  fieldStep: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonAdd: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});
