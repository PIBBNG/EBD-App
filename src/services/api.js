import axios from 'axios';

// Altere o valor de 'BaseURL' para o seu IP local
const api = axios.create({
    baseURL: 'http://192.168.15.8:8000'
});

export default api;