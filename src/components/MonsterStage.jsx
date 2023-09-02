import { Environment, MeshPortalMaterial, RoundedBox, useTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

export const MonsterStage = ({ 
  children, 
  texture,
  color,
  monsterName,

  active,
  setActive,

  ...props
}) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === monsterName;
    easing.damp(portalMaterial.current, 'blend',  worldOpen ? 1 : 0, 0.2, delta)
  })

  return (
    <group {...props}>
      <Text 
        font="fonts/Caprasimo-Regular.ttf" 
        fontSize={0.4} 
        position={[0, -1.3, 0.051]} 
        anchorY={'bottom'}
      >
        {monsterName}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox 
        name={monsterName} 
        onDoubleClick={() => setActive(active === monsterName ? null : monsterName)} 
        args={[2, 3, 0.1]}
      >
        <MeshPortalMaterial 
          ref={portalMaterial}
          side={THREE.DoubleSide} 
        >
          <ambientLight intensity={0.5} />
          <Environment preset="sunset" />

          {children}

          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial side={THREE.BackSide} map={map} />
          </mesh>
        </MeshPortalMaterial>     
      </RoundedBox>
    </group>
  )
}
