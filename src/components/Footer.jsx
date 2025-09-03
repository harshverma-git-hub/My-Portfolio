import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-12">
            <div className="container py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Left section */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-lg text-primary">Harsh Verma</h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                </div>


                {/* Navigation links */}
                <div className="flex justify-center gap-6 text-sm">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <Link to="/projects" className="hover:text-primary">Projects</Link>
                    <Link to="/certificates" className="hover:text-primary">Certificates</Link>
                    <Link to="/about" className="hover:text-primary">About</Link>
                    <Link to="/contact" className="hover:text-primary">Contact</Link>
                </div>


                {/* Right section */}
                <div className="text-center md:text-right text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Harsh Verma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}