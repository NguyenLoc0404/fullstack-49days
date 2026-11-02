import axiosClient from "../api/axiosClient";
export function getPosts() {
  return axiosClient.get("/posts");
}

export function getProductsByCategory(category, limit) {
  return axiosClient.get("/products", {
    params: {
      category,
      limit,
    },
  });
}
