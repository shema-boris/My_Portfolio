import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, MessageCircle } from 'lucide-react';

const About = () => {
  const techStack = [
    'Python (FastAPI)', 'JavaScript (React.js & Next.js)', 'TypeScript', 'HTML/CSS',
    'Java (Spring)', 'LangChain', 'CrewAI', 'PyTorch', 'Git',
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/ProfilePic.jpg"
                alt="Shema Boris"
                className="w-28 h-28 rounded-full object-cover border-2 border-primary/50 flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-dark-muted leading-relaxed">
                  I&apos;m a curious and analytical student who enjoys learning deeply and
                  thinking through problems instead of rushing to answers. I&apos;m especially
                  interested in technology, research, and how tools like AI can make work
                  smarter and more efficient.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Software Engineering', 'AI Engineering', 'Research'].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/shema-boris/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card-hover border border-dark-border rounded-lg text-sm text-dark-text hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/30 rounded-lg text-sm text-accent-green hover:bg-accent-green/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Open to Work
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col"
          >
            <div className="border-l-2 border-primary/40 pl-5 mb-6">
              <p className="text-dark-muted leading-relaxed italic">
                &ldquo;I value growth, clarity, and consistency — whether I&apos;m studying,
                building ideas, or exploring new concepts. This space reflects my journey
                as I keep learning, improving, and turning curiosity into real progress.&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border rounded-full text-sm text-dark-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume / CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border rounded-full text-sm text-dark-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                DMs Open
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/shema-boris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
