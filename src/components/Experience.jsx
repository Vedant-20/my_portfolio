import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"
import GreetingLottie from "../data/displayLottie";
import {fadeIn} from '../utils/motion'


const ExperienceCard=({experience})=>(
  <VerticalTimelineElement contentStyle={{background:'#1d1836',color:'#fff',border:'2px solid',borderRadius:'10px',backgroundClip:'padding-box',WebkitBackgroundClip:'padding',backgroundImage:'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)'}} contentArrowStyle={{borderRight:'7px solid #232631'}} date={experience.date} iconStyle={{background:experience.iconBg}} 
  icon={<div className="flex justify-center items-center w-full h-full">
    <img src={experience.icon} alt={experience.company_name} className="w-[90%] h-[90%] object-contain"/>
  </div>}>
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold " style={{margin:0}}>{experience.company_name}</p>


    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index)=>(
          <li key={`experience-point-${index}`} className="text-slate-950 font-bold text-[14px] pl-1 tracking-wider ">
              {point}
          </li>
        ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Education &amp; Work Experience
        </h2>

      </motion.div>
      
      <motion.div variants={fadeIn("left","spring",0.75 ,1)} className="px-0 mx-auto w-full md:w-1/2 ">
              <GreetingLottie animationPath="src/assets/lottie/education.json" />
      </motion.div>
      
      

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work') 