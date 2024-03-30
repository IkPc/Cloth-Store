import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }}
                />
                <Text style={styles.userInfo}>Digite seu usuário:</Text>
                <input type="text" placeholder="Usuário"></input>
                <Text style={styles.userInfo}>E-mail</Text>
                <input type="email" placeholder="example@example.com"></input>
                <Text style={styles.userInfo}>Descrição</Text>
                <textarea placeholder="Descreva o problema..."></textarea>
            </View>
        );
    }
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
});

export default Profile;
