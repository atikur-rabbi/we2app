import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function page() {

  return (
    <Layout>
       <Head>
        <title>Shark Home</title>
      </Head>
      <div>
         <div className="jumbotron">
            <div className="container">
               <h1>Want to Learn About Sharks?</h1>
               <p>Are you ready to learn about sharks?</p>
               <div>
                  <Link className="btn btn-primary btn-lg" href="/shark">
                     Get Shark Info
                  </Link>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h3>Not all sharks are alike</h3>
                  <p>
                     Though some are dangerous, sharks generally do not attack humans.
                     Out of the 500 species known to researchers, only 30 have been
                     known to attack humans.
                  </p>
               </div>
               <div className="col-md-6">
                  <h3>Sharks are ancient</h3>
                  <p>There is evidence to suggest that sharks lived up to 400 million years ago.</p>
               </div>
            </div>
         </div>
        </div>
    </Layout>
  )
}
