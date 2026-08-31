import React, { useState } from "react";
import Container from "./Container";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <Container>
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition duration-300">
              <span className="text-white text-xl font-bold tracking-wide">
                RIB
              </span>
            </div>

            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-gray-800">
                Rakibul Islam
              </h2>
              <p className="text-xs text-gray-500">
                Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 font-medium hover:text-blue-600 transition duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-gray-700 transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;