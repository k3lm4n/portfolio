## Context

O portfolio é uma SPA Vite + React + TypeScript (cerca de 1.700 linhas TSX), com componentes shadcn/ui e magicui, i18n (en/pt), dark mode por classe e deploy via Docker (`node:24-alpine`, `vite preview` na porta 4173) e Firebase Hosting (`dist`).

Estado atual relevante:
- O Vite já está no 8, mas o `@vitejs/plugin-react` 4 não declara o Vite 8 nos peers. É isso que obriga o Dockerfile a usar `--legacy-peer-deps`.
- O Tailwind 3.4 corre via PostCSS e usa um `tailwind.config.js` com `module.exports` num pacote `"type": "module"`. Esse config tem tokens shadcn em `hsl(var(--x))`, cores próprias (`onyx`, `primary-color`, `dark-gray`, …), um `container` personalizado, keyframes e animações magicui, e o plugin `tailwindcss-animate`.
- O ESLint 8 usa `.eslintrc.cjs`. O ESLint 10 já não suporta esse formato.
- Não há testes automáticos. A verificação de "funciona bem" tem de ser feita com gates de build e uma comparação visual.
- Existem dois lockfiles (`package-lock.json` e `yarn.lock`), e o Dockerfile usa npm.

Superfície do Tailwind afetada (medida no código): `rounded` ×3, `outline-none` ×3, `bg-gradient-to-*` ×2, classes com `!` no início ×3 (Experience), `container`/`md:container` ×2, e `animate-in/out`, `zoom-*` e `fade-*` no `navigation-menu.tsx`.

## Goals / Non-Goals

**Goals:**
- Instalação limpa com `npm ci`, sem flags de compatibilidade.
- Todas as dependências na última major estável, com a exceção do TypeScript (ver decisões).
- O Tailwind v4 com configuração CSS-first e sem PostCSS.
- ESLint 10 com flat config.
- Paridade visual com o site atual em light/dark × en/pt × mobile/desktop.
- Remoção de dependências mortas e do lockfile duplicado.

**Non-Goals:**
- Corrigir os bugs que já existem (`dark:bg-[#18181D/25]`, `onClick={() => handleScroll}`, variáveis `.dark` duplicadas). Ficam para outra mudança, para não contaminar a comparação visual.
- Converter os tokens shadcn de `hsl` para `oklch`, ou regenerar os componentes shadcn com a versão v4 do CLI.
- Redesign, novas funcionalidades ou introdução de testes automáticos.
- Remover os `forwardRef` (funcionam no React 19; a mudança seria apenas cosmética).

## Decisions

### D1. Execução em fases, com gates entre cada uma
Ordem: **F0 baseline → F1 limpeza e toolchain → F2 React 19 e libs de runtime → F3 Tailwind v4 → F4 ESLint 10**. No fim de cada fase correm `npm ci`, `tsc -b` e `npm run build`, e é feito um commit.
- *Porquê*: sem testes, isolar as causas é a melhor proteção. Se o visual partir, sabe-se em que fase foi.
- *Alternativa*: atualizar tudo de uma vez. É mais rápido, mas qualquer regressão fica difícil de atribuir.
- O ESLint vai para o fim porque não afeta o runtime e o lint pode falhar temporariamente nas fases intermédias.

### D2. TypeScript 6.x, não o 7
- *Porquê*: o TS 7 é o port nativo (Go), com mudanças de comportamento e de configuração (o `baseUrl` está deprecado). Ainda há incerteza sobre o suporte do typescript-eslint. Para um portfolio, o benefício é marginal e o risco não é.
- *Alternativa*: o TS 7. Fica como seguimento depois de confirmado o suporte do `typescript-eslint`.
- Como o `baseUrl` está deprecado, os `paths` (`@/*`) devem funcionar sem ele (no modo `bundler`, os `paths` resolvem-se relativamente ao tsconfig). Remover o `baseUrl` se o TS 6 o assinalar.

