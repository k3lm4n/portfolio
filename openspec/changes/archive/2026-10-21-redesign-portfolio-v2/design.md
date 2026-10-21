## Context

O site é React 19 + Vite 8 + Tailwind v4 (migrado na change `upgrade-deps-tailwind-v4`), com i18n (`react-i18next`, pt/en) e tema por classe `dark` no `<html>` (`useDarkMode` + store zustand `useAppTheme`).

O novo design vive num canvas Design ([Portfólio Kelman Santos](https://claude.ai/artifact/C1hfMzYTg9KbdKMosRgrbt), artboard `Main.dc.html`, 1440px, interativo). Está escrito em HTML com estilos inline e um objeto de tokens `light`/`darkT` em JS. A fonte de verdade visual é esse ficheiro. Uma cópia de leitura foi descarregada para a scratchpad durante a exploração e pode voltar a ser lida pela ação `read` do Artifact (`path: project/Main.dc.html`).

Estado atual relevante:
- `Navbar` tem duas árvores (`useTablet()`): um dock fixo em baixo e uma barra no topo. Os ícones são `<img>` com variantes light/dark.
- `About` usa `HeroImage`, `BlurFade`, o botão de currículo e Calendly.
- `Experience` usa `react-vertical-timeline-component` com os logos.
- `ProjectsAndContribuitions` usa `BentoGrid` da magicui.
- `TechStack` existe, mas está comentado no `App`, e usa o marquee.
- `GetInTouch` usa `ShimmerButton` + `react-calendly`.
- `index.css` tem tokens shadcn (HSL), dois blocos `.dark` sobrepostos e cores soltas (`onyx`, `hard-gray`, `primary-color`…).

## Goals / Non-Goals

**Goals:**
- Reproduzir fielmente o design (cores, espaçamentos, tipografia, raios, animações) em light e dark, de 360px a 1440px.
- Um único sistema de tokens em CSS, consumido por utilitários Tailwind.
- Componentes simples, sem dependências de UI de terceiros para layout.
- Todo o texto no i18n pt/en.
- Remover o código e as dependências que ficam órfãos.

**Non-Goals:**
- Criar conteúdo novo: as capturas dos projetos, os textos do setor público e as bases de dados ficam por preencher pelo autor.
- Mudar o SEO/`react-helmet-async`, o analytics ou o deploy.
- Criar um artboard mobile no canvas: o comportamento responsivo segue as media queries já presentes no `Main.dc.html`.
- Usar componentes shadcn: os `ui/*` podem ficar, mas não são usados pelas novas secções.

## Decisions

### 1. Tokens como variáveis CSS + `@theme inline`
Os tokens do design passam a variáveis em `:root` e `.dark` (`--bg`, `--surface`, `--line`, `--text`, `--muted`, `--faint`, `--chip`, `--chip-bg`, `--nav`, `--nav-line`, `--btn-bg`, `--btn-text`, `--btn2-bg`, `--thumb`, `--cta-*`, `--glow`). O `@theme inline` mapeia-os para `--color-*`, o que dá `bg-surface`, `border-line`, `text-muted`, etc.
- *Porquê*: o `useDarkMode` já alterna `.dark`, por isso não é preciso estado React para cores e a troca é instantânea com `transition: background-color .3s, color .3s`.
- *Alternativa*: passar um objeto `t` por contexto, como no protótipo. Foi rejeitada porque força re-render e duplica a lógica de tema.
- Os tokens shadcn em HSL e o segundo bloco `.dark` (gradient.page) são removidos. Se algum `components/ui/*` ainda usado depender deles (`button` no About sai), os aliases mínimos (`--color-border` → `--line`, etc.) ficam para não partir nada.

### 2. Animações e regras de layout em CSS global
Os keyframes (`rise`, `drop`, `reveal`, `pulse`, `glow`, `menu`), o bloco `@supports (animation-timeline: view())` e o `prefers-reduced-motion` vão para o `index.css`, tal como no design. Os hovers e transições usam classes semânticas pequenas (`.btn`, `.card`, `.xp-row`, `.reveal`) definidas em `@layer components`.
- *Porquê*: CSS puro, sem JS de scroll. O `reveal` com `view()` degrada para "sem animação" nos browsers sem suporte, o que cumpre a spec.
- *Alternativa*: `motion`/`BlurFade` com IntersectionObserver. Foi rejeitada: mais peso, e o design já define o comportamento em CSS.
- O resto (grelhas, espaçamentos, tamanhos) usa utilitários Tailwind inline. O breakpoint de 900px do design passa a um breakpoint custom `--breakpoint-nav: 900px` (usado como `max-nav:` / `nav:`). O de 520px usa `max-[520px]:`.

### 3. Estrutura de componentes
```
App
├─ Header            (components/Header — substitui Navbar)
├─ Hero              (sections/Hero — substitui About)
├─ Timeline          (sections/Timeline — substitui Experience)
├─ Projects          (sections/Projects — substitui ProjectsAndContribuitions)
│   └─ PublicSector  (render condicional)
├─ TechStack         (reescrito)
├─ Contact           (sections/Contact — substitui GetInTouch)
└─ Footer            (reescrito)
```
Primitivos partilhados em `components/`: `Section` (wrap 1200px + cabeçalho título/subtítulo), `Chip` e `Icon*` (os SVG inline do design: GitHub, LinkedIn, Discord, sol, lua, burger, X, seta, ↗, cadeado, instituição, email). `lucide-react` já está instalado e tem quase todos estes ícones, por isso usa-se o lucide sempre que o traço coincidir (stroke 1.8/2) e SVG inline só para os que faltem.
- *Porquê*: os nomes antigos (`ProjectsAndContribuitions`, `GetInTouch`) já não descrevem as secções, e renomear agora é barato.

### 4. Dados em arrays tipados, texto no i18n
Cada secção declara os seus dados num array `const` (id, datas, techs, url, imagem). Os textos traduzíveis vivem em `pt.json`/`en.json` sob chaves com o mesmo id: `timeline.items.teamit.*`, `projects.items.venator.*`, `publicSector.items[]`, `stack.groups.*`, `hero.facts.*`. As datas abreviadas ("Abr 2025 — Presente") são strings i18n, não `Intl`, para controlar o formato exato.
- Os nomes de tecnologias (React, Node.js…) não são traduzidos e ficam no array.

### 5. Conteúdo em falta
- **Capturas dos projetos**: o campo `image?: string` é opcional. Sem imagem, a área 16:10 mostra o fundo `thumb` com o nome do projeto em `muted`. É o mesmo visual do placeholder do design, mas sem os parênteses retos.
- **URLs dos projetos**: o campo `url?: string` é opcional. Sem URL, o link "Ver projeto" não aparece. Os URLs atuais não existem no código (o bento não tinha links).
- **Setor público**: os itens vivem em `sections/Projects/publicSectorItems.ts`, cada um com os textos `pt`/`en`, e não nos locales. Um `"items": []` no `en.json` é tipado como `never[]` pelo i18next e faz rebentar a inferência de tipos (`TS2589`). Os títulos e labels do bloco continuam no i18n. O array começa vazio, por isso o bloco não é renderizado (ver spec).
- **Dados → "[BASE DE DADOS]"**: fica só PL/SQL até haver confirmação.

### 6. Âncoras e scroll
Ids `about`, `timeline`, `projects`, `stack`, `contact`. O scroll suave usa `html { scroll-behavior: smooth }` (já existe) mais `scroll-margin-top` nas secções, à altura do header (~96px). Os `handleScroll` manuais da Navbar e do Footer são removidos: o da Navbar estava partido (`onClick={() => handleScroll}` nunca chamava a função).

### 7. Menu móvel
Estado local `menuOpen` no `Header`. O painel é renderizado condicionalmente, por baixo da pill, dentro do mesmo `<header>` sticky. Escape fecha o painel e devolve o foco ao burger (via `ref`). Clicar num link também fecha. O painel não leva focus trap: é um dropdown, não um modal.

### 8. Fonte
O Inter é carregado do Google Fonts no `index.html` (`preconnect` + `css2?family=Inter:wght@200..800&display=swap`). Hoje o `html { font-family: Inter }` depende de a fonte estar instalada no sistema.

### 9. Dependências removidas
`react-vertical-timeline-component` e `@types/react-vertical-timeline-component` (o `react-calendly` mantém-se, ver `keep-calendly-contact`). Saem também, se ficarem sem import (verificar com grep antes): `react-icons`, `motion`, `@radix-ui/react-navigation-menu` (com `components/ui/navigation-menu.tsx`) e os `components/magicui/*`, `Marquee`, `useTablet`, `useMobile`, `Container` e os assets da nav e dos gradientes. A store `useAppTheme` só é mantida se algum componente ainda a ler.

## Risks / Trade-offs

- [O design troca o Calendly por `mailto:`] → Revertido pela change `keep-calendly-contact`: o agendamento pelo Calendly é o botão primário e o email o secundário.
- [Desaparecem a foto, o CV e os logos] → Também é o que o design define. Se algum fizer falta, cabe sem quebrar a grelha: o CV como terceiro CTA no hero, os logos como avatar de 24px antes da empresa.
- [`animation-timeline: view()` só em Chromium/Safari recente] → Fallback sem animação, e o conteúdo fica sempre visível.
- [A remoção dos tokens shadcn parte `components/ui/*` ainda usados] → Fazer grep dos imports antes de remover. Os aliases de compatibilidade só ficam se forem necessários.
- [Projetos sem capturas parecem vazios] → O placeholder `thumb` é limpo. Adicionar as capturas reais fica como follow-up de conteúdo.
- [O backdrop-blur do header com o glow pode custar performance em mobile] → O glow é só background (sem filtro), e o blur aplica-se a um elemento pequeno.

## Migration Plan

1. Implementar num branch a partir de `develop`. A ordem é: tokens → primitivos → header → secções → limpeza.
2. Validar com `npm run lint`, `npm run build`, e uma verificação manual em light/dark, pt/en e 360/390/900/1440px comparada com o canvas.
3. Deploy pelo pipeline atual (Firebase/Vercel). Rollback com revert do merge: não há migração de dados. A chave de tema no `localStorage` mantém-se.

## Open Questions

1. Os URLs públicos e as capturas de Venator, Messier Notes, Kale, Smooth Player e Social Mate: existem?
2. O conteúdo dos cartões do setor público (até ao preenchimento, o bloco fica escondido).
3. Que bases de dados entram em "Dados", além de PL/SQL?
4. Confirmar os números do hero (5+ anos, 5 empresas, 3 países).
5. Remover a foto do hero, o botão de CV e os logos da timeline, como no design: confirmar. Por omissão, esta change segue o design. O Calendly mantém-se (`keep-calendly-contact`).
