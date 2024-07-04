import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from '../Detalhes';

// Componente Filmes que exibe informações de um filme e um modal com detalhes
export default function Filmes({ data }) {
  const [visibleModal, setVisibleModal] = useState(false); // Estado para controlar a visibilidade do modal

  return (
    <View>
      {/* Card que exibe as informações do filme */}
      <View style={styles.card}>
        {/* Título do filme */}
        <Text style={styles.titulo}>{data.nome}</Text>

        {/* Imagem do filme */}
        <Image
          source={{ uri: data.foto }}
          style={styles.capa}
        />

        {/* Área do botão para abrir o modal */}
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal que exibe os detalhes do filme */}
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF', // Cor de fundo do card
    margin: 15, // Margem ao redor do card
    elevation: 2 // Sombra do card (Android)
  },
  capa: {
    height: 250, // Altura da imagem do filme
    zIndex: 2, // Elevação da imagem
  },
  titulo: {
    padding: 15, // Espaçamento interno do título
    fontSize: 18 // Tamanho da fonte do título
  },
  areaBotao: {
    alignItems: 'flex-end', // Alinha o botão à direita
    marginTop: -45, // Margem superior negativa para posicionar o botão sobre a imagem
    zIndex: 9 // Elevação do botão
  },
  botao: {
    width: 100, // Largura do botão
    backgroundColor: '#09A6FF', // Cor de fundo do botão
    opacity: 1, // Opacidade do botão
    padding: 8, // Espaçamento interno do botão
    borderTopLeftRadius: 5, // Arredonda o canto superior esquerdo
    borderBottomLeftRadius: 5 // Arredonda o canto inferior esquerdo
  },
  botaoTexto: {
    color: '#FFF', // Cor do texto do botão
    textAlign: 'center' // Alinha o texto ao centro
  }
});
