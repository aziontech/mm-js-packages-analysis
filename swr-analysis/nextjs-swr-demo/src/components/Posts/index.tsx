"use client";
import useSWR from "swr";

const fetcher = async (url: string, postId: string) => {
  const res = await fetch(`${url}/${postId}`);
  return {
    data: await res.json(),
    time: new Date().toLocaleTimeString(),
  };
};

export default function Posts({
  postId,
  revalidateOnFocus = true,
}: {
  postId: string;
  revalidateOnFocus?: boolean;
}) {
  const { data: results, isValidating } = useSWR(
    [`https://jsonplaceholder.typicode.com/posts`, postId],
    fetcher,
    {
      revalidateOnFocus: revalidateOnFocus,
    }
  );
  return (
    <>
      {isValidating ? (
        <p className="text-blue-500">Loading Post {postId}</p>
      ) : (
        <div className="w-2/3">
          <p>Time {results?.time}</p>
          <h1 className="font-bold text-2xl">Post id {postId}</h1>
          <p className="font-light text-orange-600">{results?.data?.body}</p>
        </div>
      )}
    </>
  );
}
