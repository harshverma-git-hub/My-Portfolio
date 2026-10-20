import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EssentialRealTimeWidgets from "../components/EssentialRealTimeWidgets";
import CollageSwapGallery from "../components/3DCollageSwapGallery";
import resume from "../assets/resume.pdf";
import avatarImg from "../assets/Harsh_Avatar.png";
import profileImg from "../assets/Profile.png";

export default function Home({ visitorName, visitorEmail }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="pt-6 pb-20 space-y-16">
      {/* EXECUTIVE HERO SECTION */}
      <section className="bg-white/80 dark:bg-[#0E131F]/90 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="space-y-5 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-black font-display">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
              Software Engineer @ Tata Consultancy Services
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight">
              Crafting Scalable Enterprise Systems & Elegant Digital Solutions.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome, <strong className="text-cyan-600 dark:text-cyan-400 font-bold">{visitorName || "Distinguished Visitor"}</strong>. I am <strong className="text-slate-900 dark:text-white font-bold">Harsh Verma</strong>, a Software Engineer at Tata Consultancy Services, holding a Master of Science in Computer Science (9.83 SGPA) from Dayalbagh Educational Institute. Specialist in MERN stack development, cloud deployment, and algorithmic systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-slate-800 text-white font-black font-display text-xs shadow-xl hover:shadow-cyan-500/20 active:scale-95 transition flex items-center justify-center gap-2"
              >
                View Selected Work <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 font-black font-display text-xs hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95 transition flex items-center justify-center gap-2"
              >
                Download Resume <i className="fas fa-file-arrow-down text-[10px]"></i>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 text-slate-500 dark:text-slate-400 text-lg">
              <a href="https://github.com/harshverma-git-hub" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/harsh-verma-profile" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://leetcode.com/u/harshverma-exe/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition" title="LeetCode"><i className="fas fa-code"></i></a>
              <a href="https://www.youtube.com/@hvtentertainment1876" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition" title="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* 3D FLIP PROFILE PHOTO FRAME */}
          <div className="relative shrink-0">
            <div className="text-center mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1 font-display">
                <i className="fas fa-hand-pointer text-cyan-500"></i> Tap photo to flip 3D view
              </span>
            </div>

            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-56 h-56 sm:w-64 sm:h-64 cursor-pointer perspective-1000 group"
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full relative transform-style-3d shadow-2xl rounded-3xl"
              >
                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-white/10 bg-slate-900 backface-hidden">
                  <img
                    src={profileImg}
                    alt="Harsh Verma Studio Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 text-center">
                    <p className="text-xs font-bold text-white font-display">Harsh Verma</p>
                    <p className="text-[9px] text-cyan-400 font-medium">Software Engineer @ TCS</p>
                  </div>
                </div>

                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-slate-950 backface-hidden rotate-y-180">
                  <img
                    src={avatarImg}
                    alt="Harsh Verma Vector Avatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md p-2 rounded-xl border border-cyan-500/30 text-center">
                    <p className="text-xs font-bold text-cyan-400 font-display">Digital Vector Avatar</p>
                    <p className="text-[9px] text-slate-300 font-medium">Creative Identity</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 3D COLLAGE POSITIONS SWAP GALLERY */}
      <CollageSwapGallery />

      {/* 10 ESSENTIAL REAL-TIME METRICS */}
      <EssentialRealTimeWidgets visitorName={visitorName} visitorEmail={visitorEmail} />
    </div>
  );
}