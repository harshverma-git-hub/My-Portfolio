import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Real-Time Validation & Character Counter States
  const [formData, setFormData] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!formData.from_name.trim() || formData.from_name.trim().length < 2) {
      errs.from_name = "Please enter your full name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email.trim())) {
      errs.from_email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please enter a topic or subject.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_mq73rfg",
        "template_4yn1q6a",
        formRef.current,
        "2lXFqEDlS0vnSVe8t"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setFormData({ from_name: "", from_email: "", subject: "", message: "" });
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="pt-6 pb-16 space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold font-display uppercase tracking-widest">
          Interactive Direct Inquiry ✉️
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          Get In Touch
        </h1>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white/80 dark:bg-[#0E131F]/80 border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4 backdrop-blur-xl"
      >
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-display">Your Full Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
          />
          {errors.from_name && <p className="text-[10px] text-red-500 font-bold">{errors.from_name}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-display">Email Address</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="e.g. sarah@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
          />
          {errors.from_email && <p className="text-[10px] text-red-500 font-bold">{errors.from_email}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-display">Subject / Topic</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Project Consultation / Full-Stack Collaboration"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
          />
          {errors.subject && <p className="text-[10px] text-red-500 font-bold">{errors.subject}</p>}
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-display">Message Body</label>
            <span className="text-[10px] text-slate-400 font-mono">{formData.message.length} / 500 chars</span>
          </div>
          <textarea
            name="message"
            rows="5"
            maxLength={500}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your professional message..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none text-xs font-medium"
          ></textarea>
          {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-slate-800 text-white font-extrabold font-display text-xs shadow-xl active:scale-95 transition disabled:opacity-50"
        >
          {loading ? "Transmitting..." : "Send Message 🚀"}
        </button>

        {success === true && (
          <p className="text-xs font-bold text-emerald-500 text-center pt-2">
            ✅ Message transmitted successfully!
          </p>
        )}
        {success === false && (
          <p className="text-xs font-bold text-red-500 text-center pt-2">
            ❌ Delivery failed. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}