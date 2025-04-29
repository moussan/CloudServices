import React from 'react';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-300 dark:border-gray-700 text-center text-sm mt-4">
    <p className="py-2">© {new Date().getFullYear()} Cloud Services Explorer</p>
  </footer>
);

export default Footer; 