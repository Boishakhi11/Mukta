import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import Magnetic from "../Motion/Magnetic";
import Tilt from "../Motion/Tilt";

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <Tilt className="rounded-3xl" maxTilt={6}>
          <div className="flex flex-col items-center gap-6 max-w-3xl px-4 py-8 md:px-10 md:py-10">
          {/* Intro */}
            <Fade direction="up" triggerOnce duration={600} damping={0.12}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="text-primary inline-block float-idle">
                  Boishakhi
                </span>
              </h1>
            </Fade>

          {/* Typewriter */}
            <Fade direction="up" triggerOnce duration={650} delay={60}>
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
            </Fade>

          {/* Social icons */}
            <Fade direction="up" triggerOnce duration={650} delay={120}>
              <div className="flex gap-5 text-2xl text-base-content/70">
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/boishakhimukta/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-transform duration-200 hover:scale-110"
                    data-cursor="hover"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    href="https://github.com/Boishakhi11"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-transform duration-200 hover:scale-110"
                    data-cursor="hover"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                </Magnetic>
              </div>
            </Fade>

          {/* Buttons */}
            <Fade direction="up" triggerOnce duration={700} delay={180}>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Magnetic strength={0.35} max={12}>
                  <button
                    onClick={() => {
                      const section = document.getElementById("projects");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-primary px-6"
                    data-cursor="hover"
                  >
                    See My Works
                  </button>
                </Magnetic>

                <Magnetic strength={0.28} max={12}>
                  <a
                    href="/BoishakhiGh_CV.pdf"
                    download
                    className="btn border-primary px-6 flex items-center gap-2"
                    data-cursor="hover"
                  >
                    Download CV
                    <MdOutlineFileDownload className="text-xl" />
                  </a>
                </Magnetic>
              </div>
            </Fade>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
