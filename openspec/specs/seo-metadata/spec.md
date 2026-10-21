# seo-metadata Specification

## Purpose
Definir os metadados que motores de busca e crawlers sociais leem no HTML estático (título, description, canonical, Open Graph, Twitter, JSON-LD, theme-color), o robots.txt, o sitemap.xml e a troca de título e description por idioma. Criado pela change improve-seo-and-favicon e alterado pela localized-og-pages.

## Requirements

### Requirement: Metadados no HTML estático
Cada página de idioma servida SHALL conter no `<head>`, sem depender de JavaScript, um único `<title>`, uma `<meta name="description">` e um `<link rel="canonical">`, com a marca "Kelman Santos". A página `/` SHALL estar em inglês (`<html lang="en">`), com o canonical `https://k3lm4n.paradis.host/`. A página `/pt/` SHALL estar em português (`<html lang="pt-PT">`), com o canonical `https://k3lm4n.paradis.host/pt/`. O título e a description de cada página MUST ser iguais a `meta.title` e `meta.description` do locale correspondente.

#### Scenario: HTML lido sem JS
- **WHEN** se faz `curl https://k3lm4n.paradis.host/` (ou se lê `dist/index.html` depois de `npm run build`)
- **THEN** a resposta tem exatamente um `<title>` que contém "Kelman Santos", uma `<meta name="description">` com 70 a 160 caracteres e `<link rel="canonical" href="https://k3lm4n.paradis.host/">`

#### Scenario: Página PT lida sem JS
- **WHEN** se faz `curl https://k3lm4n.paradis.host/pt/` (ou se lê `dist/pt/index.html`)
- **THEN** a resposta tem `<html lang="pt-PT">`, o `<title>` e a description de `pt.json` e `<link rel="canonical" href="https://k3lm4n.paradis.host/pt/">`

#### Scenario: Uma só fonte de título
- **WHEN** se procura em `src/` por `<title>`, `Helmet` ou `react-helmet-async`
- **THEN** não há resultados, e o `package.json` não declara `react-helmet-async`

