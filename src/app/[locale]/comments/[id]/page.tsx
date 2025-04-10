// import { useCommentDetail } from "@/application/usecases/useCommentDetail";

export default function CommentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const commentId = parseInt(params.id);
  //   const { data: comment, isLoading } = useCommentDetail(commentId);

  //   if (isLoading) return <p>Loading...</p>;
  //   if (!comment) return <p>Comment not found.</p>;

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-2">{comment.name}</h1>
      <p className="mb-2">Email: {comment.email}</p>
      <p>{comment.body}</p> */}
    </div>
  );
}
