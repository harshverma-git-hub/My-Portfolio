import React, { useState, useEffect, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const playlist = [
    {
      title: "Midnight Symphony (Acoustic Lofi)",
      artist: "Lofi Beats Ensemble",
      url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
      title: "Sunset Horizons",
      artist: "Acoustic Dreams",
      url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73229.mp3?filename=soft-notice-10588.mp3"
    }
  ];

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * playlist.length);
    setTrackIndex(randomIdx);

    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Autoplay waiting for interaction:", err));
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [playlist.length]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log(e));
    }
  };

  const currentSong = playlist[trackIndex];

  return (
    <div className="fixed bottom-20 md:bottom-5 right-5 z-40 bg-white/90 dark:bg-[#0E131F]/90 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl flex items-center gap-3.5 max-w-xs transition-all">
      <audio ref={audioRef} src={currentSong.url} loop />
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white flex items-center justify-center text-sm shadow-md shrink-0 active:scale-95 transition"
        title={isPlaying ? "Pause Ambient Audio" : "Play Ambient Audio"}
      >
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-music"}`}></i>
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest truncate flex items-center gap-1.5 font-display">
          <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`}></span>
          {isPlaying ? "Ambient Track Active" : "Tap To Play"}
        </p>
        <p className="text-xs font-bold text-slate-900 dark:text-white truncate font-display">{currentSong.title}</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{currentSong.artist}</p>
      </div>
    </div>
  );
}