import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: 'Research Analyst',
            company: 'MachBizz',
            location: 'Pune, India',
            period: 'Apr 2024 – Aug 2025',
            type: 'Employee',
            description: 'Gathering, analyzing, and interpreting data from various sources to provide insights, forecasts, and recommendations that inform decision-making for businesses, investors, or policymakers.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Technical Support',
            company: 'Conneqt Business Sol. Ltd',
            location: 'Pune, India',
            period: 'Sep 2023 - Feb 2024',
            type: 'Employee',
            description: 'Provided comprehensive technical support to clients, troubleshooting issues and ensuring smooth operations of technical systems.',
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Software Engineer',
            company: 'INFOSYS',
            location: 'Pune, India',
            period: 'Mar 2023 – Jun 2023',
            type: 'Intern',
            description: 'Worked with the Azure team to ensure the quality of Linux machines deployed on the cloud by building tools to simulate and regulate resource utilization. Technologies: Linux kernel, Go, Shell, System Design.',
            color: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-pink"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple border-4 border-slate-900"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="card group hover:scale-105 transition-transform duration-300">
                                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold mb-4`}>
                                            {exp.type}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2 gradient-text">{exp.title}</h3>
                                        <h4 className="text-xl text-primary-400 font-semibold mb-4">{exp.company}</h4>

                                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                                            <div className="flex items-center gap-2">
                                                <FaCalendar />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
