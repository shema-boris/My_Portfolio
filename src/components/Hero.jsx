import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
                Building Scalable Solutions{' '}
                <br />
                <span className="text-white">For The Next Web</span>{' '}
                <span className="text-dark-muted text-lg sm:text-xl font-normal normal-case">
                  — Computer Science Student at Grambling State University
                </span>
              </h1>

              <p className="mt-4 text-dark-muted text-base sm:text-lg max-w-2xl italic">
                Focused on growth, guided by curiosity
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors duration-200"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border text-dark-text hover:bg-white/5 rounded-full font-medium transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>

              <div className="mt-8 bg-dark-card/60 border border-dark-border/50 rounded-xl px-6 py-4 max-w-2xl">
                <p className="text-dark-muted text-sm leading-relaxed">
                  I&apos;m a curious and analytical student who enjoys learning deeply and
                  thinking through problems. Especially interested in technology, research,
                  and how tools like AI can make work smarter and more efficient.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative bg-dark-card border border-dark-border rounded-2xl p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src="/ProfilePic.jpg"
                  alt="Shema Boris"
                  className="w-24 h-24 rounded-full object-cover"
                />
                {/* Green badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center border-2 border-dark-card">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Shema Boris</h3>
              <p className="text-dark-muted text-sm mt-1">Computer Science</p>
              <p className="text-dark-muted text-sm">@ Grambling State University</p>
              <div className="mt-4 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs inline-block">
                Available for Collaboration
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
