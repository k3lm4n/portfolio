## Context

Depois da `improve-seo-and-favicon`, o `index.html` tem o `<head>` completo em inglês, e o idioma troca só no cliente (`i18n.on("languageChanged")` atualiza o `lang`, o título e a description). O idioma é detetado por `localStorage` → `navigator` → `htmlTag`. A URL nunca muda, por isso os crawlers sociais e o Google só conhecem a versão inglesa.

No canvas, o artboard `OgImage.dc.html` foi redesenhado com os Tweaks `lang` (pt/en) e `theme`. Há uma thread aberta no canvas a pedir as duas imagens OG no código.

O deploy em produção usa `vite preview` (Dockerfile, `k3lm4n.paradis.host`). O `firebase.json` existe com o rewrite `** → /index.html`.

## Goals / Non-Goals

**Goals:**
- `/` (EN) e `/pt/` (PT) servem HTML estático com os metadados e a imagem OG do seu idioma.
- hreflang recíproco e sitemap com as duas URLs.
- A URL e o idioma da UI ficam sempre em sintonia.
- Os textos de metadados têm uma só fonte por idioma: `meta.*` nos JSON de locale.

**Non-Goals:**
- SSR ou pré-renderização do corpo das secções.
- Router (React Router ou TanStack). Há uma só página, e o path só codifica o idioma.
- Mais idiomas além de EN e PT.

## Decisions

### 1. `/` = EN e `/pt/` = PT
O EN mantém-se na raiz, como foi decidido na `improve-seo-and-favicon`. Assim o canonical, o sitemap e os links já partilhados não mudam, e o EN é o `x-default`.
- *Alternativa*: PT na raiz e `/en/`. Foi rejeitada porque mudava o canonical já publicado e contrariava a decisão anterior.

### 2. Plugin Vite local que gera `dist/pt/index.html`
```
vite build
  └─ index.html (EN, já com assets com hash)
       │  plugin "localized-html" (hook generateBundle, apply: 'build')
       ├─► dist/index.html      (sem alterações, só se acrescentam os hreflang)
       └─► dist/pt/index.html   (substituições:)
             lang="en"                  → lang="pt-PT"
             <title>, description,
             og:title/description,
             twitter:title/description  → meta.* de pt.json
             canonical, og:url          → https://k3lm4n.paradis.host/pt/
             og:image, twitter:image    → /og-pt.png
             og:locale ⇄ og:locale:alternate
             og:image:alt               → texto PT
```
- O plugin vive em `vite.config.ts`, importa `src/i18n/locales/pt.json` e trabalha sobre o HTML final emitido (`bundle["index.html"].source`). Assim os `<script>` e `<link>` com hash ficam iguais nas duas páginas. Os paths dos assets são absolutos (`/assets/...`), por isso funcionam em `/pt/`.
- As substituições são feitas por atributo (`property="og:image" content="…"`), e o build falha se algum alvo não for encontrado, para não publicar uma página PT meio inglesa.
- Os hreflang ficam escritos à mão no `index.html`, que é a fonte, e por isso aparecem iguais nas duas páginas.
- *Alternativa*: `vite-plugin-html` ou um segundo entry `pt/index.html` no Rollup. Foram rejeitadas: o primeiro é uma dependência para uma substituição simples, e o segundo duplica o HTML fonte.

### 3. Idioma pela URL no i18n
- `detection.order` passa a `["path", "localStorage", "navigator", "htmlTag"]` com `lookupFromPathIndex: 0`. Em `/pt/` o segmento é `pt`. Em `/` não há segmento e a deteção continua como hoje.
- No `syncDocument`, que já corre em `languageChanged`, calcula-se o path pretendido (`pt` → `/pt/`, os restantes → `/`). Se for diferente de `location.pathname`, faz-se `history.replaceState(null, "", path + location.search + location.hash)`.
- O header não muda, porque continua a chamar `i18n.changeLanguage`.
- *Porquê replaceState e não pushState*: a troca de idioma é uma preferência e não navegação. O "voltar" não deve alternar idiomas.

### 4. Imagens OG exportadas do canvas
O artboard `OgImage.dc.html` usa HTML com a Inter e efeitos CSS (glow, grelha de pontos), que o `resvg` do script anterior não reproduz. As duas PNG são exportadas do próprio canvas, nos menus Share › Export (PNG 1200×630), com o Tweak `lang` em `en` e em `pt`. Ficam em `public/og-en.png` e `public/og-pt.png`, depois de recomprimidas sem perdas com `sharp`, por um script na scratchpad. O export do canvas pesava cerca de 300 KB e as imagens comprimidas pesam cerca de 75 KB.
- *Tema*: escuro. Não é possível ter um OG por tema, porque o crawler busca uma única imagem e a plataforma mostra-a a toda a gente. A escura destaca-se nos feeds claros do LinkedIn e do X. As versões claras ficam no canvas (Tweak `theme`).
- *Corte quadrado*: o layout está alinhado à esquerda, por isso a miniatura quadrada do WhatsApp corta o início do nome. Isto foi aceite porque as pré-visualizações 1.91:1 mostram a imagem inteira.
- *Alternativa*: renderizar com Playwright headless. Foi rejeitada porque obriga a descarregar um Chromium para dois ficheiros que quase nunca mudam.

### 5. Hosting
- `vite preview` (sirv): `/pt/` resolve para `dist/pt/index.html`, mas verificou-se que `/pt` sem barra cai no fallback da SPA e serve o HTML em inglês. Um segundo plugin local, `pt-trailing-slash` (`configurePreviewServer`), redireciona `/pt` → `/pt/` com 301 e mantém a query.
- Firebase: acrescentar `{ "source": "/pt/**", "destination": "/pt/index.html" }` antes de `**`, e `"trailingSlash": true`.

## Risks / Trade-offs

- **O corpo da página PT continua renderizado no cliente** → O Google executa JS e vai ver PT em `/pt/`. As redes sociais só precisam do `<head>`. Pré-renderizar fica para uma change futura, se houver necessidade.
- **As substituições por regex no HTML são frágeis** → O plugin falha o build se faltar algum alvo, e os seletores são por atributo, não por posição.
- **O export manual do canvas pode ficar desatualizado** → `site-icons` define a fonte. Ao mudar o design, exportam-se as duas versões de novo. Fica registado nas tarefas.
- **Utilizadores com PT no `localStorage` que abrem `/`** → Vêem PT, e a URL passa para `/pt/`. Isto é intencional.

## Migration Plan

O deploy é normal. O `og-image.png` sai, e os previews já guardados em cache pelo LinkedIn continuam a apontar para ele até à reindexação. Por isso, depois do deploy, força-se a atualização no Post Inspector para `/` e `/pt/`. Para reverter, faz-se revert do commit.

## Open Questions

- Manter `og-image.png` durante uma transição, como cópia de `og-en.png`, para não partir previews já em cache? Proposta: não, porque o Post Inspector atualiza a cache.
