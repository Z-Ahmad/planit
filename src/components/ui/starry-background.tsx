import { useEffect, useState } from "react";
import { ShootingStar } from "./shooting-star";

const generateStars = (count: number) => {
  const stars = [];
  const colors = [
    "#FFF",    // white
    "#FFF",    // white
    "#FFF",    // white
    "#FFF",    // white
    "#FFF",    // white
    "#FFD700", // gold
    "#87CEEB", // sky blue
    "#FFC0CB", // pink
    "#A36AEF"  // amethyst
  ];
  
  // Increase the field size for larger screens
  const fieldSize = 4000;
  
  for (let i = 0; i < count; i++) {
    const animationClass = Math.random() < 0.3 ? 'animate-twinkle1' : 
                          Math.random() < 0.6 ? 'animate-twinkle2' : 
                          'animate-twinkle3';
    stars.push({
      x: Math.random() * fieldSize,
      y: Math.random() * fieldSize,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: (Math.random() * 0.3 + 0.5).toFixed(2),
      animation: animationClass,
    });
  }
  return {
    shadows: stars.map((star) => `${star.x}px ${star.y}px ${star.color}`).join(","),
    animations: stars.map(star => star.animation),
  };
};

export const StarryBackground = () => {
  const [stars1] = useState(() => generateStars(1000)); // Increased star count
  const [stars2] = useState(() => generateStars(300));
  const [stars3] = useState(() => generateStars(150));

  return (
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a1b26_0%,_#16161e_100%)] overflow-hidden">
      <div className={`absolute w-[1px] h-[1px] bg-transparent animate-animStar ${stars1.animations[0]}`} style={{ boxShadow: stars1.shadows }}>
        <div className="absolute top-[4000px] w-[1px] h-[1px] bg-transparent" style={{ boxShadow: stars1.shadows }} />
      </div>
      <div className={`absolute w-[2px] h-[2px] bg-transparent animate-animStar ${stars2.animations[0]}`} style={{ boxShadow: stars2.shadows }}>
        <div className="absolute top-[4000px] w-[2px] h-[2px] bg-transparent" style={{ boxShadow: stars2.shadows }} />
      </div>
      <div className={`absolute w-[3px] h-[3px] bg-transparent animate-animStar ${stars3.animations[0]}`} style={{ boxShadow: stars3.shadows }}>
        <div className="absolute top-[4000px] w-[3px] h-[3px] bg-transparent" style={{ boxShadow: stars3.shadows }} />
      </div>
      <ShootingStar />
    </div>
  );
};
