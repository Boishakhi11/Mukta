import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiSlack,
  SiJira,
  SiBootstrap,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building responsive, user-friendly interfaces",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "DaisyUI", icon: <SiDaisyui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "Working with APIs and databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Collaboration, testing, and design tools",
    skills: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Slack", icon: <SiSlack /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Toolbox
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base-content/70 mb-4">
            I focus on building clean, responsive user-friendly interfaces and
            improving user experience with modern frontend tools.
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-center">
            <span className="badge badge-primary">Responsive UI</span>
            <span className="badge badge-secondary">Reusable Components</span>
            <span className="badge badge-accent">Clean UX</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl bg-base-100 p-6 shadow-md hover:shadow-xl transition duration-300 border border-base-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-primary">
                {group.title}
              </h3>

              <p className="text-sm text-base-content/70 mb-5">
                {group.subtitle}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-base-200 text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
