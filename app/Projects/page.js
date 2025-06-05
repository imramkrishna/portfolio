"use client"
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);
    
    const projects = [
        {
            id: 1,
            title: "XCodeGen - AI Assistant",
            image: "./xcodegen.jpg",
            description: "XCodeGen – an AI code generator built to break the limits of current tools like ChatGPT, v0.dev, and Claude.I built this not just to make something faster.I built it because I was frustrated — by slow response times, by lack of real file structure, by tools that don’t feel like they understand how devs actually build software.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS", "JWT","TypeScript"],
            github: "https://github.com/imramkrishna/XCodeGen",
            live: "https://x-code-gen.vercel.app/",
            category: "Full Stack"
        },
        {
            id: 2,
            title: "Time Checker Chrome Extension",
            image: "./timechecker.jpeg",
            description: "This is a chrome extension that tracks all the websites visited and shows how much have you spent on them.",
            technologies: ["React Js", "Javascript", "Chrome Extension"],
            github: "https://github.com/imramkrishna/Website-Time-Tracker",
            live: "https://github.com/imramkrishna/Website-Time-Tracker",
            category: "Extension"
        },
        {
            id: 3,
            title: "ShopIt - Ecommerce Platform",
            image: "./shopit.png",
            description: "This is a comprehensive e-commerce platform with product catalog, shopping cart functionality, and secure payment processing using the MERN stack",
            technologies: ["React Js", "Javascript", "TypeScript","Context Api","Express","Authentication"],
            github: "https://github.com/imramkrishna/shopit.git",
            live: "https://shopit-blond.vercel.app",
            category: "Full Stack"
        },
        {
            id: 4,
            title: "Games Hub",
            image: "./gameshub.png",
            description: "Flappy Bird, Snake, and Tetris — all integrated into a single, modern website! This project was built using Next.js and incorporates seamless gameplay directly in the browser.",
            technologies: ["NextJS", "HTML canvas", "Tailwind CSS", "Shadcn/UI"],
            github: "https://github.com/imramkrishna/games",
            live: "https://games-nine-murex.vercel.app/",
            category: "Web App"
        },
        {
            id: 5,
            title: "Banking System",
            image: "./bank.avif",
            description: "This Full Stack Banking Application allows users to manage accounts, make transactions, and check balances securely. Built with Node.js, Express, Mongoose, and a responsive frontend.",
            technologies: ["MERN Stack", "Redux", "AWS"],
            github: "https://github.com/imramkrishna/BankingWebApplication",
            live: "https://bankingwebapplication.onrender.com",
            category: "Full Stack"
        },
        {
            id: 6,
            title: "Multi Vendor Admin Panel",
            image: "./admin.png",
            description: "A robust multi vendor admin panel for food, grocery and pharmacy delivery applications with admin panel",
            technologies: ["NextJs", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS", "JWT"],
            github: "https://github.com/imramkrishna/multivendor",
            live: "https://multivendorpanel.vercel.app/grocery/dashboard",
            category: "Full Stack"
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-[#161513] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                        My Projects
                        <span className="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 bottom-[-12px] left-1/2 transform -translate-x-1/2 rounded-full"></span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Recent work showcasing my full-stack development skills
                    </p>
                </div>
                
                {/* Project filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button className="px-4 py-2 rounded-full text-sm bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                        All Projects
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors">
                        Full Stack
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors">
                        Web Apps
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 transition-colors">
                        Extensions
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-gray-800 bg-opacity-40 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/600x400/161513/ffffff?text=Project+Image";
                                    }}
                                />
                                
                                {/* Project Category Badge */}
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                    {project.category}
                                </div>
                                
                                {/* Overlay with links */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center gap-5 opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gray-900 bg-opacity-80 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                        aria-label="GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gray-900 bg-opacity-80 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                        aria-label="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Project Links */}
                                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        View Project
                                        <FaArrowRight className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                    
                                    <div className="flex gap-3">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <FaGithub size={18} />
                                        </a>
                                        <a 
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* More Projects Link */}
                <div className="mt-16 text-center">
                    <a 
                        href="https://github.com/imramkrishna" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 hover:border-blue-500 rounded-full font-medium text-white transition-all duration-300 hover:bg-gray-800"
                    >
                        View More Projects on GitHub
                        <FaGithub className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;