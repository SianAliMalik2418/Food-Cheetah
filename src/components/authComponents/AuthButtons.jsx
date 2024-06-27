"use client";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

export const GoogleButton = () => {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between border border-gray-400 px-4 py-3 transition-colors ease-in-out hover:bg-[#e9e8e8]"
      onClick={() => signIn("google")}
    >
      <FcGoogle size={20} />

      <span>Continue with Google</span>

      <div></div>
    </div>
  );
};

export const GithubButton = () => {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between border border-gray-400 bg-gray-600 px-4 py-3 font-semibold text-white transition-colors ease-in-out hover:brightness-90"
      onClick={() => signIn("github")}
    >
      <FaGithub size={20} />

      <span>Continue with Github</span>

      <div></div>
    </div>
  );
};

export const LoginButton = () => {
  return (
    <div className="mt-3 flex w-full cursor-pointer items-center justify-center bg-primary-foreground px-4 py-3 text-center font-semibold text-white transition-colors ease-in-out hover:brightness-90">
      <span>Login</span>

      <div></div>
    </div>
  );
};

export const SignUpButton = () => {
  return (
    <div className="mt-2 flex w-full cursor-pointer items-center justify-center border border-primary-foreground px-4 py-3 text-center font-semibold text-primary shadow-xl transition-colors ease-in-out hover:border-transparent hover:bg-[#e9e8e8] hover:brightness-90">
      <span>SignUp</span>

      <div></div>
    </div>
  );
};
