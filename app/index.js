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
        <Text style={styles.title}>First ReactNative Project</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your text here"
            onChangeText={handleChange}
          ></TextInput>
          <Button style={styles.button} title="UpdateGoals" onPress={handlePress} />
        </View>
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
    backgroundColor: "grey",
  },
  inputContainer: {
    flexDirection: "row",
    width:'100%',
    paddingBottom:'8',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    borderBottomColor:"#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    justifyContent: "center",
    color: "white",
  },
  inputField: {
    height: 50,
    width: "70%",
    borderColor: "thistle",
    padding:8,
    borderWidth: 1,
    borderRadius: 3,
    marginRight:5,
  },
  button: {
    width: "10%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 3,
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",

  },
  div: {
    // backgroundColor: "blue",
  },
  goalItem: {
    Margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 3,
    fontSize: 20,
  },
});
