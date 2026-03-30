import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          {/* Intro */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <span className="text-primary">Boishakhi</span>
          </h1>

          {/* Typewriter */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-base-content/80">
            <Typewriter
              words={[
                "Software Engineer",
                "UX Researcher",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          {/* Social icons */}
          <div className="flex gap-5 text-2xl text-base-content/70">
            <a
              href="https://www.linkedin.com/in/boishakhimukta/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Boishakhi11"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary px-6"
            >
              See My Works
            </button>

            <a
              href="/BoishakhiGh_CV.pdf"
              download
              className="btn border-primary px-6 flex items-center gap-2"
            >
              Download CV
              <MdOutlineFileDownload className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
