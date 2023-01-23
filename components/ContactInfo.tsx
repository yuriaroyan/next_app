import Heading from "./Heading";

const ContactInfo = ({ contact }: any) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  if (!contact) {
    return <Heading tag="h1" text="Empty contact" />;
  }
  return (
    <>
      <Heading tag="h1" text={name} />
      <div>
        <strong>Email:</strong>
        {email}
        <br />
        <strong>Address:</strong>
        {street} {suite} {city} {zipcode}
      </div>
    </>
  );
};
export default ContactInfo;
