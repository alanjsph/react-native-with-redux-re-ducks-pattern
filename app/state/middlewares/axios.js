import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
  });

export default client;