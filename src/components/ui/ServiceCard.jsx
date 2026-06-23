import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayout } from "react-icons/fi";

const iconMap = {
  FiCode: FiCode,
  FiServer: FiServer,
  FiDatabase: FiDatabase,
  FiLayout: FiLayout,
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass-card rounded-xl p-6 md:p-8 gradient-border"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex items-center justify-center mb-6 group-hover:from-primary-600/50 group-hover:to-primary-500/20 transition-all duration-500">
        <Icon className="text-2xl text-primary-300 group-hover:text-primary-200 transition-colors" />
      </div>

      <h3 className="font-heading text-xl font-semibold text-cream-100 mb-3">
        {service.title}
      </h3>

      <p className="text-cream-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.1 }}
            className="flex items-center gap-2 text-sm text-cream-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
