"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Customize() {
  const [userData, setUserData] = useState({
    name: 'Professional Designer',
    title: 'Creative Visual Solutions',
    description: 'Transforming ideas into stunning visual experiences',
    services: [
      { title: 'UI/UX Design', description: 'Crafting intuitive and engaging user interfaces' },
      { title: 'Branding', description: 'Creating memorable brand identities' },
      { title: 'Digital Art', description: 'Bringing creative concepts to life' },
    ],
    portfolioImages: [
      '/portfolio1.jpg', 
      '/portfolio2.jpg',
      '/portfolio3.jpg',
      '/portfolio4.jpg',
      '/portfolio5.jpg',
      '/portfolio6.jpg',
    ],
    contactInfo: {
      email: 'design@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
    },
    profileImage: '/default-profile.jpg',
  });

  const [editingField, setEditingField] = useState(null);

  const handleTextEdit = (field, newValue) => {
    setUserData(prev => ({
      ...prev,
      [field]: newValue
    }));
    setEditingField(null);
  };

  const handleServiceEdit = (index, field, newValue) => {
    const updatedServices = [...userData.services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: newValue
    };
    setUserData(prev => ({
      ...prev,
      services: updatedServices
    }));
    setEditingField(null);
  };

  const EditableText = ({ value, onEdit, className = "" }) => {
    const [tempValue, setTempValue] = useState(value);

    return (
      <div className="group relative flex items-center">
        {editingField !== value ? (
          <>
            <span className={className}>{value}</span>
            <button 
              onClick={() => setEditingField(value)}
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
            </button>
          </>
        ) : (
          <div className="flex items-center">
            <input 
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="bg-white/10 text-white px-2 py-1 rounded mr-2"
            />
            <button 
              onClick={() => onEdit(tempValue)}
              className="text-blue-400 hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <EditableText 
            value={userData.name}
            onEdit={(newValue) => handleTextEdit('name', newValue)}
            className="text-3xl font-bold text-blue-300"
          />
          <nav className="space-x-6 text-blue-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <EditableText 
            value={userData.title}
            onEdit={(newValue) => handleTextEdit('title', newValue)}
            className="text-5xl font-bold text-blue-200 mb-4"
          />
          <EditableText 
            value={userData.description}
            onEdit={(newValue) => handleTextEdit('description', newValue)}
            className="text-xl text-blue-100 mb-6"
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src={userData.profileImage}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/10 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-200 mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {userData.services.map((service, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl text-center">
                <EditableText 
                  value={service.title}
                  onEdit={(newValue) => handleServiceEdit(index, 'title', newValue)}
                  className="text-xl font-bold text-blue-300 mb-3"
                />
                <EditableText 
                  value={service.description}
                  onEdit={(newValue) => handleServiceEdit(index, 'description', newValue)}
                  className="text-blue-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-200 mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {userData.portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={image}
                alt={`Portfolio ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white/10 py-16">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl font-bold text-center text-blue-200 mb-12">Contact Me</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}