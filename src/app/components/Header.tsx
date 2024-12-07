"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dummy array for navigation items
  const navItems = [
    { name: "Home", linkTo: "/" },
    { name: "About Us", linkTo: "/about" },
    { name: "National Edition", linkTo: "/national" },
    { name: "Local Edition", linkTo: "/local" },
  ];

  return (
    <header className="py-7">
      <div className="max-w-[1152px] rounded-[161px] shadow-[0px_0px_10px_6px_#00000014] py-3 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
             
              width={100}
              height={100}
              src={"/NewsZai_Logo_Icon.svg"}
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.linkTo}
                className="text-2xl hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-7 py-2 rounded-[162px] text-2xl font-medium hover:bg-gray-700">
              Editor Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.linkTo}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
            <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Editor Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
