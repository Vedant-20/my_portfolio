import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import Atom from './canvas/Atom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import './hero.css'
import HeroCan1 from './canvas/HeroCan1';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto mybg'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#60FF42]' />
          <div className='w-1 sm:h-80 h-40 bg-green-400' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi, I'm <span className='text-[#60FF42]'>Vedant</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>
              I develop web applications and mobile apps
          </p>
        </div>
        
      </div>
      {/* <ComputersCanvas/> */}
          
            
              
              <Atom />   
              
              
                
              
                
          
          
        
      
      
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-green-500 border-secondary flex justify-center items-start p-2'style={{ marginBottom: '-38px',borderColor: '#60FF42' }}>
              <motion.div style={{borderColor: '#60FF42',backgroundColor: '#60FF42'}}
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />

              
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero












































// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import Atom from './canvas/Atom';
// import HeroCan1 from './canvas/HeroCan1';
// import './hero.css';

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto mybg'>
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#60FF42]' />
//           <div className='w-1 sm:h-80 h-40 bg-green-400' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText}text-white`}>
//             Hi, I'm <span className='text-[#60FF42]'>Vedant</span>
//           </h1>
//           <p className={`${styles.heroSubText}mt-2 text-white-100`}>
//             I develop web applications and mobile apps
//           </p>
//         </div>
//       </div>

//       <div className='relative w-full h-[565px] my-20 mx-auto border-double border-4 flex '>
//         <div style={{ width: '50%' }}>
//           <Atom />
//         </div>
//         <div style={{ width: '50%' }}>
//           <HeroCan1 />
//         </div>
//       </div>

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-green-500 border-secondary flex justify-center items-start p-2'style={{ marginBottom: '-38px',borderColor: '#60FF42' }}>
//             <motion.div
//               style={{ borderColor: '#60FF42', backgroundColor: '#60FF42' }}
//               animate={{
//                 y:[0,24,0]
//               }}
//               transition={{
//                 duration:1.5,
//                 repeat:Infinity,
//                 repeatType:'loop'
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

//  export default Hero;












































































































