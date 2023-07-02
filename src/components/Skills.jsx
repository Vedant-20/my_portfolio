import React from 'react';
import Marquee from "react-fast-marquee";


import './skills.css';

import { SectionWrapper } from '../hoc';
import { technologies } from "../constants"
import GreetingLottie from "../data/displayLottie";
import {fadeIn} from '../utils/motion'
import {motion} from 'framer-motion'

function Skills() {
    

    return (
        <div className="skills  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
            <div className="skillsHeader">
                <h2 style={{ color: 'white' }}>My Skills</h2>
            </div>
            <motion.div variants={fadeIn("left","spring",0.75 ,1)} className="px-0 mx-auto w-full md:w-1/2 ">
              <GreetingLottie animationPath="src/assets/lottie/development.json" />
            </motion.div>
            <div className="skillsContainer mybg ">
                <div className="skill--scroll ">
                    <Marquee
                        gradient={false}
                        speed={350}
                        
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {technologies.map((technology) => (
                            <div className="skill--box skillsbg " key={technology.name} >
                                <img src={technology.icon} alt='skill' />
                                <h3 style={{ color: 'black' }}>
                                    {technology.name}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Skills,'') 