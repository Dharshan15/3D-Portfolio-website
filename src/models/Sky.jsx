import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from '../asset/3d/bg2.glb';

const Sky = () => {
    const sky = useGLTF(skyScene);

    const adjustIslandForScreenSize = () => {
      let screenScale = [0.8, 0.8, 0.8];
      let screenPosition = [0, 0, -27];
      // let rotation = [0.2, 0.7, 0];
  
      return [screenScale, screenPosition];
    };
  
    const [bgScale, bgPosition] = adjustIslandForScreenSize();

  return (
    <mesh>
        <primitive object={sky.scene}
        position={bgPosition}
        scale={bgScale}
         />
    </mesh>
  )
}

export default Sky