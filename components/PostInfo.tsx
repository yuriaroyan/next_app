import Heading from "./Heading";

const PostInfo = ({ post }: any) => {
  const { title, body } = post;

  if (!post) {
    return <Heading tag="h1" text="Empty post" />;
  }
  return (
    <>
      <Heading tag="h1" text={title} />
      <ul>{body}</ul>
    </>
  );
};
export default PostInfo;
