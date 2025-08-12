import React from "react";
import {
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const ContactSection = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 sm:px-8 lg:ml-[350px] lg:pr-20 py-8">
            <div className="bg-secondary text-white rounded-lg p-6 sm:p-8 space-y-8">
                {/* Contact Info (Top) */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg max-w-md mb-6">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-primary" />
                            <span>ik.riyad123@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-primary" />
                            <span>+880 1681-048-811</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-primary" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-2xl mt-6">
                        <a
                            href="https://github.com/Ik-Riyad"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/ibrahim-khan-riyadh"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://facebook.com/ibrahim.khan.riyadh123"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                {/* Contact Form (Bottom) */}
                <div className="bg-primary p-1 rounded-lg">
                    <form className="flex flex-col gap-1 text-white">
                        <div className="flex flex-col sm:flex-row gap-1">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none flex-1 border border-gray-600"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none flex-1 border border-gray-600"
                                required
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="p-3 rounded bg-secondary text-white placeholder-gray-400 focus:outline-none resize-none border border-gray-600"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-secondary text-white py-3 rounded font-semibold hover:bg-secondary/80 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
