/* InfiniteSlider + ProgressiveBlur — ported from the framer-motion original
   to pure CSS for our Babel + CDN setup. */

// CSS marquee — duplicates children so the loop is seamless.
// Props: gap (px), duration (s), reverse (bool), pauseOnHover (bool)
const InfiniteSlider = ({
  children,
  gap = 32,
  duration = 30,
  reverse = false,
  pauseOnHover = false,
  className = '',
}) => {
  const styleVars = {
    '--marquee-gap': `${gap}px`,
    '--marquee-duration': `${duration}s`,
  };
  return (
    <div className={`marquee ${pauseOnHover ? 'marquee--pause' : ''} ${className}`} style={styleVars}>
      <div className={`marquee-track ${reverse ? 'marquee-track--rev' : ''}`}>
        <div className="marquee-group" aria-hidden="false">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

// ProgressiveBlur — layered backdrop-filter via mask gradient.
// direction: 'left' | 'right' | 'top' | 'bottom'
// blurLayers default 8, blurIntensity default 0.25 (px per layer)
const ProgressiveBlur = ({
  direction = 'left',
  blurLayers = 6,
  blurIntensity = 1,
  className = '',
  style = {},
}) => {
  const angles = { top: 0, right: 90, bottom: 180, left: 270 };
  const angle = angles[direction] ?? 270;
  const layers = Math.max(blurLayers, 2);
  const segment = 1 / (layers + 1);

  return (
    <div className={`progressive-blur ${className}`} style={style} aria-hidden="true">
      {Array.from({ length: layers }).map((_, i) => {
        const stops = [
          i * segment,
          (i + 1) * segment,
          (i + 2) * segment,
          (i + 3) * segment,
        ].map((pos, idx) =>
          `rgba(255, 255, 255, ${idx === 1 || idx === 2 ? 1 : 0}) ${pos * 100}%`
        );
        const grad = `linear-gradient(${angle}deg, ${stops.join(', ')})`;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              maskImage: grad,
              WebkitMaskImage: grad,
              backdropFilter: `blur(${i * blurIntensity}px)`,
              WebkitBackdropFilter: `blur(${i * blurIntensity}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

Object.assign(window, { InfiniteSlider, ProgressiveBlur });
