import { motion } from "motion/react";
import { useNavigationActions } from "../../stores/navigation";

export const TaskSetup = () => {
  return (
    <div className="flex flex-col gap-6 max-w-lg text-center">
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-3">
          <motion.img
            src="/logo-small.svg"
            alt="Planit Logo"
            className="w-16 h-16 md:w-20 md:h-20"
            initial={{ scale: 0.2, rotateY: 180 }}
            animate={{
              scale: 1,
              rotateY: 0,
              y: [0, -2, 0]
            }}
            transition={{
              scale: { duration: 0.5 },
              rotateY: { duration: 0.5 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              type: "tween",
              stiffness: 100,
              damping: 20
            }}
          />
          <h1 className="text-lg font-bold text-royal-purple">Let's begin</h1>
        </div>
        <p className="text-lg text-text-primary/80">
          Before we get started, we need to know a few things about you.
        </p>
      </div>

      <div className="divider" />

      <div className="space-y-4">
        
      </div>  
    </div>
  );
};
