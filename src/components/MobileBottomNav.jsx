import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Overview", path: "/", icon: "fa-chart-pie" },
    { name: "About", path: "/about", icon: "fa-user-tie" },
    { name: "Builds", path: "/projects", icon: "fa-code" },
    { name: "Badges", path: "/certificates", icon: "fa-certificate" },
    { name: "Contact", path: "/contact", icon: "fa-envelope" },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/90 dark:bg-[#0E131F]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl p-1.5 shadow-2xl flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
                isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <div className={`text-sm transition-transform ${isActive ? "scale-110" : ""}`}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <span className={`text-[9px] font-bold font-display tracking-tight mt-1 ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400"}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobileNavGlow"
                  className="absolute inset-0 bg-cyan-500/10 rounded-xl -z-10 border border-cyan-500/20"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}