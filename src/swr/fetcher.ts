import { Axios } from './axios';

export const fetcher = (url: string, queries?: Object) =>
  Axios.get(url, { params: queries }).then((res) => res.data);
