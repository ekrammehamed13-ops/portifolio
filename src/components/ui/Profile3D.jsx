import { motion } from "framer-motion";

export default function Profile3D({ imageSrc, name }) {
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-card glow-green p-1.5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-gold/10 z-10" />
          <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="hidden absolute inset-0 items-center justify-center"
              style={{ display: "none" }}
            >
              <span className="font-heading text-5xl md:text-6xl text-gradient font-bold">
                {initials}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/20 via-transparent to-gold/20 blur-xl -z-10"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 left-1 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
