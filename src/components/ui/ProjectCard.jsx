import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group glass-card rounded-xl overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-cream-100/90 text-dark-bg flex items-center justify-center hover:bg-cream-50 transition-colors"
            aria-label={`Live demo of ${project.title}`}
          >
            <FiExternalLink />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-cream-100/90 text-dark-bg flex items-center justify-center hover:bg-cream-50 transition-colors"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FiGithub />
          </a>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-heading text-xl font-semibold text-cream-100 mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-cream-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-primary-700/30 text-primary-300 border border-primary-600/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
