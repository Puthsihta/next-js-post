"use client";

import { usePostDetail } from "@/application/usecases/usePostDetail";

export default function PostDetail({ postId }: { postId: number }) {
  //   const { post, comments } = usePostDetail(postId);

  //   if (post.isLoading || comments.isLoading) return <p>Loading...</p>;

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">{post.data?.title}</h1>
      <p className="mb-6">{post.data?.body}</p>

      <h2 className="text-xl font-semibold">Comments</h2>
      <ul className="mt-2 space-y-2">
        {comments.data?.map((comment) => (
          <li key={comment.id} className="border p-2 rounded">
            <p className="text-sm font-medium">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
