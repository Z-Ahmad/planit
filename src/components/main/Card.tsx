import { ReactNode } from "react";
import { motion } from "motion/react";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <motion.div
      className="card bg-background/20 backdrop-blur-xs px-6 py-4
      shadow-sm shadow-background-hover border border-background-secondary rounded-box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      layout
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 150,
        damping: 20,
        layout: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="card-body"
        layout
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
