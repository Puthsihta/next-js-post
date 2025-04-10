import { useQuery } from "@tanstack/react-query";
import { PostRepository } from "@/infrastructure/repositories/PostRepository";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: PostRepository.getPosts,
  });
};
