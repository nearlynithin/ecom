"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-100 px-4 mx-auto max-w-8xl sm:px-6 ">
      <div className="relative pt-10 pb-10 sm:pb-10">
        <nav
          className=" relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <img />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded={isMenuOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 list-none">
            <a
              href="search"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Search
            </a>
            <a
              href="profile"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Profile
            </a>
            <a
              href="home"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Home
            </a>
          </div>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white md:hidden">
              <ul className="flex flex-col p-4 space-y-4 list-none">
                <a
                  href="search"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                >
                  Search
                </a>
                <a
                  href="profile"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                >
                  Profile
                </a>
                <a
                  href="home"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                >
                  home
                </a>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
