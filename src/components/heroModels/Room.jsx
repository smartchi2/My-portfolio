import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Room(props) {
  const gltf = useGLTF('/models/optimized-Room.glb');

  if (!gltf || !gltf.nodes || !gltf.materials) {
    return null; // Model not yet loaded
  }

  const { nodes, materials } = gltf;

  return (
    <group {...props} dispose={null}>
      {Object.entries(nodes).map(([name, node]) => {
        if (node.geometry && node.material) {
          // Node already has material reference
          return (
            <mesh
              key={name}
              geometry={node.geometry}
              material={node.material}
            />
          );
        } else if (node.geometry) {
          // If material is not set on node, match by name if possible
          const matName = Object.keys(materials).find((m) =>
            name.toLowerCase().includes(m.toLowerCase())
          );
          return (
            <mesh
              key={name}
              geometry={node.geometry}
              material={matName ? materials[matName] : undefined}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload('/models/optimized-Room.glb');
