import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            degree: 'BE - Information Technology',
            institution: 'Savitribai Phule Pune University',
            location: 'Pune, India',
            period: 'Pursuing',
            grade: 'CGPA: 7.36',
            icon: <FaGraduationCap />,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            degree: 'Diploma in Computer Engineering',
            institution: 'Maharashtra State Board of Technical Education',
            location: 'Dharashiv, India',
            period: '2019 – 2022',
            grade: 'Percentage: 85.63%',
            icon: <FaUniversity />,
            color: 'from-green-500 to-emerald-500',
        },
        {
            degree: '10th - SSC',
            institution: 'Kulswamini Vidyalaya Tuljapur',
            location: 'Tuljapur, India',
            period: '2017 – 2018',
            grade: 'Percentage: 67.80%',
            icon: <FaAward />,
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const certifications = [
        { name: 'Full Stack Developer', issuer: 'SEED Infotech' },
        { name: 'Junior Software Engineer', issuer: 'PMKVY' },
        { name: 'Artificial Intelligence', issuer: 'Rooman Technology' },
        { name: 'Web Designing', issuer: 'ThinkNEXT' },
    ];

    return (
        <section id="education" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>
                </motion.div>

                {/* Education */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-primary-400">Education</h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`text-5xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                                        {edu.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                                        <p className="text-primary-400 font-semibold mb-2">{edu.institution}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
                                            <span>{edu.location}</span>
                                            <span>•</span>
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold`}>
                                            {edu.grade}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div id="certifications">
                    <h3 className="text-2xl font-bold mb-8 text-primary-400">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl text-accent-purple">
                                        <FaAward />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                                        <p className="text-sm text-gray-400">{cert.issuer}</p>
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

export default Education;
