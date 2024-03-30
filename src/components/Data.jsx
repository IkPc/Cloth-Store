import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista:</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>Item 1;</Text>
        <Text style={styles.listItem}>Item 2;</Text>
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
