"use client";
import { useState } from "react";
import { Menu, X, Bell, User } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 
        bg-black/60 backdrop-blur-xl border-r border-white/10
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6 text-2xl font-bold tracking-wide border-b border-white/10">
          Dev<span className="text-gray-400">Dashboard</span>
        </div>

        <nav className="p-4 space-y-2">
          {["Dashboard", "Analytics", "Users", "Reports", "Settings"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 rounded-xl 
                hover:bg-white/10 text-gray-300 hover:text-white 
                transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="flex items-center justify-between 
        bg-black/40 backdrop-blur-xl border-b border-white/10 
        px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-semibold tracking-wide">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-6 text-gray-300">
            <Bell className="cursor-pointer hover:text-white transition" />
            <User className="cursor-pointer hover:text-white transition" />
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-8">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Users", value: "1,245" },
              { title: "Revenue", value: "$12,430" },
              { title: "Orders", value: "320" },
              { title: "Growth", value: "15%" },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl 
                border border-white/10 
                p-6 rounded-2xl 
                hover:bg-white/10 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                transition duration-300"
              >
                <h2 className="text-gray-400 text-sm tracking-wide">
                  {card.title}
                </h2>
                <p className="text-3xl font-bold mt-3">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-6 tracking-wide">
              Recent Activity
            </h2>

            <div className="space-y-4">
              {[
                "New user registered",
                "Payment received",
                "Server restarted",
                "New order placed",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between 
                  border-b border-white/10 pb-3 last:border-0"
                >
                  <p className="text-gray-300">{activity}</p>
                  <span className="text-sm text-gray-500">
                    2 min ago
                  </span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
