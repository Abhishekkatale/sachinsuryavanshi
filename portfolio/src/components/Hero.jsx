import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                className="relative z-10 px-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Photo */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end order-1 md:order-2"
                    >
                        <div className="relative">
                            {/* Gradient Border Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink rounded-full blur-xl opacity-75 animate-pulse"></div>

                            {/* Profile Image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src={profileImage}
                                    alt="Sachin Suryavanshi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="text-primary-400 text-lg md:text-xl font-semibold">Hello, I'm</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            <span className="gradient-text">Sachin Suryavanshi</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-300 mb-4"
                        >
                            Full Stack Developer & Software Engineer
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg text-gray-400 mb-8"
                        >
                            Passionate about building innovative solutions with React, Node.js, and AI/ML technologies
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
                        >
                            <a href="#contact" className="btn-primary">
                                Get In Touch
                            </a>
                            <a href="#projects" className="btn-secondary">
                                View My Work
                            </a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-6 justify-center md:justify-start text-2xl"
                        >
                            <a
                                href="https://github.com/Sachinsuryavanshi7774"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sachin-suryavanshi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:sachindn7774@gmail.com"
                                className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="tel:+917774034942"
                                className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <FaPhone />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary-400 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
