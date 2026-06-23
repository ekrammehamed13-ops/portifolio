import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16 md:mb-20"
    >
      <span className="inline-block text-primary-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">
        {subtitle}
      </span>
      <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold ${light ? 'text-cream-50' : 'text-cream-100'}`}>
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-primary-500 to-gold rounded-full" />
    </motion.div>
  );
}
