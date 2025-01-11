"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Cookies from 'js-cookie';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfileDropDown from "./ProfileDropDown";
import Profile from "../../../public/Profile.svg";
import ProfileOpen from "../../../public/ProfileOpen.svg";
import { checkTokenExpiry } from "@/utils/checkToken";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const token = Cookies.get('authToken');
  let isLoggedIn = token ? true : false;

  // Dummy array for navigation items
  const navItems = [
    { name: "Home", linkTo: "/" },
    { name: "Videos", linkTo: "/videos" },
    { name: "National Edition", linkTo: "/national" },
    { name: "Local Edition", linkTo: "/local-edition" },
  ];

  if (checkTokenExpiry('authToken')) {
    console.log("Token is running");
  } else {
    isLoggedIn = false;
  }

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
                className={`text-2xl transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  pathname === item.linkTo
                    ? "text-blue-600 font-bold"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="md:block hidden">
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-110">
                      <Image 
                        src={isDropdownOpen ? ProfileOpen : Profile} 
                        alt="Profile" 
                        // width={40} 
                        // height={40}
                      />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[360px] mr-3 rounded-[10px] ">
                    <ProfileDropDown name="Narendra" email="narenchavn26@gmail.com" />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link href="/login" className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                Editor Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 transition-colors duration-300"
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                  pathname === item.linkTo
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-900 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <div className="px-3 py-2">
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer flex items-center"> 
                      <Image 
                        src={isDropdownOpen ? ProfileOpen : Profile} 
                        alt="Profile" 
                        width={40} 
                        height={40}
                      />
                      <span className="ml-2">Profile</span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[360px] mr-3 rounded-[10px] ">
                    <ProfileDropDown name="Narendra" email="narenchavn26@gmail.com" />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                Editor Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

