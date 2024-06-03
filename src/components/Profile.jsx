import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();

    const handleHomeButtonPress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }}
            />
            <Text style={styles.userInfo}>Digite seu usuário:</Text>
            <TextInput type="text" placeholder="Usuário"></TextInput>
            <Text style={styles.userInfo}>E-mail</Text>
            <TextInput type="email" placeholder="example@example.com"></TextInput>
            <Text style={styles.userInfo}>Descrição</Text>
            <TextInput
                style={[styles.input, styles.maxSize]}
                multiline
                numberOfLines={4}
                placeholder="Descreva o problema..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userInfo: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        width: '80%',
        maxWidth: 300,
    },
    maxSize: {
        maxHeight: 120,
    },
    homeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default Profile;
