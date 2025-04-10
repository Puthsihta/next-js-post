// domain/repositories/CommentRepository.ts

import axios from "axios";

export const CommentRepository = {
  getComments: async () => {
    const response = await axios.get("/comments");
    return response.data;
  },

  getComment: async (commentId: number) => {
    const response = await axios.get(`/comments/${commentId}`);
    return response.data;
  },
};
