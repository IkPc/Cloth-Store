import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const Cart = ({ image, title, price }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };
    console.log("Image URL:", image);


    return (
        <View style={styles.container}>
            {image && !imageError ? (
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    onError={handleImageError}
                />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </View>
    );
};

Cart.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
};

Cart.defaultProps = {
    image: '',
    title: 'Untitled',
    price: 0.0
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingBottom: 5,
        marginHorizontal: 300,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    placeholder: {
        width: 50,
        height: 50,
        marginRight: 10,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: 'white',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
});

export default Cart;
