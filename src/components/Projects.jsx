import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Video, BarChart3, Monitor } from 'lucide-react';

const FeaturedCard = ({ project, index, reverse }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <div className="p-6 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-dark-muted">{project.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-dark-muted leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-dark-card-hover text-dark-muted border border-dark-border"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-md bg-dark-card-hover border border-dark-border text-dark-muted hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* Screenshot placeholder */}
        <div className="hidden sm:flex w-52 flex-shrink-0 bg-dark-card-hover items-center justify-center border-l border-dark-border">
          <div className="text-center p-4">
            <Monitor className="w-10 h-10 text-dark-border mx-auto mb-2" />
            <p className="text-xs text-dark-muted">Preview</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectVidNest = {
    title: 'VidNest',
    subtitle: 'Personal Project',
    description: 'A modern video management and streaming platform built with scalable architecture and clean design patterns.',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: [{ label: 'View Source', href: 'https://github.com/shema-boris/' }],
    icon: Video,
  };

  const projectSportsAnalytics = {
    title: 'Real-Time Sports Analytics',
    subtitle: 'Data Engineering Project',
    description: 'A real-time data processing and analytics platform for sports statistics, featuring live updates, WebSocket streaming, and interactive dashboards.',
    tags: ['Python', 'WebSockets', 'PostgreSQL', 'Redis'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Source', href: 'https://github.com/shema-boris/' },
    ],
    icon: BarChart3,
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Section glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <FeaturedCard project={projectVidNest} index={0} />
          <FeaturedCard project={projectSportsAnalytics} index={1} reverse />
        </div>
      </div>
    </section>
  );
};

export default Projects;
