// src/pages/AboutPage.jsx
import React from "react";
import profileImage from "../assets/About_Profile.jpg"; // ✅ update path if needed

export default function AboutPage() {
  return (
    <section className="container py-16 space-y-16">
      {/* ===== Heading ===== */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      {/* ===== About + Image ===== */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Harsh Verma"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
        </div>

        {/* About Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Hello! I’m <span className="font-semibold">Harsh Verma</span>, an MSc
            Computer Science student at{" "}
            <span className="font-semibold">
              Dayalbagh Educational Institute, Agra
            </span>. I completed my BCA from{" "}
            <span className="font-semibold">St. John’s College, Agra</span> with{" "}
            <strong>82.5%</strong>.
          </p>

          <p>
            I specialize in <strong>Web Development</strong> using the MERN
            stack and have built projects such as{" "}
            <strong>E-commerce Website (Shop-Nestify)</strong>,{" "}
            <strong>Crop Recommendation System</strong>, and other{" "}
            <strong>React-based applications</strong>.
          </p>

          <p>
            Apart from coding, I enjoy{" "}
            <span className="font-semibold">sketching, playing guitar</span>, and{" "}
            <span className="font-semibold">video shooting/editing</span> for my
            YouTube channel. 🎥
          </p>

          <p>
            Check out my YouTube work here:{" "}
            <a
              href="https://www.youtube.com/@hvtentertainment1876/videos" // 🔗 replace with your actual channel link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Visit my Channel
            </a>
          </p>
        </div>
      </div>

      {/* ===== Skills ===== */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold mb-2">Programming</h4>
            <p>Java, JavaScript, Python, C, C++</p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold mb-2">Web Development</h4>
            <p>React.js, Node.js, Express.js, MongoDB</p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold mb-2">Other Tools</h4>
            <p>Git, GitHub, MATLAB</p>
          </div>
        </div>
      </div>

      {/* ===== Education ===== */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
        <div className="space-y-6 text-gray-700">
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold">
              MSc Computer Science – Dayalbagh Educational Institute, Agra
            </h4>
            <p>Ongoing (2024–2026) |  <strong>SGPA : 9.834</strong></p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold">
              BCA – St. John’s College, Agra
            </h4>
            <p>Graduated in 2024 | <strong>82.5%</strong></p>
          </div>
        </div>
      </div>

      {/* ===== Experience ===== */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Experience</h3>
        <div className="space-y-6 text-gray-700">
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold">Intern – ATFLabs, Agra</h4>
            <p>
              Developed a website and also taught programming languages to
              students.
            </p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-gray-50">
            <h4 className="font-semibold">
              Customer Support (Work from Home) – Flipkart
            </h4>
            <p>Handled customer queries and support tasks remotely.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
