"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgImage from '../../assets/gr.png';
import mainImage from '../../assets/m.png';

export default function PortfolioPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('I AM A PROFESSIONAL GRAPHIC DESIGNER');
  const [aboutText, setAboutText] = useState(
    'As a seasoned graphic designer, I specialize in creating bold, modern visuals and designs tailored to clients’ unique needs.'
  );
  const [userImage, setUserImage] = useState(null);
  const [projects, setProjects] = useState([
    { title: 'Project 1', description: 'A brief description of the project goes here.', image: bgImage.src },
    { title: 'Project 2', description: 'A brief description of the project goes here.', image: bgImage.src },
    { title: 'Project 3', description: 'A brief description of the project goes here.', image: bgImage.src },
  ]);
  const [testimonials, setTestimonials] = useState([
    { text: 'An amazing designer! Truly captured my vision and brought it to life.', client: 'Client Name' },
    { text: 'Professional and creative. Couldn\'t have asked for a better experience.', client: 'Client Name' },
  ]);

  const handleImageUpload = (event, index = null) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (index === null) {
          setUserImage({ src: e.target.result });
        } else {
          const newProjects = [...projects];
          newProjects[index].image = e.target.result;
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
  const handleTestimonialChange = (index, field, value) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index][field] = value;
    setTestimonials(newTestimonials);
  };

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen font-sans">
      {/* Header Section */}
      <nav className="flex space-x-6">
        <div
          className="relative bg-cover bg-center h-[12vh] w-[12vw] rotate-30"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <p className="font-bold text-[25px] text-white">MowBox</p>
        </div>
        <div className="pl-[60vw]">
          <Link href="#" className="text-white hover:text-pink-500">Home</Link>
          <Link href="#" className="text-white hover:text-pink-500 pl-[1.5vw]">About</Link>
          <Link href="#" className="text-white hover:text-pink-500 pl-[1.5vw]">Projects</Link>
          <Link href="#" className="text-white hover:text-pink-500 pl-[1.5vw]">Contact me</Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex items-center justify-between bg-[#1c1c1c] py-16 px-8">
        {/* Text Section */}
        <div className="w-1/2">
          {isEditing ? (
            <div>
              <input
                className="text-4xl font-bold bg-transparent border-b-2 border-pink-500 text-white w-full focus:outline-none mb-4"
                value={headerTitle}
                onChange={(e) => setHeaderTitle(e.target.value)}
              />
              <input
                className="text-2xl text-pink-500 bg-transparent border-b-2 border-pink-500 w-full focus:outline-none"
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-bold text-white">{headerTitle}</h1>
              <h2 className="text-2xl text-pink-500 mt-2">{aboutText}</h2>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div
          className="w-1/2 bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: `url(${mainImage.src})`, height: '300px' }}
        >
          {isEditing ? (
            <label className="relative cursor-pointer">
              {userImage ? (
                <Image
                  src={userImage.src}
                  alt="User"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-pink-500"
                />
              ) : (
                <div className="w-[150px] h-[150px] bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                  Upload Image
                </div>
              )}
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageUpload}
              />
            </label>
          ) : (
            userImage ? (
              <Image
                src={userImage.src}
                alt="User"
                width={150}
                height={150}
                className="h-[40vh] w-[20vw] border-4 border-pink-500"
              />
            ) : (
              <div className="w-[150px] h-[150px] bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                No Image
              </div>
            )
          )}
        </div>
      </div>

      
      {/* Portfolio Section */}
      <section className="py-16 px-8 bg-[#2a2a2a]">
        <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1c1c1c] p-4">
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
                    className="text-xl font-bold bg-transparent border-b-2 border-pink-500 text-white w-full focus:outline-none mt-4"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  />
                  <textarea
                    className="text-gray-300 bg-transparent border-b-2 border-pink-500 w-full focus:outline-none mt-2"
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-[#1c1c1c]">
        <h2 className="text-3xl font-bold text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#2a2a2a] p-4">
              {isEditing ? (
                <div>
                  <textarea
                    className="text-gray-300 bg-transparent border-b-2 border-pink-500 w-full focus:outline-none"
                    value={testimonial.text}
                    onChange={(e) => handleTestimonialChange(index, 'text', e.target.value)}
                  />
                  <input
                    className="text-pink-500 bg-transparent border-b-2 border-pink-500 w-full focus:outline-none mt-4"
                    value={testimonial.client}
                    onChange={(e) => handleTestimonialChange(index, 'client', e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <p className="text-gray-300">&quot;{testimonial.text}&quot;</p>
                  <p className="text-pink-500 mt-4">- {testimonial.client}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 bg-black text-center">
        <p className="text-gray-500">&copy; 2024 Professional Graphic Designs. All rights reserved.</p>
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
