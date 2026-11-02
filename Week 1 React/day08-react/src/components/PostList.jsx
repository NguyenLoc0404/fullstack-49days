import { getPosts } from "../service/postService";
import { useState, useEffect } from "react";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);
  function postsData() {
    return posts.map((post) => (
      <div key={post.id}>
        <p>title : {post.title}</p>
        <p>body : {post.body}</p>
      </div>
    ));
  }
  async function fetchPosts() {
    setLoading(true);
    setError("");
    try {
      const response = await getPosts();
      console.log("response.data", response.data);
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {loading ? "" : postsData()}
      {error ? <p>Have error {error}</p> : ""}
    </>
  );
}
