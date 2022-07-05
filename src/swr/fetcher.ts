import { Axios } from './axios';

export const fetcherGet = (url: string) =>
  Axios.get(url).then((res) => res.data);
