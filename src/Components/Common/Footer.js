import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="w-full h-[7rem] bg-black/50 absolute bottom-0 text-white flex justify-center items-center flex-col gap-4 text-lg
    sm:text-xl"
    >
      <h1 className="flex justify-center items-center border-b-[1px] border-white">
        Copyright &copy; 2023 | Developed by Aryan Raj
      </h1>
      <div className="w-full flex justify-center items-center gap-4">
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="mailto: aryanrajjaiswal2@gmail.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="https://www.linkedin.com/in/aryan-raj-429b2321b/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="https://github.com/Aryan-9272"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="https://www.facebook.com/profile.php?id=100058478931541"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="https://www.instagram.com/aryanraj_9272/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          className="transition-opacity duration-500 hover:cursor-pointer hover:opacity-50"
          href="https://twitter.com/AryanRaj9272"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
