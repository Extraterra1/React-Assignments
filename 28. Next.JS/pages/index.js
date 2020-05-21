import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => (
  <div>
    <h1>Index Page</h1>
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
            <a>{p.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return { posts: data };
};

export default Index;
