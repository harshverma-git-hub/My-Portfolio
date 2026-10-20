import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#07090E] text-slate-500 py-10 border-t border-slate-200 dark:border-white/10 mt-20 pb-28 md:pb-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="text-slate-900 dark:text-white font-extrabold text-base font-display">Harsh Verma</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Software Engineer @ Tata Consultancy Services</p>
        </div>

        <div className="flex gap-5 text-xs font-bold font-display text-slate-600 dark:text-slate-400">
          <Link to="/" className="hover:text-cyan-600 transition">Overview</Link>
          <Link to="/about" className="hover:text-cyan-600 transition">Experience</Link>
          <Link to="/projects" className="hover:text-cyan-600 transition">Repositories</Link>
          <Link to="/contact" className="hover:text-cyan-600 transition">Contact</Link>
        </div>

        <p className="text-[11px] text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Harsh Verma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}