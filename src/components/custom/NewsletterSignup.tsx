"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, CheckCircle, Loader2, Gift, TrendingUp, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function NewsletterSignup({ 
  variant = 'default', 
  className = "" 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed! 🎉",
        description: "Welcome to the TechFarm community. Check your email for a welcome message.",
      });
      setEmail('');
    }, 1500);
  };

  const benefits = [
    { icon: BookOpen, text: "Latest course updates" },
    { icon: TrendingUp, text: "Industry insights" },
    { icon: Gift, text: "Exclusive discounts" }
  ];

  if (variant === 'compact') {
    return (
      <Card className={`warm-glow ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold text-sm">Stay Updated</h3>
              <p className="text-xs text-muted-foreground">Get the latest courses & insights</p>
            </div>
          </div>
          
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-green-600"
            >
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Subscribed!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="flex-1 h-8 text-sm"
                required
              />
              <Button 
                type="submit" 
                size="sm" 
                disabled={isSubmitting}
                className="h-8 px-3"
              >
                {isSubmitting ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  'Join'
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Mail className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium">Stay updated:</span>
        
        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-green-600"
          >
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Subscribed!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-40 h-8 text-sm"
              required
            />
            <Button 
              type="submit" 
              size="sm" 
              disabled={isSubmitting}
              className="h-8"
            >
              {isSubmitting ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <Card className={`warm-glow ${className}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl">Stay Ahead of the Curve</CardTitle>
        <CardDescription>
          Join 10,000+ tech professionals getting weekly insights, course updates, and exclusive content.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-sm"
            >
              <benefit.icon className="h-4 w-4 text-primary" />
              <span>{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-green-600 mb-1">Welcome to TechFarm!</h3>
            <p className="text-sm text-muted-foreground">
              Check your email for a welcome message with exclusive content.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe Free'
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Badge variant="outline" className="text-xs">Free</Badge>
              <span>•</span>
              <span>No spam</span>
              <span>•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}