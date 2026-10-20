import React, { useState, useEffect } from "react";

export default function EssentialRealTimeWidgets({ visitorName, visitorEmail }) {
  const [now, setNow] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [battery, setBattery] = useState({ level: 100, charging: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fps, setFps] = useState(60);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [networkSpeed, setNetworkSpeed] = useState("4G High Bandwidth");

  useEffect(() => {
    const clockTimer = setInterval(() => setNow(new Date()), 1000);
    const sessionTimer = setInterval(() => setSessionDuration(prev => prev + 1), 1000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(Math.round(progress));
    };
    window.addEventListener("scroll", handleScroll);

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    if (navigator.getBattery) {
      navigator.getBattery().then((bat) => {
        setBattery({ level: Math.round(bat.level * 100), charging: bat.charging });
        bat.addEventListener("levelchange", () => setBattery({ level: Math.round(bat.level * 100), charging: bat.charging }));
      });
    }

    if (navigator.connection) {
      setNetworkSpeed(`${navigator.connection.effectiveType.toUpperCase()} Bandwidth`);
    }

    let lastTime = performance.now();
    let frameCount = 0;
    const fpsInterval = setInterval(() => {
      const delta = (performance.now() - lastTime) / 1000;
      setFps(Math.min(60, Math.round(frameCount / delta)));
      frameCount = 0;
      lastTime = performance.now();
    }, 1000);

    const countFrames = () => {
      frameCount++;
      requestAnimationFrame(countFrames);
    };
    const animId = requestAnimationFrame(countFrames);

    return () => {
      clearInterval(clockTimer);
      clearInterval(sessionTimer);
      clearInterval(fpsInterval);
      cancelAnimationFrame(animId);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const essentialFeatures = [
    { id: 1, title: "Real-Time System Clock (IST)", val: now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }), sub: now.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' }), icon: "fa-clock", color: "text-cyan-500" },
    { id: 2, title: "Active Visitor Profile", val: visitorName || "Distinguished Guest", sub: visitorEmail || "Session Verified", icon: "fa-user-check", color: "text-indigo-500" },
    { id: 3, title: "Network Connectivity", val: isOnline ? "Active (Online)" : "Disconnected", sub: networkSpeed, icon: "fa-wifi", color: "text-emerald-500" },
    { id: 4, title: "Device Power Meter", val: `${battery.level}% Charge`, sub: battery.charging ? "Power Source Connected" : "Battery Operating", icon: "fa-battery-three-quarters", color: "text-amber-500" },
    { id: 5, title: "Session Time Counter", val: formatDuration(sessionDuration), sub: "Active Session Engagement", icon: "fa-stopwatch", color: "text-purple-500" },
    { id: 6, title: "Viewport Scroll Depth", val: `${scrollProgress}% Page Read`, sub: "Vertical Position Tracking", icon: "fa-arrows-up-down", color: "text-cyan-500" },
    { id: 7, title: "Graphics Animation Rate", val: `${fps} FPS`, sub: "Hardware Acceleration", icon: "fa-gauge-high", color: "text-pink-500" },
    { id: 8, title: "Pointer Screen Coordinates", val: `X: ${mousePos.x}px, Y: ${mousePos.y}px`, sub: "Interactive Tracking", icon: "fa-mouse-pointer", color: "text-blue-500" },
    { id: 9, title: "Display Resolution", val: `${window.innerWidth} × ${window.innerHeight}`, sub: "Responsive Viewport", icon: "fa-desktop", color: "text-indigo-500" },
    { id: 10, title: "Processor Cores", val: `${navigator.hardwareConcurrency || 8} Logical Cores`, sub: navigator.platform, icon: "fa-microchip", color: "text-teal-500" }
  ];

  return (
    <section className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold font-display text-slate-900 dark:text-white flex items-center gap-2">
            <i className="fas fa-server text-cyan-600 dark:text-cyan-400"></i> Essential Live Telemetry Metrics
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            10 core real-time session telemetry monitors.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-extrabold font-display">
          10 Active Metrics
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {essentialFeatures.map((feat) => (
          <div
            key={feat.id}
            className="p-4 rounded-2xl bg-white/80 dark:bg-[#0E131F]/80 border border-slate-200 dark:border-white/10 shadow-md space-y-1.5 backdrop-blur-md hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-display">Metric #{feat.id}</span>
              <i className={`fas ${feat.icon} ${feat.color} text-sm`}></i>
            </div>
            <p className="text-sm font-black text-slate-900 dark:text-white truncate font-display">{feat.val}</p>
            <p className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 truncate">{feat.title}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate pt-0.5 border-t border-slate-100 dark:border-white/5">{feat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}