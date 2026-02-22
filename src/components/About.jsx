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
          I am a growth-driven student who enjoys deep learning, problem
          solving, and thoughtful design. My work blends technical knowledge
          with creativity, allowing me to build smart, clean, and user-focused
          digital solutions. I aim to contribute to innovative teams where I
          can continuously learn and create meaningful impact.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
