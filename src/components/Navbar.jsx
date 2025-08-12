import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaDownload } from "react-icons/fa"; // Hamburger icon
import { IoMdClose } from "react-icons/io"; // Close icon

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navBar = (
        <nav>
            <ul className="flex flex-col space-y-4 p-6 w-fit">
                <li>
                    <NavLink
                        to="/"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Home
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        About
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/skills"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Skills
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/education"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Education
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/experience"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Experience
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Projects
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="relative text-lg font-medium group w-fit"
                        onClick={() => setOpen(false)}
                    >
                        Contact Us
                        <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </li>
                <li>
                    <a
                        href="/path/to/your-cv.pdf"
                        download="Ibrahim_Khan_Riyadh_CV.pdf"
                        className="flex items-center justify-center gap-2 py-3 px-6 bg-secondary text-white font-medium shadow hover:bg-primary transition duration-300"
                    >
                        DOWNLOAD CV <FaDownload />
                    </a>
                </li>
            </ul>
        </nav>
    );

    return (
        <div>
            {/* Desktop Menu */}
            <div className="hidden lg:block">{navBar}</div>

            {/* Mobile Menu Button (aligned right) */}
            <div className="lg:hidden p-2 flex justify-end bg-secondary">
                <button onClick={() => setOpen(true)}>
                    <FaBars className="h-6 w-6" />
                </button>
            </div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-secondary text-secondary-content shadow-lg transform z-50 transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 border-b border-secondary-content/20">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setOpen(false)}>
                        <IoMdClose className="h-6 w-6" />
                    </button>
                </div>

                {/* Drawer NavLinks */}
                <div className="p-4">{navBar}</div>
            </div>
        </div>
    );
};

export default Navbar;
