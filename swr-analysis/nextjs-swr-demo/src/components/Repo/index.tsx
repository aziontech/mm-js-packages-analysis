"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Repo({
  urlApi,
  revalidateOnFocus,
}: {
  urlApi: string;
  revalidateOnFocus?: boolean;
}) {
  const { data, error } = useSWR(urlApi, fetcher, { revalidateOnFocus });

  // there should be no `undefined` state
  console.log("Is data ready?", !!data);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>Repo Name - {data.name}</h1>
      <p>Repo Description - {data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
