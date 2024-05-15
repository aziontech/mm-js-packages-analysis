"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LogInGoogleButton = () => {
  return (
    <div className="px-4 py-2 rounded bg-slate-200">
      <button
        className="flex flex-row items-center text-slate-900 hover:bg-transparent hover:text-slate-600"
        onClick={() => signIn("google")}
      >
        <Image
          className="mr-2"
          src="https://authjs.dev/img/providers/google.svg"
          alt="google"
          width={20}
          height={20}
        ></Image>
        Sign in with Google
      </button>
    </div>
  );
};

export default LogInGoogleButton;
