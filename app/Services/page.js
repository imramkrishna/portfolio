import React from 'react';
import { FaCode, FaDatabase, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaCode className="text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />,
            title: "Frontend Development",
            description: "Building responsive web applications using React.js and Next.js with modern UI/UX principles",
            skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI"]
        },
        {
            id: 2,
            icon: <FaServer className="text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />,
            title: "Backend Development",
            description: "Developing robust server-side applications with Node.js and Express.js",
            skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication"]
        },
        {
            id: 3,
            icon: <FaDatabase className="text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />,
            title: "Database Management",
            description: "Designing and optimizing database structures for scalable applications",
            skills: ["MongoDB", "MySQL", "Database Design", "Data Modeling", "Query Optimization"]
        },
        {
            id: 4,
            icon: <FaMobile className="text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />,
            title: "Full Stack Solutions",
            description: "Delivering end-to-end web applications with modern tech stack",
            skills: ["MERN Stack", "Next.js", "AWS", "Docker", "CI/CD"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-[#161513] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                        My Services
                        <span className="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 bottom-[-12px] left-1/2 transform -translate-x-1/2 rounded-full"></span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Professional development services tailored to your project needs
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div 
                            key={service.id} 
                            className="group bg-gray-800 bg-opacity-40 rounded-2xl p-8 border border-gray-700 border-opacity-50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 transition-all duration-500 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 relative overflow-hidden"
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"></div>
                            
                            {/* Service Icon */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="w-16 h-16 rounded-full bg-gray-900 bg-opacity-70 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaArrowRight className="text-gray-400" />
                                </div>
                            </div>
                            
                            {/* Service Title */}
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            
                            {/* Service Description */}
                            <p className="text-gray-400 mb-8 group-hover:text-gray-200 transition-colors duration-300">
                                {service.description}
                            </p>
                            
                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.skills.map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 bg-gray-900 bg-opacity-50 rounded-full text-sm font-medium text-gray-300 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call To Action */}
                <div className="mt-16 text-center">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1"
                    >
                        Discuss Your Project
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;