import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  // Estado para armazenar a lista de filmes
  const [filmes, setFilmes] = useState([]);
  // Estado para gerenciar o carregamento
  const [loading, setLoading] = useState(true);

  // useEffect para carregar os filmes ao montar o componente
  useEffect(() => {
    async function loadFilmes() {
      // Faz uma requisição GET para a API
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);

      // Atualiza o estado com os dados da resposta
      setFilmes(response.data);
      // Define o estado de carregamento como false após carregar os dados
      setLoading(false);
    }

    // Chama a função para carregar os filmes
    loadFilmes();
  }, []); // Array de dependências vazio para executar apenas uma vez

  // Verifica se ainda está carregando
  if (loading) {
    // Retorna um indicador de atividade enquanto os dados estão sendo carregados
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    // Retorna a lista de filmes após os dados serem carregados
    return (
      <View style={styles.container}>
        {/* FlatList para renderizar a lista de filmes */}
        <FlatList 
          data={filmes} // Fonte de dados da lista
          keyExtractor={item => String(item.id)} // Função para extrair a chave de cada item
          renderItem={({ item }) => <Filmes data={item} />} // Função para renderizar cada item da lista
        />
      </View>
    );
  }
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1 // Faz o container ocupar todo o espaço disponível
  }
});
