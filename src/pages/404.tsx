import Head from "next/head";
import Heading from "components/Heading";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading tag="h1" text="Something went wrong" />;
    </>
  );
}
