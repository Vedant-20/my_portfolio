import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'




const Computers = ({isMobile}) => {
  
  const computer=useGLTF('./desk_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <pointLight intensity={2} />
      <spotLight position={[-20,50,10]} angle={0.3} penumbra={1} intensity={2} color='white' castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.05 : 0.3} position={isMobile ? [0, 1, 0]: [-50, -4.35, -10.5]} rotation={isMobile ? [-0.2, -0.5, 0] : [0, 1.3, 0]} />
    </mesh>
  );
};










Computers.defaultProps={
  isMobile:false,
};


const ComputersCanvas =()=>{
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
    
    const mediaQuery=window.matchMedia('max-width:500px'
    );

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])
  
  return(
    
    <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}} >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
          <Computers isMobile={isMobile}/>

      </Suspense>
      <Preload all />

    </Canvas>
    
  )
}

export default ComputersCanvas;
// export default Computers