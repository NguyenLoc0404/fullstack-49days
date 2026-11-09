import usePosts from "../hooks/usePosts";
export default function PostListQuery() {
  const { data, isPending, refetch, isFetching, isError, error } = usePosts();

  if (isError)
    return (
      <>
        <p>{error.message}</p>
        {postsData()}
      </>
    );

  if (isFetching && !isPending)
    return (
      <>
        <p>Updating...</p>
        {postsData()}
      </>
    );

  if (isPending) return <p>Loading...</p>;

  function renderPosts() {
    return data?.data?.posts.map((post) => (
      <div key={post.id}>
        <p>title : {post.title}</p>
        <p>body : {post.body}</p>
      </div>
    ));
  }
  function postsData() {
    return (
      <div>
        {data ? <button onClick={refetch}>Refresh Posts</button> : ""}
        {data ? renderPosts() : ""}
      </div>
    );
  }
  return <>{postsData()}</>;
}
