import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { uploadedGallery } from "../uploads/uploadedPhotos";

export default function CollageSwapGallery() {
  const [items, setItems] = useState(uploadedGallery);
  const [swappingPair, setSwappingPair] = useState([]);

  useEffect(() => {
    const swapInterval = setInterval(() => {
      if (items.length < 2) return;

      // Pick two distinct random indices
      let idx1 = Math.floor(Math.random() * items.length);
      let idx2 = Math.floor(Math.random() * items.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * items.length);
      }

      // Mark the pair currently undergoing 3D elevation swap
      setSwappingPair([idx1, idx2]);

      setTimeout(() => {
        setItems((prevItems) => {
          const updated = [...prevItems];
          const temp = updated[idx1];
          updated[idx1] = updated[idx2];
          updated[idx2] = temp;
          return updated;
        });
        setSwappingPair([]);
      }, 700);

    }, 3000);

    return () => clearInterval(swapInterval);
  }, [items.length]);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold font-display text-slate-900 dark:text-white flex items-center gap-2">
            <i className="fas fa-layer-group text-cyan-600 dark:text-cyan-400"></i> Interactive 3D Dynamic Collage
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Two random photos elevate in 3D space and swap positions every 3 seconds.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((photo, index) => {
          const isSwapping = swappingPair.includes(index);

          return (
            <motion.div
              key={photo.id}
              layout
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24
              }}
              animate={isSwapping ? { scale: 1.12, zIndex: 30, y: -15, rotateZ: index % 2 === 0 ? 3 : -3 } : { scale: 1, zIndex: 1, y: 0, rotateZ: 0 }}
              className={`relative rounded-3xl overflow-hidden border-2 transition-shadow shadow-xl bg-slate-900 group h-56 sm:h-64 cursor-pointer ${
                isSwapping ? "border-cyan-400 shadow-2xl shadow-cyan-500/40" : "border-slate-200 dark:border-white/10"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300 text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
                  {photo.category}
                </span>
                <h4 className="text-xs font-bold text-white font-display truncate">{photo.title}</h4>
              </div>

              {isSwapping && (
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-cyan-500 text-white font-extrabold text-[9px] rounded-full shadow-md animate-bounce font-display">
                  3D Swapping ✨
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}