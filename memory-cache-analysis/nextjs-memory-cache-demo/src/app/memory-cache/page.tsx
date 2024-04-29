import Users from "@/components/Users";
import Image from "next/image";
import Link from "next/link";
import memoCache from "memory-cache";

async function getUser(id: string) {
  const cacheKey = `users_${id}`;
  const cachedUsers = memoCache.get(cacheKey);
  if (cachedUsers) {
    return JSON.parse(cachedUsers);
  }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const user = await response.json();
  const dataCache = {
    ...user,
    requestId: response.headers.get("age"),
  };
  memoCache.put(cacheKey, JSON.stringify(dataCache));

  return dataCache;
}

export default async function Page() {
  const user = await getUser("1");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-9">
      <div className="self-start p-2 border border-solid border-white cursor-pointer rounded">
        <Link href="/" prefetch={false}>
          Go to /home
        </Link>
      </div>
      <div className="relative flex flex-col space-y-5 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-xl">memory-cache@^0.2.0 Analysis</h1>
      </div>
      <div className="flex flex-col space-y-5 justify-center items-center">
        <Users data={user} />
      </div>
    </main>
  );
}
