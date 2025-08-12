import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiDaisyui,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, scale: 1.05 },
};

export default function Skills() {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" /> },
        { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={48} color="#38B2AC" /> },
        { name: "DaisyUI", icon: <SiDaisyui size={48} color="#22C55E" /> },
        { name: "NodeJS", icon: <SiNodedotjs size={48} color="#339933" /> },
        { name: "Express", icon: <SiExpress size={48} color="#6B7280" /> },
        { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
        { name: "Firebase", icon: <SiFirebase size={48} color="#FFCA28" /> },
    ];

    return (
        <section className="max-w-screen-lg mx-auto lg:ml-[340px] px-4 sm:px-6 lg:pl-15 lg:pr-20">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {skills.map(({ name, icon }) => (
                    <motion.div
                        key={name}
                        className="flex flex-col items-center bg-secondary py-16 rounded-lg cursor-pointer shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                        <div className="mb-3">{icon}</div>
                        <p className="text-white font-semibold text-lg">{name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
