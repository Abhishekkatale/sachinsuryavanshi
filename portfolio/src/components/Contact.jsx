import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'sachindn7774@gmail.com',
            link: 'mailto:sachindn7774@gmail.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91-7774034942',
            link: 'tel:+917774034942',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Pune, Maharashtra',
            link: null,
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: 'GitHub',
            link: 'https://github.com/Sachinsuryavanshi7774',
            color: 'hover:text-gray-400',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sachin-suryavanshi/',
            color: 'hover:text-blue-500',
        },
    ];

    return (
        <section id="contact" className="section-padding bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-8"></div>
                    <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    className="card block text-center hover:scale-105 transition-transform duration-300"
                                >
                                    <div className={`text-5xl mb-4 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent inline-block`}>
                                        {contact.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-400">{contact.label}</h3>
                                    <p className="text-white font-medium">{contact.value}</p>
                                </a>
                            ) : (
                                <div className="card text-center">
                                    <div className={`text-5xl mb-4 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent inline-block`}>
                                        {contact.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-400">{contact.label}</h3>
                                    <p className="text-white font-medium">{contact.value}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-5xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                                whileHover={{ y: -5 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
                >
                    <p>© 2026 Sachin Suryavanshi. All rights reserved.</p>
                    <p className="mt-2 text-sm">Built with React, Tailwind CSS & Framer Motion</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
