import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo, socialLinks, contactInfo } from "../../data/portfolioData";

const iconMap = {
  FiPhone: FiPhone,
  FiMail: FiMail,
  FiMapPin: FiMapPin,
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
};

const socialIconMap = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
  FiMail: FiMail,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Contact Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-cream-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-elevated/50 border border-primary-700/30 rounded-lg text-cream-100 placeholder-cream-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-cream-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-elevated/50 border border-primary-700/30 rounded-lg text-cream-100 placeholder-cream-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-cream-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-elevated/50 border border-primary-700/30 rounded-lg text-cream-100 placeholder-cream-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-cream-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-elevated/50 border border-primary-700/30 rounded-lg text-cream-100 placeholder-cream-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-cream-50 font-medium tracking-wide hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 transition-all"
              >
                <FiSend />
                {submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => {
              const Icon = iconMap[info.icon] || FiPhone;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 glass-card rounded-xl p-5 hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-700/30 flex items-center justify-center group-hover:bg-primary-600/40 transition-colors">
                    <Icon className="text-primary-300 group-hover:text-primary-200 transition-colors" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-cream-500">{info.label}</p>
                    <p className="text-sm text-cream-100 font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="glass-card rounded-xl p-5">
              <p className="text-sm text-cream-300 font-medium mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon] || FiGithub;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-lg bg-primary-700/30 flex items-center justify-center text-cream-400 hover:bg-primary-600/40 hover:text-cream-100 transition-all"
                      aria-label={link.name}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
