import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-dark-muted uppercase tracking-widest">
          Built with React &amp; Tailwind in 2025. &copy; Shema Boris Benimana.
        </p>
      </div>

      {/* Decorative sparkle */}
      <div className="absolute bottom-6 right-8">
        <Sparkles className="w-8 h-8 text-dark-border/60" />
      </div>
    </footer>
  );
};

export default Footer;
