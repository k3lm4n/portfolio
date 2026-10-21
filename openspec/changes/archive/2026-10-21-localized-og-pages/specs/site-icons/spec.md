## MODIFIED Requirements

### Requirement: Imagem de partilha social
O site SHALL servir uma imagem de partilha por idioma, `og-en.png` e `og-pt.png`, cada uma com 1200×630 px. São exportadas do artboard "Imagem OG" do canvas, com o Tweak `lang` em `en` e `pt` e o tema `dark`. O tema é fixo: o `og:image` não tem variantes por `prefers-color-scheme`, e as plataformas mostram a mesma imagem a todos os visitantes. A versão escura foi escolhida porque se destaca nos feeds claros e também se lê bem em modo escuro. Cada imagem SHALL mostrar o monograma KS, o nome "Kelman Santos", a função "Full-stack Developer", a cidade, as tecnologias principais e os anos de experiência, no idioma correspondente. O texto MUST ficar dentro da margem segura do artboard (64px na vertical e 72px na horizontal). O `public/og-image.png` MUST deixar de existir.

#### Scenario: Pré-visualização 1.91:1
- **WHEN** o LinkedIn, o X, o Facebook ou o preview grande do WhatsApp mostram a imagem
- **THEN** a imagem aparece inteira, com o nome, a função, as tecnologias e os anos de experiência visíveis. O corte quadrado da miniatura pequena do WhatsApp pode cortar o início do nome, o que é aceite

#### Scenario: Idioma da imagem
- **WHEN** se abrem `og-en.png` e `og-pt.png`
- **THEN** a versão EN mostra "I'm", "Lisbon, PT" e "years of experience", e a versão PT mostra "Sou o", "Lisboa, PT" e "anos de experiência"
