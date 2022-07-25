import useSWR from 'swr';
import { fetcher } from '../swr/fetcher';

export const useCities = (code: string) => {
  const { data, error } = useSWR(['/cities', { prefCode: code }], fetcher);
  return {
    cities: data,
    isLoading: !error && !data,
    isError: error,
  };
};
