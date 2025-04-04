/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';
import { useState } from "react";
import bgImage from "../../assets/p.jpg";

export default function Site5() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-xl font-bold">MowBox</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-black">Home</a>
          <a href="#about" className="text-gray-600 hover:text-black">About</a>
          <a href="#portfolio" className="text-gray-600 hover:text-black">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-grow items-center justify-between px-8 py-12">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold leading-tight text-gray-900">
            Your <span className="text-blue-600">Name</span>
          </h2>
          <p className="mt-4 text-gray-700">
            A litle about yourself, your skills, education. Any experience or jobs done before/being done.
          </p>
          <p className="mt-2 text-gray-700">
            Empowering innovative solutions for businesses, with user-centric designs and cutting-edge technologies.
          </p>
        </div>

        {/* Right Content - Image Section */}
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full blur-xl"></div>
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white">
            {uploadedImage ? (
              <Image
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={bgImage}
                alt="Profile Picture"
                className="object-cover"
                fill
              />
            )}
          </div>
          <label
            htmlFor="imageUpload"
            className="absolute bottom-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Upload Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </main>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow-lg">
            <Image src={bgImage.src} alt="Project 1" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 1</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <Image src={bgImage.src} alt="Project 2" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 2</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <Image src={bgImage.src} alt="Project 3" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 3</h3>
            <p className="text-gray-700">A brief description of the project goes here.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-100 p-4 shadow-lg">
            <p className="text-gray-700">"An amazing designer! Truly captured my vision and brought it to life."</p>
            <p className="text-blue-600 mt-4">- Client Name</p>
          </div>
          <div className="bg-gray-100 p-4 shadow-lg">
            <p className="text-gray-700">"Professional and creative. Couldn't have asked for a better experience."</p>
            <p className="text-blue-600 mt-4">- Client Name</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center bg-gray-100">
        <p>&copy; 2024 Interactive Visionary</p>
      </footer>
    </div>
  );
}
