"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // TODO: Call your reset password API here
    console.log("New password:", password);

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl shadow-2xl 
        p-8 text-white"
      >
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-gray-400 hover:text-white 
          transition flex items-center gap-2"
        >
          ← Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">
          Reset Password
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Enter your new password below
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* New Password */}
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 pt-6 pb-2 focus:outline-none 
              focus:border-purple-500 focus:ring-1 
              focus:ring-purple-500 transition peer"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-gray-500 
            transition-all">
              New Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 pt-6 pb-2 focus:outline-none 
              focus:border-blue-500 focus:ring-1 
              focus:ring-blue-500 transition peer"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-gray-500 
            transition-all">
              Confirm Password
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-purple-600 to-blue-600 
            hover:opacity-90 transition shadow-lg"
          >
            Reset Password
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}
