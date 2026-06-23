import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ShootingStar({ delay }) {
  return (
    <motion.div
      className="absolute w-px h-px bg-gradient-to-r from-transparent via-cream-100 to-transparent"
      initial={{ x: -100, y: Math.random() * 400, opacity: 0 }}
      animate={{
        x: [null, 1200],
        y: [null, 400],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
        ease: "linear",
      }}
      style={{ boxShadow: "0 0 4px rgba(245, 240, 232, 0.3)" }}
    />
  );
}

function FloatingOrb({ index }) {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "60%", left: "85%" },
    { top: "30%", left: "60%" },
    { top: "70%", left: "20%" },
    { top: "80%", left: "50%" },
  ];
  const pos = positions[index % positions.length];
  const size = Math.random() * 60 + 40;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        top: pos.top,
        left: pos.left,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(74, 124, 95, ${0.1 + Math.random() * 0.1}), transparent)`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(74, 124, 95, 0.08) 0%, transparent 50%)`,
        }} />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <FloatingOrb key={i} index={i} />
      ))}
      <ShootingStar delay={0} />
      <ShootingStar delay={4} />
      <ShootingStar delay={8} />
    </div>
  );
}
