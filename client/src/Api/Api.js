import axios from 'axios';

export const Api = axios.create({ baseURL: 'http://localhost:5000/products' });

export const azios = axios.create({ baseURL: 'http://localhost:5000/cart' });
azios.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }
  return req;
});

export const users = axios.create({ baseURL: 'http://localhost:5000/user' });
users.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }
  return req;
});
