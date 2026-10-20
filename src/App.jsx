import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Certificates from './components/Certificates';
import NotFound from './pages/NotFound';
import AudioPlayer from './components/AudioPlayer';
import VisitorGreetingModal from './components/VisitorGreetingModal';
import emailjs from '@emailjs/browser';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Formatted Visitor Email Notification
  useEffect(() => {
    if (visitorName && visitorEmail) {
      const emailParams = {
        visitor_name: visitorName,
        visitor_email: visitorEmail,
        visit_time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        visitor_location: "Agra / Noida (India)",
        screen_resolution: `${window.innerWidth} x ${window.innerHeight}`,
        device_platform: navigator.platform,
        browser_info: navigator.userAgent,
        subject_line: `NEW VISIT: ${visitorName} (${visitorEmail}) - Portfolio Session Log`
      };

      emailjs.send(
        "service_mq73rfg",
        "template_4yn1q6a",
        emailParams,
        "2lXFqEDlS0vnSVe8t"
      ).then(() => {
        console.log("Structured visitor email dispatched to owner.");
      }).catch((err) => {
        console.log("Email logger status:", err);
      });
    }
  }, [visitorName, visitorEmail]);

  return (
    <div className="min-h-screen flex flex-col bg-paperLight text-slate-900 dark:bg-paperDark dark:text-slate-100 relative overflow-x-hidden transition-colors duration-500">
      <VisitorGreetingModal
        visitorName={visitorName}
        setVisitorName={setVisitorName}
        setVisitorEmail={setVisitorEmail}
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow max-w-md sm:max-w-2xl md:max-w-5xl lg:max-w-6xl mx-auto w-full px-4 sm:px-6">
        <Routes>
          <Route path="/" element={<Home visitorName={visitorName} visitorEmail={visitorEmail} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <AudioPlayer />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}