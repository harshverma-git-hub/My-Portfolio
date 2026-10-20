import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getUpcomingFestivalGreeting } from "../utils/festivalDetector";

export default function VisitorGreetingModal({ visitorName, setVisitorName, setVisitorEmail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const festival = getUpcomingFestivalGreeting();

  useEffect(() => {
    const savedName = localStorage.getItem("hv_visitor_name");
    const savedEmail = localStorage.getItem("hv_visitor_email");
    if (savedName) {
      setVisitorName(savedName);
      if (savedEmail) setVisitorEmail(savedEmail);
    } else {
      setIsOpen(true);
    }
  }, [setVisitorName, setVisitorEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalName = nameInput.trim() || "Distinguished Visitor";
    const finalEmail = emailInput.trim() || "visitor@external.com";

    localStorage.setItem("hv_visitor_name", finalName);
    localStorage.setItem("hv_visitor_email", finalEmail);

    setVisitorName(finalName);
    setVisitorEmail(finalEmail);
    setIsOpen(false);
  };

  const resetVisitor = () => {
    localStorage.removeItem("hv_visitor_name");
    localStorage.removeItem("hv_visitor_email");
    setVisitorName("");
    setVisitorEmail("");
    setIsOpen(true);
  };

  return (
    <>
      {/* Top Festival Greetings Banner */}
      <div className={`bg-gradient-to-r ${festival.bg} border-b ${festival.border} py-2 px-4 text-center flex items-center justify-center gap-2 text-xs backdrop-blur-md`}>
        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 font-display">
          <i className={`fas ${festival.icon} text-amber-500`}></i>
          <strong>{festival.name}:</strong> {festival.greeting}
        </span>
        <span className="text-slate-400 font-normal">|</span>
        <button
          onClick={resetVisitor}
          className="text-[11px] underline text-cyan-600 dark:text-cyan-400 font-bold hover:text-cyan-500"
        >
          (Guest: {visitorName || "Edit Profile"})
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl"
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white flex items-center justify-center text-xl mx-auto shadow-lg shadow-cyan-500/20">
                  ✨
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
                  {festival.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {festival.greeting} Welcome to Harsh Verma's Portfolio! Please share your details to proceed.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1 font-display">Your Full Name</label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#050811] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1 font-display">Email Address</label>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="e.g. sarah@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#050811] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-slate-800 text-white font-extrabold font-display text-xs shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition"
                >
                  Enter Workspace 🚀
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}