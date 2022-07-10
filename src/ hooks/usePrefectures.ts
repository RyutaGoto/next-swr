import useSWR from 'swr';
import { fetcherGet } from '../swr/fetcher';

export const usePrefectures = () => {
  const { data, error } = useSWR('/prefectures', fetcherGet);

  return {
    prefectures: data,
    isLoading: !error && !data,
    isError: error,
  };
};
