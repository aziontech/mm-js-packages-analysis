"use client";

import { signOut, useSession } from "next-auth/react";
import LogInGoogleButton from "../LogInGoogleButton";

const LogIn = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session?.user ? (
        <div>
          <p>Signed in as {session?.user?.email}</p>
          <div className="flex flex-row justify-center px-4 py-2 rounded bg-slate-200">
            <button className="text-slate-700" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <LogInGoogleButton />
        </div>
      )}
    </>
  );
};

export default LogIn;
