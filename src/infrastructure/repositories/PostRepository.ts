import axiosInstance from "../api/axiosInstance";
import { Post } from "@/domain/models/Post";
import { Comment } from "@/domain/models/Comment";

export const PostRepository = {
  async getPosts(): Promise<Post[]> {
    const res = await axiosInstance.get("/posts");
    return res.data;
  },
  async getPost(id: number): Promise<Post> {
    const res = await axiosInstance.get(`/posts/${id}`);
    return res.data;
  },
  async getComments(postId: number): Promise<Comment[]> {
    const res = await axiosInstance.get(`/comments`, {
      params: { postId },
    });
    return res.data;
  },
};
