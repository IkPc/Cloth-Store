import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, cartItems }) => {
    const navigation = useNavigation();

    const handleHomeButtonPress = () => {
        navigation.navigate('Home');
    };

    const handleCartButtonPress = () => {
        navigation.navigate('CartPage', { cartItems });
    };    

    const handleUserButtonPress = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.header}>
            <Pressable onPress={handleHomeButtonPress}>
                <Image
                    style={styles.homeIcon}
                    source={require('../assets/icons/iconHome.png')}
                />
            </Pressable>
            <Text style={styles.title} adjustsFontSizeToFit>{title}</Text>
            <View style={styles.rightButtons}>
                <Pressable onPress={handleCartButtonPress} style={styles.button}>
                    <Image
                        source={{ uri: 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' }}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonText} adjustsFontSizeToFit>Cart</Text>
                </Pressable>
                <Pressable onPress={handleUserButtonPress} style={styles.button}>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonText} adjustsFontSizeToFit>User</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000',
        width: '100%',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'center',
    },
    homeIcon: {
        marginLeft: 20,
        width: 200, 
        height: 66, 
        resizeMode: 'cover',
        margin: 0,
    },
    rightButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginRight: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#444',
        borderRadius: 5,
    },
    buttonIcon: {
        width: 20,
        height: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5,
    },
});

export default Header;