### D3. `@tailwindcss/vite` em vez de `@tailwindcss/postcss`
- *Porquê*: é a integração recomendada para Vite. Remove o `postcss.config.js`, o `postcss` e o `autoprefixer` (o v4 trata dos prefixos via Lightning CSS).
- *Alternativa*: `@tailwindcss/postcss`, que só faria sentido com outras plugins PostCSS, e o projeto não tem nenhuma.

### D4. Configuração CSS-first e remoção do `tailwind.config.js`
Mapeamento:

| v3 (`tailwind.config.js`) | v4 (`src/index.css`) |
|---|---|
| `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| `darkMode: ["class"]` | `@custom-variant dark (&:is(.dark *));` (o seletor exato do v3.4, para manter paridade) |
| `colors` shadcn `hsl(var(--x))` | `@theme inline { --color-background: hsl(var(--background)); … }` |
| cores fixas (`onyx`, `black`, `white`, …) | `@theme { --color-onyx: #181818; … }` |
| `borderRadius` | `--radius-lg/md/sm` em `@theme inline` |
| `keyframes` + `animation` | `--animate-*` + `@keyframes` dentro de `@theme` |
| `container` (center, padding 2rem, 2xl 1400px) | `@utility container { margin-inline: auto; padding-inline: 2rem; … }` com `max-width: 1400px` no `2xl` |
| `tailwindcss-animate` | `@import "tw-animate-css";` |
| `content: [...]` | deteção automática (o `.gitignore` já exclui `dist` e `node_modules`) |

- O `@theme inline` é necessário para os tokens que referenciam `var(--x)`, para que a variável seja resolvida no uso e responda à classe `.dark`. O mesmo vale para as `--animate-*` que usam `var(--speed)`/`var(--duration)`, definidas no próprio elemento: num `@theme` normal ficam inválidas no `:root` e a animação passa a `none` (encontrado na verificação funcional do shimmer button).
- Mantém-se `hsl(var(--x))` com os valores HSL "nus" que já existem no `:root`/`.dark`. Converter para oklch é um non-goal.
- O `black` e o `white` são redefinidos no projeto, e esses overrides MUST ser mantidos (`--color-black: #0D0D0D`), porque no v4 a paleta default continua a existir ao lado.
- *Alternativa*: manter o JS config via `@config "../tailwind.config.js"`. Funciona como ponte, mas mantém a dependência do formato legacy e não resolve o `container`. Rejeitada. Só serve como plano B temporário se a F3 bloquear.

### D5. Usar o `@tailwindcss/upgrade` como ponto de partida, com revisão manual
- *Porquê*: renomeia classes (`rounded`→`rounded-sm`, `outline-none`→`outline-hidden`, `bg-gradient-to-*`→`bg-linear-to-*`, `!x`→`x!`) e converte grande parte do config.
- O resultado MUST ser revisto: o `container` personalizado, a ordem do `@theme inline`, o `tailwindcss-animate`, e a remoção de ficheiros que a ferramenta não apague.
- Os nomes de classes de terceiros (`vertical-timeline-element-*`) não são do Tailwind e não podem ser alterados.

### D6. `framer-motion` → `motion`
- *Porquê*: é o nome atual do pacote. A API é a mesma, com import de `motion/react`. Só o `blur-fade.tsx` muda.
- *Alternativa*: manter `framer-motion` na última versão. É igualmente válido, mas mantém um nome legado.

### D7. React 19 com o mínimo de alterações
- `JSX.Element` passa a `React.JSX.Element` (o namespace global foi removido no `@types/react` 19).
- Os `forwardRef` ficam como estão.
- O `react-helmet-async` 3 mantém o `HelmetProvider`. Migrar para o `<title>` nativo do React 19 fica como seguimento opcional.

### D8. ESLint 10 em flat config
O `eslint.config.js` usa `@eslint/js` recommended, `typescript-eslint` (pacote unificado, que substitui `@typescript-eslint/parser` e `@typescript-eslint/eslint-plugin`), `eslint-plugin-react-hooks` (preset flat `recommended`) e `eslint-plugin-react-refresh`, com `globals.browser` e ignore de `dist`. O script passa a `eslint . --report-unused-disable-directives --max-warnings 0`.
- O `react-hooks` 7 inclui regras novas (do React Compiler) que podem gerar avisos novos, como as dependências em falta no `useEffect` do `useDarkMode`. Avisos novos que obriguem a alterar comportamento são desativados explicitamente e anotados, em vez de se mudar o código nesta mudança.

### D9. Verificação visual por baseline
Na F0, antes de qualquer alteração, faz-se o build do estado atual e capturam-se 8 screenshots de página inteira (light/dark × en/pt × 390px/1440px), guardados fora do repositório (scratchpad). Depois da F2 e da F3, a captura repete-se e compara-se.
- Diferenças esperadas e aceites: o tom de `bg-gray-200`/`dark:bg-gray-700` nas tags de techs (a paleta default passou para oklch). Se o desvio for notório, fixa-se a cor com valores hex do v3.
- A captura não usa o `fullPage` do Playwright, porque dispara um resize transitório com 1px de largura e, com o React 19, os hooks `useTablet`/`useMobile` chegam a renderizar esse estado na imagem. Em vez disso, o viewport é aumentado para a altura da página, mantendo a largura. Como a captura desativa as animações, ela é complementada por uma verificação funcional (tema, idioma, container, timeline, animação do shimmer, BlurFade, Calendly).

## Risks / Trade-offs

- **[`react-vertical-timeline-component` 4 é uma major sem changelog conhecido]** → verificar a API (`contentStyle`, `contentArrowStyle`, `iconStyle`, `date`) e o caminho do CSS (`style.min.css`) logo na F2. Se partir, fixar em `^3.6`, que não declara peerDependencies e por isso instala sem conflitos com o React 19, e documentar o motivo.
- **[O `container` muda de comportamento no v4]** → recriar com `@utility` e validar o About e o `Container.tsx` em 1440px contra a baseline.
- **[A ordem de camadas muda no v4 (cascade layers nativas)]** → o CSS sem layer (`.bg-footer`, `.bg-header`, `.dark-mode-transition`) passa a ter prioridade sobre as utilities. Mover para `@utility` ou `@layer components` se houver conflito.
- **[O `hover:` só se aplica em dispositivos com hover]** → é aceite (é uma melhoria no mobile). Validar que nada depende de hover em toque.
- **[Regras novas do react-hooks 7 / ESLint 10 bloqueiam o lint]** → estratégia descrita em D8.
- **[Peers ainda incompatíveis em alguma lib]** → identificar com `npm ci` sem flags. Preferir uma versão compatível ou um `overrides` pontual e documentado, nunca voltar ao `--legacy-peer-deps` global.
- **[Lucide 1.x muda nomes de ícones]** → os 4 ícones usados (Briefcase, GraduationCap, SendHorizontal, ChevronDown) são confirmados pelo `tsc`.

## Migration Plan

1. Trabalhar no branch `develop` (ou num branch de feature a partir dele), com um commit por fase.
2. Cada fase só avança depois de `npm ci && npx tsc -b && npm run build` passarem (e `npm run lint` a partir da F4).
3. Validação final: os gates completos, a comparação visual das 8 combinações, `docker build` e `docker run` com um pedido HTTP a `:4173/`.
4. **Rollback**: cada fase é um commit isolado e pode ser revertida com `git revert`. Como o deploy é de uma imagem/estático, basta reconstruir a partir do commit anterior.

## Open Questions

- O TS 7 pode ser adotado numa mudança futura, quando o `typescript-eslint` o suportar oficialmente?
- Vale a pena, numa mudança seguinte, regenerar os componentes shadcn para o v4 (tokens oklch, `data-slot`, sem `forwardRef`)?
- Substituir o `react-helmet-async` pelos metadados nativos do React 19?
