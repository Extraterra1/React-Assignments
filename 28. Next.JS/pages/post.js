import axios from "axios";

const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>POST ID IS {id}</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            Written by: <strong>{c.name}</strong> ({c.email}). {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { id: query.id, comments: data };
};

export default Post;
