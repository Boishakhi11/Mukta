import React, { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import smartDealImg from "../../assets/smartdeals.png";
import petCareImg from "../../assets/petcare.png";
import vocabularyImg from "../../assets/english.png";
import mobileBankImg from "../../assets/mobileapp.png";
import newsDeskImg from "../../assets/News.jpg";
import greenEarthImg from "../../assets/greenearth.png";

const projectsData = [
  {
    title: "Pet Care Center",
    image: petCareImg,
    categories: ["React", "Firebase"],
    tech: ["React", "React Router", "Tailwind CSS", "Firebase"],
    description:
      "A responsive pet service platform that helps users browse services, book appointments, and explore pet-care information in one place. The project focuses on clean UI structure, authentication flow, and a smooth experience across different devices.",
    github: "https://github.com/Boishakhi11/Pet-Care-Center",
    live: "https://pet-care-center-in-norway.netlify.app/",
  },
  {
    title: "Smart Deal",
    image: smartDealImg,
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
      "Smart Deal is a secondhand marketplace where users can buy, sell, and bid on products in a clean and user-friendly interface. Users can post products for sale, place bids to buy, track their bids, manage their own products, and edit or delete listings from their dashboard.",
    github: "https://github.com/Boishakhi11/SecondLifeHub-client",
    live: "https://github.com/Boishakhi11/SecondLifeHub-client",
  },
  {
    title: "Vocabulary Learning App",
    image: vocabularyImg,
    categories: ["JavaScript"],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "An interactive vocabulary learning web app designed to make language learning more engaging. Users can search words, open modal-based details, and listen to audio pronunciation through real-time API integration.",
    github: "https://github.com/Boishakhi11/english-window",
    live: "https://boishakhi11.github.io/english-window/",
  },
  {
    title: "Mobile Bank App",
    image: mobileBankImg,
    categories: ["JavaScript"],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "A mobile-first banking interface that simulates common financial actions in a secure and organized layout. The app includes mobile-number login, cash in and cash out, transfers, bill payments, and transaction history.",
    github: "https://github.com/Boishakhi11/Mobile-App",
    live: "https://boishakhi11.github.io/Mobile-App/",
  },
  {
    title: "The News Desk",
    image: newsDeskImg,
    categories: ["React", "Firebase"],
    tech: ["React", "React Router", "Firebase", "Context API", "Vite"],
    description:
      "The News Desk is a modern news web application where users can browse categorized news, create an account, log in securely, and access protected routes. It uses Firebase Authentication, React Router, Context API, and a responsive layout.",
    github: "https://github.com/Boishakhi11/The-News-Desk",
    live: "https://newsdeskk.netlify.app",
  },
  {
    title: "Green Earth Campaign",
    image: greenEarthImg,
    categories: ["JavaScript"],
    tech: ["HTML", "JavaScript", "Tailwind CSS", "DaisyUI"],
    description:
      "Green Earth Campaign is a plant-focused web application with dynamic category loading, detailed product modals, and cart functionality. Users can browse plants by category, view full details, add items to cart, remove them, and see the total price update in real time.",
    github: "https://github.com/Boishakhi11/Green-Earth-Campaign",
    live: "https://boishakhi11.github.io/Green-Earth-Campaign/",
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
        {/* heading */}
        <div className="mb-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Works</h2>

          <p className="max-w-3xl text-base-content/70 text-base md:text-lg leading-8">
            Here are some of my recent works demo, built with modern frontend
            and full-stack technologies. They reflect my interest in clean UI,
            practical features, responsive design, and real user-focused
            experiences.
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

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden bg-base-100 border border-base-300 shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* image */}
              <div className="object-cover">
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

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-base-300 text-sm font-medium text-base-content/80"
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
