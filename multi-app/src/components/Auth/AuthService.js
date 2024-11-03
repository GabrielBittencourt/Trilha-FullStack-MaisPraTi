import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

// Função para login
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.auth) {
    localStorage.setItem('token', response.data.token); // Armazena o token no LocalStorage
  }
  return response.data;
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Função para fazer requisições autenticadas
export const authenticatedRequest = async (url, method = 'GET', data = null) => {
  const token = localStorage.getItem('token');
  const headers = { 'x-access-token': token };
  return await axios({ url, method, data, headers });
};