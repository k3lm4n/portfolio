## ADDED Requirements

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
O site SHALL servir `og-image.png` com 1200×630 px, com o monograma KS, o nome "Kelman Santos", a função "Full-stack Developer · Lisbon" e as cores e o gradiente `--glow` do tema claro. O texto MUST ficar dentro da área central segura de 1080×560 px, porque algumas plataformas cortam as margens.

#### Scenario: Corte quadrado
- **WHEN** uma plataforma mostra a imagem cortada ao centro
- **THEN** o nome e o monograma continuam visíveis por inteiro

### Requirement: Fonte de design única
O favicon e a imagem OG SHALL ser desenhados no canvas "Portfólio Kelman Santos" do Claude Design, para ficarem coerentes com os tokens de `src/index.css`. Os PNG e o ICO MUST ser gerados a partir dessa fonte, e não redesenhados à mão em cada tamanho.

#### Scenario: Coerência visual
- **WHEN** se comparam o favicon, o apple-touch-icon e o monograma da imagem OG
- **THEN** o desenho das letras, as proporções e as cores são iguais em todos
