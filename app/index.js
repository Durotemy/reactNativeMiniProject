import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function Page() {
  const [goals, setGoals] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  const handleChange = (enteredText) => {
    setEnteredText(enteredText);
  };

  const handlePress = () => {
    setGoals((prevGoals) => {
      return [...prevGoals, enteredText];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your text here"
          onChangeText={handleChange}
        ></TextInput>
        <Button title="UpdateGoals" onPress={handlePress} />
        <Text style={styles.subtitle}>My Goals</Text>
        <ScrollView style={styles.div}>
          {goals.map((goal) => (
            <Text style={styles.goalItem} key={goal}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "yellow",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: "red",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  div: {
    backgroundColor: "blue",
  },
  goalItem: {
    color: "blue",
    Margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 3,
    fontSize: 20,
  },
});
