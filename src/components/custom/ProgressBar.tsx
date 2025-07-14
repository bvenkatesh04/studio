"use client";

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({
  progress,
  total,
  className,
  showBadge = true,
  size = 'md'
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((progress / total) * 100) : 0;
  const isCompleted = progress >= total && total > 0;

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };


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
      
      <Progress
        value={percentage}
        className={cn(
          sizeClasses[size],
          isCompleted && "text-green-600"
        )}
      />
    </div>
  );
}