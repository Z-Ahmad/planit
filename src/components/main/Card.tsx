import { ReactNode } from "react";
import {motion} from "motion/react"

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div 
      className="card bg-background/20 backdrop-blur-xs px-6
      shadow-sm shadow-background-hover border border-background-secondary rounded-box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.7}}
    >
      <div className="card-body">
        {children}
      </div>
    </motion.div>
  );
}
