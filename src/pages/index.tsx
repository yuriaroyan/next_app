import Heading from "components/Heading";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home" tag="h1" />
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
