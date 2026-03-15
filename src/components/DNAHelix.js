import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const DNAHelix = () => {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // UPDATED: Slightly higher instance count for better surface coverage
    const instanceCount = 25000;
    // ROUNDNESS: Increased segments from 4x4 to 6x6 for smoother individual spheres
    const sphereGeometry = new THREE.SphereGeometry(0.07, 6, 6); 
    const material = new THREE.MeshStandardMaterial({
      color: 0x6fffe9,
      emissive: 0x6fffe9,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.8,
    });

    const instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, instanceCount);
    const dummy = new THREE.Object3D();

    const radius = 5;
    const twists = 4;
    const height = 50;
    // HOLLOW/ROUND: Increased tube radius for more volume
    const strandTubeRadius = 1.2; 
    const rungTubeRadius = 0.25;

    for (let i = 0; i < instanceCount; i++) {
      if (i < instanceCount * 0.75) {
        // MAIN STRANDS
        const strandOffset = (i % 2 === 0) ? 0 : Math.PI;
        const t = Math.random() * twists * Math.PI * 2;
        const y = (t / (twists * Math.PI * 2)) * height - height / 2;
        const angle = t + strandOffset;

        const bx = Math.cos(angle) * radius;
        const bz = Math.sin(angle) * radius;

        // HOLLOW LOGIC: Concentrate particles on the surface (the "skin") of the tube
        // Using (0.85 + 0.15) ensures particles are only in the outer 15% of the radius
        const r = (0.85 + Math.random() * 0.15) * strandTubeRadius;
        const theta = Math.random() * Math.PI * 2;
        
        dummy.position.set(
          bx + Math.cos(theta) * r,
          y + (Math.random() - 0.5) * 0.2,
          bz + Math.sin(theta) * r
        );
      } else {
        // HORIZONTAL RUNGS
        const numRungs = 40;
        const rungIndex = i % numRungs;
        const t = (rungIndex / numRungs) * twists * Math.PI * 2;
        const y = (rungIndex / numRungs) * height - height / 2;
        
        const ax = Math.cos(t) * radius;
        const az = Math.sin(t) * radius;
        const bx = Math.cos(t + Math.PI) * radius;
        const bz = Math.sin(t + Math.PI) * radius;

        const lerp = Math.random();
        // Rungs also slightly hollow for consistency
        const r = (0.7 + Math.random() * 0.3) * rungTubeRadius;
        const theta = Math.random() * Math.PI * 2;

        dummy.position.set(
          ax + (bx - ax) * lerp + Math.cos(theta) * r,
          y + Math.sin(theta) * r,
          az + (bz - az) * lerp
        );
      }

      const s = 0.7 + Math.random() * 0.6;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    scene.add(instancedMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x6fffe9, 1.5);
    pointLight.position.set(15, 15, 15);
    scene.add(pointLight);

    const setResponsivePosition = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        instancedMesh.position.set(0, 0, 0);
        instancedMesh.scale.set(0.5, 0.5, 0.5);
      } else {
        // POSITION: Moved further RIGHT (12 -> 18) and further DOWN (6 -> 1)
        instancedMesh.position.set(18, 1, 0);
        instancedMesh.scale.set(0.85, 0.85, 0.85);
      }
    };

    setResponsivePosition();
    instancedMesh.rotation.z = 0.3; 
    camera.position.z = 32;

    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      instancedMesh.rotation.y += 0.002;

      const basePosX = isMobile ? 0 : 18;
      const basePosY = isMobile ? 0 : 1;
      const targetX = basePosX + mouse.current.x * 1.5; 
      const targetY = basePosY + mouse.current.y * 1.5;
      
      instancedMesh.position.x += (targetX - instancedMesh.position.x) * 0.03;
      instancedMesh.position.y += (targetY - instancedMesh.position.y) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      setResponsivePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      material.dispose();
    };
  }, [isMobile]);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }} />;
};

export default DNAHelix;