import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/piyush-kumar-9b9618289', icon: 'linkedin' },
    { name: 'Figma', url: 'https://www.figma.com/@piyush0', icon: 'figma' },
    { name: 'GitHub', url: 'https://github.com/CodeWithPiyush0', icon: 'github' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-emerald-400" />
            <span className="font-mono text-sm text-emerald-400 tracking-[0.2em]">
              GET IN TOUCH
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
            Let's Create
            <br />
            <span className="gradient-text">Together</span>
          </h1>

          <p className="font-mono text-xl text-ash max-w-2xl">
            I'm always interested in hearing about new projects, opportunities, 
            or just having a chat about design. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-emerald-400 mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-steel border-2 border-zinc focus:border-emerald-400 text-snow font-mono transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-sm text-emerald-400 mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-steel border-2 border-zinc focus:border-emerald-400 text-snow font-mono transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-sm text-emerald-400 mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-steel border-2 border-zinc focus:border-emerald-400 text-snow font-mono transition-all outline-none"
                  placeholder="Project Inquiry / Collaboration / etc."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-sm text-emerald-400 mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-steel border-2 border-zinc focus:border-emerald-400 text-snow font-mono transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-coal border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    MESSAGE SENT!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    SEND MESSAGE
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-sm text-emerald-400 text-center"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <p className='font-mono text-sm text-red-400 text-center'>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            {/* Direct Contact */}
            <div className="glass p-8 border border-zinc/50">
              <h3 className="font-mono text-emerald-400 font-semibold mb-6 text-sm tracking-wider">
                DIRECT CONTACT
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:piyush0codes@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 border border-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 transition-all">
                    <svg className="w-5 h-5 group-hover:text-coal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ash">Email</div>
                    <div className="font-mono text-sm text-smoke group-hover:text-emerald-400 transition-colors">
                      piyush0codes@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+917764822206"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 border border-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 transition-all">
                    <svg className="w-5 h-5 group-hover:text-coal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ash">Phone</div>
                    <div className="font-mono text-sm text-smoke group-hover:text-emerald-400 transition-colors">
                      +91 7764822206
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-emerald-400 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ash">Location</div>
                    <div className="font-mono text-sm text-smoke">
                      Muzaffarpur, Bihar, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 border border-zinc/50">
              <h3 className="font-mono text-emerald-400 font-semibold mb-6 text-sm tracking-wider">
                SOCIAL LINKS
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-steel/50 hover:bg-iron border border-transparent hover:border-emerald-400/50 transition-all group"
                  >
                    <span className="font-mono text-sm text-smoke group-hover:text-emerald-400 transition-colors">
                      {social.name}
                    </span>
                    <svg className="w-4 h-4 text-ash group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-8 border border-emerald-400/50 bg-emerald-400/5">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mt-1 animate-pulse" />
                <div>
                  <h3 className="font-mono text-emerald-400 font-semibold mb-2">
                    CURRENTLY AVAILABLE
                  </h3>
                  <p className="font-mono text-sm text-ash">
                    Open to full-time opportunities and freelance projects. 
                    Typical response time: 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
