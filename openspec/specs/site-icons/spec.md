# site-icons Specification

## Purpose
Definir o favicon, os ícones de app, o manifest e a imagem de partilha social do portfolio, todos com o monograma KS e desenhados no canvas do Claude Design. Criado pela change improve-seo-and-favicon e alterado pela localized-og-pages.

## Requirements

### Requirement: Favicon com monograma KS
O site SHALL ter um favicon com o monograma "KS" em Inter ExtraBold (800), claro sobre um quadrado arredondado `#0f172a`. A fonte é `public/favicon.svg`, com as letras convertidas em paths para não depender da fonte Inter. O `<head>` SHALL referenciar `favicon.svg` (`type="image/svg+xml"`) e `favicon.ico` (32×32) como alternativa. O `public/vite.svg` MUST deixar de existir.

#### Scenario: Tab do browser
- **WHEN** se abre o site em Chrome, Firefox e Safari
- **THEN** a tab mostra o monograma KS, e não o logo do Vite nem o ícone genérico

#### Scenario: SVG sem dependência de fonte
- **WHEN** se abre `public/favicon.svg` diretamente num browser sem a Inter instalada
- **THEN** as letras KS têm o mesmo desenho, porque o ficheiro não tem elementos `<text>`

#### Scenario: Legível a 16px
- **WHEN** se vê o favicon a 16×16 px numa tab clara e numa tab escura
- **THEN** as duas letras K e S distinguem-se, e o quadrado escuro destaca-se do fundo claro

### Requirement: Ícones de app e manifest
O site SHALL servir `apple-touch-icon.png` (180×180), `icon-192.png`, `icon-512.png` e `site.webmanifest`. O manifest SHALL declarar `name` "Kelman Santos", `short_name` "KS", os dois ícones PNG, `theme_color` e `background_color`. O `<head>` SHALL referenciar o `apple-touch-icon` e o manifest.

#### Scenario: Adicionar ao ecrã principal
- **WHEN** se adiciona o site ao ecrã principal num iPhone ou num Android
- **THEN** o ícone é o monograma KS, sem bordas brancas nem recortes nas letras

#### Scenario: Manifest válido
- **WHEN** se abre a tab Application > Manifest do Chrome DevTools
- **THEN** o manifest carrega sem erros e os ícones 192 e 512 aparecem

### Requirement: Imagem de partilha social
O site SHALL servir uma imagem de partilha por idioma, `og-en.png` e `og-pt.png`, cada uma com 1200×630 px. São exportadas do artboard "Imagem OG" do canvas, com o Tweak `lang` em `en` e `pt` e o tema `dark`. O tema é fixo: o `og:image` não tem variantes por `prefers-color-scheme`, e as plataformas mostram a mesma imagem a todos os visitantes. A versão escura foi escolhida porque se destaca nos feeds claros e também se lê bem em modo escuro. Cada imagem SHALL mostrar o monograma KS, o nome "Kelman Santos", a função "Full-stack Developer", a cidade, as tecnologias principais e os anos de experiência, no idioma correspondente. O texto MUST ficar dentro da margem segura do artboard (64px na vertical e 72px na horizontal). O `public/og-image.png` MUST deixar de existir.

#### Scenario: Pré-visualização 1.91:1
- **WHEN** o LinkedIn, o X, o Facebook ou o preview grande do WhatsApp mostram a imagem
- **THEN** a imagem aparece inteira, com o nome, a função, as tecnologias e os anos de experiência visíveis. O corte quadrado da miniatura pequena do WhatsApp pode cortar o início do nome, o que é aceite

#### Scenario: Idioma da imagem
- **WHEN** se abrem `og-en.png` e `og-pt.png`
- **THEN** a versão EN mostra "I'm", "Lisbon, PT" e "years of experience", e a versão PT mostra "Sou o", "Lisboa, PT" e "anos de experiência"

### Requirement: Fonte de design única
O favicon e a imagem OG SHALL ser desenhados no canvas "Portfólio Kelman Santos" do Claude Design, para ficarem coerentes com os tokens de `src/index.css`. Os PNG e o ICO MUST ser gerados a partir dessa fonte, e não redesenhados à mão em cada tamanho.

#### Scenario: Coerência visual
- **WHEN** se comparam o favicon, o apple-touch-icon e o monograma da imagem OG
- **THEN** o desenho das letras, as proporções e as cores são iguais em todos
