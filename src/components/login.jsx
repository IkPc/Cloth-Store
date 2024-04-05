import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const LoginFunc = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {      
      if (username === "usuario" && password === "senha") {
          navigation.navigate('Home');
          Alert.alert(`Bem vindo ${username}`);
      } else {
          Alert.alert('Nome de usuário ou senha incorretos. Tente novamente.');
          navigation.navigate('Login');
      }
  }
  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuário:</Text>
            <TextInput
                id="usuario"
                placeholder="Seu usuário"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.title}>Senha:</Text>
            <TextInput
                id="senha"
                placeholder="Sua senha"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 42,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 45,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LoginFunc;
