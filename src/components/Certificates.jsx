// src/pages/CertificatesPage.jsx
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

// Import your certificate images
import Cert1 from "../assets/Cloud Quest badge.jpg";
import Cert2 from "../assets/Cloud Practitioner.jpg";
import Cert3 from "../assets/TAB.jpg";
import Cert4 from "../assets/NPTEL.jpg";
import Cert5 from "../assets/TCS ION.jpg";

const certificates = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2025",
    skills: ["Amazon Web Services (AWS)"],
    credential:
      "https://www.credly.com/badges/8360aea1-3fbf-45ad-ad3a-c2eb016231fc/linked_in_profile",
    image: Cert1,
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2025",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
    credential: "https://www.aws.training/",
    image: Cert2,
  },
  {
    title: "Technical Advancement Bootcamp",
    issuer: "Medha",
    date: "Jul 2024",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Presentation Skills",
    ],
    credential:
      "https://medhasisfiles.s3.ap-south-1.amazonaws.com/38224_1722257041550_3cdb7643af.pdf",
    image: Cert3,
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "Jul 2023",
    skills: ["Java Certified Programmer", "Java"],
    credential:
      "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S73040054120262113.pdf",
    image: Cert4,
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "Tata Consultancy Services",
    date: "Jun 2023",
    skills: [
      "Communication Skills",
      "Resume Writing",
      "Presentation Skills",
      "Group Discussions",
      "Interview Skills",
      "Business Etiquette",
      "Telephone Etiquette",
      "Email Etiquette",
      "Professionalism",
      "Workplace Ethics",
    ],
    credential: "https://learning.tcsionhub.in/courses/career-edge/",
    image: Cert5,
  },
];

export default function CertificatesPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (0.5s delay)
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
    <section className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Certificates
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md hover:shadow-xl transition bg-white flex flex-col overflow-hidden"
          >
            {/* Certificate Image */}
            <img
              src={
                cert.image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              }
              alt={cert.title}
              className="w-full h-48 object-contain bg-gray-50 p-4"
            />

            {/* Certificate Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                <strong>Issued:</strong> {cert.date}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <strong className="text-sm">Skills:</strong>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Credential Button */}
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
              >
                Show Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
