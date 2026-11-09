import axiosClient from "../api/axiosClient";
export function getListProduct() {
  return axiosClient.get("/products");
}

export function addNewProduct(product) {
  return axiosClient.post("/products/add", product);
}
