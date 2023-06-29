// // // import React from 'react'
// // // import { Canvas } from '@react-three/fiber'
// // // import { OrbitControls, RenderTexture } from '@react-three/drei'
// // // import { Image } from '@react-three/drei'

// // // const Test = () => {
// // //   return (
// // //     <div className='h-screen w-full'>
// // //       <Canvas>
// // //         <OrbitControls enableZoom={false} autoRotate/>
// // //         <ambientLight intensity={1}/>
// // //         <directionalLight position={[3,2,1]}/>
// // //         <mesh>
// // //           <sphereGeometry args={[1, 32, 32]}/>
// // //           <RenderTexture>
// // //             <Image src="V:\My Projects\my_3d_portfolio\public\logo1.png" url='' />
// // //           </RenderTexture>
// // //           <meshStandardMaterial />
// // //         </mesh>
// // //       </Canvas>
// // //     </div>
// // //   )
// // // }

// // // export default Test




























// // import React, { useRef } from 'react';
// // import { Canvas, useLoader } from '@react-three/fiber';
// // import { OrbitControls } from '@react-three/drei';
// // import { TextureLoader } from 'three';
// // import javascript from "../assets/tech/javascript.png";
// // import typescript from "../assets/tech/typescript.png";
// // import html from "../assets/tech/html.png";
// // import css from "../assets/tech/css.png";
// // import reactjs from "../assets/tech/reactjs.png";
// // import redux from "../assets/tech/redux.png";
// // import tailwind from "../assets/tech/tailwind.png";
// // import nodejs from "../assets/tech/nodejs.png";
// // import mongodb from "../assets/tech/mongodb.png";
// // import git from "../assets/git.png";
// // import figma from "../assets/tech/figma.png";
// // import docker from "../assets/tech/docker.png";
// // import threejs from "../assets/tech/threejs.svg";
// // // import {
  
// // //   javascript,
// // //   typescript,
// // //   html,
// // //   css,
// // //   reactjs,
// // //   redux,
// // //   tailwind,
// // //   nodejs,
// // //   mongodb,
// // //   git,
// // //   figma,
// // //   docker,
  
// // //   threejs,
// // // } from "../assets/tech";

// // const technologies = [
// //   {
// //     name: "HTML 5",
// //     icon: html,
// //   },
// //   {
// //     name: "CSS 3",
// //     icon: css,
// //   },
// //   {
// //     name: "JavaScript",
// //     icon: javascript,
// //   },
// //   {
// //     name: "TypeScript",
// //     icon: typescript,
// //   },
// //   {
// //     name: "React JS",
// //     icon: reactjs,
// //   },
// //   {
// //     name: "Redux Toolkit",
// //     icon: redux,
// //   },
// //   {
// //     name: "Tailwind CSS",
// //     icon: tailwind,
// //   },
// //   {
// //     name: "Node JS",
// //     icon: nodejs,
// //   },
// //   {
// //     name: "MongoDB",
// //     icon: mongodb,
// //   },
// //   {
// //     name: "Three JS",
// //     icon: threejs,
// //   },
// //   {
// //     name: "git",
// //     icon: git,
// //   },
// //   {
// //     name: "figma",
// //     icon: figma,
// //   },
// //   {
// //     name: "docker",
// //     icon: docker,
// //   },
// // ];



// // const Test = () => {
// //   // const texture = useLoader(TextureLoader, 'public/logo1.png');
// //   // const sphereRef = useRef();

// //   return (
    
// //       <Canvas>
// //         <OrbitControls enableZoom={false} autoRotate/>
// //         <ambientLight intensity={1}/>
// //         <directionalLight position={[3,2,1]}/>
// //         <mesh ref={sphereRef} scale={2.75}>
// //           <sphereGeometry args={[1, 32, 32]} />
// //           {technologies.map((tech, index) => (
// //           <meshStandardMaterial
// //             key={index}
// //             attachArray="material"
// //             map={ tech.icon}
// //           />
// //         ))}
// //         </mesh>
// //       </Canvas>
    
// //   );
// // }

// // export default Test;































import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { technologies } from '../../constants';

const Test = () => {
  const sphereRef = useRef();

  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
      <mesh ref={sphereRef} scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        {technologies.map((tech) => {
          const texture = useLoader(TextureLoader, tech.icon);
          return (
            <meshStandardMaterial
              key={tech.name}
              attachArray="material"
              map={texture}
            />
          );
        })}
      </mesh>
    </Canvas>
  );
}

export default Test;



















































// import React, { useRef } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { TextureLoader } from 'three';







// const Test = () => {
  
//   const texture = useLoader(TextureLoader, 'src/assets/tech/css.png');
//   const sphereRef = useRef();

//   return (
    
//       <Canvas>
//         <OrbitControls enableZoom={false} autoRotate/>
//         <ambientLight intensity={1}/>
//         <directionalLight position={[3,2,1]}/>
//         <mesh ref={sphereRef} scale={2.75}>
//           <sphereGeometry args={[1, 32, 32]} />
//           <meshStandardMaterial map={texture} />
//         </mesh>
//       </Canvas>
    
//   );
// }

// export default Test;














// import React, { useRef } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { TextureLoader } from 'three';

// const Test = () => {
//   const texture = useLoader(TextureLoader, 'src/assets/tech/nodejs.png');
//   const boxRef = useRef();

//   return (
//     <Canvas >
//       <OrbitControls enableZoom={false} autoRotate />
//       <ambientLight intensity={1} />
//       <directionalLight position={[3, 2, 1]} />
//       <mesh ref={boxRef} scale={2.75} >
//         <boxGeometry args={[1, 1, -1, 32, 32]}  />
        
//         <meshStandardMaterial  map={texture}  />
//       </mesh>
//     </Canvas>
//   );
// };

// export default Test;
























































































