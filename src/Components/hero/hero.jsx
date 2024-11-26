// src/Components/hero/hero.jsx
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Olkap_logo from '../../../public/models/Olkap_logo';
import './hero.css';

const images = [
  'url(https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/bg2.jpg?updatedAt=1732295584778)',
  'url(https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/bg3.jpg?updatedAt=1732295584274)'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: images[currentImage] }}>
      <div className="hero-content">
        
      </div>
      <div className="model-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 5]} intensity={10000} />
          <OrbitControls 
            enableZoom={false} 
            reverseOrbit={true}
            reverseHorizontal={true}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={isMobile ? 1 : 0.3}
            autoRotate={true}
            autoRotateSpeed={1}
          />
          <Olkap_logo scale={[0.5, 0.5, 0.6]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;