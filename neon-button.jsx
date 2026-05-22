/* NeonButton — pill-shaped button with a thin neon line that lights up on hover.
   Adapted from the shadcn/Tailwind original for our Babel + CSS setup. */

const NeonButton = ({
  variant = 'default',
  size = 'default',
  neon = true,
  className = '',
  children,
  ...rest
}) => {
  const cls = [
    'neon-btn',
    `neon-btn--${variant}`,
    `neon-btn-sz--${size}`,
    neon ? 'neon-on' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} {...rest}>
      <span className="neon-btn__line neon-btn__line--top" aria-hidden="true"></span>
      <span className="neon-btn__inner">{children}</span>
      <span className="neon-btn__line neon-btn__line--bottom" aria-hidden="true"></span>
    </button>
  );
};

Object.assign(window, { NeonButton });
