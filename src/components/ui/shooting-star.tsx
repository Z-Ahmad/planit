import { useEffect, useState, useCallback } from "react";

export const ShootingStar = () => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, angle: 0 });

  const generateNewStar = useCallback(() => {
    // Start from left side, slightly off screen
    const startX = -10;
    // Random Y position
    const startY = Math.random() * 70; // Keep within top 70% of screen
    // Random angle between -15 and 15 degrees for slight variation
    const angle = Math.random() * 30 - 15;
    
    setCoords({ x: startX, y: startY, angle });
    setVisible(true);
    // Increased timeout to 2000ms to ensure animation completes
    setTimeout(() => setVisible(false), 2000);
  }, []);

  // Manual trigger with spacebar
  useEffect(() => {
    generateNewStar();
  }, []);

  // Automatic animation
  useEffect(() => {
    const interval = Math.random() * (480000 - 120000) + 120000;
    const timeout = setTimeout(generateNewStar, interval);
    return () => clearTimeout(timeout);
  }, [generateNewStar]);

  if (!visible) return null;

  return (
    <div
      className="absolute z-0 pointer-events-none"
      style={{
        left: `${coords.x}vw`,
        top: `${coords.y}vh`,
        transform: `rotate(${coords.angle}deg)`,
      }}
    >
      <div className="relative">
        {/* Main star - bigger and brighter */}
        <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
        {/* Comet tail - thinner and more faded */}
        <div className="w-[200px] h-[1px] animate-shoot bg-gradient-to-l from-transparent via-white to-transparent opacity-50" />
      </div>
    </div>
  );
}; 