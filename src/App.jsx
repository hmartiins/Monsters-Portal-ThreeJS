import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Stars } from "./components/Stars";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <Experience />
      <Stars />
    </Canvas>
  );
}

export default App;
