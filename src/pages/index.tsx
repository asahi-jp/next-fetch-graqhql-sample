import { PostContent } from "../../components/templates/PostContent";
import { Post, GetPostDocument } from "../../generated/graphql";
import client from "../../lib/graphqlClient";

type Props = {
  post: Post;
};

const Content = ({ post }: Props) => {
  return <PostContent post={post} />;
};

export const getServerSideProps = async () => {
  const post = (
    await client.query({
      query: GetPostDocument,
      variables: { id: process.env.ID || "" },
    })
  ).data;

  return {
    props: {
      ...post,
    },
  };
};

export default Content;