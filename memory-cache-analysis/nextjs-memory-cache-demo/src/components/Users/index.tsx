"use client";

export default function Users({ data }: { data: any }) {
  return (
    <div>
      <h1>User Name - {data?.name}</h1>
      <p>Username - {data?.username}</p>
      <p>Email - {data?.email}</p>
      <p>Request ID - {data?.requestId}</p>
    </div>
  );
}
