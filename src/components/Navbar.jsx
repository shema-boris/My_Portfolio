import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-white">Shema Boris</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-2xl transition-colors"
        >
          <Download className="mr-2 w-4 h-4" /> Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 border-t border-white/10 pt-4 bg-slate-950/90 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-white/70 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 px-5 py-2 bg-indigo-500 text-white text-sm font-medium rounded-2xl"
          >
            <Download className="mr-2 w-4 h-4" /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
