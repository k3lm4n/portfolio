## ADDED Requirements

### Requirement: Metadados no HTML estático
O `index.html` servido SHALL conter no `<head>`, sem depender de JavaScript, um único `<title>`, uma `<meta name="description">` e um `<link rel="canonical">`. O conteúdo SHALL estar em inglês, com `<html lang="en">`, e usar a marca "Kelman Santos". O canonical SHALL ser `https://k3lm4n.paradis.host/`.

#### Scenario: HTML lido sem JS
- **WHEN** se faz `curl https://k3lm4n.paradis.host/` (ou se lê `dist/index.html` depois de `npm run build`)
- **THEN** a resposta tem exatamente um `<title>` que contém "Kelman Santos", uma `<meta name="description">` com 70 a 160 caracteres e `<link rel="canonical" href="https://k3lm4n.paradis.host/">`

#### Scenario: Uma só fonte de título
- **WHEN** se procura em `src/` por `<title>`, `Helmet` ou `react-helmet-async`
- **THEN** não há resultados, e o `package.json` não declara `react-helmet-async`

### Requirement: Pré-visualização em redes sociais
O `<head>` SHALL declarar Open Graph (`og:type` `website`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width` 1200, `og:image:height` 630, `og:image:alt`, `og:locale` `en_US`, `og:locale:alternate` `pt_PT`) e Twitter card (`twitter:card` `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`). Os URLs de `og:url`, `og:image` e `twitter:image` MUST ser absolutos, em `https://k3lm4n.paradis.host`.

#### Scenario: Link partilhado
- **WHEN** se passa `https://k3lm4n.paradis.host/` pelo LinkedIn Post Inspector ou pelo Facebook Sharing Debugger
- **THEN** a pré-visualização mostra o título, a description e a imagem `og-image.png` sem avisos de tags em falta

#### Scenario: Imagem OG acessível
- **WHEN** se faz `GET https://k3lm4n.paradis.host/og-image.png`
- **THEN** a resposta é `200` com `Content-Type: image/png` e a imagem tem 1200×630 px e menos de 300 KB

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
O site SHALL servir `/robots.txt`, que permite todos os crawlers e declara `Sitemap: https://k3lm4n.paradis.host/sitemap.xml`, e `/sitemap.xml` com a URL canónica.

#### Scenario: robots e sitemap
- **WHEN** se faz `GET /robots.txt` e `GET /sitemap.xml` no build de produção
- **THEN** ambos respondem `200` com o ficheiro real, e não com o `index.html` do rewrite da SPA, e o sitemap é XML válido com uma única `<loc>https://k3lm4n.paradis.host/</loc>`

### Requirement: Título e description acompanham o idioma
Quando o idioma ativo do i18n muda, a aplicação SHALL atualizar `document.title` e o `content` da `<meta name="description">` com as traduções `meta.title` e `meta.description` desse idioma, tal como já faz com `document.documentElement.lang`. Os valores em inglês MUST ser iguais aos do `index.html`.

#### Scenario: Mudança para português
- **WHEN** o utilizador muda o idioma para PT no header
- **THEN** o título da tab e a meta description passam para os textos de `pt.json`, e `<html lang>` passa a `pt`

#### Scenario: Deteção inicial em português
- **WHEN** um browser com idioma `pt-PT` abre o site pela primeira vez
- **THEN** depois de a aplicação carregar, o título da tab está em português
