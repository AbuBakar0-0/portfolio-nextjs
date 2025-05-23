"use client";

import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import InfiniteSlider from './InfiniteSlider';

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-10">
      
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 px-6 sm:px-10 md:px-20 py-16">
        <p className="text-lg sm:text-xl">Hello</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          I'm <strong>Abu Bakar</strong>
        </h1>
        <h2 className="text-lg sm:text-xl">Full Stack Developer</h2>

        {/* Typewriter */}
        <div className="text-lg sm:text-2xl">
          <Typewriter
            options={{
              strings: [
                'Turning Ideas into <span class="text-blue-400 font-semibold">Interactive</span> Experiences',
                'Crafting Dreams into <span class="text-purple-500 font-semibold">Digital</span> Realities',
                'Designing Code with <span class="text-green-400 font-semibold">Purpose</span> and Precision',
                'Building the Future, One <span class="text-pink-500 font-semibold">Pixel</span> at a Time'
              ],
              autoStart: true,
              loop: true,
              delay: 10,
              deleteSpeed: 10,
              html: true,
            }}
          />
        </div>

        {/* Social Links */}
        <div className="flex flex-row items-center gap-4 mt-4">
          <a href="https://www.linkedin.com/in/abu-bakar00/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-400 transition z-50 relative" />
          </a>
          <a href="https://github.com/AbuBakar0-0" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-400 transition  z-50 relative" />
          </a>
        </div>
        {/* Slider */}
        <div className="w-full sm:w-3/4 mt-6">
          <InfiniteSlider />
        </div>
      </div>

      {/* Right Side Placeholder */}
      <div className="w-full md:w-1/2 h-64 md:h-full bg-pink-500">
        {/* Replace this with your image or canvas animation */}
      </div>
    </div>
  );
}

export default About;
