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
import { Dropdown } from "react-native-element-dropdown";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

export default function App() {
  //dropdown categories
  const [valueCategories, setValueCategories] = useState(null);
  const [isFocusCategories, setIsFocusCategories] = useState(false);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/categories`)
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          label: item.categoryName,
          value: item.categoryId,
        }));
        setCategory(formattedData);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);

  //dropdown complexity
  const [valueComplexity, setValueComplexity] = useState(null);
  const [isFocusComplexity, setIsFocusComplexity] = useState(false);

  const [complexity, setComplexity] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/difficultylevel`)
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          label: item.difficultyLevelName,
          value: item.difficultyLevelId,
        }));
        setComplexity(formattedData);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);
  //ingredient add and remove field
  const [ingredients, setIngredients] = useState([""]);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  //step add and remove
  const [steps, setSteps] = useState([""]);

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  //get value all field
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [calo, setCalo] = useState("");
  const [protein, setProtein] = useState("");

  //Handle submit
  const handleSubmit = () => {
    const selectedCategory = category.find(
      (item) => item.value === valueCategories
    );
    const selectedComplexity = complexity.find(
      (item) => item.value === valueComplexity
    );

    const dishData = {
      name,
      categoryName: selectedCategory.label,
      description,
      calo,
      protein,
      complexityName: selectedComplexity.label,
      ingredients,
      steps,
    };
    //Tam thoi
    console.log(dishData);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageDish}
            source={require("../../assets/wait.jpg")}
          />
          <TouchableOpacity
            style={styles.textDish}
            onPress={() => {
              console.log("Add Image");
            }}
          >
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
          </TouchableOpacity>
        </View>
        {/* field text */}
        <View style={styles.fieldContainer}>
          {/* field name */}
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Recipe Name</Text>
          <TextInput
            style={styles.fieldName}
            placeholder="Type recipe name..."
            placeholderTextColor={"#C6C6C6"}
            onChangeText={(value) => {
              setName(value);
            }}
          ></TextInput>
          {/* field categories */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Category name
          </Text>
          <Dropdown
            style={[styles.dropdown1]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={category}
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholder={!isFocusCategories ? "Choose Category" : "..."}
            value={valueCategories}
            onFocus={() => setIsFocusCategories(true)}
            onBlur={() => setIsFocusCategories(false)}
            onChange={(item) => {
              setValueCategories(item.value);
              setIsFocusCategories(false);
            }}
          />
          {/* field description */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Description of dish
          </Text>
          <TextInput
            style={styles.fieldDescription}
            placeholder="Describe for your dish"
            placeholderTextColor={"#C6C6C6"}
            onChangeText={(value) => {
              setDescription(value);
            }}
          ></TextInput>
          {/* field nutri */}
          <View style={styles.fieldNutri}>
            <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
              Nutritional content
            </Text>
            <View style={styles.inputNutri}>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 160,
                  paddingLeft: 20,
                }}
                placeholder="Calories"
                placeholderTextColor={"#C6C6C6"}
                onChangeText={(value) => {
                  setCalo(value);
                }}
              ></TextInput>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 150,
                  paddingLeft: 20,
                }}
                placeholder="Protein"
                placeholderTextColor={"#C6C6C6"}
                onChangeText={(value) => {
                  setProtein(value);
                }}
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
                  borderWidth: 0.5,
                  height: 50,
                  borderRadius: 10,
                  borderColor: "#C6C6C6",
                  width: 160,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
                placeholder="Type recipe name..."
                placeholderTextColor={"#C6C6C6"}
              ></TextInput>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
                Complexity
              </Text>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={complexity}
                maxHeight={500}
                labelField="label"
                valueField="value"
                placeholder={!isFocusComplexity ? "Choose" : "..."}
                value={valueComplexity}
                onFocus={() => setIsFocusComplexity(true)}
                onBlur={() => setIsFocusComplexity(false)}
                onChange={(item) => {
                  setValueComplexity(item.value);
                  setIsFocusComplexity(false);
                }}
              />
            </View>
          </View>
          {/* field ingredients */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Ingredients
          </Text>
          {ingredients.map((ingredient, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <TextInput
                style={[styles.fieldName, { flex: 1, position: "relative" }]}
                placeholder="Type ingredients name..."
                placeholderTextColor={"#C6C6C6"}
                value={ingredient}
                onChangeText={(text) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = text;
                  setIngredients(newIngredients);
                }}
              />
              {index > 0 && (
                <TouchableOpacity onPress={() => removeIngredient(index)}>
                  <Icon
                    name="close-outline"
                    size={25}
                    color="#C6C6C6"
                    style={{
                      marginLeft: -30,
                      marginTop: -5,
                      position: "absolute",
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addIngredient}>
            <Text style={styles.buttonText}> + Add Ingredients</Text>
          </TouchableOpacity>

          {/* field steps */}
          <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 10 }}>
            Recipe Steps
          </Text>
          {steps.map((step, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <TextInput
                style={[styles.fieldStep, { flex: 1, position: "relative" }]}
                placeholder={`Type Step ${
                  index + 1
                } of the description for this dish...`}
                placeholderTextColor={"#C6C6C6"}
                value={step}
                onChangeText={(text) => {
                  const newSteps = [...steps];
                  newSteps[index] = text;
                  setSteps(newSteps);
                }}
              />
              {index > 0 && (
                <TouchableOpacity onPress={() => removeStep(index)}>
                  <Icon
                    name="close-outline"
                    size={30}
                    color="#C6C6C6"
                    style={{
                      marginLeft: -40,
                      marginTop: 40,
                      position: "absolute",
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addStep}>
            <Text style={styles.buttonText}> + Add Step</Text>
          </TouchableOpacity>
          {/* Button */}
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => {
              handleSubmit();
            }}
          >
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
    marginTop: 55,
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
    borderWidth: 0.5,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
  },
  fieldDescription: {
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
  },
  button: {
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
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
    borderWidth: 0.5,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
  },
  buttonAdd: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  dropdown: {
    height: 50,
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    width: 150,
    marginTop: 10,
  },
  dropdown1: {
    height: 50,
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  placeholderStyle: {
    fontSize: 15,
    color: "#C6C6C6",
  },
  selectedTextStyle: {
    fontSize: 15,
  },
});
