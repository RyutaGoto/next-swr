import axios from 'axios';

const token = `${process.env.NEXT_PUBLIC_RESAS_API_KEY}`;

export const Axios = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': `${token}`,
  },
});
