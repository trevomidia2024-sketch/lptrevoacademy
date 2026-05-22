# Trevo Academy — Landing Page

Quiz de entrada + landing page de vendas para o Trevo Academy.

## Stack

Site estatico (sem build): React 18 + Babel standalone carregados direto via `<script>` no `index.html`. Todos os componentes ficam em arquivos `.jsx` na raiz.

## Estrutura

- `index.html` — entry point (carrega React, Babel, three.js e todos os JSX)
- `app.jsx` — root: gerencia quiz / loading / LP e o painel de tweaks
- `quiz.jsx` — fluxo do quiz (nome + WhatsApp + 3 perguntas)
- `landing.jsx` — todas as secoes da landing page
- `components.jsx`, `neon-button.jsx`, `glow-card.jsx`, `infinite-slider.jsx`, `dotted-surface.jsx` — componentes auxiliares
- `tweaks-panel.jsx` — painel de edicao (oculto em producao)
- `styles.css` — estilos globais
- Imagens: `logo.png`, `mari-hero.jpg`, `mari-portrait.jpg`

## Rodando local

Como e estatico, basta servir a pasta com qualquer servidor HTTP. Exemplos:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Abrir `http://localhost:8000`.

> Abrir `index.html` direto pelo `file://` nao funciona por causa do Babel/CORS.

## Deploy (Vercel)

1. Push para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importar o repo.
3. Framework Preset: **Other**. Build Command: vazio. Output Directory: `.` (raiz).
4. Deploy.

## TODO

- Trocar `SEU_LINK_DE_CHECKOUT_AQUI` (em `index.html` / `landing.jsx`) pelo link real do checkout.
- Substituir depoimentos placeholder em `landing.jsx`.
