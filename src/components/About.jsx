import { FaLinkedin, FaFacebook, FaTwitter, FaDownload, FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 lg:ml-[370px]">
            {/* Left Green Box */}
            <div className="flex flex-col gap-8 py-8 pl-8 lg:pl-24 bg-primary text-white 
                      shadow-lg shadow-[rgba(0,0,0,0.25)] 
                      hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.35)] 
                      transition-all duration-300
                      w-full max-w-[450px] mx-auto lg:mx-0">
                <div>
                    <p className="text-sm font-semibold opacity-80">NAME</p>
                    <p className="text-lg font-medium">Ibrahim Khan Riyadh</p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">BIRTHDAY</p>
                    <p className="text-lg font-medium">14. 01. 1997.</p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">EMAIL</p>
                    <p className="text-lg font-medium">ik.riyad123@gmail.com</p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">PHONE</p>
                    <p className="text-lg font-medium">(+880) 1681-048-811</p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">LOCATION</p>
                    <p className="text-lg font-medium">Dhaka, Bangladesh</p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">INTERESTS</p>
                    <p className="text-lg font-medium">
                        Game, Books, TV Series, <br /> Travel enthusiast
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold opacity-80">SOCIAL</p>
                    <div className="flex gap-4 text-xl mt-2 justify-center lg:justify-start">
                        <a
                            href="https://www.linkedin.com/in/ibrahim-khan-riyadh/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="hover:text-gray-200 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://www.facebook.com/ibrahim.khan.riyadh123/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="hover:text-gray-200 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://twitter.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="hover:text-gray-200 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="hover:text-gray-200 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right About Me Content */}
            <div className="w-full max-w-[410px] mx-auto lg:mx-0 space-y-6">
                <h1 className="text-4xl text-primary font-extrabold text-center lg:text-left">Hello!</h1>
                <p>
                    I'm Ibrahim Khan Riyadh, a passionate MERN Stack Developer with
                    a strong foundation in{" "}
                    <span className="text-primary">
                        HTML, CSS, JavaScript, React, and others
                    </span>
                    . Skilled in algorithms, data structures, and problem-solving, I enjoy
                    building modern and user-friendly web applications.
                </p>
                <p>
                    Over the years, I have successfully completed several academic and
                    personal projects focusing on responsive web design and full-stack
                    development. I have also participated in coding competitions and
                    hackathons, constantly pushing my boundaries and improving my skills.
                </p>
                <p>
                    I am passionate about creating innovative digital solutions that blend
                    clean code with creative design. My goal is to work as a{" "}
                    <span className="text-primary">Full-Stack Web Developer</span> and
                    contribute to impactful tech solutions while continuously learning and
                    growing.
                </p>
                <a
                    href="/path/to/your-cv.pdf"
                    download="Ibrahim_Khan_Riyadh_CV.pdf"
                    className="flex items-center justify-center gap-2 w-full max-w-[410px] py-6 bg-secondary text-white font-medium shadow hover:bg-primary transition duration-300 mx-auto lg:mx-0"
                >
                    DOWNLOAD CV <FaDownload />
                </a>
            </div>
        </div>
    );
}
