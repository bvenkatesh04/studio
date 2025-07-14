"use client";

import Progress from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  total,
  className,
  showBadge = true,
  size = 'md',
  animated = true
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((progress / total) * 100) : 0;
  const isCompleted = progress >= total && total > 0;

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const ProgressComponent = animated ? motion.div : 'div';
  const progressProps = animated ? {
    initial: { width: 0 },
    animate: { width: `${percentage}%` },
    transition: { duration: 1, ease: "easeOut" }
  } : {};

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <Circle className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="text-sm font-medium">
            Progress: {progress}/{total}
          </span>
        </div>
        
        {showBadge && (
          <Badge 
            variant={isCompleted ? "default" : "secondary"}
            className="text-xs"
          >
            {percentage}%
          </Badge>
        )}
      </div>
      
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <ProgressComponent
          className={cn(
            "h-full transition-all duration-300 rounded-full",
            isCompleted 
              ? "bg-green-600" 
              : "bg-primary"
          )}
          style={{ width: animated ? undefined : `${percentage}%` }}
          {...progressProps}
        />
      </div>
    </div>
  );
}