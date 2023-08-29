import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { Fish } from './Fish'

export const Experience = () => {
  const map = useTexture('textures/anime_art_style_a_water_based_pokemon_like_environ.jpg')

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      
      <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />

          <Fish scale={0.6} position-y={-1} />
          
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial side={THREE.BackSide} map={map} />
          </mesh>
        </MeshPortalMaterial>     
      </RoundedBox>

    </>
  );
};
