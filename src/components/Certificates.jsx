import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2024",
      icon: "fa-aws",
      badge: "Cloud Infrastructure",
      description: "Cloud architecture principles, compute models, S3 storage, IAM security policies, and AWS foundational services."
    },
    {
      title: "Decode Java with Data Structures & Algorithms",
      issuer: "PW Skills",
      date: "2024",
      icon: "fa-java",
      badge: "Algorithms & OOP",
      description: "Advanced algorithmic complexity analysis, memory optimization, data structure design, and Java application architecture."
    },
    {
      title: "Full Stack Web Engineering Certification",
      issuer: "ATFLabs",
      date: "2024",
      icon: "fa-react",
      badge: "MERN Engineering",
      description: "Full-stack development incorporating React component architecture, Node.js runtime, Express REST APIs, and MongoDB databases."
    }
  ];

  return (
    <div className="pt-6 pb-16 space-y-8">
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold font-display uppercase tracking-widest">
          Verified Qualifications 🏆
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          Certifications & Academic Badges
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white/80 dark:bg-[#0E131F]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl">
                  <i className={`fab ${cert.icon}`}></i>
                </div>
                <span className="text-[10px] px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-cyan-600 dark:text-cyan-400 font-bold font-display border border-slate-200 dark:border-white/10">
                  {cert.badge}
                </span>
              </div>
              <h3 className="text-base font-extrabold font-display text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{cert.issuer} • {cert.date}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}