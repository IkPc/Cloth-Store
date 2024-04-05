import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginFunc from '../components/login';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginFunc navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
