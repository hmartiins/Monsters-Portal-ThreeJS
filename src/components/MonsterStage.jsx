import { Environment, MeshPortalMaterial, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const MonsterStage = ({ children, texture, ...props }) => {
  const map = useTexture(texture)

  return (
    <group {...props}>
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
