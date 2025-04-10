"use client";
import { useQuery } from "@tanstack/react-query";
import { PostRepository } from "@/infrastructure/repositories/PostRepository";

export const usePostDetail = (postId: number) => {
  const post = useQuery({
    queryKey: [`posts`, postId],
    queryFn: () => PostRepository.getPost(postId),
    enabled: !!postId,
  });

  const comments = useQuery({
    queryKey: [`comments`, postId],
    queryFn: () => PostRepository.getComments(postId),
  });

  return { post, comments };
};
