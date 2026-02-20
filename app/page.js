"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
       {/* toast */}
        <Toaster  position="top-center" reverseOrder={false} />
      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      {/* Glass Curved Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="flex items-center justify-between px-6 py-4 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-full shadow-lg">

          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-wide">
            Auth<span className="text-purple-400">App</span>
          </h1>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 text-sm font-medium rounded-full 
              bg-gradient-to-r from-purple-600 to-blue-600 
              hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 min-h-screen">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Secure Authentication <br />
          For Modern Applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg"
        >
          Fast, secure and scalable login system with JWT authentication,
          protected routes, and beautiful UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex gap-6 flex-wrap justify-center"
        >
          <Link
            href="/register"
            className="px-8 py-3 rounded-full font-semibold 
            bg-gradient-to-r from-purple-600 to-blue-600 
            hover:opacity-90 transition"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="px-8 py-3 rounded-full font-semibold 
            border border-white/20 
            bg-white/5 backdrop-blur-xl 
            hover:bg-white/10 transition"
          >
            Login
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
