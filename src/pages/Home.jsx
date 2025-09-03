import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../assets/Harsh_Avatar.png";
import Loader from "../components/Loader";
import resume from "../assets/resume.pdf";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader size="h-16 w-16" color="border-green-500" />
            </div>
        );
    }

    return (
        <section className="container py-20 flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* Text content */}
            <motion.div
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Hi, I’m <span className="text-primary">Harsh Verma</span>
                </motion.h1>

                <motion.p
                    className="text-lg text-justify text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                >
                    I am Harsh Verma, a passionate Computer Science student with hands-on
                    experience in web development, data structures, and algorithms. I
                    enjoy building scalable applications, exploring emerging technologies,
                    and solving real-world problems through code. Currently, I am pursuing
                    my MSc in Computer Science and continuously enhancing my skills in
                    Java, MERN stack, and cloud technologies.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                >
                    <Link to="/projects" className="btn btn-primary">
                        View Projects
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Get in Touch
                    </Link>


                    {/* Preview Resume */}
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Preview Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex gap-6 justify-center lg:justify-start text-gray-600 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                >
                    <a href="https://github.com/harshverma-git-hub" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/harsh-verma-profile" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:harshverma.tech@gmail.com" className="hover:text-primary" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://leetcode.com/u/harshverma-exe/" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="LeetCode">
                        <i className="fas fa-code"></i>
                    </a>
                </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
            >
                <img
                    src={avatar}
                    alt="Harsh Verma profile"
                    className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
                />
            </motion.div>
        </section>
    );
}
