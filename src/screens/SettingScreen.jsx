import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image
          style={styles.imageUser}
          source={require("../../assets/image.jpg")}
        ></Image>
        <Text style={{ marginTop: 20, fontSize: 20 }}>Tho con cua me</Text>
      </View>
      <View style={styles.detailsUser}>
        <Text style={styles.detailsUserText}>User Name</Text>
        <TextInput style={styles.detailsUserInput}></TextInput>
        <Text style={styles.detailsUserText}>Email</Text>
        <TextInput style={styles.detailsUserInput}></TextInput>
        <Text style={styles.detailsUserText}>Password</Text>
        <TextInput style={styles.detailsUserInput}></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff" }}> Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageUser: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: "#D6D6D6",
    borderWidth: 5,
    marginTop: 20,
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailsUser: {
    marginTop: 50,
    marginLeft: 15,
  },
  detailsUserText: {
    marginBottom: 10,
    marginLeft: 10,
  },
  detailsUserInput: {
    borderWidth: 0.5,
    height: 50,
    borderRadius: 10,
    borderColor: "#C6C6C6",
    width: width - 40,
    paddingLeft: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    alignItems: "center",
    width: width - 40,
    marginLeft: 15,
  },
});
