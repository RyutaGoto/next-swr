import { Axios } from './axios';

interface fetcherGetProps {
  url: string;
  token?: string;
}

export const fetcherGet = ({ url, token }: fetcherGetProps) =>
  token
    ? Axios.get(url, {
        headers: { 'X-API-KEY': token },
      }).then((res) => res.data)
    : Axios.get(url).then((res) => res.data);
