## Why

O `index.html` que os motores de busca e os crawlers sociais leem antes de correr JS só tem `<title>K3lm4n - Portfolio</title>` e o favicon do Vite (`/vite.svg`). Faltam a description, o canonical, as tags Open Graph e Twitter e os dados estruturados. Por isso um link do portfolio partilhado no LinkedIn, no WhatsApp ou no Discord aparece sem imagem nem descrição, e uma pesquisa por "Kelman Santos" não tem nada que a associe ao site. Além disso, o `<Helmet>` em `main.tsx` define um segundo título ("Portfolio - Kelman Santos") que contradiz o do HTML e só existe depois de o JS correr.

## What Changes

- O `<head>` estático de `index.html` passa a ser a única fonte de metadados, em inglês (`lang="en"`), com a marca "Kelman Santos":
  - `<title>` e `<meta name="description">` com o nome, a função (Full-stack Developer) e a localização (Lisboa).
  - `<link rel="canonical" href="https://k3lm4n.paradis.host/">`.
  - Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` 1200×630, `og:locale` `en_US` com `og:locale:alternate` `pt_PT`) e Twitter card `summary_large_image`.
  - `<meta name="theme-color">` para os modos claro e escuro (`#f2f4fa` e `#0b1020`).
  - JSON-LD `Person` com `name` "Kelman Santos", `alternateName` "k3lm4n", `jobTitle`, `url`, localização e `sameAs` (GitHub, LinkedIn).
- Novo favicon com o monograma "KS" em Inter 800 sobre `#0f172a`: `favicon.svg`, `favicon.ico` (32px), `apple-touch-icon.png` (180px), ícones 192px e 512px e um `site.webmanifest`. O `public/vite.svg` sai.
- Nova imagem `og-image.png` (1200×630) com o mesmo monograma, o nome e a função, desenhada no canvas "Portfólio Kelman Santos" do Claude Design.
- `public/robots.txt`, que permite tudo e aponta para o sitemap, e `public/sitemap.xml` com a URL canónica.
- Quando o utilizador muda de idioma, `document.title` e a meta description passam a acompanhar o idioma, tal como o `lang` já acompanha.
- **BREAKING (interno)**: sai o `react-helmet-async` e o `<Helmet>` de `main.tsx`. Os metadados estáticos ficam no HTML e a troca por idioma fica no i18n.

Fica de fora: pré-renderização ou SSR, rotas `/pt` e `/en` com `hreflang`, e mudanças ao Google Analytics ou ao Vercel Analytics.

## Capabilities

### New Capabilities
- `seo-metadata`: os metadados do `<head>` (título, description, canonical, Open Graph, Twitter, JSON-LD, theme-color), o `robots.txt`, o `sitemap.xml` e a troca de título e description por idioma.
- `site-icons`: o favicon, os ícones de app, o manifest e a imagem de partilha social, com o monograma "KS".

### Modified Capabilities
<!-- Nenhuma. A remoção do react-helmet-async cumpre o requisito "Sem dependências mortas" de build-toolchain sem o alterar. -->

## Impact

- **Código**: `index.html`, `src/main.tsx` (sai o `HelmetProvider`), `src/i18n/index.ts`, `src/i18n/locales/{en,pt}.json` (novas chaves `meta.title` e `meta.description`).
- **Assets**: `public/` ganha `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`, `og-image.png`, `robots.txt` e `sitemap.xml`. Sai `public/vite.svg`.
- **Dependências**: sai `react-helmet-async`.
- **Design**: o canvas "Portfólio Kelman Santos" (https://claude.ai/artifact/C1hfMzYTg9KbdKMosRgrbt) ganha o favicon e a imagem OG.
- **Deploy**: o domínio canónico é `k3lm4n.paradis.host`. Os URLs absolutos (canonical, `og:url`, `og:image`, sitemap) dependem dele.
