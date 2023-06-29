// import { Canvas } from '@react-three/fiber';
// import { Line, Sphere } from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import * as THREE from 'three';
// import { useMemo } from 'react';

// const Shape = () => {
//   const points = useMemo(
//     () =>
//       new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
//         100
//       ),
//     []
//   );
//   return (
//     <group position={[-9, -2.5, -12]} scale={[2, 2, 2]}>
//       <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
//       <Line
//         worldUnits
//         points={points}
//         color="#cae6f1"
//         lineWidth={0.3}
//         rotation={[0, 0, 1]}
//       />
//       <Line
//         worldUnits
//         points={points}
//         color="#cae6f1"
//         lineWidth={0.3}
//         rotation={[0, 0, -1]}
//       />
//       <Sphere args={[0.55, 64, 64]}>
//         <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
//       </Sphere>
//     </group>
//   );
// };

// const Atom = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Shape />
//       <EffectComposer>
//         <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
//       </EffectComposer>
//     </Canvas>
//   );
// };

// export default Atom;




















import { Canvas } from '@react-three/fiber';
import { Line, OrbitControls, Preload, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useMemo } from 'react';
import { Suspense } from 'react';
import CanvasLoader from '../Loader'

const Shape = () => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group position={[-9, -2.5, -12]} scale={[2, 2, 2]}>
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = () => {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 70 }}>
    <Suspense fallback={<CanvasLoader/>}>
    <OrbitControls enableZoom={false} autoRotate/>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Shape />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default Atom;
































