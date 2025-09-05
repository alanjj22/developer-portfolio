import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#d946ef" intensity={0.5} />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <FloatingCube />
          <FloatingSphere position={[3, 2, -2]} color="#0ea5e9" />
          <FloatingSphere position={[-3, -2, -1]} color="#d946ef" />
          <FloatingSphere position={[1, -3, 1]} color="#06b6d4" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
