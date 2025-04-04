"use client";

import Image from "next/image";
import Link from "next/link";
import portImage from "../../assets/p.jpg";

export default function Home() {
  return (
    <div className="bg-blue-600 text-white min-h-screen">
      {/* Navigation Bar */}
      <div className="h-[10vh] w-screen flex items-center justify-between px-8 bg-blue-700 shadow-md">
        {/* Left Content */}
        <p className="text-lg">Portfolio</p>

        {/* Center Links */}
        <div className="flex space-x-6">
          <Link href="/dashboard/template" className="hover:font-bold">
            Browse Templates
          </Link>
          <Link href="/dashboard/custom" className="hover:font-bold">
            Custom
          </Link>
          <Link href="/dashboard/user" className="hover:font-bold">
            Edit
          </Link>
        </div>

        {/* Right Content */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 shadow-md">
          Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {/* Left Content */}
          <div className="flex flex-col justify-center mt-[-20vh]">
            <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
              Beautiful portfolio websites, <br /> free with Portfolio
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Includes Hosting & Unlimited Pages
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 w-[20vw]">
              Get Started Free →
            </button>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px]">
            {/* Layered Images */}
            <div className="absolute top-0 left-10 w-[40vw] h-[60vh] shadow-lg">
              <Image
                src={portImage}
                alt="Portfolio Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
