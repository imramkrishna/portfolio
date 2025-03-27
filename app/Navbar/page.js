"use client"
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is in view
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to determine which section is currently in view
  const updateActiveSection = () => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const scrollPosition = window.scrollY + 150; // Adding offset for better detection

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const offsetTop = section.offsetTop;
        if (scrollPosition >= offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const sectionId = href.substring(1); // Remove the # from href
    setActiveSection(sectionId);
    
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80; // adjust based on your navbar height
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#161513]/90 backdrop-blur-md shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" 
               className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-blue-300 transition-all duration-300">
              Ram Krishna
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={index}>
                    <a 
                      href={`#${sectionId}`} 
                      onClick={handleClick}
                      className={`px-4 py-2 rounded-md transition-all relative group
                        ${isActive 
                          ? 'text-white font-medium' 
                          : 'text-gray-300 hover:text-white'}`}
                    >
                      {item}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links - Desktop Only */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://github.com/imramkrishna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/ramkrishnaprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://x.com/ramkrishnacode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="#contact" 
              onClick={handleClick}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              Connect With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#161513] absolute w-full left-0 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 py-6' 
            : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="space-y-4 mb-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, '');
              const isActive = activeSection === sectionId;
              return (
                <li key={index}>
                  <a 
                    href={`#${sectionId}`} 
                    onClick={handleClick}
                    className={`block px-4 py-2 rounded-md transition-colors
                      ${isActive 
                        ? 'text-white bg-gray-800 border-l-2 border-blue-500' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
            <a 
              href="https://github.com/imramkrishna" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ramkrishnaprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/ramkrishnacode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;