### Requirement: Pré-visualização em redes sociais
O `<head>` de cada página de idioma SHALL declarar Open Graph (`og:type` `website`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width` 1200, `og:image:height` 630, `og:image:alt`, `og:locale`, `og:locale:alternate`) e Twitter card (`twitter:card` `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`). Em `/`, `og:image` é `og-en.png`, `og:locale` é `en_US` e o alternate é `pt_PT`. Em `/pt/`, `og:image` é `og-pt.png`, `og:locale` é `pt_PT` e o alternate é `en_US`. `og:url` é o canonical da página. Os URLs de `og:url`, `og:image` e `twitter:image` MUST ser absolutos, em `https://k3lm4n.paradis.host`.

#### Scenario: Link partilhado
- **WHEN** se passa `https://k3lm4n.paradis.host/` pelo LinkedIn Post Inspector ou pelo Facebook Sharing Debugger
- **THEN** a pré-visualização mostra o título, a description e a imagem `og-en.png` sem avisos de tags em falta

#### Scenario: Link PT partilhado
- **WHEN** se passa `https://k3lm4n.paradis.host/pt/` pelo LinkedIn Post Inspector
- **THEN** a pré-visualização mostra o título e a description em português e a imagem `og-pt.png`

#### Scenario: Imagem OG acessível
- **WHEN** se faz `GET https://k3lm4n.paradis.host/og-en.png` e `GET https://k3lm4n.paradis.host/og-pt.png`
- **THEN** cada resposta é `200` com `Content-Type: image/png`, e cada imagem tem 1200×630 px e menos de 300 KB

### Requirement: Dados estruturados Person
O `<head>` SHALL incluir um `<script type="application/ld+json">` com um objeto schema.org `Person` que tenha `name` "Kelman Santos", `alternateName` "k3lm4n", `jobTitle` "Full-stack Developer", `url` `https://k3lm4n.paradis.host/`, `address` com `addressLocality` "Lisbon" e `addressCountry` "PT", e `sameAs` com os URLs de GitHub e LinkedIn de `src/contants/links.ts`.

#### Scenario: Validação de dados estruturados
- **WHEN** se passa o HTML pelo Schema Markup Validator (validator.schema.org)
- **THEN** é detetada uma entidade `Person` sem erros e com os campos acima

### Requirement: Cor do tema do browser
O `<head>` SHALL declarar `<meta name="theme-color">` com `#f2f4fa` para `(prefers-color-scheme: light)` e `#0b1020` para `(prefers-color-scheme: dark)`, os valores de `--bg` de cada tema.

#### Scenario: Barra do browser móvel
- **WHEN** se abre o site num browser móvel com o sistema em modo escuro
- **THEN** a barra do browser usa `#0b1020`

### Requirement: Indexação permitida
O site SHALL servir `/robots.txt`, que permite todos os crawlers e declara `Sitemap: https://k3lm4n.paradis.host/sitemap.xml`, e `/sitemap.xml` com as duas URLs de idioma. Cada `<url>` SHALL declarar alternates `xhtml:link` para `en`, `pt-PT` e `x-default`.

#### Scenario: robots e sitemap
- **WHEN** se faz `GET /robots.txt` e `GET /sitemap.xml` no build de produção
- **THEN** ambos respondem `200` com o ficheiro real, e não com o `index.html` do rewrite da SPA, e o sitemap é XML válido com as `<loc>` `https://k3lm4n.paradis.host/` e `https://k3lm4n.paradis.host/pt/`

### Requirement: Título e description acompanham o idioma
Quando o idioma ativo do i18n muda, a aplicação SHALL atualizar `document.title` e o `content` da `<meta name="description">` com as traduções `meta.title` e `meta.description` desse idioma, tal como já faz com `document.documentElement.lang`. Os valores MUST ser iguais aos da página estática desse idioma.

#### Scenario: Mudança para português
- **WHEN** o utilizador muda o idioma para PT no header
- **THEN** o título da tab e a meta description passam para os textos de `pt.json`, e `<html lang>` passa a `pt`

#### Scenario: Deteção inicial em português
- **WHEN** um browser abre `https://k3lm4n.paradis.host/pt/` pela primeira vez
- **THEN** a página aparece em português, qualquer que seja o idioma do browser

### Requirement: Alternates hreflang
As duas páginas de idioma SHALL declarar no `<head>` `<link rel="alternate" hreflang="en" href="https://k3lm4n.paradis.host/">`, `<link rel="alternate" hreflang="pt-PT" href="https://k3lm4n.paradis.host/pt/">` e `<link rel="alternate" hreflang="x-default" href="https://k3lm4n.paradis.host/">`.

#### Scenario: hreflang recíproco
- **WHEN** se leem `dist/index.html` e `dist/pt/index.html`
- **THEN** ambos têm os mesmos três `<link rel="alternate" hreflang>`, e cada um aponta para o canonical da outra página

### Requirement: URL reflete o idioma
O idioma ativo SHALL ser determinado primeiro pelo path (`/pt/` → pt, qualquer outro → a ordem de deteção existente). Quando o idioma muda, a aplicação SHALL atualizar a URL para `/` (en) ou `/pt/` (pt) com `history.replaceState`, mantendo o `hash`, sem recarregar a página e sem criar entradas no histórico.

#### Scenario: Troca de idioma muda a URL
- **WHEN** o utilizador está em `/#projects` e muda o idioma para PT
- **THEN** a URL passa a `/pt/#projects`, a página não recarrega e o botão "voltar" do browser não regressa a `/`

#### Scenario: Preferência guardada
- **WHEN** um utilizador que escolheu PT antes abre `/`
- **THEN** a página aparece em português e a URL passa a `/pt/`

#### Scenario: Acesso direto ao path PT
- **WHEN** se faz `GET /pt/` e `GET /pt` no `vite preview` e no Firebase Hosting
- **THEN** ambos servem o HTML de `dist/pt/index.html`, ou `/pt` redireciona para `/pt/`, e os assets JS e CSS carregam com `200`
