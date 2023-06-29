import {motion} from 'framer-motion'
import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'
import './sectionWrapper.css'

const SectionWrapper = (Component,idName) => function HOC() {
  return (
    <motion.section variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{once:true,amount:0.25}} className={`${styles.padding}max-w-7xl mx-auto relative z-0  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% `}
    
    >
    <span className='' id={idName}>
        &nbsp;
    </span>
        <Component/>
    </motion.section>
  )
}

export default SectionWrapper