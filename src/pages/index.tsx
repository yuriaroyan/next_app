import Heading from "components/Heading";
import Head from "next/head";
import Image from "next/image";
import {socialType} from "@/pages/api/data/social";
import {NextPage} from "next";

export const getStaticProps = async () => {

  const response = await fetch(
    `http://localhost:3000/api/social`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      social: data
    }
  };
};

interface HomeProps {
  social: socialType[]
}

const Home: NextPage<HomeProps> = ({social}) => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home" tag="h1"/>
      <Image
        src="/next.svg"
        width={200}
        height={200}
        alt=""
        placeholder="blur"
        blurDataURL="bluir"
      />
    </>
  );
}
export default Home