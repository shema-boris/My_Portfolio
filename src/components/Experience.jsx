import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

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

      <div className="space-y-8">
        {/* Web Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Web Developer{' '}
                  <span className="font-normal text-dark-muted">
                    — Grambling State University (Mass Communication Dept.)
                  </span>
                </h3>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
              Aug 2025 – Present
            </span>
          </div>
          <p className="mt-5 text-sm text-dark-muted leading-[1.8] max-w-lg">
            Developed automation tools and rebuilt internal systems to improve efficiency,
            accuracy, and reliability in academic workflows.
          </p>
        </motion.div>

        {/* Freelance Software Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="p-8 flex-1">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">Freelance Software Developer</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                  Jun 2025 – Jul 2025
                </span>
              </div>
              <p className="mt-5 text-sm text-dark-muted leading-[1.8] max-w-lg">
                Designed and launched an AI-powered career platform with personalized guidance,
                persistent workflows, and document export capabilities.
              </p>
              <a
                href="https://stepwise-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 text-xs rounded-lg bg-dark-card-hover border border-dark-border text-dark-muted hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Project
              </a>
            </div>
            {/* Preview image */}
            <a
              href="https://stepwise-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block w-48 flex-shrink-0 border-l border-dark-border overflow-hidden"
            >
              <img
                src="/stepwise.JPG"
                alt="Stepwise preview"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
