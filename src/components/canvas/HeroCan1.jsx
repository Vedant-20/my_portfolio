import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Preload, RenderTexture, Text } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'


const HeroCan1 = () => {
  return (
    
        <Canvas>
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
            <mesh >
                <boxGeometry args={[1.5,1.5,1.5]} />
                <meshStandardMaterial >
                    <RenderTexture attach='map'>
                    <PerspectiveCamera makeDefault  position={[0,0,2]}/>
                        <color attach='background' args={['lime']}/>
                        <Text fontSize={1} color='purple'>
                            Hello
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
            </Suspense>
            <Preload all/>
        </Canvas>
    
    
  )
}

export default HeroCan1