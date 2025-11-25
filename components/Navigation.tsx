'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">FF</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
              FitForce Gym
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-slate-600 hover:text-orange-600 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-slate-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mx-4 mt-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl px-8 py-3 transition-all duration-300 shadow-lg text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
