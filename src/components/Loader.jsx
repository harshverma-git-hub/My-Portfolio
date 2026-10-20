import React from "react";

export default function Loader({ size = "h-10 w-10", color = "border-cyan-500" }) {
  return (
    <div className={`animate-spin rounded-full border-3 border-t-transparent ${size} ${color}`}></div>
  );
}