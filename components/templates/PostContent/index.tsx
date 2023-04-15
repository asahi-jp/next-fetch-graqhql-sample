import { Post } from "../../../generated/graphql";

type Props = {
  post: Post;
};

export const PostContent = ({ post }: Props) => {
  const { title, content } = post;
  return (
    <div>
      <p>title: {title}</p>
      <p>content: {content}</p>
    </div>
  );
};