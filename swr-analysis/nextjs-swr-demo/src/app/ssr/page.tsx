import Repo from "@/components/Repo";
import { SWRCustomProvider } from "@/providers/SWRCustomProvider";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "https://api.github.com/repos/aziontech/azion";

async function getData() {
  console.log("Fetching data server side");

  const repoInfo = await fetcher(API);
  return {
    [API]: repoInfo,
  };
}

export default async function Page() {
  const fallback = await getData();
  return (
    <SWRCustomProvider fallback={fallback}>
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
          <h5>Test Router SSR</h5>
          <div className="flex flex-col">
            <h1 className="text-sky-500 text-3xl">
              Content returned from the API {API}
            </h1>
            <Repo urlApi={API} />
          </div>
        </div>
      </main>
    </SWRCustomProvider>
  );
}
