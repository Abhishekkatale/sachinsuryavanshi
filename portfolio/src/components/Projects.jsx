import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Online Smart Voting System',
            year: '2022',
            description: 'Online smart voting system using biometrics-based facial and fingerprint detection on image processing and CNN Deep learning.',
            technologies: ['Python', 'Deep Learning', 'CNN', 'Image Processing', 'Biometrics'],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'CloudPoint Weather Application',
            year: '2023',
            description: 'A Google Maps Weather API-based application for real-time weather information on Maps with additional functionalities.',
            technologies: ['JavaScript', 'Handlebars', 'Node.js', 'Google Maps API'],
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: 'EasyMed Healthcare Portal',
            year: '2023',
            description: 'An end-to-end database-focused portal for patient registration, organizing information, and fixing appointments with healthcare professionals.',
            technologies: ['MySQL', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="projects" className="section-padding bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="card group hover:scale-105 transition-all duration-300"
                        >
                            {/* Project Header */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-2xl -mt-6 -mx-6 mb-6`}></div>

                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <span className="text-sm text-gray-400 bg-slate-800 px-3 py-1 rounded-full">
                                    {project.year}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1 rounded-full bg-slate-800 text-primary-400 border border-primary-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
