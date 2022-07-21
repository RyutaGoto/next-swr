import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../swr/fetcher';

export const usePrefectures = () => {
  const { data, error } = useSWR('/prefectures', fetcher);
  useEffect(() => {
    console.log('data: ', data);
    console.log('error: ', error);
  }, [data, error]);
  return {
    prefectures: data,
    isLoading: !error && !data,
    isError: error,
  };
};
