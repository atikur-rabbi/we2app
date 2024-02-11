import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next App Template</title>
        <link rel="icon" href="/favicon.png" sizes="any" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css"/>
        <link href='https://fonts.googleapis.com/css?family=Merriweather:400,700' rel='stylesheet' type='text/css'></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
