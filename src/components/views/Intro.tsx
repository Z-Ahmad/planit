import {motion} from "motion/react"
import { useNavigationActions } from '../../stores/navigation'

export const Intro = () => {
  const { goToBlockSetup } = useNavigationActions()

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
          <h1 className="text-4xl font-bold text-royal-purple">Welcome to Planit</h1>
        </div>
        <p className="text-lg text-text-primary/80">
          An autonomous task scheduling companion that makes planning <span className="text-royal-purple font-semibold italic">stellar</span> ✨
        </p>
      </div>

      <div className="divider" />

      <div className="space-y-4">
        <div className="flex items-center gap-2 justify-center">
          <div className="badge badge-primary">Simple</div>
          <div className="badge badge-secondary">Fast</div>
          <div className="badge badge-accent">Smart</div>
        </div>

        <p className="text-text-primary/70">
          No complicated features. Just intelligent scheduling. Our advanced optimization engine automatically generates efficient schedules based on your tasks
          and available time blocks.
        </p>
      </div>

      <button className="btn btn-primary w-fit mx-auto" onClick={goToBlockSetup}>
        Get Started
      </button>
    </div>
  );
};
