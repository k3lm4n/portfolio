## 1. Baseline (F0)

- [x] 1.1 Instalar o estado atual (`npm install --legacy-peer-deps`) e confirmar que `npm run build` passa
- [x] 1.2 Servir o build (`npm run preview`) e capturar 8 screenshots de página inteira (light/dark × en/pt × 390px/1440px) para o scratchpad, como baseline
- [x] 1.3 Registar o resultado atual de `npx tsc -b` e `npm run lint` (os erros que já existam ficam como referência)
  - Baseline: `tsc -b` com código 0; o lint já falhava com 8 erros e 3 avisos (`no-var` ×3, `no-useless-escape` ×2, `no-explicit-any` ×3, `react-refresh` ×2, `exhaustive-deps` ×1)

## 2. Limpeza e toolchain (F1)

- [x] 2.1 Remover as dependências sem uso: `vertical-timeline-component-react`, `vite-tsconfig-paths`, `vite-plugin-svgr`, `@radix-ui/react-icons`, `react-ga4`
- [x] 2.2 Mover `@types/react-vertical-timeline-component` para `devDependencies`
- [x] 2.3 Apagar o `yarn.lock`
- [x] 2.4 Atualizar `@vitejs/plugin-react` para 6.x e rever o `vite.config.ts` (a opção `include: "**/*.tsx"` continua suportada?)
  - Sim: o `include` continua nas opções. Os peers novos (`oxc-transform-react`, `@rolldown/plugin-babel`, `babel-plugin-react-compiler`) são opcionais
- [x] 2.5 Atualizar `typescript` para o último 6.x e `@types/node`. Remover o `baseUrl` dos tsconfig se for assinalado como deprecado, e confirmar que o alias `@/*` resolve
  - TS 6.0.3 e `@types/node` 24 (alinhado com o runtime `node:24`). O `baseUrl` não foi assinalado, mas foi removido como preparação para o TS 7; o `@/*` resolve sem ele
- [x] 2.6 Regenerar o `package-lock.json` e confirmar que `npm ci` passa sem `--legacy-peer-deps` (com as libs de React ainda no 18)
- [x] 2.7 Gates: `npx tsc -b` e `npm run build` passam. Commit da fase

## 3. React 19 e libs de runtime (F2)

- [x] 3.1 Atualizar `react`, `react-dom`, `@types/react` e `@types/react-dom` para 19.x
- [x] 3.2 Substituir `JSX.Element` por `React.JSX.Element` em `src/sections/Experience/index.tsx`, e corrigir outros erros de tipos que o `tsc` aponte
- [x] 3.3 Trocar `framer-motion` por `motion` (último) e atualizar o import em `src/components/magicui/blur-fade.tsx` para `motion/react`
- [x] 3.4 Atualizar `react-vertical-timeline-component` para 4.x, verificar a API (`contentStyle`, `contentArrowStyle`, `iconStyle`, `date`) e o caminho do CSS. Se partir, fixar na 3.x e documentar
  - A API e o `style.min.css` são compatíveis. A v4 trocou o anel do ícone por `shadowSize` (default `small`, 2px). Como o prop não existe nos `@types` 3.3.6, a sombra da v3 é reposta via `iconStyle.boxShadow`. A v4 também removeu o `postinstall`
- [x] 3.5 Atualizar `lucide-react` para 1.x e confirmar que os ícones Briefcase, GraduationCap, SendHorizontal e ChevronDown existem
- [x] 3.6 Atualizar `react-helmet-async` para 3, `i18next` para 26, `@vercel/analytics` para 2, e as restantes para o último minor/patch (`react-i18next`, `i18next-browser-languagedetector`, `react-calendly`, `react-icons`, `zustand`, `tailwind-merge`, `@radix-ui/*`, `class-variance-authority`, `clsx`)
- [x] 3.7 Gates: `npm ci` sem flags, `npx tsc -b` e `npm run build`. Comparar os screenshots com a baseline (o Tailwind ainda é o v3, por isso o resultado tem de ser idêntico). Commit da fase
  - Mobile e light: 0% de diferença. Dark desktop: 0,015%, porque as datas da timeline descem 1px (CSS da v4 da biblioteca); desvio aceite
  - O JS gzip passou de 150,6 para 187,6 kB (o `react-dom` 19 e o `motion-dom` são maiores). O Vite passa a avisar de um chunk acima de 500 kB; o code-splitting fica fora de âmbito
  - Nota sobre a captura: o `fullPage` do Playwright dispara um resize transitório com 1px de largura, e com o React 19 os hooks `useTablet`/`useMobile` chegam a renderizar esse estado na imagem. Não afeta utilizadores reais. O script passou a aumentar o viewport em vez de usar `fullPage`, e a baseline foi refeita a partir de `b1c73c2`

