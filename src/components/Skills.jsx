import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'UI/UX Design',
  'Research & Analysis',
  'Web Development',
  'AI Tools & Productivity',
  'Problem Solving',
  'Technical Communication',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Core Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:scale-105 transition p-6 text-center"
            >
              <p className="font-medium text-lg">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
