import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

const RecipeTab = ({ dishId }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/steps/${dishId}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const sortedSteps = response.data.sort(
            (a, b) => a.stepNumber - b.stepNumber
          );
          setSteps(sortedSteps);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Error fetching steps:", error);
      });
  }, [dishId]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {steps.map((step, index) => (
          <View key={step.recipeStepsId} style={styles.step}>
            <View style={styles.iconStep}>
              <Icon name="checkmark-circle" color={"#000"} size={25} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}> Step {step.stepNumber}</Text>
              {step.description.split(". ").map((sentence, index) => (
                <View key={index} style={styles.instructionContainer}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.instruction}>{sentence.trim()}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: (height + 50) / 3,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  iconStep: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: -5,
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
  },
  stepContent: {
    width: width - 100,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  instruction: {
    fontSize: 15,
    marginBottom: 10,
    lineHeight: 28,
  },
});
