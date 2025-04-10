"use client";

import { usePosts } from "@/application/usecases/usePosts";
import { Link } from "@/i18n/navigation";

export default function PostList() {
  const { data: posts, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="space-y-4">
      {posts?.map((post) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="text-xl text-blue-600 underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
