/* GlowCard — cursor-tracking spotlight card, ported from the shadcn original.
   Hard-tinted to the Trevo gold palette (base hue 41). */

let __glowListenerAttached = false;
const attachGlowListener = () => {
  if (__glowListenerAttached || typeof window === 'undefined') return;
  __glowListenerAttached = true;
  const sync = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const root = document.documentElement;
    root.style.setProperty('--gx', x.toFixed(1));
    root.style.setProperty('--gy', y.toFixed(1));
    root.style.setProperty('--gxp', (x / window.innerWidth).toFixed(3));
    root.style.setProperty('--gyp', (y / window.innerHeight).toFixed(3));
  };
  window.addEventListener('pointermove', sync, { passive: true });
};

const GlowCard = ({ children, className = '', tone = 'gold', intense = false, ...rest }) => {
  React.useEffect(() => { attachGlowListener(); }, []);

  // Gold tone: hue 41 (gold), no hue rotation across screen — stays gold.
  // Forest/emerald tone: hue 145.
  const palettes = {
    gold:    { base: 41, spread: 12, sat: 65, lightSpot: 62, lightBorder: 55 },
    emerald: { base: 145, spread: 18, sat: 55, lightSpot: 55, lightBorder: 48 },
  };
  const p = palettes[tone] || palettes.gold;

  return (
    <div
      data-glow
      className={`glow-card ${intense ? 'glow-card--intense' : ''} ${className}`}
      style={{
        '--g-base': p.base,
        '--g-spread': p.spread,
        '--g-sat': p.sat,
        '--g-light-spot': p.lightSpot,
        '--g-light-border': p.lightBorder,
      }}
      {...rest}
    >
      <div data-glow aria-hidden="true"></div>
      {children}
    </div>
  );
};

Object.assign(window, { GlowCard });