## 4. Tailwind v4 (F3)

- [x] 4.1 Correr `npx @tailwindcss/upgrade` e rever o diff gerado
  - Usado `--force`, porque as únicas alterações no working tree eram as pastas `.claude/` e `openspec/`, ainda não versionadas. A ferramenta migrou 8 ficheiros de templates, o config e o CSS
- [x] 4.2 Garantir o `@tailwindcss/vite` no `vite.config.ts`, e remover `postcss.config.js`, `postcss`, `autoprefixer` e `tailwindcss-animate`
  - A ferramenta tinha optado por `@tailwindcss/postcss`; foi substituído pelo plugin Vite, como decidido em D3
- [x] 4.3 Em `src/index.css`: `@import "tailwindcss";`, `@import "tw-animate-css";` e `@custom-variant dark (&:where(.dark, .dark *));`
  - Ficou `@custom-variant dark (&:is(.dark *))`, gerado pela ferramenta, por ser idêntico ao seletor `class` do v3.4 (garante paridade)
- [x] 4.4 Migrar os tokens shadcn para `@theme inline` (`--color-*: hsl(var(--*))`, `--radius-lg/md/sm`) e manter os valores HSL em `:root`/`.dark`
- [x] 4.5 Migrar as cores fixas para `@theme` (`black`, `white`, `onyx`, `dark-gray`, `hard-gray`, `medium-gray`, `light-gray`, `light-blue`, `light-red`, `light-yellow`, `primary-color`, `chart-*`), com os overrides de `black`/`white` preservados
  - Os `chart-*` dependem de `var()` e por isso ficaram no `@theme inline`
- [x] 4.6 Migrar os keyframes e as animações (`spin-around`, `slide`, `marquee`, `marquee-vertical`) para `--animate-*` + `@keyframes` em `@theme`
- [x] 4.7 Recriar o `container` com `@utility` (centrado, `padding-inline: 2rem`, `max-width: 1400px` no `2xl`) e validar com o `md:container` do `Container.tsx`
- [x] 4.8 Confirmar as renomeações de classes: `rounded`→`rounded-sm` (Navbar ×2, Experience), `outline-none`→`outline-hidden` (ui), `bg-gradient-to-*`→`bg-linear-to-*`, e `!font-light !text-sm !-mt-1`→`font-light! text-sm! -mt-1!`
  - O `rounded` sem sufixo ficou intacto: no v4 continua a valer 0,25rem, igual ao v3, por isso não precisa de renomeação. A ferramenta também converteu arbitrary values (`gap-(--gap)`, `group-hover:paused`, `direction-reverse`, `auto-rows-88`, …), e confirmei que todos existem no CSS gerado
- [x] 4.9 Rever o CSS sem layer (`.bg-footer`, `.bg-header`, `.dark-mode-transition`, `html`) quanto à precedência das cascade layers, e mover para `@utility`/`@layer` se houver conflito
  - A ferramenta moveu-os para `@layer utilities`. Sem conflitos visíveis
- [x] 4.10 Apagar o `tailwind.config.js` e atualizar o `components.json` (`tailwind.config: ""`)
- [x] 4.11 Gates: `npm ci`, `npx tsc -b` e `npm run build`. Verificar que o CSS em `dist/assets` contém `bg-onyx`, `bg-primary-color`, `bg-background` e regras `.dark`
  - O CSS passou de 41,8 para 58,6 kB (gzip de 8,9 para 11,0 kB), por causa do `tw-animate-css` e das variáveis de tema do v4
