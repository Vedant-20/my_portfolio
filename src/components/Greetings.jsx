import React, { useEffect } from "react";
import {motion} from 'framer-motion'
import {fadeIn,slideIn} from '../utils/motion'

import './hero.css'






import GreetingLottie from "../data/displayLottie";
import { SectionWrapper } from "../hoc";
import SocialLinks from "../data/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });

  return (
    
    
      <div className="relative ">
        <section className="section section-lg section-shaped pb-250 pt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="shape shape-style-1 bg-gradient-warning">
            <span />
            <span />
            <span />
            <span />
            <span />
            {/* <ParticleBg type="polygon" bg={true} num={1} /> */}
          </div>
          <div className="container py-lg-md flex flex-col lg:flex-row">
            <div className="px-0 mx-auto w-full md:w-1/2">
              <motion.div variants={fadeIn("right","spring",0.75 ,1)} className="text-center md:text-left">
                <h1 className="text-5xl text-white font-bold mb-8">
                  Welcome.
                </h1>
                <p className="text-white text-lg mb-8">Hello! I am Vedant Warjurkar, a Computer Engineer and Full Stack Developer based in <span class="font-medium select-none text-gray-950 animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] "> Nagpur, INDIA</span> who develops modern, reactive and user-friendly web applications using the latest technologies currently. I love to learn and explore new technologies and apart from web app I also develop the android applications with the help of Flutter and React Native </p>
                <SocialLinks />
                <div className="my-4">
                <button
                  type="button"
                  style={{backgroundImage:'linear-gradient(to right,  #6f7dfb, #ca60d1, #f04c97, #f3575d, #da722c)'}}
                  className="rounded-md px-4 py-3 text-lg font-semibold text-white border-4  hover:opacity-90 transition-opacity duration-300"
                  onClick={() => window.open('src/assets/resume.pdf', '_blank', 'noopener noreferrer')}
                  download="resume.pdf"
                >
                  See My Resume
                </button>

                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeIn("left","spring",0.75 ,1)} className="px-0 mx-auto w-full md:w-1/2">
              <GreetingLottie animationPath="src/assets/lottie/coding.json" />
            </motion.div>
          </div>
          
        </section>
        {/* 1st Hero Variation */}
      </div>
    
    
  );
};


export default SectionWrapper(Greetings)