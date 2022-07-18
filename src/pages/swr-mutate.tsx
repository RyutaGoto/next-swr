import type { NextPage } from 'next';
import useSWR from 'swr';

const getCookieVal = (key: string) => {
  let cookieVal = ((document.cookie + ';').match(key + '=([^¥S;]*)') || [])[1];
  if (!cookieVal) {
    cookieVal = '[Empty]';
  }
  console.log('cookieval: ', cookieVal);
  return cookieVal;
};

const clearCookieVal = (key: string) => {
  document.cookie = key + '=; max-age=0';
};

const SWRMutate: NextPage = () => {
  const { data, mutate } = useSWR('foo', getCookieVal, {
    revalidateOnFocus: false,
  });

  const updateCookieVal = (key: string, val: string) => {
    document.cookie = key + '=' + encodeURIComponent(val);
    mutate(val); // bound mutation
    // mutate('foo') // refetch mutation
  };

  return (
    <div>
      <h2>{data}</h2>
      <button onClick={() => updateCookieVal('foo', 'bar')}>Set Cookie</button>
      <button onClick={() => clearCookieVal('foo')}>Clear Cookie</button>
    </div>
  );
};

export default SWRMutate;
