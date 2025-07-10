"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import type { Course } from '@/types';

type FavoritesContextType = {
  favorites: string[];
  addToFavorites: (courseId: string) => void;
  removeFromFavorites: (courseId: string) => void;
  isFavorite: (courseId: string) => boolean;
  toggleFavorite: (courseId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('techfarm-favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techfarm-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (courseId: string) => {
    setFavorites(prev => [...prev, courseId]);
  };

  const removeFromFavorites = (courseId: string) => {
    setFavorites(prev => prev.filter(id => id !== courseId));
  };

  const isFavorite = (courseId: string) => {
    return favorites.includes(courseId);
  };

  const toggleFavorite = (courseId: string) => {
    if (isFavorite(courseId)) {
      removeFromFavorites(courseId);
    } else {
      addToFavorites(courseId);
    }
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}