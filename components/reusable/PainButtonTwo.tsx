import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PainButtonTwo = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin:20,
    backgroundColor: "lightgray",
    padding: 10,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    borderRadius: 5,
    boxShadow: "1 2 7 grey",
  },
  text: {
    fontSize: 30,
  },
});

export default PainButtonTwo;
