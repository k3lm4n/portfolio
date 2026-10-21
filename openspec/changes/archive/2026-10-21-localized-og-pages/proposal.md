## Why

A imagem OG foi redesenhada no canvas "Portfólio Kelman Santos" com versões em PT e EN (Tweak `lang`), mas o site só tem uma URL e um `index.html` em inglês. Os crawlers do LinkedIn, do WhatsApp e do X não correm JS, por isso um link partilhado mostra sempre a imagem e o texto em inglês, e o conteúdo em português nunca é indexado como tal. A `improve-seo-and-favicon` deixou isto de fora de propósito. Esta change trata disso, sem SSR.

## What Changes

- Nova URL `/pt/` para a versão portuguesa. A `/` continua a ser a versão inglesa e o `x-default`.
- No build, um plugin Vite local (em `vite.config.ts`, sem dependências novas) gera `dist/pt/index.html` a partir do `index.html` final. Esse ficheiro troca `lang`, título, description, canonical, `og:url`, `og:image`, `og:locale` e Twitter pelos valores PT. Os textos vêm de `meta.*` em `src/i18n/locales/pt.json`, e não são duplicados.
- As duas páginas ganham `<link rel="alternate" hreflang>` para `en`, `pt-PT` e `x-default`.
- **BREAKING (assets)**: `og-image.png` passa a `og-en.png` e `og-pt.png`, exportadas do novo artboard "Imagem OG" do canvas (Tweak `lang` en e pt).
- O idioma passa a seguir a URL. O detetor do i18n lê primeiro o path (`/pt/` → pt). Ao trocar o idioma no header, a URL muda entre `/` e `/pt/` com `history.replaceState`, mantém o `#hash` e não recarrega a página.
- O `sitemap.xml` passa a listar as duas URLs com alternates `xhtml:link`.
- O Firebase Hosting ganha um rewrite `/pt/**` → `/pt/index.html` antes do `**`.

Fica de fora: SSR, pré-renderização do conteúdo das secções (o corpo continua a ser renderizado no cliente) e mais idiomas.

## Capabilities

### New Capabilities
<!-- Nenhuma: tudo cabe nas capabilities de SEO e ícones existentes. -->

### Modified Capabilities
- `seo-metadata`: o HTML estático passa a existir por idioma (`/` EN e `/pt/` PT), cada um com o seu canonical, Open Graph e hreflang. O sitemap lista as duas URLs, e a troca de idioma atualiza também a URL.
- `site-icons`: a imagem de partilha social passa a ter uma versão por idioma (`og-en.png` e `og-pt.png`), com o novo layout do canvas.

## Impact

- **Código**: `vite.config.ts` (plugin de build), `index.html` (hreflang e `og-en.png`), `src/i18n/index.ts` (deteção pelo path e sincronização da URL), `src/components/Header/index.tsx` (só se a troca de idioma precisar de chamar a sincronização da URL).
- **Assets**: entram `public/og-en.png` e `public/og-pt.png`, sai `public/og-image.png`, e o `public/sitemap.xml` é atualizado.
- **Hosting**: `firebase.json`. Com o `vite preview` (Dockerfile), `/pt/` tem de servir `dist/pt/index.html`, o que fica por verificar.
- **Design**: o artboard `OgImage.dc.html` do canvas é a fonte das duas imagens.
- **Specs**: altera requisitos de `seo-metadata` e `site-icons` arquivados pela `improve-seo-and-favicon`.
