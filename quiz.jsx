/* Quiz funnel — 3 steps + loading */

// Format DDD + number as the user types: (XX) XXXXX-XXXX (mobile) or (XX) XXXX-XXXX (landline)
const formatBrPhone = (raw) => {
  const d = (raw || '').replace(/\D/g, '').slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
};

const phoneDigits = (raw) => (raw || '').replace(/\D/g, '');
// Valid: DDD (2) + 8 (landline) or 9 (mobile)
const isValidBrPhone = (raw) => {
  const d = phoneDigits(raw);
  if (d.length !== 10 && d.length !== 11) return false;
  // DDD between 11 and 99
  const ddd = parseInt(d.slice(0, 2), 10);
  if (ddd < 11 || ddd > 99) return false;
  // Mobile must start with 9 in the third digit
  if (d.length === 11 && d[2] !== '9') return false;
  return true;
};
const isValidPhone = (cc, phone) => {
  if (cc === '55') return isValidBrPhone(phone);
  const d = phoneDigits(phone);
  return d.length >= 7 && d.length <= 15;
};
const isValidName = (n) => (n || '').trim().split(/\s+/).filter(Boolean).length >= 1 && (n || '').trim().length >= 2;

const QUIZ_STEPS = [
  {
    id: 's1',
    badge: 'Pergunta 1 de 3',
    heading: (name) => <>Olá, <span className="gold">{name || 'Criador'}</span>! Qual é sua situação atual?</>,
    question: 'Nas redes sociais, você...',
    opts: [
      { l: 'A', t: 'Não tenho perfil ou nunca postei nada' },
      { l: 'B', t: 'Tenho perfil mas não sei como crescer' },
      { l: 'C', t: 'Já posto mas não consigo monetizar' },
      { l: 'D', t: 'Já fatura algo, mas quero escalar' },
    ],
  },
  {
    id: 's2',
    badge: 'Pergunta 2 de 3',
    heading: <>O que mais te <span className="gold">impede</span> de avançar?</>,
    question: 'Sua maior barreira hoje é...',
    opts: [
      { l: 'A', t: 'Não sei criar conteúdo que engaja' },
      { l: 'B', t: 'Tenho medo do julgamento das pessoas' },
      { l: 'C', t: 'Não sei como cobrar e fechar parcerias' },
      { l: 'D', t: 'Falta disciplina e constância para postar' },
    ],
  },
  {
    id: 's3',
    badge: 'Última pergunta',
    heading: <>Quanto você quer <span className="gold">faturar por mês</span> com as redes?</>,
    question: 'Minha meta de renda com criação de conteúdo:',
    opts: [
      { l: 'A', t: 'R$ 1.000 a R$ 3.000/mês — uma renda extra' },
      { l: 'B', t: 'R$ 5.000 a R$ 10.000/mês — substituir meu emprego' },
      { l: 'C', t: 'R$ 20.000+/mês — viver muito bem disso' },
      { l: 'D', t: 'Ainda não sei — quero entender o mercado' },
    ],
  },
];

