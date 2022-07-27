import type { NextPage } from 'next';
import { usePrefectures } from '../../hooks/usePrefectures';
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
          (item: { prefCode: number; prefName: string }) => (
            <li key={item.prefCode}>
              <Link
                href={{
                  pathname: '/prefectures/[code]',
                  query: { code: item.prefCode, name: item.prefName },
                }}
              >
                <a>{item.prefName}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Prefectures;
