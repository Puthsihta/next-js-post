"use client";

import PostsPage from "@/app/[locale]/posts/page";

export default function LocaleLandingPage() {
  // const searchParams = useSearchParams();
  // const postId = searchParams.get("post");

  return (
    <div className="p-6">
      {/* {postId ? <PostDetailPage params={{ id: postId }} /> : <PostsPage />} */}
      <PostsPage />
    </div>
  );
}
