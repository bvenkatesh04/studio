"use client";

import { motion } from 'framer-motion';

interface TechFarmLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function TechFarmLogo({ size = 40, className = "", animated = true }: TechFarmLogoProps) {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const leafVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const LogoContent = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#gradient1)"
        stroke="currentColor"
        strokeWidth="2"
        variants={animated ? logoVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
      
      {/* Tech Circuit Pattern */}
      <motion.path
        d="M20 30 L35 30 L35 20 L50 20 L50 35 L65 35 L65 25 L80 25"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={animated ? pathVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
      
      <motion.path
        d="M20 70 L30 70 L30 60 L45 60 L45 75 L60 75 L60 65 L80 65"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={animated ? pathVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />

      {/* Central Tree/Growth Symbol */}
      <motion.g
        variants={animated ? leafVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      >
        {/* Tree Trunk */}
        <rect
          x="47"
          y="45"
          width="6"
          height="25"
          fill="rgba(255,255,255,0.9)"
          rx="3"
        />
        
        {/* Leaves/Growth Elements */}
        <ellipse
          cx="42"
          cy="40"
          rx="8"
          ry="12"
          fill="rgba(34, 197, 94, 0.8)"
          transform="rotate(-20 42 40)"
        />
        <ellipse
          cx="58"
          cy="40"
          rx="8"
          ry="12"
          fill="rgba(34, 197, 94, 0.8)"
          transform="rotate(20 58 40)"
        />
        <ellipse
          cx="50"
          cy="35"
          rx="10"
          ry="15"
          fill="rgba(34, 197, 94, 0.9)"
        />
      </motion.g>

      {/* Tech Nodes */}
      <motion.circle
        cx="25"
        cy="25"
        r="3"
        fill="rgba(34, 197, 94, 1)"
        variants={animated ? leafVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
      <motion.circle
        cx="75"
        cy="30"
        r="3"
        fill="rgba(34, 197, 94, 1)"
        variants={animated ? leafVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
      <motion.circle
        cx="25"
        cy="75"
        r="3"
        fill="rgba(34, 197, 94, 1)"
        variants={animated ? leafVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />
      <motion.circle
        cx="75"
        cy="70"
        r="3"
        fill="rgba(34, 197, 94, 1)"
        variants={animated ? leafVariants : {}}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      />

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(31, 41, 55, 0.9)" />
          <stop offset="50%" stopColor="rgba(17, 24, 39, 0.8)" />
          <stop offset="100%" stopColor="rgba(31, 41, 55, 0.9)" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}