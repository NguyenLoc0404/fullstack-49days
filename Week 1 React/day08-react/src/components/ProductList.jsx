import useProducts from "../hooks/useProducts";
export default function ProductList() {
  const { data, isPending, refetch, isFetching, isError, error } = useProducts();

  if (isError)
    return (
      <>
        <p>{error.message}</p>
        {productsData()}
      </>
    );

  if (isFetching && !isPending)
    return (
      <>
        <p>Updating...</p>
        {productsData()}
      </>
    );

  if (isPending) return <p>Loading...</p>;

  function renderProducts() {
    return data?.data?.products?.map((product) => (
      <div key={product.id}>
        <p>title : {product.title}</p>
        <p>price : {product.price}</p>
        <p>description : {product.description}</p>
        <p>category : {product.category}</p>
      </div>
    ));
  }

  function productsData() {
    return (
      <div>
        {data ? <button onClick={refetch}>Refresh Products</button> : ""}
        {data ? renderProducts() : ""}
      </div>
    );
  }
  return <>{productsData()}</>;
}
