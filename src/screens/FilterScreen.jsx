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
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function App() {
  //Categories
  const [category, setcategory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.7:3000/categories`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setcategory(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);
  //Complexity
  const [complexity, setComplexity] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.7:3000/difficultylevel`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setComplexity(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);
  //Change style button
  const [clickedComplexity, setClickedComplexity] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleComplexityClick = (difficultyLevelId) => {
    setClickedComplexity(difficultyLevelId);
  };

  const handleRatingClick = (ratingId) => {
    if (selectedRating === ratingId) {
      setSelectedRating(null);
    } else {
      setSelectedRating(ratingId);
    }
  };

  const handleCategoryClick = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleIngredientClick = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

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
        </View>
        {/* Container type */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 20 }}>
            Categories
          </Text>
          <View style={styles.buttonContainer1}>
            {category.map((items) => (
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedCategories.includes(items.categoryId) &&
                    styles.buttonClicked,
                  styles.buttonTextClicked,
                ]}
                onPress={() => handleCategoryClick(items.categoryId)}
                key={items.categoryId}
              >
                <Text
                  style={[
                    styles.buttonText,
                    clickedComplexity === items.difficultyLevelId &&
                      styles.buttonTextClicked,
                  ]}
                >
                  {items.categoryName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Complexity */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Complexity
          </Text>
          <View style={styles.buttonContainer1}>
            {complexity.map((items) => (
              <TouchableOpacity
                style={[
                  styles.button,
                  clickedComplexity === items.difficultyLevelId &&
                    styles.buttonClicked,
                ]}
                onPress={() => handleComplexityClick(items.difficultyLevelId)}
                key={items.difficultyLevelId}
              >
                <Text
                  style={[
                    styles.buttonText,
                    clickedComplexity === items.difficultyLevelId &&
                      styles.buttonTextClicked,
                  ]}
                >
                  {items.difficultyLevelName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Ingredients  */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Ingredients
          </Text>
          <View style={styles.buttonContainer1}>
            {[
              "Tuna",
              "Bread",
              "Egg",
              "Vanilla",
              "Celery",
              "Olive oil",
              "Meat",
              "Onion",
              "Pepper",
              "Baking soda",
              "Brown sugar",
              "Mayonnaise",
            ].map((ingredient) => (
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedIngredients.includes(ingredient) &&
                    styles.buttonClicked,
                ]}
                onPress={() => handleIngredientClick(ingredient)}
                key={ingredient}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedIngredients.includes(ingredient) &&
                      styles.buttonTextClicked,
                  ]}
                >
                  {ingredient}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Rating */}
        <View>
          <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 5 }}>
            Rating
          </Text>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                onPress={() => handleRatingClick(star)}
                key={star}
              >
                <Icon
                  style={[
                    styles.icon,
                    selectedRating >= star ? styles.iconClicked : null,
                  ]}
                  name={selectedRating >= star ? "star" : "star-outline"}
                  color={"#000000"}
                  size={25}
                />
              </TouchableOpacity>
            ))}
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
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  fieldSearch: {
    backgroundColor: "#F3F4F9",
    height: 40,
    borderRadius: 30,
    position: "relative",
    paddingLeft: 20,
    width: width - 25,
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
    marginTop: 15,
  },
  buttonAdd1: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 220,
    marginTop: 30,
  },
  buttonAdd2: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 220,
    marginTop: 10,
  },
  buttonClicked: {
    backgroundColor: "#000",
  },
  buttonTextClicked: {
    color: "#fff",
  },
  iconClicked: {
    color: "#EBBD1A",
  },
});
