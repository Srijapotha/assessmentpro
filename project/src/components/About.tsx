import React from 'react';
import { Separator } from './ui/separator';

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Decorative elements with pointing hand */}
          <div className="relative hidden lg:block">
            {/* Background decorative shapes */}
            <div className="absolute inset-0">
              <img
                src="/vector-1-1.svg"
                alt=""
                className="w-64 h-64 opacity-20 dark:opacity-10 absolute top-0 left-0"
              />
              <img
                src="/vector-4.svg"
                alt=""
                className="w-48 h-48 opacity-30 dark:opacity-20 absolute top-16 left-16"
              />
              <img
                src="/vector-5.svg"
                alt=""
                className="w-32 h-32 opacity-25 dark:opacity-15 absolute top-32 left-32"
              />
            </div>
            
            {/* Pointing hand illustration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-16 bg-amber-200 dark:bg-amber-300 rounded-2xl flex items-center justify-end pr-4 shadow-lg">
                <div className="text-2xl">👉</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="text-6xl lg:text-7xl">T</span>his is it. ;)
              </h2>
              
              <Separator className="w-full max-w-2xl bg-gray-300 dark:bg-gray-600" />
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Anish Kr. Sinha is an Indian <strong className="text-gray-900 dark:text-white">UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences. Typically, he's Driven & permanently Curious. He's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
              </p>
              
              <p className="text-lg leading-relaxed">
                He holds a <strong className="text-gray-900 dark:text-white">bachelor degree in Computer Applications.</strong> During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he's based in Bihar, <strong className="text-gray-900 dark:text-white">India</strong>. Where he's working as an independent creative.
              </p>
              
              <p className="text-lg leading-relaxed">
                His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <strong className="text-gray-900 dark:text-white">3D floor plan.</strong>
              </p>
              
              <p className="text-lg leading-relaxed">
                When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
              </p>
            </div>

            <Separator className="w-1/2 bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}