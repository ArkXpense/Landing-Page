"use client";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import ArkXpense from '../../../../public/ArkXpence.svg'

const navItems = [
  { title: "Hero", url: "#hero" },
  { title: "Features", url: "/opinions" },
  { title: "Games", url: "/events" },
  { title: "Testimonials", url: "/docs" },
  { title: "Contact", url: "/docs" },
];

const NavBarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ["modules", "opinions", "functionalities", "contact"];
      const offset = 400;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight - offset && rect.bottom >= offset;

          if (isVisible) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 z-30 w-full mx-auto transition-all duration-300 px-4 ${
        isScrolled ? "mt-2" : "md:mt-0 mt-0"
      }`}
    >
      <nav
        className={`flex items-center justify-between transition-[max-width] duration-500 px-4 
             mx-auto
            ${isScrolled ? "py-2" : "py-4"}
            ${isScrolled ? "md:w-max" : "max-w-full"} 
            text-[16px] font-medium rounded-full ${
              isScrolled
                ? "text-gray-200 dark:text-gray-200 bg-black/50 shadow-lg ring-1 backdrop-blur ring-white/10"
                : ""
            }`}
      >
        <Link to="#">
          <img
            src={ArkXpense}
            alt="StarkGens Logo"
            className={`mr-6 cursor-pointer transition-all duration-200 ${
              isScrolled ? "h-[3.5rem] ml-2 mt-[3.5px]" : "md:h-[6rem] h-[3rem]"
            }`}
          />
        </Link>

        <div className="flex">
          <ul
            className={`my-auto hidden md:flex space-x-4 transition-all duration-300 ${
              isScrolled ? "text-[17.5px]" : "text-lg"
            }`}
          >
            {navItems.map(({ title, url }) => (
              <li key={title}>
                <Link
                  className={`relative hover:text-custom-orange block px-2 py-2 transition-colors duration-300 ${
                    activeSection === url.slice(1)
                      ? "text-custom-orange"
                      : "text-gray-200"
                  }`}
                  to={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-200" />
          ) : (
            <Menu className="w-6 h-6 text-gray-200" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 shadow-lg">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map(({ title, url }) => (
              <li key={title}>
                <Link
                  className={`block hover:text-[#4ADE80] px-2 py-2 transition-colors duration-300 ${
                    activeSection === url.slice(1)
                      ? "text-[#4ADE80]"
                      : "text-gray-200"
                  }`}
                  to={url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBarComponent;
