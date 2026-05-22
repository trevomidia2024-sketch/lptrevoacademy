/* Shared components for Trevo Academy LP */

const PortraitSVG = ({ initials = 'MD', hue = 'gold' }) => {
  const gradColor1 = hue === 'gold' ? '#3a2a14' : '#1a3026';
  const gradColor2 = hue === 'gold' ? '#1a1208' : '#0a1814';
  const lightColor = hue === 'gold' ? '#c9a961' : '#3aa86f';
  return (
    <svg viewBox="0 0 400 500" className="portrait-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${initials}-${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradColor1} />
          <stop offset="100%" stopColor={gradColor2} />
        </linearGradient>
        <radialGradient id={`light-${initials}-${hue}`} cx="0.7" cy="0.25" r="0.5">
          <stop offset="0%" stopColor={lightColor} stopOpacity="0.45" />
          <stop offset="60%" stopColor={lightColor} stopOpacity="0.05" />
          <stop offset="100%" stopColor={lightColor} stopOpacity="0" />
        </radialGradient>
        <pattern id={`stripes-${initials}-${hue}`} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={lightColor} strokeWidth="0.5" strokeOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={`url(#bg-${initials}-${hue})`} />
      <rect width="400" height="500" fill={`url(#stripes-${initials}-${hue})`} />
      <rect width="400" height="500" fill={`url(#light-${initials}-${hue})`} />
      {/* Soft silhouette */}
      <ellipse cx="200" cy="200" rx="68" ry="78" fill={lightColor} fillOpacity="0.08" />
      <path d={`M 80 500 Q 80 350 200 320 Q 320 350 320 500 Z`} fill={lightColor} fillOpacity="0.08" />
      {/* Crown of light dots (reference's gold sparkle) */}
      {hue === 'gold' &&
      <g opacity="0.85">
          <circle cx="280" cy="80" r="2" fill={lightColor} />
          <circle cx="310" cy="120" r="1.5" fill={lightColor} />
          <circle cx="340" cy="100" r="2.5" fill={lightColor} />
          <circle cx="295" cy="160" r="1" fill={lightColor} />
          <circle cx="330" cy="170" r="2" fill={lightColor} />
          <circle cx="265" cy="130" r="1.5" fill={lightColor} />
        </g>
      }
      {/* Monogram label */}
      <g transform="translate(200, 250)" opacity="0.5">
        <circle cx="0" cy="0" r="44" fill="none" stroke={lightColor} strokeOpacity="0.4" strokeWidth="1" />
        <text x="0" y="6" textAnchor="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="32" fill={lightColor}>
          {initials}
        </text>
      </g>
      {/* Monospace caption */}
      <text x="20" y="478" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={lightColor} fillOpacity="0.5" letterSpacing="0.2em">
        [ PHOTO · PORTRAIT 4:5 ]
      </text>
    </svg>);

};

// Real PNG logo — 2037×677 (~3:1). `height` controls render size.
const Logo = ({ height = 36, showSub = true, className = '' }) =>
<div className={`nav-logo ${className}`}>
    <img
    src="logo.png"
    alt="Trevo Academy"
    style={{ height: `${height}px`, width: 'auto', display: 'block' }}
    draggable="false" />
  
    {showSub &&
  <span className="nav-logo-sub">BY TREVO GROUP</span>
  }
  </div>;


// Big centered logo for quiz intro / loading / final hero moments
const LogoMark = ({ size = 96 }) =>
<img
  src="logo.png"
  alt="Trevo Academy"
  style={{ height: `${size}px`, width: 'auto', display: 'block', margin: '0 auto' }}
  draggable="false" />;



const Icon = {
  arrow: (props) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  check: (props) => <svg width="11" height="11" viewBox="0 0 12 12" fill="none" {...props}><path d="M2 6.5 5 9l5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  x: (props) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>,
  lock: (props) => <svg width="11" height="11" viewBox="0 0 12 12" fill="none" {...props}><rect x="2.5" y="5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" /><path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1.2" /></svg>,
  play: (props) => <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" {...props}><path d="M10 7v14l11-7z" /></svg>,
  shield: (props) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}><path d="M7 1 2 3v4c0 3 2 5 5 6 3-1 5-3 5-6V3L7 1Z" stroke="currentColor" strokeWidth="1.2" /><path d="m5 7 1.5 1.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  chevron: (props) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}><path d="m4 5 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  plus: (props) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>,
  spark: (props) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}><path d="M6 1 7 5l4 1-4 1-1 4-1-4-4-1 4-1z" fill="currentColor" /></svg>
};

// Animated number counter (counts up when in view)
const Counter = ({ to, suffix = '', prefix = '', duration = 1600, decimals = 0 }) => {
  const [val, setVal] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    if (done) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done) {
          setDone(true);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);else
            setVal(to);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration, done]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('pt-BR');
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

// Reveal-on-scroll wrapper
const Reveal = ({ children, delay = 0 }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal">{children}</div>;
};

Object.assign(window, { PortraitSVG, Logo, LogoMark, Icon, Counter, Reveal });