import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-20 pb-16 text-center space-y-4">
      <h1 className="text-6xl font-black font-display text-cyan-600 dark:text-cyan-400">404</h1>
      <h2 className="text-xl font-bold font-display">Page Not Found</h2>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-bold font-display text-xs inline-block"
      >
        Return to Overview
      </Link>
    </div>
  );
}