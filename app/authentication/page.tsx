"use client";

import { useState } from "react";
import Image from "next/image";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      const endpoint = isLogin ? "/api/login" : "/api/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          isLogin
            ? {
                email: formData.email,
                password: formData.password,
              }
            : formData,
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log(data);

      alert(isLogin ? "Login successful!" : "Account created successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-[#7F57F9] via-black to-black text-white flex items-center justify-center px-6 py-12 font-michroma overflow-hidden">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-28 h-28 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(127,87,249,0.35)]">
            <div className="absolute inset-0 rounded-2xl bg-[#7F57F9]/20 blur-2xl"></div>

            <Image
              src="/images/logo1.png"
              alt="VisionID Logo"
              width={90}
              height={90}
              className="object-contain relative z-10"
            />
          </div>
        </div>

        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-[0.2em]">
            {isLogin ? "LOGIN" : "REGISTER"}
          </h1>

          <p className="text-gray-400 text-sm">
            {isLogin
              ? "Access your VisionID account"
              : "Create your VisionID account"}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#7F57F9] transition"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#7F57F9] transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#7F57F9] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7F57F9] hover:bg-[#6a46e6] transition py-3 rounded-lg text-sm font-medium mt-2 disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-400">
          {isLogin ? (
            <p>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-white hover:text-[#7F57F9] transition"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-white hover:text-[#7F57F9] transition"
              >
                Login
              </button>
            </p>
          )}
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          Powered by{" "}
          <span className="text-gray-300">NeuroBridge Technologies</span>
        </div>
      </div>
    </main>
  );
}

export default Authentication;
