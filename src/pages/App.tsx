import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '../theme/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceExplorer from '../components/ServiceExplorer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'dark-neon' | 'pastel'>('light');

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeProvider value={themeValue}>
      <div className={`app theme-${theme} min-h-screen flex flex-col`}>        
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <ServiceExplorer />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App; 