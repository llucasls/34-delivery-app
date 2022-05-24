import axios from 'axios';

export const baseURL = 'http://localhost:3001/';

export const api = axios.create({ baseURL });

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = token;
    }

    return config;
  },

  (error) => Promise.reject(error),
);
