import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <div className="flex flex-col gap-5 ">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/boishakhimukta/"
            target="_blank"
            className="text-3xl cursor-pointer hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Boishakhi11"
            target="_blank"
            className="text-3xl cursor-pointer hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/mukta.ghosh.9212/"
            target="_blank"
            className="text-3xl cursor-pointer hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>

        <div>
          <p>© {new Date().getFullYear()} - All right reserved by Boishakhi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
