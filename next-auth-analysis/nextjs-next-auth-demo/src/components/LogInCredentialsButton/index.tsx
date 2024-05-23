"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

const LogInCredentials = () => {
  const handleSignIn = async (formData: FormEvent<HTMLFormElement>) => {
    formData.preventDefault();
    await signIn("credentials", {
      username: formData.currentTarget.email.value,
      password: formData.currentTarget.password.value,
      redirect: true,
    });
  };

  return (
    <div className="w-[380px]">
      <h2 className="text-xl font-semibold text-white text-center py-3">
        With Credentials
      </h2>
      <form onSubmit={(formData) => handleSignIn(formData)}>
        <div className="flex flex-col space-y-2">
          <label className="text-base font-light text-white" htmlFor="email">
            E-mail
            <input
              className="block flex-1 p-3 w-full font-normal rounded-md border text-zinc-800 border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
              required
              placeholder="email"
              name="email"
              type="email"
            />
          </label>
          <label className="text-base font-light text-white" htmlFor="password">
            Password
            <input
              className="block flex-1 p-3 w-full font-normal rounded-md border border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-800 focus:border-zinc-500 focus:ring-zinc-500 text-zinc-800"
              required
              placeholder="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div className="flex justify-center rounded bg-slate-200 mt-4">
          <button
            className="flex flex-row w-full justify-center items-center px-4 py-2 text-slate-900 hover:bg-transparent hover:text-slate-600"
            type="submit"
          >
            Sign in with Credentials
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInCredentials;
