import Leyaout from "components/Leyaout";
import Head from "next/head";
import "../../styles/globals.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <Leyaout>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500&family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </Leyaout>
  );
};
export default MyApp;
