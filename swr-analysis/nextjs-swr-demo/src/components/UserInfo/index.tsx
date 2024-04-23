"use client";

import useSWR from "swr";

export default function UserInfo({ urlApi }: { urlApi: string }) {
  const { data, error } = useSWR(urlApi);

  // there should be no `undefined` state
  console.log("Is data ready?", !!data);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>User Name - {data?.name}</h1>
      <p>Username - {data?.username}</p>
      <p>Email - {data?.email}</p>
    </div>
  );
}
