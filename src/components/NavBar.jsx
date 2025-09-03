import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    const [open, setOpen] = useState(false)


    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
            <div className="container flex items-center justify-between h-16">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">HV</div>
                    <div className="hidden sm:block">
                        <div className="text-lg font-semibold">Harsh Verma</div>
                        <div className="text-xs text-gray-500">Full Stack Web Developer</div>
                    </div>
                </Link>


                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Home</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Projects</NavLink>
                    <NavLink to="/certificates" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Certificates</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-gray-700'}>Contact</NavLink>
                </nav>


                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                    {open ? (
                        // close icon (X)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // menu icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>


            {/* Mobile panel */}
            {open && (
                <div className="md:hidden border-t">
                    <div className="flex flex-col p-4 gap-2">
                        <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-semibold py-2' : 'py-2'}>Home</NavLink>
                        <NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-semibold py-2' : 'py-2'}>Projects</NavLink>
                        <NavLink to="/certificates" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-semibold py-2' : 'py-2'}>Certificates</NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-semibold py-2' : 'py-2'}>About</NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-semibold py-2' : 'py-2'}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}