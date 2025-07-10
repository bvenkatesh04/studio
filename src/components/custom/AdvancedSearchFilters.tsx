"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, Filter, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SearchFilters {
  query: string;
  category: string;
  difficulty: string;
  duration: number[];
  rating: number[];
  tags: string[];
}

interface AdvancedSearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const categories = [
  'All Categories',
  'Programming',
  'DevOps',
  'Software Testing',
  'Cloud Computing',
  'Data Engineering'
];

const difficulties = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced'
];

const popularTags = [
  'JavaScript', 'Python', 'Java', 'AWS', 'Docker', 'Kubernetes',
  'React', 'Node.js', 'Testing', 'Automation', 'CI/CD', 'DevOps'
];

export default function AdvancedSearchFilters({
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}: AdvancedSearchFiltersProps) {
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const addTag = (tag: string) => {
    if (!localFilters.tags.includes(tag)) {
      updateFilter('tags', [...localFilters.tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    updateFilter('tags', localFilters.tags.filter(t => t !== tag));
  };

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      query: '',
      category: 'All Categories',
      difficulty: 'All Levels',
      duration: [0, 300],
      rating: [0, 5],
      tags: []
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = 
    localFilters.category !== 'All Categories' ||
    localFilters.difficulty !== 'All Levels' ||
    localFilters.duration[0] > 0 || localFilters.duration[1] < 300 ||
    localFilters.rating[0] > 0 || localFilters.rating[1] < 5 ||
    localFilters.tags.length > 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={localFilters.query}
            onChange={(e) => updateFilter('query', e.target.value)}
            placeholder="Search courses..."
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          {hasActiveFilters && (
            <Badge variant="secondary" className="text-xs">
              {Object.values(localFilters).flat().filter(Boolean).length - 2} filters
            </Badge>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={onToggle}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card className="mb-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Advanced Filters</CardTitle>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Clear All
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={localFilters.category}
                      onValueChange={(value) => updateFilter('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select
                      value={localFilters.difficulty}
                      onValueChange={(value) => updateFilter('difficulty', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficulties.map((difficulty) => (
                          <SelectItem key={difficulty} value={difficulty}>
                            {difficulty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Duration (minutes)</Label>
                    <div className="px-2">
                      <Slider
                        value={localFilters.duration}
                        onValueChange={(value) => updateFilter('duration', value)}
                        max={300}
                        min={0}
                        step={15}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{localFilters.duration[0]} min</span>
                        <span>{localFilters.duration[1]} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Minimum Rating</Label>
                    <div className="px-2">
                      <Slider
                        value={localFilters.rating}
                        onValueChange={(value) => updateFilter('rating', value)}
                        max={5}
                        min={0}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>{localFilters.rating[0]} ⭐</span>
                        <span>{localFilters.rating[1]} ⭐</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Button
                        key={tag}
                        variant={localFilters.tags.includes(tag) ? "default" : "outline"}
                        size="sm"
                        onClick={() => 
                          localFilters.tags.includes(tag) ? removeTag(tag) : addTag(tag)
                        }
                        className="text-xs"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                  
                  {localFilters.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-sm text-muted-foreground">Selected:</span>
                      {localFilters.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTag(tag)}
                            className="ml-1 h-auto p-0 text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}