import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon: Icon,
  download,
  target,
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-600 to-primary-500 text-cream-50 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 hover:-translate-y-0.5",
    secondary:
      "border border-primary-500/40 text-cream-100 hover:bg-primary-600/20 hover:border-primary-400/60 hover:-translate-y-0.5",
    ghost:
      "text-cream-300 hover:text-cream-100 hover:bg-white/5",
    gold: "bg-gradient-to-r from-gold-dark to-gold text-dark-bg font-semibold hover:from-gold hover:to-gold-light shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5",
  };

  const content = (
    <motion.span
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
