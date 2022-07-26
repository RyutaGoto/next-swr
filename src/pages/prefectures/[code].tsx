import type { NextPage } from 'next';
import { useCities } from '../../hooks/useCities';
import { useRouter } from 'next/router';

const City: NextPage = () => {
  const router = useRouter();
  const { cities, isError, isLoading } = useCities(router.query.code as string);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>{router.query.name}の都市一覧</h1>
      <ul>
        {cities.result.map(
          (item: {
            bigCityFlag: '0' | '1' | '2' | '3';
            cityCode: string;
            cityName: string;
            prefCode: number;
          }) => (
            <li key={item.cityCode}>{item.cityName}</li>
          )
        )}
      </ul>
    </>
  );
};

export default City;
