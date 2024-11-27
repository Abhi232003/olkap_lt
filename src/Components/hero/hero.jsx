// src/Components/hero/hero.jsx
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Logo_model from '../../../public/models/Logo_model';
import './hero.css';

const images = [
  'url(https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/bg2.jpg?updatedAt=1732295584778)',
  'url(https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/bg3.jpg?updatedAt=1732295584274)',
  'url(https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/bg1.jpeg?updatedAt=1732295584036)'
];

const TRANSITION_DURATION = 3000;

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    // Preload images
    images.forEach(url => {
      const img = new Image();
      img.src = url.slice(4, -1);
    });

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, TRANSITION_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {images.map((image, index) => (
        <div
          key={index}
          className="hero-background"
          style={{
            backgroundImage: image,
            opacity: index === currentImage ? 1 : 0
          }}
        />
      ))}
      <div className="hero-content">
        
      </div>
      <div className="model-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={4} />
          <directionalLight position={[1, 10, 3]} intensity={15} />
          <group rotation={[Math.PI / 12, 0, 0]}>  {/* Add tilt to the entire group */}
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={2}
            />
            <Logo_model scale={[0.5, 0.5, 0.6]} />
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;