import React from 'react';
import Header from './src/components/Header';
import ProductCard from './src/components/ProductCard';
import ToDoList from './src/components/ToDoList';
import Profile from './src/components/Profile';
import Buttons from './src/components/Buttons';
import { Alert } from 'react-native';

export default function Home() {
    const handleButtonPress = () => {
        Alert.alert("Botão pressionado");
    }
  return (
    <View>
      <Header title="Home" onPress={handleButtonPress}/>
      <ToDoList />
      <ProductCard name="Camisa" price="R$ 30"/>
      <Profile />
      <Buttons />
    </View>
  );
}