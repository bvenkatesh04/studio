"use client";

import { motion } from 'framer-motion';
import Card from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
}

export default function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0,
  hover = true,
  interactive = false,
  glow = false
}: AnimatedCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  } : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={hover ? "hover" : undefined}
      {...hoverVariants}
      className="h-full"
    >
      <Card 
        className={cn(
          "h-full transition-all duration-300",
          interactive && "card-interactive cursor-pointer",
          glow && "hover-glow",
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}