import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-white/70 mb-2">
            Expected Graduation: 2028
          </p>
          <p className="text-white/70 mb-2">GPA: 3.91</p>
          <p className="text-white/60 mt-4">
            Focus Areas: Artificial Intelligence, Software Engineering,
            Intelligent Systems, and Research-Oriented Development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
