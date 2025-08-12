import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="max-w-screen-lg lg:ml-[340px] lg:px-18">
            <div className="flex items-start gap-6 border-y p-10">
                {/* Icon */}
                <div className="text-primary">
                    <FaGraduationCap size={50} />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                    <h1 className="text-xl font-semibold">
                        Bachelor of Science (BSc), Computer Science and Engineering
                    </h1>
                    <h3 className="text-primary text-lg">
                        Central University of Science & Technology
                    </h3>
                    <p>Feb 2026 - Ongoing</p>
                    <p className="text-primary text-lg">Grade: Ongoing</p>
                    <p className="py-3">
                        Looking forward to engaging in extracurricular activities related
                        to Computer Science.
                    </p>
                    <p>
                        Currently pursuing a Bachelor of Science in Computer Science and
                        Engineering at National University. Focused on building a strong
                        foundation in algorithms, data structures, and software engineering
                        principles. Passionate about web development, machine learning, and
                        problem-solving. Actively learning modern technologies such as
                        JavaScript, NextJS, and databases. Eager to apply theoretical
                        knowledge in real-world projects and internships.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Education;