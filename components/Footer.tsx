import Link from 'next/link';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Classes', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Personal Training', href: '#services' },
    { name: 'Group Classes', href: '#services' },
    { name: 'Nutrition Coaching', href: '#services' },
    { name: 'Recovery Programs', href: '#services' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-3 rounded-xl shadow-lg group-hover:shadow-orange-600/50 transition-all duration-300">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                FitForce Gym
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Transform your body, elevate your mind, and unleash your inner strength. Join the FitForce community today.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-slate-900 hover:bg-orange-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-600/30"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold tracking-tight mb-6 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-600 transition-colors duration-300 inline-flex items-center group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-600 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold tracking-tight mb-6 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-orange-600 transition-colors duration-300 inline-flex items-center group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-600 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold tracking-tight mb-6 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#contact"
                  className="flex items-start gap-3 text-slate-400 hover:text-orange-600 transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    123 Fitness Avenue<br />New York, NY 10001
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-600 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fitforcegym.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-600 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    info@fitforcegym.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Stay Updated
              </h3>
              <p className="text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Subscribe to our newsletter for fitness tips and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 text-white placeholder-slate-500 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-600/30 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {new Date().getFullYear()} FitForce Gym. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-orange-600 text-sm transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-600 text-sm transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-600 text-sm transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
