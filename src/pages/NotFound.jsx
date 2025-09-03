// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-6xl font-extrabold text-primary mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary inline-block px-6 py-2"
      >
        Go Back Home
      </Link>
    </section>
  )
}
