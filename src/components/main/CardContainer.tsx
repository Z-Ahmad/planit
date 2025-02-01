import { Card } from "./Card";
import { Intro } from "../views/Intro";
import { Login } from "../views/Login";
import { BlockSetup } from "../views/BlockSetup";
import { TaskSetup } from "../views/TaskSetup";
import { useCurrentView } from '../../stores/navigation'
import { AnimatePresence, motion } from "motion/react";

export const CardContainer = () => {
  const currentView = useCurrentView()

  return (
    <Card>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentView}
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ 
            type: "tween",
            stiffness: 0,
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, delay: 0.2 },
            default: { duration: 0.3 }
          }}
        >
          {currentView === "intro" && <Intro />}
          {currentView === "login" && <Login />}
          {currentView === "block-setup" && <BlockSetup />}
          {currentView === "task-setup" && <TaskSetup />}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
} 