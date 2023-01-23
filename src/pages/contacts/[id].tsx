import ContactInfo from "components/ContactInfo";
import Heading from "components/Heading";
import Head from "next/head";
export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      contact: data
    }
  };
};
export default function Conatact({ contact }: any) {
  return (
    <>
      <Head>
        <title>Jack</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
}
