/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState } from "react";
import portImage from "../../assets/p.jpg";

export default function Site6() {
  const [isEditing, setIsEditing] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('My Portfolio');
  const [services, setServices] = useState([
    { title: 'Custom Designs', description: 'Unique and tailored solutions for your business.' },
    { title: 'Responsive Websites', description: 'Optimized for all devices and screen sizes.' },
    { title: 'SEO Services', description: 'Improve your site\'s visibility on search engines.' },
  ]);
  const [projects, setProjects] = useState([
    { title: 'Project Alpha', image: portImage.src },
    { title: 'Project Beta', image: portImage.src },
    { title: 'Project Gamma', image: portImage.src },
  ]);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newProjects = [...projects];
        newProjects[index].image = reader.result;
        setProjects(newProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="py-4 px-8 flex justify-between items-center bg-teal-600 text-white">
        <div className="flex items-center space-x-4">
          {isEditing ? (
            <input
              className="text-2xl font-bold bg-transparent border-b-2 border-white text-white w-full focus:outline-none"
              value={headerTitle}
              onChange={(e) => setHeaderTitle(e.target.value)}
            />
          ) : (
            <h1 className="text-2xl font-bold">{headerTitle}</h1>
          )}
        </div>
        <nav className="space-x-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-teal-500 text-white">
        <div className="absolute inset-0 opacity-50">
          <Image src={portImage} width={300} height={200} alt="Hero Background" objectFit="cover" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <input
                    className="text-xl font-bold bg-transparent border-b-2 border-teal-500 text-gray-900 w-full focus:outline-none mb-2"
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                  />
                  <textarea
                    className="text-gray-700 bg-transparent border-b-2 border-teal-500 w-full focus:outline-none"
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              {isEditing ? (
                <label className="relative cursor-pointer">
                  <Image
                    src={project.image}
                    width={300} height={200}
                    alt={project.title}
                    className="w-full h-48 object-cover"
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
                  width={300} height={200}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                {isEditing ? (
                  <input
                    className="text-white font-bold bg-transparent border-b-2 border-white w-full text-center focus:outline-none"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  />
                ) : (
                  <p className="text-white font-bold">{project.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-8 text-center bg-teal-500 text-white">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Let's create something amazing together!</p>
        <button className="bg-teal-700 px-6 py-3 rounded-lg hover:bg-teal-600">Contact Me</button>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
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