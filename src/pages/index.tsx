import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { usePrefectures } from '../ hooks/usePrefectures';

const Home: NextPage = () => {
  const { prefectures, isLoading, isError } = usePrefectures();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div className={styles.container}>{JSON.stringify(prefectures)}</div>;
};

export default Home;
