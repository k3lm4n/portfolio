# build-toolchain Specification

## Purpose
Definir como o projeto instala dependências, faz type-check, lint, build de produção e imagem Docker. Criado pela change upgrade-deps-tailwind-v4.

## Requirements

### Requirement: Instalação limpa de dependências
O projeto SHALL instalar todas as dependências com `npm ci`, sem `--legacy-peer-deps` nem `--force`, a partir de um único lockfile (`package-lock.json`).

#### Scenario: Instalação a partir do lockfile
- **WHEN** se executa `npm ci` num clone limpo, sem `node_modules`
- **THEN** a instalação termina com código 0 e sem erros `ERESOLVE` de peer dependencies

#### Scenario: Lockfile único
- **WHEN** se lista a raiz do repositório
- **THEN** existe `package-lock.json` e não existe `yarn.lock`

### Requirement: Sem dependências mortas
O `package.json` MUST declarar apenas pacotes importados pelo código, pela configuração ou pelo CSS, ou exigidos como tipos ou ferramentas de build.

#### Scenario: Cada dependência tem uso
- **WHEN** se procura cada pacote de `dependencies` e `devDependencies` em `src/`, nos ficheiros de configuração e em `index.css`
- **THEN** cada pacote tem pelo menos uma referência, ou é um pacote de tipos ou de ferramenta usado por um script npm

### Requirement: Type-check sem erros
O comando `tsc -b` SHALL completar sem erros com TypeScript 6.x e `@types/react` 19.

#### Scenario: Type-check do projeto
- **WHEN** se executa `npx tsc -b`
- **THEN** o comando termina com código 0

### Requirement: Lint com flat config
O lint SHALL usar o ESLint 10 com `eslint.config.js` (flat config). Os mesmos conjuntos de regras de antes (recommended, typescript-eslint recommended, react-hooks, react-refresh) MUST continuar ativos.

#### Scenario: Lint do projeto
- **WHEN** se executa `npm run lint`
- **THEN** o comando termina com código 0, e não existe `.eslintrc.cjs` no repositório

### Requirement: Build de produção
O comando `npm run build` SHALL gerar `dist/` com o Vite 8, o `@vitejs/plugin-react` 6 e o `@tailwindcss/vite`, sem PostCSS.

#### Scenario: Build gera artefactos
- **WHEN** se executa `npm run build`
- **THEN** o comando termina com código 0, e `dist/index.html` e o CSS gerado existem

#### Scenario: CSS contém utilities do tema
- **WHEN** se inspeciona o CSS gerado em `dist/assets`
- **THEN** existem regras para classes do tema personalizado (por exemplo `bg-onyx`, `bg-primary-color`, `bg-background`) e para a variante `dark`

### Requirement: Imagem Docker
O `Dockerfile` SHALL construir a imagem sem `--legacy-peer-deps`, e a imagem MUST servir o site com `vite preview` na porta 4173.

#### Scenario: Build e arranque da imagem
- **WHEN** se executa `docker build` e depois se arranca o container publicando a porta 4173
- **THEN** o build termina com sucesso, e um pedido HTTP a `/` devolve 200 com o HTML da aplicação
