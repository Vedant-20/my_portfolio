// import { BallCanvas } from "./canvas"
// import { SectionWrapper } from "../hoc"
// import { technologies } from "../constants"

// import Test from "./canvas/Test"
// import React, { useRef } from 'react';
//  import './canvas/canvas.css'
//  import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { TextureLoader } from 'three';



// const Tech = () => {
//   const sphereRef = useRef();
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10 bg-transparent glass-container">
//       {technologies.map((technology)=>(
        
//         <div className="w-28 h-28" key={technology.name}>
//         const texture = useLoader(TextureLoader, technology.icon);
          
//             {/* <BallCanvas icon={technology.icon}/> */}
//             {/* <Test /> */}



//             <Canvas>
//       <OrbitControls enableZoom={false} autoRotate/>
//       <ambientLight intensity={1}/>
//       <directionalLight position={[3,2,1]}/>
//       <mesh ref={sphereRef} scale={2.75}>
//         <sphereGeometry args={[1, 32, 32]} />
        
          
          
//             <meshStandardMaterial
//               key={technology.name}
//               attachArray="material"
//               map={texture}
//             />
          
        
//       </mesh>
//     </Canvas>

            
            
          
//         </div>
//       ))}
//     </div>
//   )
// }

// export default SectionWrapper(Tech,'') 








































import './canvas/canvas.css'
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { TextureLoader } from 'three';
import { Suspense } from 'react';
import CanvasLoader from '../components/Loader'


const Sphere = ({ texture }) => {
  // const sphereRef = useRef();
  const boxRef = useRef();

  return (
    <mesh ref={boxRef} scale={3.5}>
      {/* <sphereGeometry args={[1, 32, 32]} /> */}
      {/* <meshStandardMaterial attach="material" map={texture} /> */}
      <boxGeometry args={[1, 1, -1, 22, 22]}  />
      <meshStandardMaterial  attach='material' map={texture}  />
    </mesh>
  );
};

const SphereCanvas = ({ icon }) => {
  const texture = useLoader(TextureLoader, icon);
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere texture={texture} />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 bg-transparent glass-container">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <SphereCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
