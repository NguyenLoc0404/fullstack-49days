import Button from "./components/Button";
export default function ProductCard({ product, children }) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);
  return (
    <div className="product-card-div">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.rating + ` (${product.reviewCount})`}</p>
      <p>{formattedPrice}</p>
      <p>{product.description}</p>
      <Button>Add to Cart</Button>
      {children}
    </div>
  );
}
