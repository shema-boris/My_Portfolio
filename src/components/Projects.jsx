import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'VidNest',
    description:
      'A video management platform that lets users upload, organize, and stream content with a clean UI and scalable backend.',
    image: '/Vidnest.JPG',
    link: 'https://vidnest-ten.vercel.app/',
    tools: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
  },
  {
    title: 'AI Career Platform',
    description:
      'An AI-powered platform providing personalized interview prep and smart document workflows across 50+ industries.',
    image: '/stepwise.JPG',
    link: 'https://stepwise-delta.vercel.app/',
    tools: ['Next.js', 'FastAPI', 'OpenAI API', 'LangChain'],
  },
  {
    title: 'Real-Time Sports Analytics',
    description:
      'A real-time analytics system with live data streaming, WebSocket updates, and interactive dashboards.',
    image: '/PL Intelligence.JPG',
    link: 'https://pl-analysis.vercel.app/',
    tools: ['Python', 'PostgreSQL', 'WebSockets', 'Redis'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-xl p-6 flex flex-col justify-between h-full${project.link ? ' cursor-pointer' : ''}`}
                >
                  <div>
                    <div className="h-40 rounded-2xl bg-white/10 mb-4 overflow-hidden">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
