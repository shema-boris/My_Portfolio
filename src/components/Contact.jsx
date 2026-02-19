import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shema-boris/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/shema-boris/', label: 'GitHub' },
  { icon: Mail, href: 'mailto:sheboris123@gmail.com', label: 'Email' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-wide">
          Ready to Collaborate?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-dark-muted mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text placeholder-dark-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-dark-muted mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text placeholder-dark-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-dark-muted mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-dark-text placeholder-dark-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 text-sm text-dark-muted">
            <Phone className="w-4 h-4" />
            <span>+1 (318) 512-1749</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-dark-muted">
            <Mail className="w-4 h-4" />
            <span>sheboris123@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-dark-muted">
            <Mail className="w-4 h-4" />
            <span>sbeniman@gsumail.gram.edu</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-dark-muted hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
