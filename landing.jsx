/* Trevo Academy Landing Page — composed of sections */

const MODULES = [
  { n: '01', title: 'Boas-vindas e comunidade exclusiva', body: 'Entrada na comunidade Trevo, networking direto com a Mari e outros criadores, e direcionamento dos primeiros passos dentro do método.' },
  { n: '02', title: 'Mentalidade, disciplina e constância', body: 'O bloco que destrava quem trava. Como vencer o medo de aparecer, a procrastinação e construir o ritmo profissional de criador.' },
  { n: '03', title: 'Marketing de Influência na prática', body: 'Como funciona o mercado por dentro: como marcas escolhem criadores, como o jogo é jogado, e como você se posiciona dentro dele.' },
  { n: '04', title: 'Como nascem os Creators', body: 'O processo real (não a versão romantizada) de construir presença digital do zero, com exemplos de bastidores reais da agência.' },
  { n: '05', title: 'Posicionamento estratégico', body: 'Você vai sair com uma frase clara de quem você é, para quem fala, o que entrega, e por que isso vira dinheiro.' },
  { n: '06', title: 'Modelagem de perfis de sucesso', body: 'Engenharia reversa de criadores que faturam: o que copiar, o que evitar, e como adaptar para o seu nicho sem virar cópia.' },
  { n: '07', title: 'Gestão de crise e cancelamento', body: 'Como se proteger antes da crise, e como responder quando ela vem. Roteiros prontos e estudos de caso reais.' },
  { n: '08', title: 'Produção de conteúdo e storytelling', body: 'Roteiro, gancho, ritmo, narrativa, edição mobile. Tudo no celular, sem equipamento caro.' },
  { n: '09', title: 'Instagram: algoritmo, Reels e crescimento', body: 'Como o algoritmo realmente funciona em 2025, o que entrega e o que enterra, e o sistema de Reels que cresce contas.' },
  { n: '10', title: 'TikTok: viralização e monetização', body: 'A lógica da plataforma, como criar conteúdo que viraliza e como transformar visualizações em receita.' },
  { n: '11', title: 'Monetização: publipost, kit mídia e parcerias', body: 'Quanto cobrar (com tabela real por faixa de seguidores), como montar seu kit mídia e como fechar a primeira parceria paga.' },
];

const BENEFICIOS = [
  { t: 'Clareza total do seu posicionamento', d: 'Você vai saber exatamente quem você é nas redes e como isso se transforma em dinheiro.' },
  { t: 'Conteúdo que cresce e atrai marcas', d: 'Storytelling, estratégia e produção — sem equipamento caro, só com o celular.' },
  { t: 'Domínio do Instagram e TikTok', d: 'Entenda como os algoritmos funcionam e faça eles trabalharem para você.' },
  { t: 'Seu primeiro (ou próximo) publipost pago', d: 'Saiba quanto cobrar, como montar seu kit mídia e fechar parcerias com marcas.' },
  { t: 'Acesso ao app Trevo de Oportunidades', d: 'App exclusivo com oportunidades reais de publicidade para você já começar a faturar.' },
  { t: 'Mentalidade de Creator profissional', d: 'Supere o medo e a procrastinação com módulos dedicados a gestão emocional.' },
];

const DORES = [
  'Posta todo dia mas seus seguidores não crescem e ninguém te paga nada',
  'Fica travado na hora de aparecer por medo do que as pessoas vão pensar',
  'Já tentou mil estratégias da internet e nenhuma trouxe resultado real',
  'Não sabe quanto cobrar, como montar um kit mídia ou fechar parcerias',
  'Vê Creators menores que você faturando e não entende como',
];

