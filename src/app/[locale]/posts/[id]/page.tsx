import { usePostDetail } from "@/application/usecases/usePostDetail";
import React from "react";

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { post, comments } = usePostDetail(Number(id));

  if (post.isLoading || comments.isLoading) return <p>Loading...</p>;
  if (!post.data) return <p>Post not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{post.data.title}</h1>
      <p className="mb-4">{post.data.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <ul className="space-y-2">
        {comments.data?.map((comment) => (
          <li key={comment.id} className="border p-2 rounded">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-600">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
