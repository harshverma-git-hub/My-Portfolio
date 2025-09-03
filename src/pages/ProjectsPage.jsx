import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

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

                // Filter: skip forks + empty repos
                const filtered = data.filter((repo) => !repo.fork && repo.size > 1);

                setRepos(filtered);
            } catch (err) {
                console.error("Error fetching repos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);



    return (
        <section className="container py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My Projects
            </h2>
            {loading ? (
        // 🔹 Use Loader here
        <div className="flex items-center justify-center max-h-screen">
                <Loader size="h-16 w-16" color="border-green-500" />
            </div>
      ) : (
        repos.length === 0 ? (
                <p className="text-center text-gray-600">No projects found on GitHub.</p>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo) => (
                        <div
                            key={repo.id}
                            className="border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden bg-white flex flex-col"
                        >
                            {/* Project Image */}
                            <img
                                src={
                                    repo.homepage || repo.has_pages
                                        ? `https://api.microlink.io/?url=${repo.homepage
                                            ? repo.homepage
                                            : `https://${username}.github.io/${repo.name}`
                                        }&screenshot=true&meta=false&embed=screenshot.url`
                                        : "https://cdn-icons-png.flaticon.com/512/2721/2721294.png" // fallback default
                                }
                                alt={repo.name}
                                className="w-full h-40 object-cover rounded-t-xl"
                            />



                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-2 capitalize">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">
                                    {repo.description || "No description available."}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    {/* Always show View Code */}
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                                    >
                                        View Code
                                    </a>

                                    {/* Show View Demo if homepage exists OR GitHub Pages is enabled */}
                                    {(repo.homepage || repo.has_pages) && (
                                        <a
                                            href={
                                                repo.homepage
                                                    ? repo.homepage
                                                    : `https://${username}.github.io/${repo.name}`
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
                                        >
                                            View Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )
      )}
            
        </section>
    );
}
