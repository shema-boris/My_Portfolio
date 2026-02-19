import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-dark-card border border-dark-border rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 flex-wrap justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-green/10">
              <GraduationCap className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <h3 className="font-semibold text-white">BS in Computer Science</h3>
              <p className="text-sm text-dark-muted">Grambling State University · 2024 – 2028</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
            GPA: 3.91 / 4.00
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
