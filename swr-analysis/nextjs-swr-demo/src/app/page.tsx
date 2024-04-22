import Posts from "@/components/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-9">
      <div className="relative flex flex-col space-y-5 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-xl">SWR@^1.2.1 Analysis</h1>
      </div>
      <div className="flex flex-col space-y-5 justify-center items-center">
        <h5>
          Content returned from the API{" "}
          <span className="font-bold">
            https://jsonplaceholder.typicode.com/comments
          </span>{" "}
          using the SWR Hooks library for data fetching.
        </h5>
        <div className="flex flex-col">
          <h1 className="text-sky-500 text-3xl">Revalidate On Focus "true"</h1>
          <Posts postId="1" revalidateOnFocus={true} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sky-500 text-3xl">Revalidate On Focus "false"</h1>
          <Posts postId="3" revalidateOnFocus={false} />
        </div>
      </div>
    </main>
  );
}
