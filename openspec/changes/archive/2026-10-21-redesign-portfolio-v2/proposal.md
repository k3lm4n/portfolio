## Why

O portfolio atual mistura vários estilos (bento grid da magicui, timeline vertical de terceiros, gradientes em SVG, ícones `<img>` trocados por tema) e tem duas navbars diferentes para desktop e tablet. O resultado é inconsistente e difícil de manter. Existe agora um novo design ([canvas "Portfólio Kelman Santos"](https://claude.ai/artifact/C1hfMzYTg9KbdKMosRgrbt)) com um sistema visual único: tokens light/dark, tipografia Inter, cartões e chips. Implementá-lo uniformiza o site, simplifica o código e acrescenta conteúdo que hoje falta (números de destaque, projetos do setor público, tech stack por categoria).

## What Changes

- **Sistema visual**: novos tokens de cor light/dark (`bg`, `surface`, `line`, `text`, `muted`, `faint`, `chip`, `chipBg`, `thumb`, `cta*`) expostos como utilitários Tailwind v4, mais o "glow" radial no topo da página e os keyframes do design (`rise`, `drop`, `reveal` com scroll-driven animation, `pulse`, `menu`). Respeita `prefers-reduced-motion`.
- **BREAKING (visual)**: a navbar é reescrita como um header sticky flutuante e passa a ser uma só árvore. Em desktop mostra links, sociais, tema e idioma. A ≤900px mostra a marca e um botão burger que abre um dropdown. O dock fixo em baixo do mobile é removido.
- **Hero** (substitui `About`): badge com indicador "disponível", H1 "Sou o Kelman Santos", descrição, dois CTAs ("Entre em contacto", "Ver projetos") e uma faixa de 3 números de destaque. A imagem do hero e o botão de currículo são removidos.
- **Timeline** (substitui `Experience`): cartão único com linhas em grelha `data | cargo · empresa | chips`. Deixa de usar `react-vertical-timeline-component` e os logos das empresas.
- **Projetos** (substitui `ProjectsAndContribuitions`): grelha de 6 colunas (2 cartões largos + 3 estreitos) com thumbnail 16:10 e link "Ver projeto". Acrescenta o bloco **Setor público**, com cartões de projetos confidenciais sem imagens nem links.
- **Tech Stack**: é reativado no `App`, agora com 4 cartões por categoria (Front-end, Back-end, Dados, Cloud & DevOps) com chips em vez do marquee de logos.
- **Contacto**: bloco CTA de cor invertida. O agendamento pelo Calendly mantém-se e o email é a alternativa (ver change `keep-calendly-contact`).
- **Footer**: nova estrutura, com agradecimento, colunas Links e Social Media e copyright.
- **Âncoras**: ids neutros e estáveis (`#about`, `#timeline`, `#projects`, `#stack`, `#contact`), partilhados entre a nav, o footer e os CTAs.
- **i18n**: novas chaves em `pt.json` e `en.json` (badge, facts, CTAs, setor público, categorias do stack, labels de acessibilidade). Saem as chaves que ficam sem uso.
- **Limpeza**: remover `react-vertical-timeline-component` (e os seus types), os componentes magicui sem uso, os SVGs de navegação light/dark, `headergradient.svg`/`footergradient.svg`, `useTablet` e os tokens shadcn/gradient.page duplicados no `index.css`.

## Capabilities

### New Capabilities
- `design-tokens`: tokens de cor light/dark, tipografia, glow de fundo, animações de entrada/scroll/hover e respeito por reduced-motion. A preferência de tema persiste.
- `site-navigation`: header sticky responsivo, menu móvel, troca de tema e de idioma, âncoras de secção e links sociais.
- `portfolio-sections`: conteúdo e layout das secções Hero, Timeline, Projetos (incluindo Setor público), Tech Stack, Contacto e Footer, bilingues e responsivas até 360px.

### Modified Capabilities
<!-- Não existem specs principais em openspec/specs/. -->

## Impact

- **Código**: `src/index.css`, `src/App.tsx`, `src/components/Navbar`, todas as `src/sections/*`, `src/i18n/locales/{pt,en}.json`, `src/assets/index.ts`, `src/hooks/useTablet.tsx` (removido).
- **Dependências**: saem `react-vertical-timeline-component` e `@types/react-vertical-timeline-component`. O `react-calendly` mantém-se. `react-icons` e `motion` saem se ficarem sem uso.
- **Assets**: ficam os logos e as tools que ainda forem usados (ou nenhum). Os SVGs da nav e os gradientes são apagados.
- **Conteúdo pendente**: as capturas dos projetos, os textos do Setor público e a base de dados no stack ainda não existem. O design trata-os como placeholders (ver design.md).
