import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";


const Header = ({ title }) => {
    const handleButtonPress = () => {
        Alert.alert('Botão pressionado', 'Send');
      };
      
    return(
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'Center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default Header;