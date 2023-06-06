import "@/styles/globals.css";
import MainLayout from "@/src/components/Layout/MainLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events at several cities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
