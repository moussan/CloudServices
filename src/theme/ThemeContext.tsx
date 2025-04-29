import React, { createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';

export type Theme = 'light' | 'dark' | 'dark-neon' | 'pastel';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}; 