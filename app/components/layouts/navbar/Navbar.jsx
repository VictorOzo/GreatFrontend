"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import abstractly from "../../../assets/image/abstractly.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-white">
        <div className="mx-auto px-4 sm:px-8 max-w-[1280px]">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0 cursor-pointer ">
              <Image src={abstractly} alt="logo" />
            </div>

            <ul className="hidden md:flex items-center space-x-8 text-sm text-gray-700 font-medium mr-[180px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center space-x-4">
              <button className="cursor-pointer  px-4 py-2 rounded-md border border-gray-300 shadow-sm text-sm">
                Learn more
              </button>
              <button className="cursor-pointer px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm text-sm">
                See pricing
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="text-2xl">
                <span className="sr-only">Open menu</span>☰
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
            <div className="flex items-center justify-between px-6 py-4 ">
              <div className="flex-shrink-0">
                <Image src={abstractly} alt="logo" className="h-8 w-auto" />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-2xl">
                ✕
              </button>
            </div>
            
            <ul className="flex flex-col mt-9 px-6 space-y-6 text-lg font-medium text-gray-800 flex-grow">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>

            <div className="flex flex-col space-y-4">
              <button className="w-full py-3 border rounded-md">
                Learn more
              </button>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-md">
                See pricing
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
