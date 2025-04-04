"use client";

import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import uploadedImage from "../../assets/p.jpg";

export default function Portfolio() {
  const [text, setText] = useState("Hi, I'm Jenny. A passionate Frontend Developer.");
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
    <div className="min-h-screen bg-pink-50 flex flex-col w-screen">
      {/* Navbar */}
      <nav className="h-[10vh] w-full flex items-center justify-between px-6 bg-white shadow-md">
        <p className="text-2xl font-bold">Jenny</p>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-pink-500">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-pink-500">About</Link>
          <Link href="#" className="text-gray-600 hover:text-pink-500">Projects</Link>
          <Link href="#" className="text-gray-600 hover:text-pink-500">Contact me</Link>
        </div>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Get in Touch</button>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center p-6 mt-[8vh]">
        {/* Left Side Text */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-4xl font-bold text-gray-800 bg-transparent border-none focus:outline-none resize-none"
          />
          <p className="text-gray-600">Feel free to explore my portfolio and learn more about my work.</p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <label htmlFor="imageUpload" className="cursor-pointer relative">
            {uploadedImage ? (
              <Image
                src={uploadedImage}
                alt="Uploaded"
                className="w-60 h-60 rounded-full object-cover border-4 border-pink-500"
              />
            ) : (
              <div className="w-60 h-60 rounded-full bg-gray-200 flex items-center justify-center border-4 border-pink-500">
                <span className="text-gray-500">Upload Image</span>
              </div>
            )}
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>

    {/* Portfolio Section */}
    <section id="portfolio" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow-md">
            <Image src="/path/to/project1.jpg" alt="Project 1" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 1</h3>
            <p className="text-gray-600">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <Image src="/path/to/project2.jpg" alt="Project 2" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 2</h3>
            <p className="text-gray-600">A brief description of the project goes here.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <Image src="/path/to/project3.jpg" alt="Project 3" width={300} height={200} />
            <h3 className="text-xl font-bold text-gray-900 mt-4">Project 3</h3>
            <p className="text-gray-600">A brief description of the project goes here.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-pink-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-4 shadow-md">
            <p className="text-gray-600">&quot;An amazing developer! Truly captured my vision and brought it to life.&quot;</p>
            <p className="text-pink-500 mt-4">- Client Name</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <p className="text-gray-600">&quot;Professional and creative. Couldn&apos;t have asked for a better experience.&quot;</p>
            <p className="text-pink-500 mt-4">- Client Name</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-white">
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
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">Send</button>
        </form>
      </section>

    {/* Footer Section */}
    <footer className="py-6 text-center bg-pink-100">
        <p>&copy; 2024 Jenny&apos;s Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
