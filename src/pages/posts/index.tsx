import Heading from "components/Heading";
import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: {
      posts:data
    }
  };
};
export default function Posts({ posts }: any) {
  return (
    <>
      {" "}
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag="h1" text="Posts" />
      <ul>
        {posts?.map(({ id, title }: any) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
