## Why

Foi fechado um novo design do portfólio no canvas "Portfólio Kelman Santos — V2" (https://claude.ai/artifact/EGV5s9gLmqBxiCrhzjrXrz). O site atual segue o canvas anterior. O V2 refina os tokens, refaz a Timeline, a Tech Stack e o Contacto e introduz efeitos do Magic UI nos CTAs. O canvas é **só referência visual**: o texto atual (i18n e `publicSectorItems`) mantém-se.

## What Changes

- **Tokens**: nova paleta light/dark do canvas, novo glow de fundo e novo `ctaGlow`. Adiciona os tokens `accent`, `ok-bg`/`ok-text`, `lock-bg`/`lock-text`, `spark` e `pulse`. **BREAKING** (interno): remove `btn2-bg` e `cta-bg`/`cta-text`/`cta-muted`/`cta-btn-bg`/`cta-btn-text`.
- **Motion**: `rise` mais curto (0.5s, blur 6px, 6px de deslocamento, atrasos 0.04/0.12/0.20/0.28s) e `reveal` com blur (12px, sem scale, `cover 20%`). O hover dos cartões passa a −4px. Tudo em CSS (Blur Fade sem `motion`).
- **Magic UI**: Shimmer Button, Interactive Hover Button e Pulsating Button entram em `src/components/ui/`, vindos do registo do Magic UI e adaptados aos tokens.
- **Header**: logótipo "Kelman." (ponto em `accent`) visível em todos os tamanhos. Links a 14px em `muted`, com hover por opacidade em vez do sublinhado. Raio 18px. O menu móvel mantém a linha de ícones sociais.
- **Hero**: H1 a 80px (48px a ≤900px) com −0.045em. CTAs em pill: "Entre em contacto" passa a Shimmer Button e "Ver projetos" a Interactive Hover Button. A faixa de números fica 88px abaixo, com raio 22px.
- **Timeline**: passa de cartão com linhas de 3 colunas para uma timeline vertical (data | ponto e linha | cargo, empresa e chips). O emprego atual tem o ponto verde.
- **Projetos**: os dois cartões grandes passam a 16:9. Nos cartões grandes, "com Paradis Labs" sobe para o topo, ao lado do título, e os chips partilham a linha com "Ver projeto". Raio 22px.
- **Setor público**: cada cartão mostra uma pill de estado ("Acesso público" verde / "Acesso restrito" laranja) e o ano, em vez de ícone e borda tracejada. O selo do bloco passa a fundo `surface` com borda.
- **Tech Stack**: passa de grelha de 4 cartões a uma lista de linhas (etiqueta do grupo | pills com borda).
- **Contacto**: o bloco deixa de ser invertido e escuro. Passa a cartão `surface` centrado com `ctaGlow`. "Agendar conversa" (continua a abrir o Calendly) passa a Pulsating Button e "Enviar email" a Interactive Hover Button.
- **Specs**: a `visual-parity` está desatualizada (refere Marquee, BlurFade e uma biblioteca de timeline que já não existem) e é removida.

## Capabilities

### New Capabilities
- `magic-ui-buttons`: os três botões Magic UI (Shimmer, Interactive Hover, Pulsating), a sua API, a integração com os tokens e o comportamento com movimento reduzido.

### Modified Capabilities
- `design-tokens`: nova tabela de cores, glow, `ctaGlow`, tokens novos e removidos, e novos valores das animações e do hover.
- `site-navigation`: logótipo sempre visível, links sem sublinhado animado, raio do header e conteúdo do header móvel.
- `portfolio-sections`: Hero, Timeline, Projetos, Setor público, Tech Stack e Contacto com o novo layout.
- `contact-scheduling`: estilo dos dois botões de contacto (Pulsating e Interactive Hover), sem os tokens `cta-*`.
- `visual-parity`: removida por estar obsoleta.

## Impact

- Código: `src/index.css`, `src/components/Header`, `src/components/Section.tsx`, `src/components/Chip.tsx`, `src/sections/{Hero,Timeline,Projects,TechStack,Contact}`, e os novos `src/components/ui/{shimmer-button,interactive-hover-button,pulsating-button}.tsx`.
- Dependências: nenhuma nova em runtime. Os componentes do registo só precisam de Tailwind e de `cn` (já existe em `@/lib/utils`).
- i18n: sem alterações de texto.
- As imagens OG e os ícones não mudam.
