import type { NextPage } from 'next';
import { usePrefectures } from '../hooks/usePrefectures';
import Link from 'next/link';

const Prefectures: NextPage = () => {
  const { prefectures, isLoading, isError } = usePrefectures();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>都道府県一覧</h1>
      <ul>
        {prefectures.result.map(
          (item: {
            prefCode: number | null | undefined;
            prefName: string | null | undefined;
          }) => (
            <li key={item.prefCode}>{item.prefName}</li>
          )
        )}
      </ul>
    </>
  );
};

export default Prefectures;
