/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';
import { useState } from "react";
import { Home, Briefcase, User, Mail } from 'lucide-react';
import bgImage from "../../assets/p.jpg";

export default function Site5() {
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [projects, setProjects] = useState([
    { title: 'Project 1', description: 'A brief description of the project goes here.', image: '/path/to/project1.jpg' },
    { title: 'Project 2', description: 'A brief description of the project goes here.', image: '/path/to/project2.jpg' },
    { title: 'Project 3', description: 'A brief description of the project goes here.', image: '/path/to/project3.jpg' },
  ]);

  const handleImageUpload = (e, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (index === null) {
          setUploadedImage(reader.result);
        } else {
          const newProjects = [...projects];
          newProjects[index].image = reader.result;
          setProjects(newProjects);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  return (
    <div className="bg-white text-blue-800 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Section */}
        <nav className="w-full md:w-[20vw] h-auto md:h-screen bg-azure flex flex-col justify-center items-center space-y-8 p-4 md:p-0">
          <h1 className="text-[black] font-bold text-[30px]">Mowbox</h1>
          <ul className="text-center">
            <li className="flex items-center space-x-2 text-lg hover:text-gold">
              <Home />
              <a href="#home">Home</a>
            </li>
            <li className="flex items-center space-x-2 text-lg hover:text-gold">
              <Briefcase />
              <a href="#services">Services</a>
            </li>
            <li className="flex items-center space-x-2 text-lg hover:text-gold">
              <User />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center space-x-2 text-lg hover:text-gold">
              <Mail />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Main Content Section */}
        <main className="flex-grow flex flex-col md:flex-row justify-center items-center relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-12">
          {/* Text Section */}
          <div className="flex-1 max-w-md pr-12">
            <h2 className="text-6xl font-bold leading-tight mb-4 text-white">
              Interactive <span className="text-blue-300">VISIONARY</span>
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Transforming ideas into impactful designs that inspire and innovate.
            </p>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-96 h-96 flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/path/to/splash-image.jpg')] bg-cover bg-center rounded-full"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
              {uploadedImage ? (
                <Image
                  src={uploadedImage}
                  alt="Uploaded Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={bgImage}
                  alt="Default Profile"
                  className="object-cover"
                  fill
                />
              )}
            </div>
            {isEditing && (
              <label
                htmlFor="imageUpload"
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer shadow-md"
              >
                Upload Image
              </label>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
        </main>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              {isEditing ? (
                <label className="relative cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                </label>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover"
                />
              )}
              {isEditing ? (
                <div>
                  <input
                    className="text-xl font-bold bg-transparent border-b-2 border-blue-500 text-blue-800 w-full focus:outline-none mt-4"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  />
                  <textarea
                    className="text-gray-600 bg-transparent border-b-2 border-blue-500 w-full focus:outline-none mt-2"
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mt-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 shadow-md">
            <p className="text-gray-600">"An amazing developer! Truly captured my vision and brought it to life."</p>
            <p className="text-blue-600 mt-4">- Client Name</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <p className="text-gray-600">"Professional and creative. Couldn't have asked for a better experience."</p>
            <p className="text-blue-600 mt-4">- Client Name</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Me</h2>
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
      <footer className="py-6 text-center bg-gray-200">
        <p>&copy; 2024 Interactive Visionary</p>
      </footer>

      {/* Edit Mode Toggle */}
      <div className="fixed bottom-4 right-4">
        <button
          className={`px-4 py-2 rounded-full shadow-lg transition-colors ${
            isEditing ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Exit Edit Mode' : 'Edit Page'}
        </button>
      </div>
    </div>
  );
}