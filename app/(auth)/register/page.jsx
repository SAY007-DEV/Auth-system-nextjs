"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // api call for register
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
     
      const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + "auth/register", form);
      toast.success(res.data.message || "Registration successful!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">

      {/* Background Glow */}
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
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-gray-400 hover:text-white 
          transition flex items-center gap-2"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Join our platform
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 py-3 focus:outline-none 
              focus:border-purple-500 focus:ring-1 
              focus:ring-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 py-3 focus:outline-none 
              focus:border-purple-500 focus:ring-1 
              focus:ring-purple-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 py-3 focus:outline-none 
              focus:border-purple-500 focus:ring-1 
              focus:ring-purple-500 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.03 }}
            whileTap={{ scale: isLoading ? 1 : 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-purple-600 to-blue-600 
            hover:opacity-90 transition shadow-lg
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link href='/login' className="text-purple-400 hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
