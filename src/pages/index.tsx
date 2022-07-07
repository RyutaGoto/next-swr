import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import { fetcherGet } from '../swr/fetcher';

const Home: NextPage = () => {
  const { data, error } = useSWR('/prefectures', fetcherGet);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div className={styles.container}>{data}!</div>;
};

export default Home;
