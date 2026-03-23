import React, { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../../assets/petcare.png";
import project2 from "../../assets/petcare.png";
import project3 from "../../assets/english.png";
import project4 from "../../assets/mobileapp.png";

const projectsData = [
  {
    title: "Smart Deal",
    image: project4,
    categories: ["React", "Node.js", "MongoDB", "Firebase"],
    tech: [
      "React",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    description:
      "Smart Deal is a secondhand marketplace where users can buy, sell, and bid on products through a clean and user-friendly web interface. The platform supports product posting, bidding workflows, and personal dashboard features for managing user activity.",
    features: [
      "Post products for sale",
      "Place bids to buy products",
      "View submitted bids",
      "Manage personal product listings",
      "Edit and delete posted products",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Pet Care Center",
    image: project1,
    categories: ["React", "Firebase"],
    tech: ["React", "React Router", "Tailwind CSS", "Firebase"],
    description:
      "A responsive pet service platform built to help users browse services, book appointments, and access pet-care related information in one place. The app focuses on clean UI structure, authentication flow, and smooth user experience across devices.",
    features: [
      "User authentication",
      "Appointment booking",
      "Service browsing",
      "Search and filtering",
      "Responsive design",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Vocabulary Learning App",
    image: project2,
    categories: ["JavaScript"],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "An interactive vocabulary web application designed to improve language learning through real-time API data. Users can search vocabulary, explore detailed word information in modals, and listen to audio pronunciation for a more engaging learning experience.",
    features: [
      "Real-time API integration",
      "Vocabulary search",
      "Modal-based details",
      "Audio pronunciation",
      "Simple and clean interface",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Mobile Bank App",
    image: project3,
    categories: ["JavaScript"],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "A mobile-first banking interface that simulates essential financial actions in a secure and organized way. The application allows users to log in, transfer money, manage transactions, and perform common banking actions from a streamlined dashboard.",
    features: [
      "Mobile number based login",
      "Cash in and cash out",
      "Peer-to-peer transfer",
      "Bill payment system",
      "Transaction history view",
    ],
    github: "#",
    live: "#",
  },
];

const filters = [
  "All",
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Firebase",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-6 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col justify-center items-center">
          <p className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </p>

          <h2 className="text-3xl md:text-5xl text-center font-bold mb-4">
            My Projects
          </h2>

          <p className="max-w-3xl text-base-content/70 text-base md:text-lg leading-8">
            Here are some of the projects I have built to practice modern web
            development, improve problem solving, and create useful digital
            experiences with clean interfaces and practical features.
          </p>
        </div>

        {/* filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-primary text-primary-content shadow"
                  : "bg-base-100 hover:bg-base-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* project grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden bg-base-100 border border-base-300 shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <div className="flex items-center gap-3 text-base-content/60 text-lg">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <p className="text-base-content/70 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm text-base-content/70">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-base-200 text-sm font-medium text-base-content/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
