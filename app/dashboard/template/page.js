"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderImage from "../../assets/p.jpg"; 

export default function PortfolioPage() {
  const templates = [
    { label: "Photographers", link: "/dashboard/design1" },
    { label: "Designers", link: "/dashboard/design2" },
    { label: "Artists", link: "/dashboard/design3" },
    { label: "Makeup Artists", link: "/dashboard/design4" },
    { label: "Models", link: "/dashboard/design5" },
    { label: "Architects", link: "/dashboard/design6" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
        {/* Logo */}
        <div className="text-xl font-bold">MowBox</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/dashboard/main" className="hover:underline">
            Home
          </Link>
          <Link href="/dashboard/custom" className="hover:underline">
            Custom
          </Link>
          <Link href="/dashboard/user" className="hover:underline">
            Edit
          </Link>
        </div>

        {/* Action Links */}
        <div className="flex space-x-4">
          <Image src={placeholderImage} alt="place" className="rounded-full h-[3vh] w-[3vw] object-cover"/>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Browse Pre-designed Templates
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {/* Individual Image Blocks */}
        {templates.map(({ label, link }, index) => (
          <Link
            key={index}
            href={link}
            className="relative bg-black rounded-lg shadow-lg overflow-hidden w-[25vw] h-[25vh]"
          >
            <div>
              <Image
                src={placeholderImage} // Replace with your images
                alt={label}
                layout="responsive"
                objectFit="cover"
                className="opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-center py-2 text-sm font-medium">
                {label}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-16 py-4 bg-gray-900 text-center text-sm">
        <p>© 2024 PortfolioBox | Follow us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Social Media Icons */}
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
            <Link key={platform} href="#" className="hover:underline">
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
