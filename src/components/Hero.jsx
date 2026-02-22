import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
            Portfolio 2026
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Designing Ideas.
            <br />
            Building Intelligent Solutions.
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl">
            I am a curious and analytical student passionate about technology,
            research, and creating impactful digital experiences. I focus on
            clarity, innovation, and meaningful design that recruiters and
            teams remember.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-2xl transition-colors"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/5 text-sm font-medium rounded-2xl transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-20 rounded-3xl" />
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Quick Overview</h3>
            <ul className="space-y-3 text-white/70">
              <li>🎓 Student in Technology &amp; Research</li>
              <li>💡 AI &amp; Software Enthusiast</li>
              <li>📊 Analytical Thinker</li>
              <li>🚀 Growth-Oriented Learner</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
