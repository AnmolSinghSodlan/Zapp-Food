import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center mx-6 my-10">
      <ul className="flex flex-wrap gap-4 text-gray-600">
        <li className="mb-2">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Terms Of Use
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-800 transition-colors">
            About
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Blog
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-800 transition-colors">
            FAQ
          </a>
        </li>
      </ul>

      <div className="text-gray-600 mx-20 my-4">
        Hello World, I'm Anmol Singh Sodlan. I'm a student, and I created this
        website as a project to showcase my skills and learning. The website
        serves as a practical application of my studies, combining both
        creativity and technical knowledge. I'm excited to share this project
        and contribute to my journey in web development.
      </div>
      <div className="flex flex-wrap gap-10 text-gray-600 my-4">
        <a href="#" className="hover:text-gray-800 transition-colors">
          <FaFacebookF className="text-2xl" />
        </a>
        <a href="#" className="hover:text-gray-800 transition-colors">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="#" className="hover:text-gray-800 transition-colors">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="#" className="hover:text-gray-800 transition-colors">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
