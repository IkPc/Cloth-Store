import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ScrollView, Modal, Pressable, Image } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/apiService';

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleProductModal = (productId) => {
    setActiveProduct((prevActiveProduct) => {
      if (prevActiveProduct === productId) {
        return null;
      } else {
        return productId;
      }
    });
  };

  const renderProductModal = () => {
    if (!activeProduct) {
      return null;
    }

    const product = products.find((item) => item.id === activeProduct);

    return (
      <Modal
        transparent={true}
        visible={true}
        onRequestClose={() => toggleProductModal(activeProduct)}
      >
        <Pressable onPress={() => toggleProductModal(activeProduct)}>
          <View style={styles.modalBackground}>
            <Pressable>
            <View style={styles.productModalContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: product.images[0] }}
                />
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                  <Text style={styles.nameText}>{product.title}</Text>
                  <Text style={styles.priceText}>{`$ ${product.price}`}</Text>
                </View>
                  <Text style={styles.descriptionText}>{product.description}</Text>
                  <Pressable style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? '#ddd' : '#0a74da',
                      borderRadius: 5,
                      padding: 10,
                      marginTop: 10,
                    }
                  ]} onPress={() => addToCart(product)}>
                    <Text style={styles.addToCartButton}>Add to Cart</Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }
  document.body.style.overflowY = "scroll";
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.productGrid}>
          {products.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => toggleProductModal(item.id)}
              style={styles.productContainer}
            >
              <ProductCard
                name={item.title}
                price={`$ ${item.price}`}
                image={item.images[0]}
                addToCart={() => addToCart(item)}
                style={styles.productCard}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {renderProductModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 100,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  productCard: {
    all: 'unset',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  productContainer: {
    borderRadius: 26,
    marginBottom: 20,
  },
  productModalContainer: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderRadius: 26,
    margin: 20,
    padding: 30,
    paddingVertical: 20,
    paddingBottom: 80,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: '19vw',
    height: '40vh',
    borderRadius: 16,
  },
  imageContainer: {
    height: '20vh',
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: '10vh'
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    right: 10,
  },
  descriptionText: {
    fontSize: 14,
  },
  addToCartButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 100,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    verticalAlign: 'middle',
    alignItems: 'center',
    paddingVertical: 120,
    paddingHorizontal: 300,
    paddingBottom: 500,
  },  
});