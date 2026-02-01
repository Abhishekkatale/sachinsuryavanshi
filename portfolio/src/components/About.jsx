import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaBriefcase />, value: '2+', label: 'Years Experience' },
        { icon: <FaCode />, value: '10+', label: 'Projects Completed' },
        { icon: <FaGraduationCap />, value: '4+', label: 'Certifications' },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl text-primary-400">
                                    <FaUser />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Recent IT graduate with a Bachelor's degree in Information Technology, proficient in
                                        programming languages, operating systems, and databases. Strong problem-solving abilities
                                        and a collaborative team player, eager to contribute to innovative projects in a dynamic
                                        IT environment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h4 className="text-xl font-semibold mb-4 text-primary-400">Key Highlights</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-purple mt-1">▹</span>
                                    <span>Full Stack Development expertise with React.js and Node.js</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-purple mt-1">▹</span>
                                    <span>Experience in Machine Learning and Deep Learning applications</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-purple mt-1">▹</span>
                                    <span>Proficient in database management (SQL, MongoDB)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-purple mt-1">▹</span>
                                    <span>Strong foundation in cloud technologies and containerization</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card flex items-center gap-6 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-5xl text-primary-400">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
