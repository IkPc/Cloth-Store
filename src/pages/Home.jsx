import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import Cart from '../components/Cart';
import { ToDoItem } from '../components/data';
import Buttons from '../components/Buttons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Cart list={ToDoItem}/>
      <ProductCard name="Camisa Vans" price="R$ 30"/>
      <Buttons title="Adicionar ao carrinho" color="green"/>
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