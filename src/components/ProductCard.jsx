import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ProductCard extends Component {
    render() {
        const { name, price } = this.props;
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{ uri: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hda/h84/h00/h00/11512305188894/4703101590001U-01-BASEIMAGE-Midres.jpg" }}
                />
                <View style={styles.productDetails}>
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
    image: {
        width: 300,
        height: 400,
        marginBottom: 10,
    },
    productDetails: {
        justifyContent: "center",
        alignItems: "center",
    },
    productName: {
        fontWeight: "bold",
        fontSize: 18,
    },
    productPrice: {
        fontStyle: "italic",
        fontSize: 16,
    },
});

export default ProductCard;
