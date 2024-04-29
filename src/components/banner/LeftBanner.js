import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Developer.",
      "Full Stack Developer.",
      "Back-end Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hi Everyone Welcome</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Oli Chimdessa</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm skilled full stack developer with extensive experience in
          front-end and back-end development. Proficient in multiple programming
          languages and frameworks, delivering exceptional solutions in an
          efficient and timely manner. I am a full stack web developer with a
          passion for creating interactive and responsive web applications. I
          have experience working with JavaScript, React, Redux, Node.js,
          Express, MYSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
          and I am always looking to expand my knowledge and skill set. I am a
          team player and I am excited to work with others to create amazing
          applications.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
