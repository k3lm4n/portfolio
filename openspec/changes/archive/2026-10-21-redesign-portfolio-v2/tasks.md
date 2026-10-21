## 1. Fundações: tokens, fonte e animações

- [x] 1.1 Carregar Inter (200–800) do Google Fonts no `index.html`, com `preconnect`
- [x] 1.2 Em `src/index.css`, substituir os tokens shadcn/gradient.page e as cores soltas pelos tokens do design em `:root` e `.dark` (incluindo `--glow`), e mapeá-los em `@theme inline` para `--color-*`
- [x] 1.3 Adicionar o breakpoint `--breakpoint-nav: 900px` e confirmar que `max-nav:` e `nav:` funcionam
- [x] 1.4 Adicionar os keyframes `rise`, `drop`, `reveal`, `pulse`, `glow` e `menu`, as classes `.btn`, `.card`, `.xp-row`, `.reveal`, `.hero-in` e `.pulse`, o bloco `@supports (animation-timeline: view())` e a regra `prefers-reduced-motion`
- [x] 1.5 Aplicar no root do `App` o fundo `bg`, o glow animado, a cor `text`, `antialiased` e a transição de cor de 0.3s; remover as classes `bg-header`/`bg-footer`
- [x] 1.6 Verificar que o `useDarkMode` continua a alternar `.dark` e a persistir o tema, e simplificar a store `useAppTheme` se deixar de ter leitores

## 2. Primitivos partilhados

- [x] 2.1 Criar `components/Section.tsx` (wrap de 1200px, padding 40/16px, `scroll-margin-top`, cabeçalho opcional com título/subtítulo e a classe `reveal`)
- [x] 2.2 Criar `components/Chip.tsx` (variantes sm/md, `chip-bg`/`chip`)
- [x] 2.3 Reunir os ícones (lucide quando coincidirem, SVG inline para GitHub/LinkedIn/Discord) e as constantes dos links sociais e do email num único módulo

## 3. Header

- [x] 3.1 Criar `components/Header` com a pill sticky (nav translúcida, blur, sombra) e a animação `drop`
- [x] 3.2 Desktop: 5 links com sublinhado animado, os ícones sociais com `target="_blank" rel="noopener noreferrer"`, o separador, o botão de tema (lua/sol com `aria-label`) e o botão de idioma (mostra o idioma de destino)
- [x] 3.3 ≤900px: marca "Kelman Santos", burger com `aria-expanded`, e painel dropdown com 5 links (48px), os sociais e a animação `menu`; fecha ao clicar num link e com Escape (o foco volta ao burger)
- [x] 3.4 Substituir `Navbar` por `Header` no `App` e apagar `components/Navbar`

## 4. Hero

- [x] 4.1 Criar `sections/Hero` (id `about`): badge com ponto pulsante, H1 com "Sou o" em `faint` (72px/44px), descrição, CTAs `#contact` e `#projects` (com seta), e a classe `hero-in`
- [x] 4.2 Faixa de 3 números (grelha 3 → 1 coluna, divisores `line`)
- [x] 4.3 Chaves i18n `hero.*` (badge, intro, nome, descrição, ctas, facts) em pt e en; remover `about.*` e apagar `sections/About`

## 5. Timeline

- [x] 5.1 Criar `sections/Timeline` (id `timeline`) com um array tipado das 6 entradas (techs no array, textos no i18n)
- [x] 5.2 Cartão único com linhas `xp-row` (200px | 1fr | 300px → empilhado a ≤900px), divisores e hover
- [x] 5.3 Chaves i18n `timeline.*` com as datas abreviadas e os locais em pt e en; remover `experience.*` e apagar `sections/Experience`

## 6. Projetos

- [x] 6.1 Criar `sections/Projects` (id `projects`) com um array tipado (`id`, `span: 2|3`, `image?`, `url?`) e a grelha de 6 colunas → 1 a ≤900px
- [x] 6.2 Cartão de projeto: área 16:10 (imagem ou placeholder `thumb` com o nome), título (21/18px conforme o span), descrição, e link "Ver projeto ↗" só quando houver `url`; hover a subir 6px com sombra
- [x] 6.3 Bloco `PublicSector`: cabeçalho, selo com cadeado e cartões tracejados (ícone, ano, nome, instituição · papel, descrição, caixa Resultado, chips); não renderizar quando o array estiver vazio
- [x] 6.4 Chaves i18n `projects.*` e `publicSector.*` (títulos e labels) em pt e en; itens do setor público em `sections/Projects/publicSectorItems.ts`; apagar `sections/ProjectsAndContribuitions`

## 7. Tech Stack

- [x] 7.1 Reescrever `sections/TechStack` (id `stack`) com 4 grupos (Front-end, Back-end, Dados, Cloud & DevOps) em cartões com chips; grelha 4 → 2 (≤900px) → 1 (≤520px)
- [x] 7.2 Chaves i18n `stack.*` (títulos dos grupos) em pt e en; descomentar no `App`

## 8. Contacto e Footer

- [x] 8.1 Criar `sections/Contact` (id `contact`): bloco `cta-bg` com raio 28px, título 60/38px, subtítulo, botão `mailto:` com ícone de email e o email em texto; padding de 48/24px a ≤900px
- [x] 8.2 Reescrever `sections/Footer`: agradecimento + subtítulo, colunas Links (âncoras) e Social Media (URLs reais), divisor e copyright
- [x] 8.3 Chaves i18n `contact.*` e `footer.*` em pt e en; apagar `sections/GetInTouch`

## 9. Limpeza

- [x] 9.1 Com grep, confirmar quais imports ficaram órfãos e apagar `components/magicui/*`, `components/Marquee`, `components/Container`, `components/ui/navigation-menu.tsx` (e outros `ui/*` sem uso), `hooks/useTablet`, `hooks/useMobile` e `hooks/useAppTheme.tsx` (vazio)
- [x] 9.2 Apagar os assets sem uso (`assets/light`, `assets/dark`, os gradientes, `hero_img.png`, os logos e tools sem referência) e atualizar `assets/index.ts`
- [x] 9.3 Remover do `package.json` `react-vertical-timeline-component` e `@types/react-vertical-timeline-component` (o `react-calendly` voltou com `keep-calendly-contact`), e também `react-icons`, `motion`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-switch` e `tw-animate-css` se ficarem sem uso; correr `npm install`
- [x] 9.4 Remover do `pt.json`/`en.json` as chaves sem uso e confirmar a paridade de chaves entre os dois ficheiros

## 10. Verificação

- [x] 10.1 `npm run lint` e `npm run build` sem erros nem avisos
- [ ] 10.2 Verificação manual em light/dark × pt/en × 360/390/900/1440px, comparada com o canvas: sem scroll horizontal, cores e espaçamentos certos
- [ ] 10.3 Verificar a navegação por teclado (Tab, foco visível, Escape no menu), as âncoras com `scroll-margin`, os links sociais em novo separador e o `mailto`
- [ ] 10.4 Verificar o fallback sem `animation-timeline` (Firefox) e com `prefers-reduced-motion`: o conteúdo fica visível e não há animações
