import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Eg:
const steps = [
  {
    id: "1",
    title: "Step 1",
    instructions: [
      "Bring a large pot of water to a boil, add a pinch of salt.",
      "Add pasta to boiling water and cook until al dente (according to package instructions).",
      "Once cooked, drain the pasta in a colander and rinse with cold water to stop the cooking process.",
    ],
  },
  {
    id: "2",
    title: "Step 2",
    instructions: ["In a large skillet, heat olive oil over medium heat."],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={steps}
        renderItem={({ item }) => (
          <View style={styles.step}>
            <View style={styles.iconStep}>
              <Icon name="checkmark-circle" color={"#000"} size={25} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              {item.instructions.map((instruction, index) => (
                <Text key={index} style={styles.instruction}>
                  {`\u2022 ${instruction}`}
                </Text>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
  checkMark: {
    color: "#fff",
    fontSize: 18,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 30,
  },
});
