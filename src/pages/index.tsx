import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import { fetcherGet } from '../swr/fetcher';

const Home: NextPage = () => {
  const { data, error } = useSWR('/prefectures', fetcherGet);
  return <div className={styles.container}></div>;
};

export default Home;
