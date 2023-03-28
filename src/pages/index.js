import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
const https = require("https");

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={inter.className}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          magnam aspernatur id, fuga dolore, soluta assumenda itaque laudantium
          odit debitis temporibus maiores facilis. Error perferendis
          perspiciatis illum dignissimos assumenda delectus?
        </p>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`,
    { httpsAgent: agent }
  );
  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
