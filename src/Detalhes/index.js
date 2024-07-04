import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Componente Detalhes que exibe informações sobre um filme
export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      
      {/* Container principal do modal */}
      <View style={styles.modalContainer}>

        {/* Botão para voltar */}
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ color: '#FFF', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        {/* Título do filme */}
        <Text style={styles.titulo}>{props.filme.nome}</Text>
        
        {/* Título da sinopse */}
        <Text style={styles.sinopse}>Sinopse:</Text>
        
        {/* Descrição da sinopse */}
        <Text style={styles.descricao}>
          {props.filme.sinopse}
        </Text>
      </View>

    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end' // Posiciona o conteúdo no final da tela
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#121212', // Cor de fundo do modal
    borderTopLeftRadius: 5, // Arredonda o canto superior esquerdo
    borderTopRightRadius: 5 // Arredonda o canto superior direito
  },
  btnVoltar: {
    backgroundColor: '#E52246', // Cor de fundo do botão
    padding: 10, // Espaçamento interno do botão
    borderTopLeftRadius: 5, // Arredonda o canto superior esquerdo
    borderTopRightRadius: 5 // Arredonda o canto superior direito
  },
  titulo: {
    textAlign: 'center', // Centraliza o texto
    color: '#FFF', // Cor do texto
    padding: 10, // Espaçamento interno do título
    fontSize: 28, // Tamanho da fonte
    fontWeight: 'bold' // Negrito
  },
  sinopse: {
    color: '#FFF', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    marginBottom: 8, // Espaçamento inferior
    marginLeft: 10 // Espaçamento à esquerda
  },
  descricao: {
    color: '#FFF', // Cor do texto
    marginLeft: 10, // Espaçamento à esquerda
    marginRight: 10, // Espaçamento à direita
  }
});
