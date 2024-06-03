import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const ProductCard = ({ name, price, image, addToCart }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.rowWrapper}>
          <Text style={styles.productPrice}>{price}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.addToCartButton,
              pressed && styles.addToCartButtonPressed
            ]}
            onPress={addToCart}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 26,
    margin: '0.1vw',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '20vw',
    height: '55vh',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
  },
  image: {
    width: '19vw',
    height: '40vh',
    marginBottom: 10,
    borderRadius: 16,
  },
  productDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    height: 60,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  rowWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    Bottom: '2vh'
  },
  productPrice: {
    top: 14,
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 30,
    justifyContent: 'flex-start',
    color: 'green',
  },
  addToCartButton: {
    backgroundColor: '#0a74da',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  addToCartButtonPressed: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductCard;
