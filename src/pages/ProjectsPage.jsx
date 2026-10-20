import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "harshverma-git-hub";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered = data.filter((repo) => !repo.fork && repo.size > 0);
          setRepos(filtered);
        }
      } catch (err) {
        console.error("Error fetching repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="pt-6 pb-16 space-y-8">
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-display uppercase tracking-widest">
          Public Code Repositories 💻
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          Software & Open Source Work
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader />
        </div>
      ) : repos.length === 0 ? (
        <p className="text-center text-xs text-slate-400 py-8">No public repositories found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => {
            const hasDemo = repo.homepage && repo.homepage.trim().length > 0;
            const fallbackDemo = repo.has_pages ? `https://harshverma-git-hub.github.io/${repo.name}` : null;
            const demoUrl = hasDemo ? repo.homepage : fallbackDemo;

            return (
              <motion.div
                key={repo.id}
                whileTap={{ scale: 0.98 }}
                className="bg-white/80 dark:bg-[#0E131F]/80 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-4 backdrop-blur-xl"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-extrabold font-display border border-cyan-500/20">
                      {repo.language || "Codebase"}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
                      <i className="fas fa-star text-amber-500"></i> {repo.stargazers_count}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold font-display text-slate-900 dark:text-white capitalize">
                    {repo.name.replace(/-/g, " ")}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {repo.description || "Public codebase repository on Harsh Verma's GitHub profile."}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white text-xs font-bold font-display rounded-xl text-center border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition"
                  >
                    <i className="fab fa-github mr-1"></i> Repository
                  </a>
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-bold font-display rounded-xl text-center shadow-md transition"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}