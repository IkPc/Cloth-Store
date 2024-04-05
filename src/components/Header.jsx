import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation();

    const handleHomeButtonPress = () => {
        navigation.navigate('Home');
    };

    const handleCartButtonPress = () => {
        navigation.navigate('Cart');
    };

    const handleUserButtonPress = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.header}>
            <Text onPress={handleHomeButtonPress} style={styles.title}>{title}</Text>
            <Pressable onPress={handleCartButtonPress} style={styles.button}>
                <Image
                    source={{ uri: 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' }}
                    style={{ width: 20, height: 20 }}
                />
                <Text style={styles.buttonText}>Cart</Text>
            </Pressable>
            <Pressable onPress={handleUserButtonPress} style={styles.button}>
                <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }}
                    style={{ width: 20, height: 20 }}
                />
                <Text style={styles.buttonText}>User</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#007bff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#007bff',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default Header;
