"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

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
          Forgot Password
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Enter your email to reset password
        </p>

        <form className="space-y-6">

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/20 
            rounded-xl px-4 py-3 focus:outline-none 
            focus:border-blue-500 focus:ring-1 
            focus:ring-blue-500 transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:opacity-90 transition shadow-lg"
          >
            Send Reset Link
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Remember your password?{" "}
          <Link href='/login' className="text-blue-400 hover:underline cursor-pointer">
            Back to Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
