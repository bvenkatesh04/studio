"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  shimmer?: boolean;
  pulse?: boolean;
  bounce?: boolean;
  asChild?: boolean;
  [key: string]: any;
}

export default function AnimatedButton({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  shimmer = false,
  pulse = false,
  bounce = false,
  asChild = false,
  ...props
}: AnimatedButtonProps) {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        asChild={asChild}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          shimmer && "btn-animated",
          pulse && "animate-pulse-glow",
          bounce && "animate-bounce-in",
          "hover:shadow-lg active:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}