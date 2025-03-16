"use client"
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setFormStatus({
                    show: true,
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Error:', error);
            setFormStatus({
                show: true,
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setFormStatus({ show: false, type: '', message: '' });
            }, 5000);
        }
    };

    return (
        <section className="py-20 bg-[#161513] text-white" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                        Get In Touch
                        <span className="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 bottom-[-12px] left-1/2 transform -translate-x-1/2 rounded-full"></span>
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Let's collaborate on your next project
                    </p>
                </div>

                {/* Notification */}
                {formStatus.show && (
                    <div className={`mb-8 px-4 py-3 rounded-lg flex items-center ${
                        formStatus.type === 'success' 
                            ? 'bg-green-800/30 border border-green-700 text-green-400' 
                            : 'bg-red-800/30 border border-red-700 text-red-400'
                    }`}>
                        {formStatus.type === 'success' 
                            ? <FaCheckCircle className="mr-2" /> 
                            : <FaExclamationCircle className="mr-2" />
                        }
                        {formStatus.message}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-gray-800/30 rounded-2xl p-2 backdrop-blur-lg shadow-xl">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-8 rounded-xl border border-gray-700/50">
                        <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
                        <p className="text-gray-400 mb-8">Feel free to reach out through any of these channels</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <FaEnvelope className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-300">Email</h4>
                                    <a href="mailto:itsramky234@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        itsramky234@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <FaPhone className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-300">Phone</h4>
                                    <a href="tel:+9779703577211" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        +977 9703577211
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                                    <FaMapMarkerAlt className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-300">Location</h4>
                                    <p className="text-gray-400">
                                        Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-gray-700/50">
                            <h4 className="text-lg font-medium text-gray-300 mb-4">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com/imramkrishna" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/ramkrishnaprofile" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href="https://x.com/ramkrishnacode" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 p-8">
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Your Name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-gray-800/70 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                                
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        className="w-full bg-gray-800/70 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>
                            
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required 
                                    className="w-full bg-gray-800/70 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>
                            
                            <div className="relative">
                                <textarea 
                                    name="message" 
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-gray-800/70 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <FaPaperPlane className="text-sm animate-pulse" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;