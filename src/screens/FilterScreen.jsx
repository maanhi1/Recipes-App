import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
              onPress={Colors.red}
            />
          </TextInput>
          <Icon
            style={{ padding: 8, marginLeft: 5 }}
            name="options-outline"
            color={"#86869E"}
            size={30}
          />
        </View>
        {/* Container type */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 20 }}>
            Metal Type
          </Text>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Brunch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Snack</Text>
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
              <Text style={styles.buttonText}>Baked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>BBQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Salad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Smoothies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Soups</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Soda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Alcoholic drink</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Complexity */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Complexity
          </Text>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Moderate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Easy</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Ingredients  */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Metal Type
          </Text>
          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Tuna</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Egg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Vanilla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Celary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}> Olive oil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Meat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Onion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Pepper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Backing soda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Brown sugar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Mayonnaise</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Rating */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Rating
          </Text>

          <View style={styles.ratingContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log("start");
              }}
            >
              <Icon
                style={styles.icon}
                name="star-outline"
                color={"#000000"}
                size={25}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="star-outline"
                color={"#000000"}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="star-outline"
                color={"#000000"}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="star-outline"
                color={"#000000"}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="star-outline"
                color={"#000000"}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Button */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.buttonAdd1} onPress={() => {}}>
            <Text style={{ color: "#fff" }}>Apply Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd2} onPress={() => {}}>
            <Text style={{ color: "#000" }}>Clear Filters</Text>
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
    marginTop: 60,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  fieldSearch: {
    backgroundColor: "#F3F4F9",
    height: 45,
    borderRadius: 30,
    position: "relative",
    paddingLeft: 20,
    width: width - 70,
    marginLeft: 10,
  },
  button: {
    borderColor: "#A8A8A8",
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: 8,
    padding: 6,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonContainer1: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
  buttonAdd1: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 220,
    marginTop: 20,
  },
  buttonAdd2: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 220,
  },
});
