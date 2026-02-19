import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Video, BarChart3 } from 'lucide-react';

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
        <div className="p-8 flex-1">
          <div className="flex items-center gap-3 mb-4">
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
          <p className="text-sm text-dark-muted leading-[1.8] mb-5 max-w-md">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
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
        {/* Screenshot */}
        {project.image && (
          <div className="hidden sm:block w-56 flex-shrink-0 border-l border-dark-border overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectVidNest = {
    title: 'VidNest',
    subtitle: 'Personal Project',
    description: 'A video management platform that lets users upload, organize, and stream content with a clean UI and a scalable backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: [{ label: 'View Source', href: 'https://github.com/shema-boris/' }],
    icon: Video,
    image: '/Vidnest.JPG',
  };

  const projectSportsAnalytics = {
    title: 'Real-Time Sports Analytics',
    subtitle: 'Data Engineering Project',
    description: 'A platform that processes live sports data and displays real-time statistics through interactive dashboards using WebSocket streaming.',
    tags: ['Python', 'WebSockets', 'PostgreSQL', 'Redis'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Source', href: 'https://github.com/shema-boris/' },
    ],
    icon: BarChart3,
  };

  return (
    <section id="projects" className="py-28 lg:py-32 relative">
      {/* Section glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <FeaturedCard project={projectVidNest} index={0} />
          <FeaturedCard project={projectSportsAnalytics} index={1} reverse />
        </div>
      </div>
    </section>
  );
};

export default Projects;
