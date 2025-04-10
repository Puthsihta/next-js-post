import { usePosts } from "@/application/usecases/usePosts";
import Link from "next/link";

export default function PostsPage() {
  const { data: posts, isLoading } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-2">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link
              href={`posts/${post.id}`}
              className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
