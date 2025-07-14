"use client";

import { motion } from 'framer-motion';

interface AnimatedCourseActionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedCourseAction({ 
  children, 
  delay = 0 
}: AnimatedCourseActionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}