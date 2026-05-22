/* Root app — handles quiz/loading/LP transition, sticky nav, floating CTA, tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "dark-luxe",
  "heroStyle": "portrait",
  "density": "normal",
  "skipQuiz": false,
  "ambientBg": true
}/*EDITMODE-END*/;

const NAV_LINKS = [
  { id: 'mari', label: 'Mari' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'modulos', label: 'Módulos' },
  { id: 'oferta', label: 'Oferta' },
  { id: 'faq', label: 'FAQ' },
];

const Nav = ({ onCta }) => {
  const [active, setActive] = React.useState('topo');

  React.useEffect(() => {
    const sectionIds = ['topo', ...NAV_LINKS.map(l => l.id)];
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.4] });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <NeonButton variant="solid" onClick={onCta}>
          Quero entrar <Icon.arrow />
        </NeonButton>
      </div>
    </nav>
  );
};

const FloatingCTA = ({ onCta }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight;
      const v = window.innerHeight;
      // show after first scroll past hero, hide near footer
      setShow(y > v * 0.9 && y < h - v - 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`float-cta ${show ? 'show' : ''}`}>
      <div className="copy">
        <span className="a">Preço de lançamento</span>
        <span className="b">R$ 99,99</span>
      </div>
      <NeonButton variant="solid" onClick={onCta}>
        Entrar <Icon.arrow />
      </NeonButton>
    </div>
  );
};

// Tweaks panel
const TrevoTweaks = ({ tweaks, setTweak }) => {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Paleta">
        <TweakRadio
          label="Estilo"
          value={tweaks.palette}
          onChange={(v) => setTweak('palette', v)}
          options={['dark-luxe', 'editorial', 'forest']}
        />
      </TweakSection>
      <TweakSection label="Hero portrait">
        <TweakRadio
          label="Aspecto"
          value={tweaks.heroStyle}
          onChange={(v) => setTweak('heroStyle', v)}
          options={['portrait', 'square']}
        />
      </TweakSection>
      <TweakSection label="Densidade">
        <TweakRadio
          label="Espaçamento"
          value={tweaks.density}
          onChange={(v) => setTweak('density', v)}
          options={['cozy', 'normal', 'tight']}
        />
      </TweakSection>
      <TweakSection label="Fluxo">
        <TweakToggle
          value={tweaks.skipQuiz}
          onChange={(v) => setTweak('skipQuiz', v)}
          label="Pular quiz"
        />
        <TweakToggle
          value={tweaks.ambientBg}
          onChange={(v) => setTweak('ambientBg', v)}
          label="Fundo animado (dotted)"
        />
      </TweakSection>
    </TweaksPanel>
  );
};

// ===================== APP =====================
const CHECKOUT_URL = 'https://pay.kiwify.com.br/MRgyEJl';

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [phase, setPhase] = React.useState(tweaks.skipQuiz ? 'lp' : 'quiz'); // quiz | loading | lp
  const [user, setUser] = React.useState(null);

  // Sync if tweak changes
  React.useEffect(() => {
    if (tweaks.skipQuiz && phase === 'quiz') setPhase('lp');
  }, [tweaks.skipQuiz]);

  // Apply palette/density on body
  React.useEffect(() => {
    document.body.className = `palette-${tweaks.palette} density-${tweaks.density}`;
  }, [tweaks.palette, tweaks.density]);

  const goToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };
  const goToCheckout = () => {
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  const onFinishQuiz = (data) => {
    setUser(data);
    setPhase('loading');
  };

  return (
    <React.Fragment>
      {tweaks.ambientBg && <DottedSurface
        color={tweaks.palette === 'forest' ? [0.23, 0.66, 0.43] : [0.79, 0.66, 0.38]}
        opacity={0.5}
      />}
      {phase === 'quiz' && <Quiz onFinish={onFinishQuiz} />}
      {phase === 'loading' && <Loading onDone={() => setPhase('lp')} />}
      {phase === 'lp' && (
        <React.Fragment>
          <Nav onCta={goToOffer} />
          <FloatingCTA onCta={goToCheckout} />
          <Hero heroStyle={tweaks.heroStyle} onCta={goToOffer} />
          <CriadoresStrip />
          <div className="divider"></div>
          <Video />
          <div className="divider"></div>
          <Dor />
          <div className="divider"></div>
          <Solucao />
          <div className="divider"></div>
          <Mari />
          <div className="divider"></div>
          <Beneficios />
          <div className="divider"></div>
          <Modulos />
          <div className="divider"></div>
          <Depoimentos />
          <div className="divider"></div>
          <Urgencia onCta={goToCheckout} />
          <div className="divider"></div>
          <Oferta onCta={goToCheckout} />
          <div className="divider"></div>
          <Objecoes />
          <div className="divider"></div>
          <Garantia />
          <div className="divider"></div>
          <FAQ />
          <div className="divider"></div>
          <CTAFinal onCta={goToCheckout} />
          <PS />
          <Footer />
        </React.Fragment>
      )}
      <TrevoTweaks tweaks={tweaks} setTweak={setTweak} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
