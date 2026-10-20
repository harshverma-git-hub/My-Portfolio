import React from "react";
import profileImg from "../assets/About_Profile.jpg";

export default function AboutPage() {
  return (
    <div className="pt-6 pb-16 space-y-10 max-w-4xl mx-auto">
      <section className="bg-white/80 dark:bg-[#0E131F]/80 border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl backdrop-blur-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold font-display uppercase tracking-widest inline-block">
          Professional Qualifications
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
          Software Engineer @ Tata Consultancy Services <br />
          <span className="text-cyan-600 dark:text-cyan-400">Full-Stack Web Engineering & Computer Science Thesis</span>
        </h1>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I am currently employed as a <strong className="text-slate-900 dark:text-white font-bold">Software Engineer at Tata Consultancy Services (TCS)</strong>, specializing in scalable web development, server scripting, and enterprise application delivery.
          </p>
          <p>
            I completed my Master of Science in Computer Science at <strong className="text-slate-900 dark:text-white font-bold">Dayalbagh Educational Institute (DEI), Agra</strong>, achieving an overall academic score of <strong className="text-cyan-600 dark:text-cyan-400 font-bold">9.83 SGPA</strong>. My thesis centered on Explainable AI architectures using transformer embeddings and optimization algorithms.
          </p>
          <p>
            Outside of software engineering, I practice acoustic guitar composition and produce digital creative content for online platforms.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-4">
          <img
            src={profileImg}
            alt="Harsh Verma"
            className="w-16 h-16 rounded-2xl object-cover border border-slate-300 dark:border-white/10 shadow-md"
          />
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white font-display">Harsh Verma</p>
            <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">Software Engineer @ TCS</p>
          </div>
        </div>
      </section>
    </div>
  );
}