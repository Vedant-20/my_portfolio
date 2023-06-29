import React from 'react';
import Marquee from "react-fast-marquee";


import './skills.css';
import './hero.css'
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants"

function Skills() {
    

    return (
        <div className="skills  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
            <div className="skillsHeader">
                <h2 style={{ color: 'white' }}>Skills</h2>
            </div>
            <div className="skillsContainer mybg">
                <div className="skill--scroll ">
                    <Marquee
                        gradient={false}
                        speed={200}
                        
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {technologies.map((technology) => (
                            <div className="skill--box skillsbg" key={technology.name} >
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