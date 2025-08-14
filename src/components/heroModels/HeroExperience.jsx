import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { Room } from "./Room";
import HeroLights from "./HeroLight";

// Simple error boundary for Canvas
function CanvasErrorBoundary({ children }) {
  return (
    <Suspense fallback={<div style={{ color: "#fff" }}>Loading 3D scene...</div>}>
      {children}
    </Suspense>
  );
}

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      onCreated={({ gl, scene }) => {
        // Handle WebGL context loss
        const canvas = gl.domElement;
        const handleContextLost = (e) => {
          e.preventDefault();
          console.warn("WebGL context lost. Attempting to recover...");
        };
        const handleContextRestored = () => {
          console.log("WebGL context restored.");
        };
        canvas.addEventListener("webglcontextlost", handleContextLost);
        canvas.addEventListener("webglcontextrestored", handleContextRestored);

        // Cleanup GPU resources on unmount
        return () => {
          scene.traverse((obj) => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
              if (Array.isArray(obj.material)) {
                obj.material.forEach((m) => m.dispose());
              } else {
                obj.material.dispose();
              }
            }
          });
          gl.dispose();
          canvas.removeEventListener("webglcontextlost", handleContextLost);
          canvas.removeEventListener("webglcontextrestored", handleContextRestored);
        };
      }}
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <CanvasErrorBoundary>
        <HeroLights />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </CanvasErrorBoundary>
    </Canvas>
  );
};

export default HeroExperience;
