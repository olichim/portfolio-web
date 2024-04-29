import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div className=" items-center text-center">
        <div className="flex gap-4">
          <a href="https://www.facebook.com/OlimanCN">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/olichim">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/oli-chimdessa-25a9792a7/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Media;
