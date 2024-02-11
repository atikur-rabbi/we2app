import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const Event = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Head>
        <title>{slug} page</title>
      </Head>
      <h1>{slug}</h1>
    </Layout>
  );
};

export default Event;
