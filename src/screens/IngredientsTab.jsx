import React, { useLayoutEffect, useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

const IngredientsTab = ({ dishId }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/ingredients/${dishId}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setIngredients(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
      });
  }, [dishId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {ingredients.map((items, index) => (
          <View key={index} style={styles.itemList}>
            <Icon name="checkmark-circle-outline" color={"#000"} size={25} />
            <Text style={styles.textItem}>{items.ingredientName}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default IngredientsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  itemList: {
    flexDirection: "row",
    padding: 10,
  },
  textItem: {
    marginHorizontal: 10,
    fontSize: 15,
    lineHeight: 25,
  },
});
