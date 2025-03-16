import React from 'react';
import { FaCode, FaDatabase, FaReact, FaServer, FaBriefcase, FaGraduationCap, FaLayerGroup } from 'react-icons/fa';

const Page = () => {
    return (
        <section className="bg-[#161513] text-white py-16 md:py-24" id="about">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 inline-block relative">
                        About Me
                        <div className="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 bottom-[-12px] left-1/2 transform -translate-x-1/2 rounded-full"></div>
                    </h2>
                    <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto">
                        Full Stack Developer with expertise in MERN stack and Next.js, building modern web applications
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    {/* Experience Timeline */}
                    <div className="lg:col-span-7 lg:order-1 order-2">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 flex items-center mb-8">
                                <FaLayerGroup className="mr-3" />
                                Experience Timeline
                            </h3>
                            <div className="space-y-8">
                                {/* Experience Item 1 */}
                                <div className="relative pl-8 border-l-2 border-blue-500/30 pb-8">
                                    <div className="absolute -left-3 top-0 bg-blue-500 rounded-full p-1.5 shadow-md">
                                        <FaBriefcase className="text-white text-sm" />
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-opacity-60">
                                        <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                                            <h4 className="text-lg font-medium text-white">Full Stack Developer</h4>
                                            <span className="bg-blue-500 bg-opacity-20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                                                2024 - Present
                                            </span>
                                        </div>
                                        <p className="text-gray-500 mb-2 italic">Blue Fox Pvt. Ltd.</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                        I work as a Full Stack Engineer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and database management. I build real-world projects like food delivery and restaurant-booking applications, handling everything from frontend design to backend logic. I ensure seamless user experiences, scalable architecture, and efficient code to deliver high-quality solutions.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 2 */}
                                <div className="relative pl-8 border-l-2 border-blue-500/30 pb-8">
                                    <div className="absolute -left-3 top-0 bg-blue-500 rounded-full p-1.5 shadow-md">
                                        <FaBriefcase className="text-white text-sm" />
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-opacity-60">
                                        <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                                            <h4 className="text-lg font-medium text-white">NextJs MERN Stack Intern</h4>
                                            <span className="bg-blue-500 bg-opacity-20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                                                2024-2025
                                            </span>
                                        </div>
                                        <p className="text-gray-500 mb-2 italic">Blue Fox Pvt. Ltd.</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                        As a Software Development Intern, I had the opportunity to work on two key projects: Restro Pro System and Food Delivery System. Both systems were developed using the MERN stack and Next.js , providing real-time, responsive, and scalable web applications for the food service industry.
                                        </p>
                                    </div>
                                </div>

                                {/* Experience Item 3 */}
                                <div className="relative pl-8 border-l-2 border-blue-500/30">
                                    <div className="absolute -left-3 top-0 bg-blue-500 rounded-full p-1.5 shadow-md">
                                        <FaGraduationCap className="text-white text-sm" />
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-opacity-60">
                                        <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                                            <h4 className="text-lg font-medium text-white">Computer Engineering Degree</h4>
                                            <span className="bg-blue-500 bg-opacity-20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                                                2024 - 2029
                                            </span>
                                        </div>
                                        <p className="text-gray-500 mb-2 italic">Tribhuvan University, Institute of Engineering</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Specialized in software engineering with focus on web development and
                                            database systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Bio */}
                    <div className="lg:col-span-5 lg:order-2 order-1">
                        <div className="bg-gray-800 bg-opacity-30 rounded-2xl p-8 border border-gray-700 border-opacity-50 h-auto min-h-[400px] max-h-[550px] overflow-auto">
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Professional Profile</h3>
                            <p className="text-xl font-medium mb-6 text-gray-200 border-l-4 border-blue-500 pl-4">
                                I am a passionate coder diving deep into the world of software development, 
                                constantly exploring new technologies and building innovative solutions.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                As a full-stack developer with over 3 years of experience, I specialize in 
                                building modern web applications using the MERN stack and Next.js. My focus is on 
                                creating clean, efficient, and maintainable code that delivers exceptional user experiences.
                            </p>
                            
                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">3+</div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Years</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">90+</div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Projects</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center justify-center">
                        <FaCode className="mr-3" />
                        Technical Expertise
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Skill 1 */}
                        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 border-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 hover:border-opacity-30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaCode className="text-blue-400 mr-3 text-xl" />
                                    <h4 className="font-medium">Full Stack</h4>
                                </div>
                                <span className="text-blue-400 font-semibold">95%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        {/* Skill 2 */}
                        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 border-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 hover:border-opacity-30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaReact className="text-blue-400 mr-3 text-xl" />
                                    <h4 className="font-medium">MERN Stack</h4>
                                </div>
                                <span className="text-blue-400 font-semibold">90%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        {/* Skill 3 */}
                        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 border-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 hover:border-opacity-30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaServer className="text-blue-400 mr-3 text-xl" />
                                    <h4 className="font-medium">Next.js</h4>
                                </div>
                                <span className="text-blue-400 font-semibold">85%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        {/* Skill 4 */}
                        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 border-opacity-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 hover:border-opacity-30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaDatabase className="text-blue-400 mr-3 text-xl" />
                                    <h4 className="font-medium">Database</h4>
                                </div>
                                <span className="text-blue-400 font-semibold">88%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '88%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
