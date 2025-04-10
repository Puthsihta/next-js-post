import PostList from "@/presentation/components/PostList";

export default function PostsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <PostList />
    </main>
  );
}
