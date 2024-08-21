import axios from 'axios';
// import { getUserLocalStorage } from './contexts/util';

export const Api = axios.create({
  baseURL: 'http://localhost:3333/api',
})

// Api.interceptors.request.use((config) => {
//   const user = getUserLocalStorage();

//   config.headers.Authorization = '';
// }, (error) =>{
//   return Promise.reject(error);
// })