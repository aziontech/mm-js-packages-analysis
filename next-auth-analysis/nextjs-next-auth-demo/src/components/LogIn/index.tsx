"use client";

import { signOut, useSession } from "next-auth/react";
import LogInGoogleButton from "../LogInGoogleButton";
import LogInCredentials from "../LogInCredentialsButton";
import Image from "next/image";

const LogIn = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session?.user ? (
        <div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white text-center py-3">
              Welcome!
            </h2>
            <div className="flex items-center">
              {session?.user?.image ? (
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  alt="image profile"
                  width={40}
                  height={40}
                />
              ) : (
                <div className="flex items-center justify-center rounded-full bg-slate-400 w-10 h-10">
                  J
                </div>
              )}
              <div className="flex flex-col">
                <p className="ml-2">{session?.user?.name}</p>
                <p className="ml-2 text-gray-400 text-xs">
                  {session?.user?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center px-4 py-2 rounded bg-slate-200 mt-5">
            <button className="text-slate-700" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <LogInGoogleButton />
          <LogInCredentials />
        </div>
      )}
    </>
  );
};

export default LogIn;
