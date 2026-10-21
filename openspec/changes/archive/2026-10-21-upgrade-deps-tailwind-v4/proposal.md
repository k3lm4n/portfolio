## Why

As dependências do portfolio estão várias versões major atrás (React 18, Tailwind 3, ESLint 8, plugin-react 4) e o `npm install` só funciona com `--legacy-peer-deps`, porque o `@vitejs/plugin-react` 4 não declara compatibilidade com o Vite 8. Atualizar agora, incluindo a migração para o Tailwind v4, repõe uma instalação limpa, remove dívida acumulada (dependências mortas, dois lockfiles, configuração legacy) e deixa o projeto num estado mantível.

## What Changes

- **Limpeza**: remover dependências sem uso (`vertical-timeline-component-react`, `vite-tsconfig-paths`, `vite-plugin-svgr`, `@radix-ui/react-icons`, `react-ga4`), remover o `yarn.lock` (o projeto usa npm), mover `@types/react-vertical-timeline-component` para `devDependencies`.
- **Toolchain**: `@vitejs/plugin-react` 4 → 6, `typescript` 5 → 6.x (último 6, não o 7), `@types/node` atualizado. O Dockerfile deixa de usar `--legacy-peer-deps`.
- **BREAKING (interno)**: `react`/`react-dom` 18 → 19, com `@types/react` 19. É preciso ajustar `JSX.Element` → `React.JSX.Element`.
- **Bibliotecas de runtime**: `framer-motion` 11 → `motion` (último), `lucide-react` → 1.x, `react-helmet-async` → 3, `react-vertical-timeline-component` → 4, `i18next` → 26, `@vercel/analytics` → 2, mais as atualizações minor/patch das restantes (radix, zustand, react-icons, tailwind-merge, react-i18next, react-calendly).
- **BREAKING (styling)**: `tailwindcss` 3 → 4 com `@tailwindcss/vite`. A configuração passa do `tailwind.config.js` para CSS (`@theme`), e são removidos `postcss.config.js`, `postcss`, `autoprefixer` e `tailwindcss-animate` (substituído por `tw-animate-css`). As classes renomeadas são migradas, e o `container` é recriado com `@utility`.
- **BREAKING (lint)**: `eslint` 8 → 10 com flat config (`eslint.config.js`). O `.eslintrc.cjs` é removido, e o script `lint` deixa de usar `--ext`.
- Atualizar o `components.json` (shadcn) para refletir o Tailwind v4 sem ficheiro de config.

## Capabilities

### New Capabilities
- `build-toolchain`: o projeto instala-se sem flags de compatibilidade de peers, e o type-check, o lint, o build de produção e a imagem Docker completam sem erros.
- `visual-parity`: depois da migração, o site mantém a aparência e o comportamento de antes, em light/dark, en/pt e mobile/desktop.

### Modified Capabilities
<!-- Nenhuma: não existem specs anteriores em openspec/specs/. -->

## Impact

- **Ficheiros de configuração**: `package.json`, `package-lock.json`, `yarn.lock` (removido), `vite.config.ts`, `postcss.config.js` (removido), `tailwind.config.js` (removido), `.eslintrc.cjs` → `eslint.config.js`, `tsconfig.app.json`, `tsconfig.node.json`, `components.json`, `Dockerfile`.
- **CSS**: `src/index.css` (reescrita das diretivas, tema, dark variant, container, animações).
- **Componentes**: `src/sections/Experience/index.tsx` (tipos JSX, timeline v4, classes `!`), `src/components/Navbar/index.tsx` (`rounded`), `src/components/ui/*` (`outline-none`, animações), `src/components/magicui/blur-fade.tsx` (import `motion`), mais as ocorrências de `bg-gradient-to-*`.
- **Deploy**: a imagem Docker (`node:24-alpine`) e o hosting Firebase (`dist`) continuam iguais. Só muda o comando de instalação.
- **Fora de âmbito**: os bugs que já existem (`dark:bg-[#18181D/25]` inválido na Navbar, `onClick={() => handleScroll}` que não chama a função, variáveis `.dark` duplicadas no CSS) ficam registados para uma mudança separada.
