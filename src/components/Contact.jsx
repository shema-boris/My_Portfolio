import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 mb-8"
        >
          I am open to internships, research opportunities, and collaborative
          projects. Feel free to reach out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:sheboris123@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-2xl transition-colors"
          >
            <Mail className="mr-2 w-4 h-4" /> Email
          </a>
          <a
            href="https://github.com/shema-boris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/5 text-sm font-medium rounded-2xl transition-colors"
          >
            <Github className="mr-2 w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shema-boris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/5 text-sm font-medium rounded-2xl transition-colors"
          >
            <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
