import useAddProduct from "../hooks/useAddProduct";
import { useState } from "react";

export default function AddProduct() {
  const { mutate, isPending, isSuccess, isError, error, data } =
    useAddProduct();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // Boss viết phần còn thiếu ở đây
    e.preventDefault();
    console.log("formData", formData);
    const { title, price, description, category } = formData;
    mutate(
      {
        title,
        price: Number(price),
        description,
        category,
      },
      {
        onSuccess: () => {
          setFormData({
            title: "",
            price: "",
            description: "",
            category: "",
          });
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <p>
        title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </p>
      <p>
        price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </p>
      <p>
        description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </p>
      <p>
        category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </p>
      <p>title hiện tại: {formData.title}</p>
      <p>price hiện tại: {formData.price}</p>
      <p>description hiện tại: {formData.description}</p>
      <p>category hiện tại: {formData.category}</p>
      <button type="submit">Register</button>
      {isPending && <p>Adding product...</p>}
      {isSuccess && <p>Added successfully!</p>}
      {isError && <p>{error.message}</p>}
    </form>
  );
}
