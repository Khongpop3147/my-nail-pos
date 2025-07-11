"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        signIn("credentials", {
          username: data.get("username"),
          password: data.get("password"),
        });
      }}
      className="max-w-sm mx-auto space-y-4"
    >
      <div>
        <label>Username</label>
        <input name="username" required className="w-full" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" required className="w-full" />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white">
        Login
      </button>
    </form>
  );
}
