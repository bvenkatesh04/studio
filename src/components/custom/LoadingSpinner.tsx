"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className = "",
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className={cn(
          "border-2 border-primary/20 border-t-primary rounded-full",
          sizeClasses[size]
        )}
      />
      {text && (
        <div className="flex space-x-1">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={dotVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.1}s` }}
              className="text-sm text-muted-foreground"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}