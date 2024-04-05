import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CadastroProduto = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <TextInput
            placeholder="Nome do produto"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
        />
        <TextInput
            placeholder="Descrição do produto"
            value={descricao}
            onChangeText={setDescricao}
            style={styles.input}
        />
        <TextInput
            placeholder="Preço do produto"
            value={preco}
            onChangeText={setPreco}
            style={styles.input}
        />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
});

export default CadastroProduto;
