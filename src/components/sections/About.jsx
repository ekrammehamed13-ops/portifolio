import { motion } from "framer-motion";
import { FiTarget, FiUser } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo } from "../../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {personalInfo.about.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-cream-400 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-700/30 flex items-center justify-center">
                  <FiTarget className="text-primary-300" size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cream-100">
                  Career Goal
                </h3>
              </div>
              <p className="text-cream-400 text-sm leading-relaxed">
                {personalInfo.careerGoals}
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold-dark/30 flex items-center justify-center">
                  <FiUser className="text-gold-light" size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cream-100">
                  Quick Info
                </h3>
              </div>
              <div className="space-y-2 text-sm text-cream-400">
                <p><span className="text-cream-300 font-medium">Name:</span> {personalInfo.name}</p>
                <p><span className="text-cream-300 font-medium">Email:</span> {personalInfo.email}</p>
                <p><span className="text-cream-300 font-medium">Phone:</span> {personalInfo.phone}</p>
                <p><span className="text-cream-300 font-medium">Location:</span> {personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