const OBJECOES = [
  { q: 'Não quero virar Creator. Isso é pra mim?', a: <>Sim. O Trevo Academy ensina <strong>produção de conteúdo, posicionamento e estratégia digital</strong> — habilidades que funcionam pra você virar Creator, divulgar o seu negócio, se posicionar como referência na sua área profissional ou simplesmente entender de verdade como dominar redes sociais em 2026.</> },
  { q: 'Mas eu não tenho seguidores ainda…', a: <>Perfeito. O Trevo Academy foi feito <strong>especialmente para quem começa do zero</strong>. O Módulo 01 te coloca no lugar certo desde o primeiro dia.</> },
  { q: 'Tenho medo de aparecer nas redes sociais.', a: <>A Mari também tinha. O <strong>Módulo 02 de Mentalidade</strong> e o Módulo 07 de Gestão de Crise foram criados especificamente para esse bloqueio.</> },
  { q: 'E se eu comprar e não gostar?', a: <>Você tem <strong>7 dias de garantia total</strong>. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro — sem perguntas.</> },
  { q: 'Não tenho equipamento, só meu celular.', a: <><strong>Esse é exatamente o ponto.</strong> O curso foi pensado para quem tem só um celular. A Mari ensina como criar conteúdo profissional sem estúdio e sem câmera cara.</> },
  { q: 'R$ 99 parece pouco para algo sério…', a: <>É pouco porque é lançamento. <strong>O preço vai subir.</strong> E o que está dentro vale muito mais — são anos de experiência da Mari condensados em um método que funciona.</> },
];

const FAQS = [
  { q: 'Quanto tempo preciso dedicar por dia?', a: 'Com 30 minutos a 1 hora por dia você já avança. O conteúdo é modular — você assiste no seu ritmo, quando e onde quiser.' },
  { q: 'Funciona para quem está começando do zero?', a: 'Sim. O curso começa do zero absoluto e avança até monetização avançada. Funciona para iniciantes e para quem já cria conteúdo e quer monetizar melhor.' },
  { q: 'Como funciona o app de oportunidades?', a: 'O app Trevo conecta marcas e criadores. Após o curso, você recebe acesso ao app com oportunidades reais de publicidade para criadores da base Trevo.' },
  { q: 'Quais as formas de pagamento?', a: 'Aceitamos Pix (aprovação imediata), cartão de crédito em até 12x e boleto. O acesso é liberado assim que o pagamento é confirmado.' },
  { q: 'Tem suporte se eu tiver dúvidas?', a: 'Sim. Você entra na comunidade exclusiva Trevo Academy (Módulo 01) e tem acesso ao suporte da equipe. Você não vai estar sozinho em nenhum momento.' },
  { q: 'E se eu não gostar? Consigo meu dinheiro de volta?', a: <>Sim. 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos <strong>100% do valor pago</strong> — sem perguntas e sem burocracia.</> },
];

// =================== CRIADORES STRIP ===================
const CRIADORES = [
  { h: '@maridominguess', n: 'Lifestyle · CEO' },
  { h: '@trevocreators',  n: 'Agência' },
  { h: '@[criador 01]',   n: 'Moda' },
  { h: '@[criador 02]',   n: 'Beleza' },
  { h: '@[criador 03]',   n: 'Fitness' },
  { h: '@[criador 04]',   n: 'Negócios' },
  { h: '@[criador 05]',   n: 'Comédia' },
  { h: '@[criador 06]',   n: 'Maternidade' },
  { h: '@[criador 07]',   n: 'Viagem' },
  { h: '@[criador 08]',   n: 'Gastronomia' },
];

