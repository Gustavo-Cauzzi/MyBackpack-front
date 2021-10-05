import axios from 'axios';

const token = localStorage.getItem('@MyBackpack:token');

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: token
        ? { Authorization: `Bearer ${token}` }
        : {},
});

export default api;
