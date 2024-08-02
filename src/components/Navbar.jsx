"use client";
import Link from "next/link";
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
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
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
            <Link
              href="search"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Search
            </Link>
            <Link
              href="profile"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Profile
            </Link>
            <Link
              href="home"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="signup"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Signup
            </Link>
            <Link
              href="login"
              className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            >
              Login
            </Link>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <a
              href="search"
              className="block text-base font-normal text-gray-500 list-none hover:text-gray-900 mb-2 transition hover:scale-90"
            >
              Search
            </a>
            <a
              href="profile"
              className="block text-base font-normal text-gray-500 list-none hover:text-gray-900 mb-2 transition hover:scale-90"
            >
              Profile
            </a>
            <a
              href="home"
              className="block text-base font-normal text-gray-500 list-none hover:text-gray-900 mb-2 transition hover:scale-90"
            >
              Home
            </a>
            <a
              href="signup"
              className="block text-base font-normal text-gray-500 list-none hover:text-gray-900 mb-2 transition hover:scale-90"
            >
              Sign up
            </a>
            <a
              href="login"
              className="block text-base font-normal text-gray-500 list-none hover:text-gray-900 transition hover:scale-90"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