const CriadoresStrip = () => (
  <section className="criadores-strip" data-screen-label="01a Criadores">
    <p className="strip-label">
      <span className="accent">+100 criadores</span> · trabalhando dentro da Trevo
    </p>
    <div className="strip-wrap">
      <InfiniteSlider gap={16} duration={45} pauseOnHover>
        {CRIADORES.map((c, i) => (
          <div className="creator-tile" key={i}>
            <div className="creator-tile-av">{c.h.replace('@', '').slice(0, 2).toUpperCase()}</div>
            <span className="handle">{c.h}</span>
            <span className="nicho">{c.n}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  </section>
);

// =================== HERO ===================
const Hero = ({ heroStyle, onCta }) => {
  return (
    <section className="hero" id="topo" data-screen-label="01 Hero">
      <div className="shell">
        <div className="hero-inner">
          <div>
            <div className="eyebrow"><span className="dot"></span>Método Trevo · Turma de Lançamento</div>
            <h1 className="hero-headline">
              Do <em className="gold" style={{fontStyle:'italic'}}>zero</em> ao Creator<br/>
              que <em className="green" style={{fontStyle:'italic'}}>fatura de verdade.</em>
            </h1>
            <p className="hero-sub">
              Para quem quer virar Creator profissional, divulgar o próprio negócio ou simplesmente dominar a produção de conteúdo e o posicionamento no digital em 2026. Aprenda com a fundadora da Trevo Creators — do primeiro post à primeira parceria paga.
            </p>
            <div className="hero-cta-row">
              <NeonButton variant="solid" size="lg" onClick={onCta}>Quero começar agora <Icon.arrow /></NeonButton>
              <NeonButton variant="default" size="lg" onClick={(e) => { e.preventDefault(); document.getElementById('video')?.scrollIntoView({behavior:'smooth'}); }}>
                <Icon.play width="14" height="14" /> Ver o método
              </NeonButton>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item"><Icon.check />Acesso imediato</span>
              <span className="hero-meta-item"><Icon.check />Garantia de 7 dias</span>
              <span className="hero-meta-item"><Icon.check />12x no cartão</span>
            </div>
          </div>

          <div className="portrait" style={{ aspectRatio: heroStyle === 'square' ? '1/1' : '4/5' }}>
            <img src="mari-hero.jpg" alt="Mari Domingues" className="portrait-img" loading="eager" fetchpriority="high" />
            <div className="portrait-badge"><Icon.spark /> CEO · TREVO CREATORS</div>
            <div className="portrait-tag">
              <span className="nm">Mari Domingues</span>
              <span className="ttl">fundadora & mentora</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="n">+<Counter to={100} /></span>
            <span className="l">Criadores agenciados</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={1.2} decimals={1} />M</span>
            <span className="l">Seguidores · Trevo</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={500} />K</span>
            <span className="l">Seguidores · Mari</span>
          </div>
          <div className="stat">
            <span className="n"><Counter to={3} /><span style={{fontSize:'0.6em', color: 'var(--text-muted)'}}>+</span></span>
            <span className="l">Anos de mercado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// =================== DOR ===================
const Dor = () => (
  <section id="dor" data-screen-label="02 Dor">
    <div className="shell-mid">
      <Reveal>
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>Você se reconhece?</div>
          <h2>Esses cenários parecem<br/><em className="italic" style={{fontStyle:'italic'}}>familiares?</em></h2>
        </div>
        <div className="dor-grid">
          {DORES.map((d, i) => (
            <div className="dor-item" key={i}>
              <span className="dor-x"><Icon.x /></span>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== SOLUÇÃO ===================
const Solucao = () => (
  <section id="solucao" data-screen-label="03 Solucao">
    <div className="shell-mid">
      <Reveal>
        <div className="sol-wrap">
          <div>
            <div className="eyebrow eyebrow-green"><span className="dot"></span>A Solução</div>
            <h2 style={{fontSize:'clamp(34px, 4.5vw, 56px)', marginTop:'18px', lineHeight: 1.05}}>
              O problema não é você. É que ninguém te ensinou o <em className="gold" style={{fontStyle:'italic'}}>método certo.</em>
            </h2>
          </div>
          <div className="sol-card">
            <p className="lead">"A Mari saiu do zero e construiu a maior agência de Creators do Brasil."</p>
            <p>A Trevo Creators é hoje referência nacional na creator economy brasileira, com mais de 100 criadores e 1,2 milhão de seguidores na sua base.</p>
            <p>Ela não nasceu Creator. Ela aprendeu, errou, testou e desenvolveu um método de produção de conteúdo e posicionamento que funciona para qualquer pessoa que queira dominar o digital em 2026 — quem quer virar Creator, divulgar o próprio negócio ou se posicionar como referência na sua área.</p>
            <p className="arrow-line">→ Esse método agora está disponível para você no Trevo Academy.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== MARI / AUTHORITY ===================
const Mari = () => (
  <section id="mari" data-screen-label="04 Mari">
    <div className="shell-mid">
      <Reveal>
        <div className="mari-grid">
          <div className="mari-portrait">
            <img src="mari-portrait.jpg" alt="Mari Domingues" className="portrait-img" loading="lazy" />
            <div className="portrait-badge" style={{borderColor:'rgba(58,168,111,0.4)', color:'var(--emerald-bright)'}}><Icon.spark />FUNDADORA</div>
          </div>
          <div className="mari-content">
            <div className="eyebrow"><span className="dot"></span>Sua mentora</div>
            <h2>Quem é <em className="italic" style={{fontStyle:'italic'}}>Mari Domingues</em></h2>
            <p>Mari fundou a Trevo Creators do zero e transformou a agência em referência nacional na creator economy brasileira. Hoje gerencia mais de 100 criadores, com campanhas para marcas nacionais e internacionais.</p>
            <p>Com mais de 500 mil seguidores no perfil pessoal e 1,2 milhão pela Trevo, ela sabe exatamente o que funciona — e o que é perda de tempo — nas redes sociais.</p>
            <p className="accent">"No Trevo Academy, eu entrego tudo que precisaria se eu fosse reconstruir tudo do zero."</p>
            <div className="mari-links">
              <a className="mari-link" href="https://www.instagram.com/maridominguess" target="_blank" rel="noopener">
                <strong>@maridominguess</strong>
                <span>perfil pessoal</span>
              </a>
              <a className="mari-link" href="https://www.instagram.com/trevocreators" target="_blank" rel="noopener">
                <strong>@trevocreators</strong>
                <span>a agência</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== VIDEO ===================
const Video = () => {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section id="video" data-screen-label="02 Video">
      <div className="shell-mid">
        <Reveal>
          <div className="section-head center">
            <div className="eyebrow"><span className="dot"></span>Apresentação</div>
            <h2>O método em <em className="gold" style={{fontStyle:'italic'}}>3 minutos.</em></h2>
            <p>A Mari te explica em primeira mão o que está dentro do Academy, e como funciona a jornada do criador zero ao primeiro publipost pago.</p>
          </div>
          <div className="video-wrap" onClick={() => setPlaying(true)}>
            <PortraitSVG initials="VID" hue="gold" />
            {!playing && (
              <button className="video-play" aria-label="Reproduzir vídeo">
                <Icon.play />
              </button>
            )}
            <div className="video-caption">
              <span className="ttl">Bem-vindo ao Trevo Academy</span>
              <span className="dur">[ 03:24 ]</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// =================== BENEFÍCIOS ===================
const Beneficios = () => (
  <section id="beneficios" data-screen-label="06 Beneficios">
    <div className="shell-mid">
      <Reveal>
        <div className="section-head">
          <div className="eyebrow eyebrow-green"><span className="dot"></span>O que você ganha</div>
          <h2>O que muda na sua vida<br/><em className="italic" style={{fontStyle:'italic'}}>após</em> o Trevo Academy</h2>
        </div>
        <div className="ben-grid">
          {BENEFICIOS.map((b, i) => (
            <GlowCard className="ben-glow" tone="gold" key={i}>
              <span className="ben-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== MÓDULOS ===================
const Modulos = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="modulos" data-screen-label="07 Modulos">
      <div className="shell-mid">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow"><span className="dot"></span>Grade do curso</div>
            <h2>11 módulos. Uma <em className="gold" style={{fontStyle:'italic'}}>jornada completa.</em></h2>
            <p>Do primeiro post à primeira parceria paga, sem etapas escondidas e sem teoria vazia. Toque em qualquer módulo para ver o que tem dentro.</p>
          </div>
          <div className="modules">
            {MODULES.map((m, i) => (
              <div className={`module ${open === i ? 'open' : ''}`} key={m.n}>
                <button className="module-head" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="module-num">{m.n}</span>
                  <span className="module-title">{m.title}</span>
                  <span className="module-icon"><Icon.chevron /></span>
                </button>
                <div className="module-body">
                  <div className="module-body-inner">{m.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// =================== DEPOIMENTOS ===================
const Depoimentos = () => (
  <section id="depoimentos" data-screen-label="08 Depoimentos">
    <div className="shell-mid">
      <Reveal>
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>Resultados reais</div>
          <h2>Quem já <em className="italic" style={{fontStyle:'italic'}}>viveu</em> isso</h2>
        </div>
        <div className="dep-grid">
          {[
            { q: '[ INSERIR DEPOIMENTO REAL — foco em resultado: antes não sabia como cobrar, agora fecho X parcerias por mês ]', n: '[ Nome do criador ]', i: '[ nicho ] · [ seguidores ]', av: 'IN' },
            { q: '[ INSERIR DEPOIMENTO REAL — foco em transformação: saí do zero, hoje tenho X seguidores e já monetizo ]', n: '[ Nome do criador ]', i: '[ nicho ] · [ seguidores ]', av: 'IN' },
            { q: '[ INSERIR DEPOIMENTO REAL — foco em superação: tinha medo de aparecer, o módulo de mentalidade mudou tudo ]', n: '[ Nome do criador ]', i: '[ nicho ] · [ seguidores ]', av: 'IN' },
          ].map((d, i) => (
            <div className="dep" key={i}>
              <p className="dep-quote">{d.q}</p>
              <div className="dep-author">
                <span className="dep-av">{d.av}</span>
                <div>
                  <div className="nm">{d.n}</div>
                  <div className="inf">{d.i}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== OFERTA ===================
const Oferta = ({ onCta }) => (
  <section id="oferta" data-screen-label="09 Oferta">
    <div className="shell-mid">
      <Reveal>
        <div className="section-head center">
          <div className="eyebrow"><span className="dot"></span>Tudo que você recebe hoje</div>
          <h2>Acesso completo ao <em className="gold" style={{fontStyle:'italic'}}>Trevo Academy</em></h2>
        </div>
        <div className="offer-wrap">
          <div className="offer-list">
            <h3>O que está incluso</h3>
            <p className="sub">11 módulos · comunidade · app de oportunidades</p>
            <ul>
              {MODULES.map((m) => (
                <li key={m.n}>
                  <span className="ck"><Icon.check /></span>
                  <span><strong style={{color:'var(--text)', fontWeight: 600}}>Módulo {m.n}</strong> — {m.title}</span>
                </li>
              ))}
            </ul>
            <div className="bonus-row">
              <div className="bt">🎁  Bônus de lançamento</div>
              <div className="bd">App Trevo de Oportunidades — onde marcas buscam criadores como você.</div>
            </div>
          </div>

          <div className="offer-price">
            <div className="price-tag">[ Preço de lançamento ]</div>
            <div className="price-de">De R$ 297,00</div>
            <div className="price-por">
              <span className="cur">R$</span>
              <span className="big">99</span>
              <span className="cnt">,99</span>
            </div>
            <div className="price-parc">ou em até 12x sem juros no cartão</div>
            <button className="btn btn-gold btn-block price-cta" onClick={onCta}>
              Quero entrar no Trevo Academy <Icon.arrow />
            </button>
            <div className="price-meta">
              <span><Icon.lock /> Pagamento seguro</span>
              <span><Icon.check /> Acesso imediato</span>
              <span><Icon.shield /> Garantia 7 dias</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== OBJEÇÕES ===================
const Objecoes = () => (
  <section id="objecoes" data-screen-label="10 Objecoes">
    <div className="shell-mid">
      <Reveal>
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>Suas dúvidas</div>
          <h2>Respondendo o que está na <em className="italic" style={{fontStyle:'italic'}}>sua cabeça</em></h2>
        </div>
        <div className="obj-list">
          {OBJECOES.map((o, i) => (
            <div className="obj-item" key={i}>
              <div className="obj-q">"{o.q}"</div>
              <div className="obj-a">{o.a}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== GARANTIA ===================
const Garantia = () => (
  <section id="garantia" data-screen-label="11 Garantia">
    <div className="shell-mid">
      <Reveal>
        <div className="gar">
          <div className="gar-seal">
            <span className="n">7</span>
            <span className="l">Dias</span>
          </div>
          <div>
            <h3>Garantia total de 7 dias.</h3>
            <p>Entre, acesse todo o conteúdo, comece a aplicar. Se por qualquer motivo você não ficar satisfeito, <strong>devolvemos 100% do valor pago</strong> — sem perguntas, sem burocracia. O risco é todo nosso.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== URGÊNCIA / COUNTDOWN ===================
const useCountdown = (initialSeconds) => {
  const [t, setT] = React.useState(initialSeconds);
  React.useEffect(() => {
    const id = setInterval(() => setT(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return { h, m, s };
};

const Urgencia = ({ onCta }) => {
  const { h, m, s } = useCountdown(23 * 3600 + 47 * 60 + 33);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <section id="urgencia" data-screen-label="12 Urgencia">
      <div className="shell-mid">
        <Reveal>
          <div className="urg">
            <div className="eyebrow" style={{color:'var(--crimson)', borderColor:'rgba(194,84,80,0.3)'}}>
              <span className="dot" style={{background:'var(--crimson)', boxShadow:'0 0 8px var(--crimson)'}}></span>
              Preço de lançamento
            </div>
            <h2>A turma de lançamento <em className="gold" style={{fontStyle:'italic'}}>fecha em breve.</em></h2>
            <p>O valor de <strong>R$ 99,99</strong> é exclusivo para essa turma. Quando as vagas fecharem, o preço volta para R$ 297,00.</p>
            <div className="cd">
              <div className="cd-item"><span className="n">{pad(h)}</span><span className="l">Horas</span></div>
              <div className="cd-sep">:</div>
              <div className="cd-item"><span className="n">{pad(m)}</span><span className="l">Min</span></div>
              <div className="cd-sep">:</div>
              <div className="cd-item"><span className="n">{pad(s)}</span><span className="l">Seg</span></div>
            </div>
            <button className="btn btn-gold btn-lg" onClick={onCta}>
              Garantir pelo preço de lançamento <Icon.arrow />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// =================== FAQ ===================
const FAQ = () => {
  const [open, setOpen] = React.useState(null);
  return (
    <section id="faq" data-screen-label="13 FAQ">
      <div className="shell-mid">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow"><span className="dot"></span>Dúvidas frequentes</div>
            <h2>Perguntas que aparecem <em className="italic" style={{fontStyle:'italic'}}>aqui dentro.</em></h2>
          </div>
          <div className="faq">
            {FAQS.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon"><Icon.plus /></span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// =================== CTA FINAL ===================
const CTAFinal = ({ onCta }) => (
  <section id="final" className="cta-final" data-screen-label="14 CTA Final">
    <div className="shell-mid">
      <Reveal>
        <div style={{display:'flex', justifyContent:'center', marginBottom: '24px'}}>
          <LogoMark size={72} />
        </div>
        <h2>Seu celular já é uma ferramenta.<br/>Agora ele vai ser uma <em className="gold" style={{fontStyle:'italic'}}>fonte de renda.</em></h2>
        <p>A Mari construiu um império com isso. Ela documentou cada passo. E agora está te passando o método por R$ 99,99 — valor de lançamento, por tempo limitado.</p>
        <button className="btn btn-gold btn-lg" onClick={onCta} style={{padding:'18px 36px', fontSize: '16px'}}>
          Quero entrar no Trevo Academy <Icon.arrow />
        </button>
        <p className="lgpd" style={{marginTop: '14px'}}>
          <Icon.lock />&nbsp; Compra segura · Garantia de 7 dias · Acesso imediato
        </p>
      </Reveal>
    </div>
  </section>
);

// =================== PS ===================
const PS = () => (
  <section style={{paddingTop: 0, paddingBottom: '60px'}}>
    <div className="shell-mid">
      <Reveal>
        <div className="ps">
          <span className="ps-label">P.S.</span>
          <p>Se você está lendo até aqui, uma parte sua já sabe que é hora de agir. O Trevo Academy é o atalho que a Mari abriu para você. <strong>R$ 99,99</strong> é o preço de lançamento — vai subir assim que essa turma fechar. A decisão de continuar onde está também é uma escolha.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

// =================== FOOTER ===================
const Footer = () => (
  <footer className="foot">
    <div className="shell-mid">
      <div className="foot-logo"><LogoMark size={48} /></div>
      <p>
        © 2025 Trevo Academy · Trevo Creators · Todos os direitos reservados.<br/>
        Em conformidade com a LGPD. Ao se inscrever, você concorda com nossa Política de Privacidade.<br/>
        <a href="https://www.instagram.com/trevocreators" target="_blank" rel="noopener">@trevocreators</a>
      </p>
    </div>
  </footer>
);

Object.assign(window, {
  Hero, Dor, Solucao, Mari, Video, Beneficios, Modulos, Depoimentos, CriadoresStrip,
  Oferta, Objecoes, Garantia, Urgencia, FAQ, CTAFinal, PS, Footer,
});
