import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg leading-relaxed"
        >
          I am a Computer Science student with a 3.91 GPA who enjoys deeply
          understanding systems rather than just using them. My interests lie
          at the intersection of Artificial Intelligence, software
          engineering, and research-driven development. I focus on building
          intelligent, scalable, and well-structured solutions using modern
          technologies such as React, FastAPI, and AI frameworks. I am
          particularly motivated by complex problems that require analytical
          thinking, technical depth, and long-term learning.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
