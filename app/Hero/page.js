"use client"
import React from 'react';
import Image from 'next/image';
import profile from "../../public/profile.svg";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const handleResumeDownload = () => {
    window.open('./resume.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#161513] overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 30 + 10}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-6">
          <div className="w-full lg:w-3/5 animate-fadeIn">
           
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                I am Ram Krishna
              </span>
              <span className="text-white">software engineer based in Nepal.</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              I am a full stack developer working at Blue Fox Pvt. Ltd specializing in 
              MERN stack and Next.js, building modern web applications that deliver 
              exceptional user experiences.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20 group"
              >
                Connect With Me
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-blue-500 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10 group"
              >
                Download CV
                <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 max-w-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-500">3+</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">Years of Experience</p>
              </div>
              <div className="text-center border-x border-gray-700">
                <h2 className="text-3xl font-bold text-blue-500">90+</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-500">15+</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">Clients</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-floatSlow">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-gray-800 rounded-full p-4 border-2 border-gray-700 overflow-hidden">
                <Image 
                  src={profile} 
                  alt="Ram Krishna" 
                  width={288}
                  height={288}
                  className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full" 
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                  Available for hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add this style tag for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes move {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
          100% { transform: translate(0, 0); }
        }
        
        .animate-floatSlow {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .absolute {
          animation: move ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;