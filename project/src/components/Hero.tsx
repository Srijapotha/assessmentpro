import React from 'react';
import { Button } from './ui/button';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hello Badge */}
            <div className="inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                Hello!
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                I'm <span className="text-gray-500 dark:text-gray-400">Anish</span>
                <span className="inline-block ml-2">👋</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  UI/UX Designer, Front-End Developer & Thinker.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Based in India.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium"
              >
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 rounded-lg font-medium border-gray-800 dark:border-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900"
              >
                Get in Touch!
              </Button>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Yellow circular background */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 absolute top-4 right-4"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10">
                <img
                  src="/image.png"
                  alt="Anish Kumar Sinha - UI/UX Designer & Front-End Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Email contact - vertical text */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden xl:block z-20">
          <a 
            href="mailto:sinhaanishkumar@outlook.com"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
          >
            sinhaanishkumar@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
}