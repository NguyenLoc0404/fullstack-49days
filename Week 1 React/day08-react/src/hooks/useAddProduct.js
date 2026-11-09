import { addNewProduct } from "../service/productService";
import { useMutation,useQueryClient } from "@tanstack/react-query";
export default function useAddProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
}
