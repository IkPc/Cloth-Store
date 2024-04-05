import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileContent from '../components/Profile.jsx';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ProfileContent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
