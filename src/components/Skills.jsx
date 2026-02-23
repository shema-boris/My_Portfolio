import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java (Spring)'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['React.js & Next.js', 'FastAPI', 'LangChain & CrewAI', 'PyTorch', 'Vite & Git'],
  },
  {
    title: 'Databases & Development',
    items: ['MongoDB', 'PostgreSQL', 'Full-Stack Development', 'AI Application Development'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2 text-white/70">
                {category.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
