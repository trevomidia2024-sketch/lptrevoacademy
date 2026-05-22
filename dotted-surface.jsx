/* DottedSurface — animated 3D dotted wave background.
   Adapted from the shadcn/next-themes original for our Babel + CDN setup.
   Renders a fixed, pointer-events-none, z-index:-1 canvas behind all content. */

const DottedSurface = ({ className = '', color = [0.79, 0.66, 0.38], opacity = 0.55, density = 'normal' }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    if (typeof THREE === 'undefined') {
      console.warn('THREE.js not loaded yet');
      return;
    }

    const SEPARATION = 150;
    const AMOUNTX = density === 'sparse' ? 24 : density === 'dense' ? 50 : 36;
    const AMOUNTY = density === 'sparse' ? 36 : density === 'dense' ? 70 : 50;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0907, 2000, 9000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent

    containerRef.current.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        colors.push(color[0], color[1], color[2]);
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 7,
      vertexColors: true,
      transparent: true,
      opacity,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let animationId = 0;
    let lastT = 0;

    const animate = (t = 0) => {
      animationId = requestAnimationFrame(animate);
      // throttle to ~45fps to be kind to long pages
      if (t - lastT < 22) return;
      lastT = t;

      const positionAttribute = geometry.attributes.position;
      const posArr = positionAttribute.array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          posArr[idx + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.08;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Pause animation when tab is hidden (perf)
    let paused = false;
    const onVisibility = () => {
      if (document.hidden && !paused) {
        cancelAnimationFrame(animationId);
        paused = true;
      } else if (!document.hidden && paused) {
        paused = false;
        animate();
      }
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(animationId);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Points) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [color[0], color[1], color[2], opacity, density]);

  return (
    <div
      ref={containerRef}
      className={`dotted-surface ${className}`}
      aria-hidden="true"
    />
  );
};

Object.assign(window, { DottedSurface });
