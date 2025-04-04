"use client";

import Image from "next/image";
import deskImage from "./assets/a.png";
import secondImage from "./assets/b.png";
import thirdImage from "./assets/c.png";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundColor: "#f7f7f7",
      }}
    >
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-10 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">MowBox</div>
        <button
          className="sm:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>
        <nav
          className={`${
            isNavOpen ? "block" : "hidden"
          } sm:flex space-x-8 text-gray-600`}
        >
          <Link href="" className="hover:text-gray-900">
            Professional
          </Link>
          <Link href="" className="hover:text-gray-900">
            Ease of use
          </Link>
          <Link href="" className="hover:text-gray-900">
            Exceptional
          </Link>
          <Link href="" className="hover:text-gray-900">
            Recognized
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-gray-900 pt-[1vh]"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 py-4 h-[90vh]">
        {/* Left Content */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Meet MowBox — the simple way to build your portfolio & showcase your
            work in style
          </h1>
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 mt-6">
            <Link
              href="/auth/signup"
              className="px-6 py-3 bg-gray-800 text-white text-lg rounded hover:bg-gray-700"
            >
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="text-lg text-gray-800 hover:underline flex items-center space-x-2 mt-2 sm:mt-0"
            >
              <span>▶</span>
              <span>Continue</span>
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative w-full lg:w-1/2 h-auto flex flex-col mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-between mb-4">
            <div className="relative w-full sm:w-[45%] h-[150px] mt-2">
              <Image
                src={deskImage}
                alt="First portfolio showcase"
                className="object-fill rounded-lg shadow-xl"
                layout="fill"
              />
            </div>
            <div className="relative w-full sm:w-[45%] h-[150px] mt-2">
              <Image
                src={secondImage}
                alt="Second portfolio showcase"
                className="object-fill rounded-lg shadow-xl"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full sm:w-[45%] h-[150px] mt-2">
              <Image
                src={thirdImage}
                alt="Third portfolio showcase"
                className="object-fill rounded-lg shadow-xl"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
