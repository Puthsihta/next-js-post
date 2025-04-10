import PostDetail from "@/presentation/components/PostDetail";

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-6">
      <PostDetail postId={parseInt(params.id)} />
    </main>
  );
}
