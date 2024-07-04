//https://sujeitoprogramador.com/

//r-api/?api=filmes

import axios from "axios";

// Cria uma instância do axios com uma configuração padrão
const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/' // URL base para todas as requisições feitas com essa instância
});

// Exporta a instância do axios para ser utilizada em outras partes da aplicação
export default api;