import { Environment, MeshPortalMaterial, RoundedBox, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";

export const MonsterStage = ({ 
  children, 
  texture,
  color,
  monsterName,
  ...props
}) => {
  const map = useTexture(texture)

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
      <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
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
