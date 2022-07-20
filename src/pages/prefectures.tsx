import type { NextPage } from 'next';
import { usePrefectures } from '../hooks/usePrefectures';

const Prefectures: NextPage = () => {
  const { prefectures, isLoading, isError } = usePrefectures();

  return <></>;
};

export default Prefectures;
