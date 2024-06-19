import * as React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.itemList}>
          <Icon name="checkmark-circle-outline" color={"#000"} size={25} />
          <Text style={styles.textItem}>100 - 150g Pasta (Lasagna)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    height: height,
  },
  itemList: {
    flexDirection: "row",
    padding: 10,
  },
  textItem: {
    marginHorizontal: 10,
    margin: 3,
    fontSize: 15,
  },
});
