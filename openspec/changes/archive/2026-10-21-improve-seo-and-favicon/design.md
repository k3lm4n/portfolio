## Context

O portfolio é uma SPA em Vite e React 19. O build vai para `dist/` e é servido em `k3lm4n.paradis.host` com `vite preview` (Dockerfile). Também existe um `firebase.json` com um rewrite `** → /index.html`. Hoje:

```
index.html ─► <title>K3lm4n - Portfolio</title>, icon /vite.svg, lang="en"
main.tsx   ─► <HelmetProvider><Helmet> title "Portfolio - Kelman Santos" + description
              (como irmão do <App/>, só aplicado depois do JS)
i18n       ─► languageChanged → document.documentElement.lang
```

Os crawlers do LinkedIn, do WhatsApp, do Discord e do X não correm JS e só leem o `index.html`. O Google corre JS, mas indexa melhor e mais depressa o que está no HTML estático.

## Goals / Non-Goals

**Goals:**
- Um único `<head>` estático e completo: título, description, canonical, OG, Twitter, JSON-LD, theme-color e ícones.
- Pré-visualização correta quando o link é partilhado.
- Favicon e ícones de app com o monograma KS, coerentes com o canvas de design.
- O título da tab acompanha o idioma escolhido.

**Non-Goals:**
- Pré-renderização ou SSR (`vite-ssg`, `vite-plugin-prerender`).
- Rotas `/pt` e `/en`, `hreflang`, indexação separada do conteúdo em português.
- Alterar o Google Analytics ou o Vercel Analytics.

## Decisions

### 1. Metadados estáticos no `index.html`, sem Helmet
O `<head>` completo vai escrito à mão no `index.html`. O `react-helmet-async` sai.
- *Porquê*: só há uma página. O Helmet só escreve depois do JS, e por isso não ajuda os crawlers sociais. Mantê-lo para trocar dois campos acrescenta um provider e uma dependência que o requisito "Sem dependências mortas" desaconselha.
- *Alternativa*: manter o Helmet com `<Helmet>` dentro do `<App/>` e textos traduzidos. Foi rejeitada porque duplicava o HTML estático e criava duas fontes de verdade.

### 2. Troca de idioma no listener do i18n
O `i18n.on("languageChanged")` em `src/i18n/index.ts`, que já sincroniza o `lang`, passa também a definir `document.title` e a meta description a partir de `meta.title` e `meta.description`. As chaves novas ficam em `en.json` e `pt.json`, e os textos EN são iguais aos do `index.html`.
- *Porquê*: aproveita um sítio que já existe e não precisa de componente React.
- *Textos propostos*:
  - EN title: `Kelman Santos · Full-stack Developer in Lisbon`
  - EN description: `Kelman Santos is a Full-stack Developer at TeamIt in Lisbon, building elegant, functional web products with React, Next.js and GraphQL.` (o stack vem da secção TechStack)
  - PT title: `Kelman Santos · Full-stack Developer em Lisboa`
  - PT description: equivalente em português de Portugal.

### 3. URLs absolutos fixos no HTML
O canonical, o `og:url`, o `og:image`, o `twitter:image`, o `url` do JSON-LD e o sitemap usam `https://k3lm4n.paradis.host` escrito diretamente.
- *Alternativa*: uma variável `VITE_SITE_URL` com `%VITE_SITE_URL%` no `index.html`, que o Vite substitui. Foi rejeitada para já porque só há um domínio. Se surgir um segundo domínio, passa a ser a primeira melhoria.

### 4. Monograma KS desenhado no Claude Design e exportado em SVG com paths
```
canvas "Portfólio Kelman Santos"
  ├─ frame Favicon 512×512 ──► favicon.svg (letras como paths, rx ≈ 22%)
  │                              │
  │                              └─ rasterização ─► favicon.ico 32, apple-touch-icon 180,
  │                                                 icon-192, icon-512
  └─ frame OG 1200×630 ──────► og-image.png
```
- As letras KS em Inter 800 ficam claras (`#f8fafc`) sobre `#0f172a` (`--cta-bg` do tema claro). O tracking é ligeiramente negativo, como nos headings.
- O favicon tem uma só versão, sem variante `prefers-color-scheme`. O quadrado escuro com letras claras lê-se em tabs claras e escuras, e assim fica igual em todos os formatos.
- O `apple-touch-icon` e o `icon-512` são quadrados cheios, sem cantos arredondados, porque o iOS e o Android aplicam a sua própria máscara. As letras ficam dentro de 80% do centro para sobreviverem à máscara *maskable*.
- *Rasterização*: um script descartável, fora do repositório, gera os PNG e o ICO a partir do SVG (por exemplo com `npx sharp-cli` e `npx png-to-ico`). Os ficheiros gerados são commitados em `public/`. O projeto não ganha nenhuma dependência.
- *Alternativa*: `vite-plugin-pwa` ou `favicons` no build. Foi rejeitada porque é uma dependência pesada para gerar seis ficheiros que quase nunca mudam.

### 5. `robots.txt` e `sitemap.xml` estáticos em `public/`
O Vite copia `public/` para `dist/`. O `vite preview` e o Firebase servem ficheiros reais antes de aplicar o rewrite da SPA, por isso `/robots.txt` não cai no `index.html`.

## Risks / Trade-offs

- **O conteúdo em português não é indexado como tal** → Aceite. O HTML estático está em inglês, e o português só existe depois do JS. Fica registado como non-goal e é a próxima change se o tráfego em português importar.
- **Cache agressiva de favicons e de previews** → Depois do deploy, forçar a atualização no LinkedIn Post Inspector e no Facebook Debugger. Os browsers podem mostrar o ícone antigo até limpar a cache.
- **O domínio está escrito diretamente em vários sítios** → Os URLs absolutos ficam todos no `index.html`, no `sitemap.xml` e no `robots.txt`. Um `grep k3lm4n.paradis.host` encontra-os.
- **O monograma a 16px** → Validar o `favicon.ico` a 16 e 32 px antes de fechar o design. Se o S empastar, aumentar o peso ou reduzir o tracking só no tamanho de 32.

## Migration Plan

Basta fazer deploy normal. Para reverter, faz-se revert do commit, e o `react-helmet-async` volta com o `package-lock.json`. Depois do deploy, validar com o Rich Results Test, o LinkedIn Post Inspector e um `curl` a `/robots.txt`, `/sitemap.xml` e `/og-image.png`.

## Open Questions

- Registar o site na Google Search Console para submeter o sitemap? Fica fora do código, mas é recomendado.
