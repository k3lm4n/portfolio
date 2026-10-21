## Context

O site (React 19, Vite 8, Tailwind v4, i18next) implementa o canvas "Portfólio Kelman Santos" desde a change `redesign-portfolio-v2`. O novo canvas, "Portfólio Kelman Santos — V2" (https://claude.ai/artifact/EGV5s9gLmqBxiCrhzjrXrz), é a referência visual desta change. Foi escrito como um único `.dc.html`, com tokens num objeto JS e os efeitos Magic UI imitados em CSS. O texto do canvas é ilustrativo: prevalecem o i18n e o `publicSectorItems`.

O projeto já tem `components.json` (shadcn, alias `@/components/ui`, `cn` em `@/lib/utils`) mas ainda não tem nenhum componente em `ui/`. Já não depende de `motion`.

## Goals / Non-Goals

**Goals:**
- Paridade visual com o canvas V2 em light e dark, a 1440px e a 390px.
- Três botões Magic UI reutilizáveis, controlados pelos tokens.
- Manter as animações em CSS, incluindo o fallback sem `animation-timeline` e o `prefers-reduced-motion`.

**Non-Goals:**
- Mudar texto, traduções, dados de projetos, SEO, OG ou ícones.
- Adicionar `motion` ou outras dependências de runtime.
- Rever a arquitetura das secções (continuam a ser `Section` + componentes por secção).

## Decisions

### D1. Magic UI híbrido: botões do registo, Blur Fade em CSS
Os botões vêm do registo do Magic UI (`npx shadcn@latest add "https://magicui.design/r/shimmer-button.json"`, e o mesmo para `interactive-hover-button` e `pulsating-button`) e são depois editados.
- **Porquê:** dá componentes reais e reconhecíveis, e os três só precisam de Tailwind. O Blur Fade do registo depende de `motion` (cerca de 30 a 40KB gz) para algo que o `rise`/`reveal` já fazem, e o `animation-timeline: view()` evita JS de scroll.
- **Alternativas:** copiar o CSS do canvas como classes globais (`.shimmer`, `.ihb`, `.pulsing`), com fidelidade total mas sem componentes; registo completo com BlurFade (adiciona `motion` e um IntersectionObserver por elemento).
- **Adaptação obrigatória** depois do `add`:
  - substituir cores fixas (`#ffffff`, `rgba(0,0,0)`, `bg-background`, `bg-primary`) pelos tokens `fg`, `bg`, `spark`, `pulse` e `line`;
  - os `@keyframes` dos componentes podem ir para o `@theme` do `src/index.css` (Tailwind v4, sem `tailwind.config`), mas as variáveis `--animate-*` que usam `var()` do próprio botão (`--speed`, `--duration`) SHALL ficar no `@theme inline`. Declaradas no `@theme` normal, resolvem-se no `:root`, onde essas variáveis não existem, e a animação fica `none` (corrigido pela change `fix-magic-ui-button-animations`);
  - aceitar `href` e renderizar `<a>` ou `<button>` (D2);
  - pôr `aria-hidden` na cópia animada do texto do Interactive Hover;
  - igualar as medidas do canvas (altura 50/52, pill, 15px).

  Se o resultado do registo se afastar demasiado do canvas (por exemplo, o shimmer do Magic UI usa `spin-around` + `slide` com uma máscara diferente do cónico do canvas), **prevalece o aspeto do canvas**.

- **O que o registo trouxe e foi corrigido na implementação:**
  - o `ShimmerButton` e o `PulsatingButton` definiam `--bg` no `style`, o que sobrepunha o token `--bg` do site dentro do botão (passaram a usar os tokens diretamente);
  - os keyframes `pulse`/`pulse-ripple` injetados usavam `boxShadow` (camelCase, CSS inválido) e o nome `pulse` colidia com o `animate-pulse` do Tailwind (passou a ser `pulsate`, só a variante pulse);
  - o `PulsatingButton` lia a cor de fundo por JS com `MutationObserver`s (removido, porque a cor do anel é sempre o token `pulse`);
  - os componentes usavam `<div>` dentro de `<button>` (passaram a `<span>`) e `forwardRef` (desnecessário em React 19).

### D2. Polimorfismo `href` em vez de `asChild`
Cada botão aceita `href?: string`: com `href` renderiza `<a>`, sem ele `<button type="button">`. Tipagem com uma união discriminada de `AnchorHTMLAttributes` e `ButtonHTMLAttributes`.
- **Porquê:** o hero usa links (`#contact`, `#projects`) e o Contacto usa um botão (Calendly) e um `mailto:`. O `asChild`/Radix Slot exigiria `@radix-ui/react-slot`, uma dependência para três sítios.

### D3. Tokens: renomear e remover em vez de manter aliases
O `index.css` passa a ter a tabela do V2. `btn-bg`/`btn-text` ficam como aliases (`var(--fg)`/`var(--bg)`), porque são semântica útil para os botões. Os tokens `cta-*` e `btn2-bg` são removidos, já que nenhum componente os usa depois do redesign do Contacto. O glow e o `cta-glow` ficam como variáveis CSS (`--glow`, `--cta-glow`) usadas por classes `page-glow` e `cta-glow`, porque o Tailwind não gera utilities de `background-image` a partir de `@theme`.

### D4. Timeline vertical com CSS grid
Cada entrada é uma grid `170px 24px 1fr`. A linha vertical é um `span` com `flex-grow` dentro da coluna do marcador e não aparece na última entrada. A ≤900px a grid passa a `24px 1fr`, com a data em `col-start-2` e `order-first` e o marcador em `row-span-2`, como no canvas. O ponto atual reutiliza a animação `ping` do badge do hero.

### D5. Projetos: variantes por `span`
O `span` (2 | 3) já existe nos dados e passa a controlar também o aspect ratio (16:9 ou 16:10) e a posição de "com Paradis Labs" e do link. Não há componente novo, só ramos em `cn`.

### D6. Sem mudanças no `Section`, exceto o espaçamento
O `Section` continua a gerar o cabeçalho (h2 40px). O letter-spacing passa a −0.035em e a margem inferior a 40px. O padding vertical de cada secção segue o canvas (72px no topo da Timeline e dos Projetos, 112px na Tech Stack e no Contacto) através de `className`.

## Risks / Trade-offs

- [O `faint` light (#9AA2B4 sobre #F4F5FA) tem cerca de 2.4:1, abaixo de 3:1, mesmo em texto grande ("Sou o" a 80px)] → Aceitar, por ser a cor do canvas e um elemento decorativo do H1, ou escurecer para cerca de #8790A3 (3:1). Fica como questão em aberto, a decidir na implementação com o dono do design.
- [O CLI do shadcn pode tentar editar o `index.css` e o `components.json` ou instalar pacotes] → Correr o `add` num branch limpo, rever o diff, reverter o que não for o ficheiro do componente e mover os keyframes à mão.
- [Shimmer/ping/pulse infinitos gastam CPU em ecrãs fracos] → Só animam `transform`/`box-shadow` em elementos pequenos. O `prefers-reduced-motion` desliga tudo.
- [O hover do Interactive Hover não existe em ecrãs táteis] → O estado em repouso é legível sozinho (texto completo e ponto). O hover é só ornamento.
- [Remover a spec `visual-parity` tira a referência a screenshots de baseline] → A verificação passa a ser a comparação manual com o canvas (tarefa final).

## Migration Plan

Mudança só de front-end, num único deploy. O rollback é reverter o commit/PR. Não há dados nem URLs afetados.

## Open Questions

- O `faint` light fica com o valor do canvas ou é ajustado para 3:1? (ver os riscos)
