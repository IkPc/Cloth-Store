import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ProductCard extends Component {
    render() {
        const { name, price } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>{price}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 10,
        padding: 10,
    },
    product: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productName: {
        fontWeight: "bold",
    },
    productPrice: {
        fontStyle: "italic",
    },
});

export default ProductCard;
