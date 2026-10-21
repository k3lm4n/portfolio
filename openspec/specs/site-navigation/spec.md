# site-navigation Specification

## Purpose
Definir o header sticky, a navegação desktop e móvel, a troca de tema e de idioma e a acessibilidade da navegação. Criado pela change redesign-portfolio-v2.

## Requirements

### Requirement: Header sticky flutuante
O site SHALL ter um único header, sticky a 16px do topo, com um contentor arredondado (16px), fundo translúcido `nav`, borda `nav-line`, `backdrop-filter: blur(16px)` e sombra suave. O header SHALL ser renderizado pela mesma árvore de componentes em todos os tamanhos de ecrã, e o layout SHALL adaptar-se apenas por CSS.

#### Scenario: Header visível ao fazer scroll
- **WHEN** o utilizador faz scroll até qualquer secção
- **THEN** o header continua visível no topo, por cima do conteúdo

### Requirement: Navegação desktop
Acima de 900px de largura, o header SHALL mostrar: os links Sobre, Timeline, Projetos, Tech Stack e Contacto (com sublinhado animado no hover); os ícones de GitHub, LinkedIn e Discord seguidos de um separador; o botão de tema; e o botão de idioma.

#### Scenario: Links de secção
- **WHEN** o utilizador clica num link do header
- **THEN** a página faz scroll suave até à secção correspondente (`#about`, `#timeline`, `#projects`, `#stack`, `#contact`), e o título da secção não fica tapado pelo header

#### Scenario: Links sociais
- **WHEN** o utilizador clica no ícone do GitHub, do LinkedIn ou do Discord
- **THEN** o perfil abre num novo separador (`https://github.com/k3lm4n`, `https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/`, `https://discord.com/users/826107786643243038`) com `rel="noopener noreferrer"`

### Requirement: Navegação móvel
A 900px de largura ou menos, o header SHALL esconder os links e os sociais e mostrar o nome "Kelman Santos" (link para `#about`), o botão de tema, o botão de idioma e um botão burger. O burger SHALL abrir um painel dropdown, por baixo do header, com os 5 links (alvo mínimo de 48px) e os 3 ícones sociais.

#### Scenario: Abrir e fechar o menu
- **WHEN** o utilizador toca no burger
- **THEN** o painel abre com a animação `menu`, o ícone passa a "X" e `aria-expanded` passa a `true`. Ao tocar novamente, o painel fecha

#### Scenario: Navegar a partir do menu
- **WHEN** o utilizador toca num link do painel
- **THEN** a página faz scroll até à secção e o painel fecha

#### Scenario: Fechar com Escape
- **WHEN** o painel está aberto e o utilizador carrega em Escape
- **THEN** o painel fecha e o foco volta ao burger

### Requirement: Troca de tema
O botão de tema SHALL mostrar o ícone de lua em light e o de sol em dark, com `aria-label` "Mudar para modo escuro/claro" (ou o equivalente em inglês).

#### Scenario: Alternar tema
- **WHEN** o utilizador carrega no botão de tema
- **THEN** o tema alterna, as cores transitam em 0.3s, e o ícone e o `aria-label` atualizam

### Requirement: Troca de idioma
O botão de idioma SHALL mostrar o código do idioma de destino ("EN" quando o site está em português, "PT" quando está em inglês) e alternar o i18n entre `pt` e `en`.

#### Scenario: Mudar para inglês
- **WHEN** o site está em português e o utilizador carrega em "EN"
- **THEN** todo o texto passa para inglês, incluindo os labels de acessibilidade, e o botão passa a mostrar "PT"

### Requirement: Acessibilidade da navegação
Todos os controlos do header SHALL ser `<a href>` ou `<button>` nativos, com alvos de pelo menos 44×44px. Os botões só com ícone SHALL ter `aria-label`, e os SVG decorativos `aria-hidden="true"`. As duas navs SHALL ter `aria-label` distintos.

#### Scenario: Navegação por teclado
- **WHEN** o utilizador navega com Tab
- **THEN** todos os links e botões do header recebem foco visível, pela ordem visual