- [x] 4.12 Comparar as 8 combinações com a baseline: navbar (desktop e tablet), About/container, timeline, marquee, shimmer button, footer e header com gradientes. Documentar as diferenças aceites (tom das tags `gray-*`) ou corrigi-las. Commit da fase
  - Com o limiar 0,1 a diferença face à baseline é igual à da F2 (0% em mobile e light; 0,015% em dark desktop, das datas da timeline). Com o limiar 0 aparecem só desvios de cor impercetíveis, sem alterações de layout: o fundo translúcido da navbar (`bg-white/30` via `color-mix`), o texto cinzento dos cartões de projetos e as tags `gray-*` (paleta oklch). Desvios aceites

## 5. ESLint 10 (F4)

- [x] 5.1 Atualizar `eslint` para 10 e instalar `@eslint/js`, `typescript-eslint` e `globals`. Atualizar `eslint-plugin-react-hooks` (7) e `eslint-plugin-react-refresh`, e remover `@typescript-eslint/parser` e `@typescript-eslint/eslint-plugin`
  - O `typescript-eslint` 8.72 declara `typescript >=4.8.4 <6.1.0`, o que confirma a D2 (o TS 7 ainda não é suportado)
- [x] 5.2 Criar o `eslint.config.js` (flat) com recommended, typescript-eslint recommended, react-hooks, react-refresh (`only-export-components` com `allowConstantExport`), `globals.browser` e ignore de `dist`
  - Usado `reactRefresh.configs.vite()`, que ativa `allowConstantExport`
- [x] 5.3 Apagar o `.eslintrc.cjs` e remover o `--ext ts,tsx` do script `lint`
- [x] 5.4 Correr `npm run lint`. Corrigir os erros triviais, e desativar explicitamente com nota as regras novas que exijam alterar comportamento
  - Corrigidos: `var`→`const` e um escape desnecessário na Navbar; o escape e os `e: any`→`React.MouseEvent` no Footer; o `t(item.title as any)`→`title: ParseKeys` no Experience; a dependência `setAppTheme` no `useDarkMode`
  - Desativados com nota: `react-hooks/set-state-in-effect` (regra nova no react-hooks 7; `useMobile`/`useTablet` sincronizam com o tamanho da janela de propósito) e `react-refresh/only-export-components` em `src/components/ui/**` (padrão shadcn de exportar variants)
- [x] 5.5 Gates: `npm run lint` com código 0. Commit da fase
  - Screenshots da F4 idênticos aos da F3 (0% com limiar exato)

## 6. Deploy e verificação final

- [x] 6.1 Remover o `--legacy-peer-deps` do `Dockerfile` e passar a usar `npm ci`
- [x] 6.2 `docker build` e `docker run -p 4173:4173`, com um pedido HTTP a `/` que devolva 200
  - HTTP 200 no HTML e no CSS. Os logs mostravam um aviso do Vite 8.3 sobre `__dirname` no `vite.config.ts`, que passou a `import.meta.dirname` (compatível com `configLoader: 'native'`)
- [x] 6.3 Verificação funcional manual: alternar o tema (e persistir após recarregar), trocar o idioma PT/EN, abrir o popup do Calendly, marquee em movimento com pausa no hover, BlurFade nas secções
  - Automatizada com Playwright (16 verificações, todas a passar). Encontrou uma regressão: as `--animate-*` em `@theme` resolviam `var(--speed)` no `:root` e o shimmer ficava sem animação. Corrigido, movendo-as para `@theme inline`
  - O Marquee não é renderizado (só existe na `TechStack`, comentada no `App`). A animação e a pausa no hover foram verificadas no CSS gerado (`animate-marquee`, `group-hover:paused`, `direction-reverse`)
- [x] 6.4 Confirmar que cada dependência do `package.json` tem uso, e correr `npm outdated` para registar o que ficar intencionalmente atrás (o TypeScript 7, por exemplo)
  - O Vite foi atualizado de 8.0.3 para 8.3.5. Ficam intencionalmente atrás o `typescript` 7 (D2; o typescript-eslint suporta até <6.1) e o `@types/node` 26 (fica no 24, para alinhar com o runtime `node:24`)
- [x] 6.5 Registar os bugs fora de âmbito para uma mudança separada (`dark:bg-[#18181D/25]` na Navbar, `onClick={() => handleScroll}`, variáveis `.dark` duplicadas)
  - Registados aqui e no resumo final, para uma mudança separada
