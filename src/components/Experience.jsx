import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const map = useTexture('textures/anime_art_style_a_water_based_pokemon_like_environ.jpg')

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial side={THREE.BackSide} map={map} />
      </mesh>
    </>
  );
};
