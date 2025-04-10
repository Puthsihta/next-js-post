// import { useComments } from "@/application/usecases/useComments";
import Link from "next/link";

export default function CommentsPage() {
  //   const { data: comments, isLoading } = useComments();

  //   if (isLoading) return <p>Loading comments...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Comments</h1>
      <ul className="space-y-2">
        {/* {comments?.map((comment) => (
          <li key={comment.id}>
            <Link
              href={`comments/${comment.id}`}
              className="text-blue-600 hover:underline">
              {comment.name}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
