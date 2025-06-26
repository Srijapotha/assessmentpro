import React from 'react';

export function SocialLinks() {
  const socialLinks = [
    { 
      icon: '/group-12.png', 
      href: '#', 
      label: 'Facebook',
      className: 'w-8 h-8'
    },
    { 
      icon: '/group-7.png', 
      href: '#', 
      label: 'Instagram',
      className: 'w-8 h-8'
    },
    { 
      icon: '/group-8.png', 
      href: '#', 
      label: 'Twitter',
      className: 'w-8 h-8'
    },
    { 
      icon: '/group-11.png', 
      href: '#', 
      label: 'LinkedIn',
      className: 'w-8 h-8'
    },
    { 
      icon: '/vector-1.svg', 
      href: '#', 
      label: 'Behance',
      className: 'w-6 h-6',
      isBordered: true
    },
    { 
      icon: '/koo-black-icon-yxp27c-1.png', 
      href: '#', 
      label: 'Koo',
      className: 'w-6 h-6',
      isBordered: true
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {socialLinks.map((link, index) => (
        <a
          key={`${link.label}-${index}`}
          href={link.href}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            link.isBordered 
              ? 'border-2 border-gray-800 dark:border-gray-200 hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-gray-200 dark:hover:border-gray-200' 
              : 'hover:opacity-80'
          }`}
          aria-label={link.label}
        >
          <img
            src={link.icon}
            alt={link.label}
            className={`${link.className} object-contain`}
          />
        </a>
      ))}
    </div>
  );
}