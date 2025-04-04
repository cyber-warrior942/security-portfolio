'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
    setTheme(savedTheme);
    
    if (savedTheme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', '#070b12');
      root.style.setProperty('--bg-primary-dark', '#05080d');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-primary-dark', '#dee2e6');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '#070b12');
      root.style.setProperty('--bg-primary-dark', '#05080d');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-primary-dark', '#dee2e6');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-navy-600 hover:bg-navy-500 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <FaMoon className="w-6 h-6 text-white" />
        ) : (
          <FaSun className="w-6 h-6 text-white" />
        )}
      </button>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 