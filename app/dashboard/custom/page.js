"use client";

import React, { useState } from "react";
import { Layout, Move, Edit2, Plus, X, Camera, Link as LinkIcon } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";

const PortfolioCreator = () => {
  const [view, setView] = useState("create");
  const [portfolio, setPortfolio] = useState({
    name: "",
    title: "",
    profileImage: "/api/placeholder/150/150",
    contact: {
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: ""
    },
    about: "",
    skills: [],
    education: [],
    experience: [],
    projects: [],
    customSections: [],
    style: {
      color: "#4F46E5",
      fontFamily: "Inter",
      fontSize: "medium",
      headingSize: "large"
    }
  });

  const fontOptions = [
    { name: "Inter", value: "inter" },
    { name: "Poppins", value: "poppins" },
    { name: "Roboto", value: "roboto" },
    { name: "Playfair Display", value: "playfair" }
  ];

  const fontSizes = [
    { name: "Small", value: "small" },
    { name: "Medium", value: "medium" },
    { name: "Large", value: "large" }
  ];

  const handleAddSkill = () => {
    const newSkill = { id: Date.now(), name: "", level: "Beginner" };
    setPortfolio({
      ...portfolio,
      skills: [...portfolio.skills, newSkill]
    });
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "",
      description: "",
      images: [],
      technologies: [],
      link: ""
    };
    setPortfolio({
      ...portfolio,
      projects: [...portfolio.projects, newProject]
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const section = result.draggableId.split('-')[0];
    
    const items = Array.from(portfolio[section]);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    
    setPortfolio({
      ...portfolio,
      [section]: items
    });
  };

  const CreationView = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Layout className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Create Your Portfolio</h1>
            </div>
            <button
              onClick={() => setView("preview")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Preview
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Basic Information */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={portfolio.name}
                  onChange={(e) => setPortfolio({ ...portfolio, name: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Professional Title</label>
                <input
                  type="text"
                  value={portfolio.title}
                  onChange={(e) => setPortfolio({ ...portfolio, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Full Stack Developer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">About Me</label>
                <textarea
                  value={portfolio.about}
                  onChange={(e) => setPortfolio({ ...portfolio, about: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  placeholder="Write a brief introduction about yourself..."
                />
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Skills</h2>
              <button
                onClick={handleAddSkill}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <Plus className="h-4 w-4" />
                <span>Add Skill</span>
              </button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="skills">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                    {portfolio.skills.map((skill, index) => (
                      <Draggable key={skill.id} draggableId={`skills-${skill.id}`} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                          >
                            <Move className="h-4 w-4 text-gray-400" />
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) => {
                                const newSkills = [...portfolio.skills];
                                newSkills[index].name = e.target.value;
                                setPortfolio({ ...portfolio, skills: newSkills });
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                              placeholder="Skill name"
                            />
                            <select
                              value={skill.level}
                              onChange={(e) => {
                                const newSkills = [...portfolio.skills];
                                newSkills[index].level = e.target.value;
                                setPortfolio({ ...portfolio, skills: newSkills });
                              }}
                              className="px-3 py-2 border border-gray-300 rounded-lg"
                            >
                              <option>Beginner</option>
                              <option>Intermediate</option>
                              <option>Advanced</option>
                              <option>Expert</option>
                            </select>
                            <button
                              onClick={() => {
                                const newSkills = portfolio.skills.filter((_, i) => i !== index);
                                setPortfolio({ ...portfolio, skills: newSkills });
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </section>

          {/* Projects */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Projects</h2>
              <button
                onClick={handleAddProject}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <Plus className="h-4 w-4" />
                <span>Add Project</span>
              </button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="projects">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-6">
                    {portfolio.projects.map((project, index) => (
                      <Draggable key={project.id} draggableId={`projects-${project.id}`} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="bg-gray-50 p-6 rounded-lg space-y-4"
                          >
                            <div {...provided.dragHandleProps} className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Move className="h-4 w-4 text-gray-400" />
                                <h3 className="font-medium">Project {index + 1}</h3>
                              </div>
                              <button
                                onClick={() => {
                                  const newProjects = portfolio.projects.filter((_, i) => i !== index);
                                  setPortfolio({ ...portfolio, projects: newProjects });
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="space-y-4">
                              <input
                                type="text"
                                value={project.title}
                                onChange={(e) => {
                                  const newProjects = [...portfolio.projects];
                                  newProjects[index].title = e.target.value;
                                  setPortfolio({ ...portfolio, projects: newProjects });
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Project Title"
                              />
                              <textarea
                                value={project.description}
                                onChange={(e) => {
                                  const newProjects = [...portfolio.projects];
                                  newProjects[index].description = e.target.value;
                                  setPortfolio({ ...portfolio, projects: newProjects });
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                rows="3"
                                placeholder="Project Description"
                              />
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 rounded-lg">
                                  <Camera className="h-4 w-4" />
                                  <span>Add Images</span>
                                </button>
                                <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 rounded-lg">
                                  <LinkIcon className="h-4 w-4" />
                                  <span>Add Link</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </section>

          {/* Styling Options */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Styling</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme Color</label>
                <div className="mt-1 flex items-center space-x-3">
                  <input
                    type="color"
                    value={portfolio.style.color}
                    onChange={(e) => setPortfolio({
                      ...portfolio,
                      style: { ...portfolio.style, color: e.target.value }
                    })}
                    className="h-10 w-20 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-500">{portfolio.style.color}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Font Family</label>
                <select
                  value={portfolio.style.fontFamily}
                  onChange={(e) => setPortfolio({
                    ...portfolio,
                    style: { ...portfolio.style, fontFamily: e.target.value }
                  })}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {fontOptions.map(font => (
                    <option key={font.value} value={font.value}>{font.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Font Size</label>
                <select
                  value={portfolio.style.fontSize}
                  onChange={(e) => setPortfolio({
                    ...portfolio,
                    style: { ...portfolio.style, fontSize: e.target.value }
                  })}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {fontSizes.map(size => (
                    <option key={size.value} value={size.value}>{size.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

  const PreviewView = () => (
    <div className="min-h-screen" style={{ fontFamily: portfolio.style.fontFamily }}>
      {/* Preview implementation */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <Layout className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-white">{portfolio.name}</h1>
          </div>
          <button
            onClick={() => setView("create")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Edit
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="bg-white shadow-sm rounded-xl p-6 mb-8">
          <div className="flex items-center mb-6">
            <Image
              src={portfolio.profileImage}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="ml-6">
              <h2 className="text-3xl font-semibold">{portfolio.name}</h2>
              <p className="text-lg text-gray-600">{portfolio.title}</p>
            </div>
          </div>
          <p className="text-gray-700">{portfolio.about}</p>
        </section>

        <section className="bg-white shadow-sm rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2">
            {portfolio.skills.map((skill) => (
              <li key={skill.id} className="flex justify-between items-center">
                <span>{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white shadow-sm rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-6">
            {portfolio.projects.map((project, index) => (
              <li key={project.id} className="space-y-4">
                <h4 className="text-xl font-medium">{project.title}</h4>
                <p className="text-gray-700">{project.description}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Visit Project
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white shadow-sm rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li>Email: <a href={`mailto:${portfolio.contact.email}`} className="text-indigo-600">{portfolio.contact.email}</a></li>
            <li>Phone: {portfolio.contact.phone}</li>
            <li>Location: {portfolio.contact.location}</li>
            <li>
              LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600">LinkedIn Profile</a>
            </li>
            <li>
              GitHub: <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600">GitHub Profile</a>
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-sm rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Styling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="text-sm text-gray-600">Theme Color: </span>
              <span style={{ color: portfolio.style.color }}>{portfolio.style.color}</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Font Family: </span>
              <span>{portfolio.style.fontFamily}</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Font Size: </span>
              <span>{portfolio.style.fontSize}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );

  return view === "create" ? <CreationView /> : <PreviewView />;
};

export default PortfolioCreator;
