import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/Mukta (1).jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-20 px-6 bg-base-200">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="rounded-2xl w-[300px] md:w-[400px] shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {["about", "experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === tab
                    ? "bg-purple-500 text-white shadow"
                    : "bg-base-100 hover:bg-purple-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* ABOUT */}
          {activeTab === "about" && (
            <div className="space-y-4 text-gray-600">
              <p className="font-semibold text-gray-800">
                Hi, This is Boishakhi.
              </p>

              <p>
                Software Developer with experience building responsive web
                applications using React and modern JavaScript frameworks.
              </p>

              <p>
                Skilled in component-based architecture, state management using
                React Context API, and REST API integration.
              </p>

              <p>
                Experienced working across the software development lifecycle,
                from frontend implementation to deployment.
              </p>

              <button className="btn btn-outline btn-primary mt-4">
                Contact Me
              </button>
            </div>
          )}

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-10">
              {/* Timeline Item */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-purple-500 text-xl">
                    <FaUser />
                  </div>
                  <div className="w-[2px] bg-purple-400 flex-1 mt-2"></div>
                </div>

                <div className="bg-base-100 p-6 rounded-xl shadow w-full">
                  <h3 className="text-lg font-semibold">
                    Frontend Developer - Innoscribe
                  </h3>
                  <p className="text-sm text-purple-500 mb-2">
                    11/2025 – Present | Oslo
                  </p>
                  <p className="text-gray-600">
                    Built reusable UI components, improved performance, and
                    collaborated with cross-functional teams to enhance user
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-purple-500 text-xl">
                    <FaUser />
                  </div>
                  <div className="w-[2px] bg-purple-400 flex-1 mt-2"></div>
                </div>

                <div className="bg-base-100 p-6 rounded-xl shadow w-full">
                  <h3 className="text-lg font-semibold">
                    IT Assistant - Media Mondays Oslo
                  </h3>
                  <p className="text-sm text-purple-500 mb-2">
                    06/2024 – 05/2025
                  </p>
                  <p className="text-gray-600">
                    Managed digital data and supported technical event
                    operations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-purple-500 text-xl">
                    <FaUser />
                  </div>
                  <div className="w-[2px] bg-purple-400 flex-1 mt-2"></div>
                </div>

                <div className="bg-base-100 p-6 rounded-xl shadow w-full">
                  <h3 className="font-semibold">
                    MSc in Applied Computer Science
                  </h3>
                  <p className="text-sm text-purple-500 mb-2">
                    2022 – 2025 | Norway
                  </p>
                  <p className="text-gray-600">
                    Specialization in Interaction Design and Information
                    Systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-purple-500 text-xl">
                    <FaUser />
                  </div>
                  <div className="w-[2px] bg-purple-400 flex-1 mt-2"></div>
                </div>

                <div className="bg-base-100 p-6 rounded-xl shadow w-full">
                  <h3 className="font-semibold">
                    BSc in Computer Science & Engineering
                  </h3>
                  <p className="text-sm text-purple-500 mb-2">
                    2015 – 2019 | Bangladesh
                  </p>
                  <p className="text-gray-600">
                    Strong foundation in programming and data structures.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
