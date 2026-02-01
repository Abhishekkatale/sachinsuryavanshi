import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaDatabase, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
    SiMongodb, SiTailwindcss, SiMysql, SiTensorflow
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
                { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
                { name: 'JavaScript', icon: <FaJs />, level: 88 },
                { name: 'React.js', icon: <FaReact />, level: 85 },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
            ],
        },
        {
            title: 'Backend Development',
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
                { name: 'Python', icon: <FaPython />, level: 80 },
                { name: 'SQL', icon: <SiMysql />, level: 82 },
                { name: 'MongoDB', icon: <SiMongodb />, level: 78 },
            ],
        },
        {
            title: 'AI/ML & Tools',
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'Machine Learning', icon: <SiTensorflow />, level: 75 },
                { name: 'Deep Learning', icon: <SiTensorflow />, level: 72 },
                { name: 'Docker', icon: <FaDocker />, level: 70 },
                { name: 'Git', icon: <FaGitAlt />, level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-padding bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            className="card space-y-6"
                        >
                            <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl text-primary-400">{skill.icon}</span>
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
