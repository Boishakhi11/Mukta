import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase, FaUser } from "react-icons/fa";
import profile from "../../assets/Mukta (1).jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = ["about", "experience", "education"];

  return (
    <section id="about" className="bg-base-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Boishakhi"
              className="w-full max-w-md rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Right content */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-xl font-medium transition ${
                    activeTab === tab
                      ? "bg-base-100 text-primary shadow-md"
                      : "text-base-content hover:text-primary"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* About */}
            {activeTab === "about" && (
              <div className="bg-base-100 rounded-3xl p-8 shadow-md border border-base-300">
                <p className="text-lg font-semibold mb-4">Hi, I’m Boishakhi.</p>

                <div className="space-y-5 text-base-content/75 leading-8">
                  <p>
                    I am a software developer with experience building
                    responsive web applications using React and modern
                    JavaScript tools. I enjoy creating clean, user-friendly
                    interfaces and turning ideas into practical digital
                    experiences.
                  </p>

                  <p>
                    My work includes component-based architecture, REST API
                    integration, state management with React Context API, and
                    frontend implementation across the software development
                    lifecycle.
                  </p>

                  <p>
                    I am comfortable working with cross-functional teams,
                    improving usability, debugging issues, and contributing to
                    production-ready systems with a strong focus on quality and
                    maintainability.
                  </p>

                  <div className="pt-3">
                    <a href="#projects" className="btn btn-primary">
                      View My Projects
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Experience */}
            {activeTab === "experience" && (
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <FaBriefcase className="text-primary text-2xl" />
                    <div className="w-[2px] flex-1 bg-primary/40 mt-2"></div>
                  </div>

                  <div className="bg-base-100 rounded-3xl p-6 shadow-md border border-base-300 w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-primary font-medium mb-1">Innoscribe</p>
                    <p className="text-sm text-base-content/60 mb-4">
                      November 2025 – Present | Oslo, Norway
                    </p>
                    <p className="text-base-content/75 leading-8">
                      Building reusable UI components, improving component
                      architecture, and optimizing frontend performance. Working
                      closely with cross-functional teams to enhance user
                      experience and support production launch readiness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <FaBriefcase className="text-primary text-2xl" />
                    <div className="w-[2px] flex-1 bg-primary/40 mt-2"></div>
                  </div>

                  <div className="bg-base-100 rounded-3xl p-6 shadow-md border border-base-300 w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      IT Assistant
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      Media Mondays Oslo
                    </p>
                    <p className="text-sm text-base-content/60 mb-4">
                      June 2024 – May 2025 | Oslo, Norway
                    </p>
                    <p className="text-base-content/75 leading-8">
                      Managed digital data and supported technical event
                      operations. Also contributed to market and audience
                      research to support engagement and communication efforts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <FaBriefcase className="text-primary text-2xl" />
                  </div>

                  <div className="bg-base-100 rounded-3xl p-6 shadow-md border border-base-300 w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      Software Quality Assurance Engineer
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      DataSoft System Limited
                    </p>
                    <p className="text-sm text-base-content/60 mb-4">
                      May 2019 – August 2019 | Dhaka, Bangladesh
                    </p>
                    <p className="text-base-content/75 leading-8">
                      Executed test cases, reported defects, and gained strong
                      experience in interface quality, user behavior, and
                      collaboration across software teams before major releases.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <FaUserGraduate className="text-primary text-2xl" />
                    <div className="w-[2px] flex-1 bg-primary/40 mt-2"></div>
                  </div>

                  <div className="bg-base-100 rounded-3xl p-6 shadow-md border border-base-300 w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      Master in Applied Computer Science
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      Høgskolen i Østfold
                    </p>
                    <p className="text-sm text-base-content/60 mb-4">
                      August 2022 – June 2025 | Halden, Norway
                    </p>
                    <p className="text-base-content/75 leading-8">
                      Specialized in interaction design and information systems.
                      Thesis: “Development & Assessment of a Gamified Learning
                      Management System”.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <FaUserGraduate className="text-primary text-2xl" />
                  </div>

                  <div className="bg-base-100 rounded-3xl p-6 shadow-md border border-base-300 w-full">
                    <h3 className="text-2xl font-semibold mb-2">
                      Bachelor in Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      International University of Business, Agriculture &
                      Technology
                    </p>
                    <p className="text-sm text-base-content/60 mb-4">
                      January 2015 – December 2019 | Dhaka, Bangladesh
                    </p>
                    <p className="text-base-content/75 leading-8">
                      Built a strong foundation in programming, databases, data
                      structures, and software development fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
