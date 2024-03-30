import React from 'react';
import { Text, Alert, Pressable } from 'react-native';

const Button = ({ title, color }) => {
  const handlePress = () => {
    Alert.alert('Botão pressionado', title);
  };

  return (
    <Pressable
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      }}
      onPress={handlePress}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
};

export default Button;