import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { ThemeProvider } from './ThemeProvider';

export function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </ThemeProvider>
  );
}