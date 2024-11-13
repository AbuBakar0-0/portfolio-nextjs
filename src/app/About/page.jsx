"use client";

import Typewriter from 'typewriter-effect';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import InfiniteSlider from './InfiniteSlider';


function About() {

  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-4 p-32">
          <p className="w-full text-xl">Hello</p>
          <h1 className="w-full text-6xl">I'm <strong>Abu Bakar</strong></h1>
          <h2 className='w-full text-xl'>Full Stack Developer</h2>
          <div className='w-full text-2xl'>
            <Typewriter
              options={{
                strings: ['Turning Ideas into <span class="text-blue-400 font-semibold">Interactive</span> Experiences'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className='w-full flex flex-row justify-start items-center gap-4'>
            <FaFacebook className='size-6' />
            <FaLinkedin className='size-6' />
            <FaGithub className='size-6' />
          </div>
          <div className='w-1/2 flex items-center justify-center mt-4'>
            <InfiniteSlider />
          </div>
        </div>
        <div className="w-full h-screen bg-pink-500">

        </div>
      </div>
    </>
  )
}

export default About