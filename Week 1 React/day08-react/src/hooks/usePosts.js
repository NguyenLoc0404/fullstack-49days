import { getPosts } from "../service/postService";
import { useQuery } from "@tanstack/react-query";
export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 10 * 1000,
    gcTime: 30 * 1000,
  });
}
