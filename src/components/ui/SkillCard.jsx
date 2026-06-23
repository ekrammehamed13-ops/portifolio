import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayout } from "react-icons/fi";

const iconMap = {
  FiCode: FiCode,
  FiServer: FiServer,
  FiDatabase: FiDatabase,
  FiLayout: FiLayout,
};

export default function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card rounded-xl p-5 md:p-6 group cursor-default"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary-700/30 flex items-center justify-center text-primary-300 group-hover:bg-primary-600/40 group-hover:text-primary-200 transition-all duration-300">
          <Icon className="text-xl" />
        </div>
        <h3 className="font-medium text-cream-100 text-lg">{skill.name}</h3>
      </div>

      <div className="relative h-2 bg-dark-elevated rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-cream-400">Proficiency</span>
        <motion.span
          className="text-sm font-medium text-primary-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
    </motion.div>
  );
}
