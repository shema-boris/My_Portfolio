import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, MessageCircle } from 'lucide-react';

const About = () => {
  const skillGroups = [
    { label: 'AI & ML', skills: ['PyTorch', 'LangChain', 'CrewAI'] },
    { label: 'Backend', skills: ['Python', 'FastAPI', 'Java (Spring)'] },
    { label: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'HTML/CSS'] },
    { label: 'Tools', skills: ['Git'] },
  ];

  return (
    <section id="about" className="py-28 lg:py-32 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column — open layout, no card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <img
                src="/ProfilePic.jpg"
                alt="Shema Boris"
                className="w-28 h-28 rounded-full object-cover border-2 border-primary/50 flex-shrink-0"
              />
              <div className="flex-1 max-w-xl">
                <p className="text-dark-muted text-base leading-[1.8]">
                  I&apos;m a Computer Science student who enjoys breaking down complex problems
                  and building practical, intelligent solutions.
                </p>
                <p className="text-dark-muted text-base leading-[1.8] mt-4">
                  My interests lie in AI systems, automation, and research-driven development
                  that improves how people work and learn.
                </p>
              </div>
            </div>

            {/* Skills — grouped rows */}
            <div className="mt-10 space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider w-20 flex-shrink-0">
                    {group.label}
                  </span>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Target roles */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Software Engineering', 'AI Engineering', 'Research'].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1.5 text-xs rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://github.com/shema-boris/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-card border border-dark-border rounded-lg text-sm text-dark-text hover:border-primary/50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-green/10 border border-accent-green/30 rounded-lg text-sm text-accent-green hover:bg-accent-green/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Open to Work
              </a>
            </div>
          </motion.div>

          {/* Right Column — quote + links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="border-l-2 border-primary/40 pl-6 mb-8">
              <p className="text-dark-muted leading-[1.8] italic">
                &ldquo;I value growth, clarity, and consistency — whether I&apos;m studying,
                building ideas, or exploring new concepts. This space reflects my journey
                as I keep learning, improving, and turning curiosity into real progress.&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-dark-border rounded-full text-sm text-dark-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume / CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-dark-border rounded-full text-sm text-dark-muted hover:text-white hover:border-primary/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                DMs Open
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/shema-boris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-5 text-sm text-primary hover:underline"
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
