import { motion } from "framer-motion";

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-10 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="glass-card rounded-xl p-5 md:p-6">
          <span className="inline-block text-xs font-medium text-primary-400 mb-1 tracking-wide">
            {item.period}
          </span>
          <h3 className="font-heading text-xl font-semibold text-cream-100 mb-1">
            {item.title}
          </h3>
          <p className="text-gold-light text-sm font-medium mb-3">{item.company}</p>
          <p className="text-cream-400 text-sm mb-4">{item.description}</p>
          <ul className={`space-y-1.5 ${isLeft ? "md:text-right" : ""}`}>
            {item.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-cream-300"
              >
                <span className="text-primary-400 mt-1 shrink-0">▸</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-bg shadow-lg shadow-primary-500/30 relative z-10" />
        <div className="w-0.5 h-full min-h-[120px] bg-gradient-to-b from-primary-500/40 to-transparent absolute top-4" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
