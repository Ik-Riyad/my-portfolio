import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import MyRecentWorks from '../components/MyRecentWorks';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const MainLayout = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Web Developer', 'MERN Stack Developer', 'React Enthusiast'],
        loop: 0
    })
    return (
        <div className="h-full py-5 lg:py-15">
            <section className="flex flex-col md:flex-row-reverse lg:flex-row-reverse justify-center items-center px-4 md:px-8 lg:px-0">
                {/* Navbar - full width on small, normal on large */}
                <div id='/' className="w-full md:w-auto flex justify-end md:justify-start lg:fixed lg:right-110 lg:top-50">
                    <Navbar />
                </div>

                {/* Name and subtitle */}
                <div className="text-center md:text-left lg:absolute lg:left-40 lg:top-60 mt-10 md:mt-0">
                    <h1
                        className="lg:-rotate-90 lg:text-8xl text-4xl font-extrabold leading-tight text-primary"
                    >
                        Ibrahim <br className="hidden lg:inline" /> Khan Riyadh
                    </h1>
                    <p className="mt-4 lg:pt-50 text-lg lg:text-xl flex justify-center flex-col items-center">
                        A Passionate
                        <span style={{ whiteSpace: 'pre-line', color: '#yourColor' }}>{text}<Cursor /></span>
                    </p>
                </div>

                {/* Image */}
                <div className="relative  ml-0 md:ml-10 lg:ml-20 w-full md:w-auto">
                    <img
                        src="riyadImage.jpg"
                        alt="Profile"
                        className="lg:w-[600px] lg:h-[650px] object-cover relative z-10"
                    />
                    <div className='lg:w-full lg:h-150 bg-secondary -mt-140 -ml-5'></div>
                </div>
            </section>

            {/* About Section */}
            <section id='about' className='mt-90 lg:mt-40'>
                <h1 className='text-secondary text-6xl lg:text-8xl font-extrabold text-center pb-10 lg:pb-20 lg:pr-50'>About</h1>
                <About></About>
            </section>

            {/* Skills Section */}
            <section className='mt-40'>
                <h1 className='text-secondary text-6xl lg:text-8xl font-extrabold text-center pb-10 lg:pb-20 lg:pr-50'>Skills</h1>
                <Skills></Skills>
            </section>
            {/* Education Section */}
            <section className='mt-40'>
                <h1 className='text-secondary text-6xl lg:text-8xl font-extrabold text-center pb-10 lg:pb-20 lg:pr-50'>Education</h1>
                <Education></Education>
            </section>
            {/* Experience Section */}
            <section className='mt-40'>
                <h1 className='text-secondary text-6xl lg:text-8xl font-extrabold text-center pb-10 lg:pb-20 lg:pr-50'>Experience</h1>
                <Experience></Experience>
            </section>
            {/* Recent Works Section */}
            <section className='mt-40'>
                <h1 className='text-secondary text-6xl lg:text-8xl font-extrabold text-center pb-10 lg:pb-20 lg:pr-50'>Recent Works</h1>
                <MyRecentWorks></MyRecentWorks>
            </section>
        </div>

    );
};

export default MainLayout;