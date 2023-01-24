import Heading from "components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      contacts: data
    }
  };

};

export default function Conatacts({contacts}: any) {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Cotacts list" tag="h1"/>
      <ul>
        {contacts.map(({id, name, email}: any) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
            {/* {email} */}
          </li>
        ))}
      </ul>
    </>
  );
}
