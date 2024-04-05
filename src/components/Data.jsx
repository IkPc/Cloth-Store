import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart:</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>Shirt</Text>
        <Text style={styles.listItem}>Pants</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    marginLeft: 20,
    marginTop: 5,
  },
  listItem: {
    fontSize: 16,
  },
});

export default ToDoItem;
