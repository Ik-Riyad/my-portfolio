import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaJsSquare,
    FaFire,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiDaisyui,
    SiMongodb,
    SiExpress,
    SiReactrouter,
} from "react-icons/si";
import bloodDonation from "../assets/blood-donation.png";
import historicalArtifacts from "../assets/historical-artifacts.png";
import plants from "../assets/plants.png";

const iconMap = {
    tailwind: <SiTailwindcss size={24} color="#38b2ac" />,
    daisyui: <SiDaisyui size={24} color="#22c55e" />,
    react: <FaReact size={24} color="#61dafb" />,
    js: <FaJsSquare size={24} color="#f7df1e" />,
    firebase: <FaFire size={24} color="#ffca28" />,
    mongodb: <SiMongodb size={24} color="#47a248" />,
    express: <SiExpress size={24} color="#6b7280" />,
    "react-router": <SiReactrouter size={24} color="#ca4245" />,
};

export default function MyRecentWorks() {
    const [selected, setSelected] = useState(null);

    const projects = [
        {
            name: "🩸Blood Donation Management System",
            image: bloodDonation,
            details:
                "A responsive web application to search blood donors, manage donations securely, and facilitate blood donation efforts efficiently.",
            resources: [
                "react",
                "tailwind",
                "daisyui",
                "js",
                "firebase",
                "mongodb",
                "express",
                "react-router",
            ],
            github: "https://github.com/Ik-Riyad/blood-donation-client",
            live: "https://tourmaline-unicorn-6f9468.netlify.app/",
        },
        {
            name: "🏺Historical Artifacts Tracker",
            image: historicalArtifacts,
            details:
                "A responsive full-stack web application that allows users to explore, share, and submit historical artifacts. Users can like their favorite artifacts, which are saved in their profile for easy access. The platform supports user authentication and enables seamless artifact sharing.",
            resources: ["react", "tailwind", "mongodb", "express", "js"],
            github: "https://github.com/Ik-Riyad/historical-artifacts-client",
            live: "https://candid-pika-b371d8.netlify.app/",
        },
        {
            name: "🌿 Plant Care Tracker",
            image: plants,
            details:
                "A beautifully themed, full-stack, mobile-responsive web application designed to help plant lovers easily monitor and manage the care of their indoor and outdoor plants. Built with love for green thumbs, this app tracks everything from watering to plant health — all in one place.",
            resources: ["react", "firebase", "tailwind", "js"],
            github: "https://github.com/Ik-Riyad/mango_client",
            live: "https://unique-donut-b731f9.netlify.app/",
        },
    ];

    return (
        <div className="max-w-screen-lg mx-auto lg:ml-[340px] px-6 lg:px-42 p-6 space-y-6">
            {projects.map((project, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg text-white">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-56 object-cover rounded-lg mb-3"
                    />
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <p className="text-sm text-gray-300">
                        {project.details.split(" ").length > 11
                            ? project.details.split(" ").slice(0, 11).join(" ") + "..."
                            : project.details}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.resources.slice(0, 5).map((res, i) => (
                            <span
                                key={i}
                                className="bg-gray-700 px-2 py-1 rounded-lg text-xs uppercase"
                            >
                                {res}
                            </span>
                        ))}
                        {project.resources.length > 5 && (
                            <span className="bg-gray-700 px-2 py-1 rounded-lg text-xs">
                                +{project.resources.length - 5} more
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setSelected(project)}
                        className="mt-4 inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-lg hover:bg-primary/80 transition"
                    >
                        View Details <FaExternalLinkAlt />
                    </button>
                </div>
            ))}

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelected(null)} // click outside close
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-secondary p-6 rounded-lg max-w-lg w-full relative text-white"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-2 right-2 text-white hover:text-red-400 text-lg"
                            >
                                ✕
                            </button>
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                            <p className="mb-4">{selected.details}</p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                {selected.resources.map((res, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-700 px-2 py-1 rounded-lg text-sm flex items-center gap-2"
                                    >
                                        {iconMap[res.toLowerCase()] || null}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {selected.github && (
                                    <a href={selected.github} target="_blank" rel="noreferrer">
                                        <FaGithub size={24} className="hover:text-gray-400" />
                                    </a>
                                )}
                                {selected.live && (
                                    <a href={selected.live} target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt size={24} className="hover:text-gray-400" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
