"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Router } from "next/router";
import { useState } from "react";
import toast ,{Toaster} from "react-hot-toast";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

// api call for register

const handleSubmit = async (e) =>{
  e.preventDefault();

  try {
     const res = await api.post('/auth/register', form);
     toast.success(res.data.message);
     Router.push('/login')    
  } catch (error) {
    console.log(error);
    toast.error(error)
    
  }
}

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
              required
              className="w-full bg-transparent border border-white/20 
              rounded-xl px-4 py-3 focus:outline-none 
              focus:border-purple-500 focus:ring-1 
              focus:ring-purple-500 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-purple-600 to-blue-600 
            hover:opacity-90 transition shadow-lg"
          >
            Register
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
