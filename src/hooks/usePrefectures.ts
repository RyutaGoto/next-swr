import useSWR from 'swr';
import { fetcher } from '../swr/fetcher';

export const usePrefectures = () => {
  const { data } = useSWR('/prefectures', fetcher);

  return {
    prefectures: !data?.message && data,
    isLoading: !data?.message && !data?.result,
    isError: data?.message && data,
  };
};
