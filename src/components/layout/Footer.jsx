import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo, navLinks, socialLinks } from "../../data/portfolioData";

const iconMap = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
  FiMail: FiMail,
};

export default function Footer() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-primary-700/20 bg-dark-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <span className="font-heading text-2xl font-bold text-gradient">EM</span>
            <p className="mt-4 text-sm text-cream-400 leading-relaxed max-w-xs">
              Building exceptional digital experiences with clean code and elegant design.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-cream-400 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-100 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || FiGithub;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-cream-400 hover:text-cream-100 hover:border-primary-500/40 transition-all"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-700/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-500">
          <p className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="text-primary-400" size={14} /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
