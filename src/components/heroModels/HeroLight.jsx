import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="white"
    />
    {/* side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="white"
    />
    {/* area light for soft fill */}
    <primitive
      object={new THREE.RectAreaLight("white", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point lights */}
    <pointLight position={[0, 1, 0]} intensity={10} color="white" />
    <pointLight position={[1, 2, -2]} intensity={10} color="white" />
  </>
);

export default HeroLights;
