"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export default function ResponsiveContainer({ 
  children, 
  className = "", 
  animate = true,
  delay = 0 
}: ResponsiveContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  if (animate) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("container-responsive", className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn("container-responsive", className)}>
      {children}
    </div>
  );
}