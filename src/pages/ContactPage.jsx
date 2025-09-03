// src/pages/ContactPage.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        emailjs
            .sendForm(
                "service_mq73rfg",   // 🔹 replace with EmailJS service ID
                "template_4yn1q6a",  // 🔹 replace with EmailJS template ID
                formRef.current,
                "2lXFqEDlS0vnSVe8t"    // 🔹 replace with EmailJS public key
            )
            .then(
                (result) => {
                    console.log("✅ SUCCESS:", result.text);
                    setLoading(false);
                    setSuccess(true);
                    formRef.current.reset();
                },
                (error) => {
                    console.error("❌ ERROR:", error.text);
                    setLoading(false);
                    setSuccess(false);
                }
            );
    };

    return (
        <section className="container py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Contact Me
            </h2>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left Side - Info */}
                <div className="space-y-6 text-gray-700">
                    <p className="text-lg">
                        I’d love to hear from you! Whether you have a question, a project
                        idea, or just want to say hi — feel free to drop me a message.
                    </p>
                    <div>
                        <p className="font-semibold">📧 Email:</p>
                        <a
                            href="mailto:harshverma.tech@gmail.com"
                            className="text-primary hover:underline"
                        >
                            harshverma.tech@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="font-semibold">🌐 Socials:</p>
                        <div className="flex gap-4 text-2xl mt-2">
                            <a
                                href="https://github.com/harshverma-git-hub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/harsh-verma-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@hvtentertainment1876
" // 🔹 put your real channel
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://instagram.com/harshverma.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-pink-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white shadow-lg rounded-2xl p-6"
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full border p-3 rounded-lg"
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="w-full border p-3 rounded-lg"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full border p-3 rounded-lg"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {/* Success/Error Message */}
                    {success === true && (
                        <p className="text-green-600 text-center mt-2">
                            ✅ Your message has been sent!
                        </p>
                    )}
                    {success === false && (
                        <p className="text-red-600 text-center mt-2">
                            ❌ Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
