import  { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

const STAR_COUNT = 1500;

export function Stars() {
  const group = useRef();
  let theta = 0;
  
  useFrame(() => {
    const rotation = 5 * Math.sin(THREE.MathUtils.degToRad((theta += 0.1)));
    const scale = Math.cos(THREE.MathUtils.degToRad(theta * 2));
    group.current.rotation.set(rotation, rotation, rotation);
    group.current.scale.set(scale, scale, scale);
  });

  const [geometry, material, coordinates] = useMemo(() => {
    const geometry = new THREE.SphereBufferGeometry(1, 10, 10);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white")
    });
    const coordinates = new Array(STAR_COUNT)
      .fill()
      .map((_i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      ]);
    return [geometry, material, coordinates];
  }, []);

  return (
    <group ref={group}>
      {coordinates.map(([p1, p2, p3], idx) => (
        <mesh
          key={idx}
          geometry={geometry}
          material={material}
          position={[p1, p2, p3]}
        />
      ))}
    </group>
  );
}
