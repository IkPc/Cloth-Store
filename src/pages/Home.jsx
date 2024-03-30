import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ToDoList from '../components/ToDoList';
import { ToDoItem } from '../components/Data';
import Profile from '../components/Profile';
import Buttons from '../components/Buttons';

export default function Home() {
  return (
    <View>
      <Header title="Home"/>
      <Profile />
      <ToDoList list={ToDoItem}/>
      <ProductCard name="Camisa" price="R$ 30"/>
      <Buttons title="Adicionar ao carrinho" color="lime"/>
    </View>
  );
}