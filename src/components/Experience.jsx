import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer',
    org: '— Grambling State University (Mass Communication Dept.)',
    date: 'Aug 2025 – Present',
    description: 'Developed automation tools and rebuilt internal systems to improve efficiency, accuracy, and reliability in academic workflows.',
  },
  {
    title: 'Freelance Software Developer',
    org: '— Grambling, LA',
    date: 'Jun 2025 – Jul 2025',
    description: 'Designed and launched an AI-powered career platform with personalized guidance, persistent workflows, and document export capabilities.',
    link: { label: 'Live Project', href: 'https://stepwise-delta.vercel.app/' },
  },
];

const Experience = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {exp.title}
                  <span className="font-normal text-dark-muted"> {exp.org}</span>
                </h3>
                <p className="text-xs text-dark-muted mt-1">{exp.date}</p>
                <p className="text-sm text-dark-muted leading-relaxed mt-3 max-w-md">
                  {exp.description}
                </p>
                {exp.link && (
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-primary hover:underline mt-2"
                  >
                    {exp.link.label} →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
