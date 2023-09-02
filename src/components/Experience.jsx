import { useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

import { Fish } from './Fish';
import { Cactoro } from './Cactoro';
import { MonsterStage } from './MonsterStage';
import { DragonEvolved } from './Dragon_Evolved';

export const Experience = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      
      <MonsterStage 
        monsterName={'Fish'}
        color={'#38adcf'}
        texture={'textures/anime_art_style_a_water_based_pokemon_like_environ.jpg'}

        active={active}
        setActive={setActive}
      >
        <Fish scale={0.6} position-y={-1} />
      </MonsterStage>

      <MonsterStage 
        texture={'textures/anime_art_style_lava_world.jpg'} 
        position-x={-2.5} 
        monsterName={'Dragon'}
        color={'#df8d52'}
        rotation-y={Math.PI / 8}

        active={active}
        setActive={setActive}
      >
        <DragonEvolved scale={0.5} position-y={-1} />
      </MonsterStage>

      <MonsterStage 
        monsterName={'Cactoro'}
        color={'#739d3c'}
        texture={'textures/anime_art_style_cactus_forest.jpg'}
        position-x={2.5} 
        rotation-y={-Math.PI / 8}
        
        active={active}
        setActive={setActive}
      >
        <Cactoro scale={0.45} position-y={-1} />
      </MonsterStage>
    </>
  );
};

