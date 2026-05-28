import axios from 'axios';

export const http = axios.create({
  timeout: 10000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
});