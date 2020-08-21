import axios from 'axios';
import { getToken } from './storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: { Authorization: getToken() ? `Bearer ${getToken()}` : '' },
});

export default api;