const Quiz = ({ onFinish }) => {
  const [step, setStep] = React.useState(0); // 0 = name form, 1..3 = questions
  const [name, setName] = React.useState('');
  const [cc, setCc] = React.useState('55');
  const [whats, setWhats] = React.useState('');
  const [touched, setTouched] = React.useState({ name: false, whats: false });
  const [answers, setAnswers] = React.useState({});

  const totalSteps = QUIZ_STEPS.length + 1; // +1 for the intro

  const nameValid = isValidName(name);
  const phoneValid = isValidPhone(cc, whats);
  const ccValid = /^\d{1,3}$/.test(cc);
  const canContinue = nameValid && phoneValid && ccValid;

  const submitIntro = (e) => {
    e?.preventDefault();
    setTouched({ name: true, whats: true });
    if (!canContinue) return;
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onPhoneChange = (e) => {
    // Only auto-format as BR if cc is 55; otherwise just digits
    if (cc === '55') {
      setWhats(formatBrPhone(e.target.value));
    } else {
      setWhats(e.target.value.replace(/[^\d\s\-()]/g, '').slice(0, 20));
    }
  };
  const onCcChange = (e) => {
    setCc(e.target.value.replace(/\D/g, '').slice(0, 3));
  };

  const choose = (qid, letter) => {
    setAnswers(prev => ({ ...prev, [qid]: letter }));
  };

  const next = () => {
    if (step < QUIZ_STEPS.length) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // E.164 with country code for downstream
      onFinish({ name: name.trim(), whats: whats, whatsE164: '+' + cc + phoneDigits(whats), cc, answers });
    }
  };

  const firstName = name.split(' ')[0];

  return (
    <div className="quiz-shell">
      <div className="quiz-card fade-in" key={step}>
        {step === 0 ? (
          <React.Fragment>
            <div style={{textAlign:'center', marginBottom: '24px'}}>
              <LogoMark size={64} />
            </div>
            <div className="eyebrow eyebrow-green" style={{display:'flex'}}><span className="dot"></span>Quiz de Perfil</div>
            <h1 style={{marginTop: '20px'}}>Transforme seu celular em uma <em className="gold" style={{fontStyle:'italic'}}>fonte de renda real.</em></h1>
            <p className="quiz-sub">Responda 3 perguntas rápidas e descubra seu perfil de monetização nas redes sociais.</p>

            <form onSubmit={submitIntro} style={{marginTop: '28px'}} noValidate>
              <div className={`field ${touched.name && !nameValid ? 'field--err' : ''}`}>
                <label htmlFor="q-name">Seu nome <span className="req">*</span></label>
                <input
                  id="q-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onBlur={() => setTouched(t => ({ ...t, name: true }))}
                  placeholder="Como te chamam?"
                  autoComplete="given-name"
                  aria-invalid={touched.name && !nameValid}
                />
                {touched.name && !nameValid && (
                  <span className="field-err">Digite seu nome para continuar.</span>
                )}
              </div>
              <div className={`field ${touched.whats && (!phoneValid || !ccValid) ? 'field--err' : ''}`}>
                <label htmlFor="q-whats">WhatsApp com DDD <span className="req">*</span></label>
                <div className="phone-input">
                  <span className="phone-prefix-sign">+</span>
                  <input
                    className="phone-cc"
                    type="tel"
                    inputMode="numeric"
                    value={cc}
                    onChange={onCcChange}
                    aria-label="Código do país"
                    maxLength={3}
                  />
                  <span className="phone-divider" aria-hidden="true"></span>
                  <input
                    id="q-whats"
                    type="tel"
                    required
                    inputMode="numeric"
                    value={whats}
                    onChange={onPhoneChange}
                    onBlur={() => setTouched(t => ({ ...t, whats: true }))}
                    placeholder={cc === '55' ? '(21) 90000-0000' : 'número'}
                    autoComplete="tel-national"
                    maxLength={20}
                    aria-invalid={touched.whats && !phoneValid}
                  />
                </div>
                {touched.whats && (!phoneValid || !ccValid) ? (
                  <span className="field-err">
                    {!ccValid ? 'Código do país inválido.' :
                      cc === '55' ? 'Digite o número completo com DDD (ex: (21) 90000-0000).' :
                      'Digite um número válido.'}
                  </span>
                ) : (
                  <span className="field-hint">
                    {cc === '55' ? 'Brasil — inclua DDD + 9 dígitos.' : 'Inclua DDD/área + número completo.'}
                    {' '}Vamos te enviar acesso pelo WhatsApp.
                  </span>
                )}
              </div>
              <NeonButton variant="solid" size="lg" type="submit" disabled={!canContinue} className="quiz-submit" style={{marginTop: '8px', width: '100%'}}>
                Continuar <Icon.arrow />
              </NeonButton>
              <p className="lgpd"><Icon.lock /> &nbsp;Seus dados são protegidos e nunca serão compartilhados.</p>
            </form>
          </React.Fragment>
        ) : (
          (() => {
            const q = QUIZ_STEPS[step - 1];
            const picked = answers[q.id];
            return (
              <React.Fragment>
                <div className="quiz-step-bar">
                  <div className="quiz-progress">
                    {QUIZ_STEPS.map((_, i) => (
                      <span key={i} className={`seg ${i < step ? 'on' : ''}`}></span>
                    ))}
                  </div>
                  <span className="quiz-step-num">Etapa {step} de {QUIZ_STEPS.length}</span>
                </div>
                <div className="eyebrow"><span className="dot"></span>{q.badge}</div>
                <h2>{typeof q.heading === 'function' ? q.heading(firstName) : q.heading}</h2>
                <p className="quiz-sub" style={{marginTop:'18px', fontFamily:'JetBrains Mono, monospace', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)'}}>{q.question}</p>

                <div className="quiz-opts">
                  {q.opts.map(o => (
                    <button
                      key={o.l}
                      className={`quiz-opt ${picked === o.l ? 'sel' : ''}`}
                      onClick={() => choose(q.id, o.l)}
                    >
                      <span className="ltr">{picked === o.l ? <Icon.check /> : o.l}</span>
                      <span className="text">{o.t}</span>
                    </button>
                  ))}
                </div>

                <button className="btn btn-gold btn-block" disabled={!picked} onClick={next}>
                  {step === QUIZ_STEPS.length ? 'Ver Meu Resultado' : 'Próxima'} <Icon.arrow />
                </button>
              </React.Fragment>
            );
          })()
        )}
      </div>
    </div>
  );
};

const Loading = ({ onDone }) => {
  const steps = [
    'Analisando suas respostas',
    'Cruzando com dados de +100 criadores',
    'Montando sua jornada personalizada',
  ];
  const [stepIdx, setStepIdx] = React.useState(0);

  React.useEffect(() => {
    const t1 = setTimeout(() => setStepIdx(1), 900);
    const t2 = setTimeout(() => setStepIdx(2), 1800);
    const t3 = setTimeout(() => onDone(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="loading-shell fade-in">
      <LogoMark size={56} />
      <div className="spinner"></div>
      <div>
        <h2 className="loading-title">Analisando seu perfil…</h2>
        <p className="loading-sub" style={{marginTop:'8px'}}>Preparando uma jornada personalizada com base nas suas respostas.</p>
      </div>
      <div className="loading-steps">
        {steps.map((s, i) => (
          <div key={i} className={`loading-step ${i <= stepIdx ? 'active' : 'pending'}`}>
            <span className="lck">{i < stepIdx ? <Icon.check /> : i === stepIdx ? '◐' : '○'}</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Quiz, Loading });
