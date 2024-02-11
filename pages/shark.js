import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function page() {

  return (
    <Layout>
       <Head>
        <title>Shark info</title>
      </Head>
      <div>
         <div className="jumbotron text-center">
            <h1>Shark Info</h1>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div>
                     <div className="caption">Some sharks are known to be dangerous to humans, though many more are not. The sawshark, for example, is not considered a threat to humans.</div>
                     <img src="images/sawshark.jpg" alt="Sawshark"/>
                  </div>
               </div>
               <div className="col-md-6">
                  <div>
                     <div className="caption">Other sharks are known to be friendly and welcoming!</div>
                     <img src="images/sammy.png" alt="Sammy the Shark"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  )
}
