import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/Profile.png";
import resume from "../assets/resume.pdf"

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Experience", path: "/about" },
    { name: "Repositories", path: "/projects" },
    { name: "Credentials", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-2xl bg-white/80 dark:bg-[#07090E]/80 border-b border-slate-200 dark:border-white/10 py-3.5 px-4 sm:px-8 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* INTERACTIVE PROFILE LOGO WITH HOVER CARD */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <img
                src={profileImg}
                alt="Harsh Verma Avatar Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 font-display">
                Harsh Verma
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="text-[10px] font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-display">
                Software Engineer @ TCS
              </span>
            </div>
          </Link>

          {/* HOVER DETAILS CARD */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-12 left-0 z-50 w-72 p-4 bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl space-y-2 backdrop-blur-xl pointer-events-none"
              >
                <div className="flex items-center gap-3">
                  <img src={profileImg} alt="Harsh" className="w-12 h-12 rounded-xl object-cover border border-cyan-500/40" />
                  <div>
                    <h4 className="text-xs font-black font-display text-slate-900 dark:text-white">Harsh Verma</h4>
                    <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">Software Engineer @ TCS</p>
                    <p className="text-[10px] text-slate-400">M.Sc. CS (9.83 SGPA) • DEI Agra</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-normal pt-1 border-t border-slate-100 dark:border-white/5">
                  Full-stack engineering (MERN, Python, Java DSA), cloud infrastructure, and acoustic guitar Tab composition.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-[#0E131F] p-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-xs font-bold font-display rounded-full transition-all ${
                  isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-slate-800 rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href={resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-black font-display shadow-md hover:shadow-cyan-500/20 active:scale-95 transition"
          >
            <i className="fas fa-file-arrow-down text-xs"></i> Resume
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-amber-400 flex items-center justify-center text-sm shadow-sm hover:scale-105 active:scale-95 transition"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}