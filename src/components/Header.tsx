import React from 'react';
import { useTheme, Theme } from '../theme/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <header className="border-b border-gray-300 dark:border-gray-700 flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold py-2">Cloud Services Explorer</h1>
      <select
        value={theme}
        onChange={handleChange}
        className="border rounded p-1 bg-transparent"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="dark-neon">Dark Neon</option>
        <option value="pastel">Pastel</option>
      </select>
    </header>
  );
};

export default Header; 