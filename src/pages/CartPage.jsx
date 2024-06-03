import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import Cart from '../components/Cart.jsx';
import { formatCartItems, calculateTotalPrice } from '../utils/cartUtils.js';

const CartPage = ({ route }) => {
  const { cartItems } = route.params;
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    const formattedCart = formatCartItems(cartItems);
    setCartContent(formattedCart);
  }, [cartItems]);
  console.log("Cart PAGE Content:", cartContent);

  return (
    <View style={styles.container}>
      {cartContent && cartContent.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartContent}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Cart
                image={item.image}
                title={`${item.title} x${item.quantity}`}
                price={item.price * item.quantity}
              />
            )}
            contentContainerStyle={styles.flatListContent}
          />
          <Text style={styles.total}>Total: ${calculateTotalPrice(cartContent).toFixed(2)}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.buy}
            >
              <Text style={styles.buyText}>BUY NOW!</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    marginTop: 100,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  buy: {
    backgroundColor: 'green',
    paddingVertical: 5,
    width: '15vw',
    marginBottom: 200,
    borderRadius: '16px',
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  total: {
    fontSize: 20,
    right: 80,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 20,
  },
});

export default CartPage;
