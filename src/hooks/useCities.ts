import useSWR from 'swr';
import { fetcher } from '../swr/fetcher';

export const useCities = (code: string) => {
  const { data } = useSWR(['/cities', { prefCode: code }], fetcher);
  console.log('data: ', data);
  return {
    cities: !data?.message && data,
    isLoading: !data?.message && !data?.result,
    isError: data?.message && data,
  };
};
