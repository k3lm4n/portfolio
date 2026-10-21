## MODIFIED Requirements

### Requirement: Header sticky flutuante
O site SHALL ter um único header, sticky a 16px do topo, com um contentor arredondado (18px) de altura mínima 56px, fundo translúcido `nav`, borda `nav-line` e `backdrop-filter: blur(16px)`. O header SHALL ser renderizado pela mesma árvore de componentes em todos os tamanhos de ecrã, e o layout SHALL adaptar-se apenas por CSS. Em todos os tamanhos, o header SHALL começar com o logótipo "Kelman." (peso 700, 16px, o ponto na cor `accent`), um link para `#about`.

#### Scenario: Header visível ao fazer scroll
- **WHEN** o utilizador faz scroll até qualquer secção
- **THEN** o header continua visível no topo, por cima do conteúdo

#### Scenario: Logótipo
- **WHEN** a página abre a 1440px ou a 390px
- **THEN** o header mostra "Kelman." à esquerda, com o ponto em `accent`, e clicar nele faz scroll até `#about`

### Requirement: Navegação desktop
Acima de 900px de largura, o header SHALL mostrar: o logótipo; os links Sobre, Timeline, Projetos, Tech Stack e Contacto (14px, cor `muted`, intervalo de 26px, com opacidade a 0.6 no hover); os ícones de GitHub, LinkedIn e Discord seguidos de um separador; o botão de tema; e o botão de idioma.

#### Scenario: Links de secção
- **WHEN** o utilizador clica num link do header
- **THEN** a página faz scroll suave até à secção correspondente (`#about`, `#timeline`, `#projects`, `#stack`, `#contact`), e o título da secção não fica tapado pelo header

#### Scenario: Hover num link
- **WHEN** o cursor passa por um link de secção
- **THEN** o link fica com opacidade 0.6, com transição, e sem sublinhado

#### Scenario: Links sociais
- **WHEN** o utilizador clica no ícone do GitHub, do LinkedIn ou do Discord
- **THEN** o perfil abre num novo separador (`https://github.com/k3lm4n`, `https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/`, `https://discord.com/users/826107786643243038`) com `rel="noopener noreferrer"`

### Requirement: Navegação móvel
A 900px de largura ou menos, o header SHALL esconder os links e os sociais e mostrar o logótipo "Kelman.", o botão de tema, o botão de idioma e um botão burger (fundo `fg`, ícone `bg`). O burger SHALL abrir um painel dropdown, por baixo do header (fundo `surface`, borda `line`, raio 18px), com os 5 links (alvo mínimo de 48px) e uma linha com os 3 ícones sociais.

#### Scenario: Abrir e fechar o menu
- **WHEN** o utilizador toca no burger
- **THEN** o painel abre com a animação `menu`, o ícone passa a "X" e `aria-expanded` passa a `true`. Ao tocar novamente, o painel fecha

#### Scenario: Navegar a partir do menu
- **WHEN** o utilizador toca num link do painel
- **THEN** a página faz scroll até à secção e o painel fecha

#### Scenario: Sociais no menu móvel
- **WHEN** o painel está aberto a 390px
- **THEN** mostra por baixo dos links os ícones de GitHub, LinkedIn e Discord, cada um com alvo de 44×44px e a abrir num novo separador

#### Scenario: Fechar com Escape
- **WHEN** o painel está aberto e o utilizador carrega em Escape
- **THEN** o painel fecha e o foco volta ao burger
