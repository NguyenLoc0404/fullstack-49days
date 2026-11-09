import { getListProduct } from "../service/productService";
import { useQuery } from "@tanstack/react-query";
export default function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getListProduct,
  });
}
