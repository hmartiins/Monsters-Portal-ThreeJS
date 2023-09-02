import { Environment, OrbitControls } from "@react-three/drei";

import { Fish } from './Fish';
import { Cactoro } from './Cactoro';
import { MonsterStage } from './MonsterStage';
import { DragonEvolved } from './Dragon_Evolved';

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      
      <MonsterStage texture={'textures/anime_art_style_a_water_based_pokemon_like_environ.jpg'}>
        <Fish scale={0.6} position-y={-1} />
      </MonsterStage>

      <MonsterStage 
        texture={'textures/anime_art_style_lava_world.jpg'} 
        position-x={-2.5} 
        rotation-y={Math.PI / 8}
      >
        <DragonEvolved scale={0.5} position-y={-1} />
      </MonsterStage>

      <MonsterStage 
        texture={'textures/anime_art_style_cactus_forest.jpg'}
        position-x={2.5} 
        rotation-y={-Math.PI / 8}
      >
        <Cactoro scale={0.45} position-y={-1} />
      </MonsterStage>
    </>
  );
};

