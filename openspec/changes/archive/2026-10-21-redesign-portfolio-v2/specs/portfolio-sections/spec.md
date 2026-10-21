## ADDED Requirements

### Requirement: Hero
A secção `#about` SHALL mostrar, por esta ordem:
- um badge com um ponto verde pulsante e o texto "Full-stack Developer na TeamIt · Lisboa, PT";
- o H1 "Sou o Kelman Santos", com "Sou o" na cor `faint` (72px em desktop, 44px a ≤900px);
- o parágrafo de apresentação na cor `muted`;
- o botão primário "Entre em contacto" (→ `#contact`);
- o botão secundário "Ver projetos" com uma seta (→ `#projects`).

Por baixo SHALL aparecer uma faixa de 3 números: "5+ anos de experiência profissional", "5 empresas e equipas de produto" e "3 países · Portugal, Angola, EUA". A faixa tem 3 colunas com divisores em desktop e 1 coluna a ≤900px. O hero SHALL NOT mostrar imagem nem botão de currículo.

#### Scenario: Hero em desktop
- **WHEN** a página abre a 1440px
- **THEN** o hero mostra o badge, o H1, a descrição e os 2 CTAs, alinhados à esquerda numa coluna até 860px, com a faixa de 3 números 80px abaixo

#### Scenario: Hero em mobile
- **WHEN** a página abre a 390px
- **THEN** o H1 tem 44px, os CTAs quebram de linha sem overflow horizontal e a faixa de números empilha

### Requirement: Timeline
A secção `#timeline` SHALL mostrar o título, o subtítulo e um único cartão com uma linha por experiência ou formação. Cada linha tem 3 colunas (data 200px | cargo e empresa · local | chips de tecnologias, até 300px) com divisores entre linhas. A ≤900px as colunas empilham. As entradas são, por ordem: TeamIt, TSCO, Horizon, CBS, Hestia, ISPTEC (com o chip "Formação"). Os dados SHALL vir de um array no componente, com os textos traduzíveis no i18n.

#### Scenario: Conteúdo da timeline
- **WHEN** a secção é renderizada em português
- **THEN** aparecem 6 linhas. A primeira mostra "Abr 2025 — Presente", "Full-stack Developer", "TeamIt · Lisboa, PT" e os chips Next.js, Node.js, Django e DevOps

#### Scenario: Hover numa linha
- **WHEN** o cursor passa por uma linha
- **THEN** a linha desloca-se 8px para a direita, com transição

### Requirement: Projetos
A secção `#projects` SHALL mostrar o título, o subtítulo e uma grelha de 6 colunas: Venator e Messier Notes ocupam 3 colunas cada, e Kale Acquisition, Smooth Player e Social Mate ocupam 2 colunas cada. A ≤900px a grelha passa a 1 coluna. Cada cartão SHALL ter:
- uma área de imagem 16:10 (a captura do projeto, ou um placeholder neutro na cor `thumb` com o nome do projeto quando ainda não houver captura);
- o título e a descrição;
- o link "Ver projeto" com o ícone ↗.

Um projeto sem URL SHALL NOT mostrar o link.

#### Scenario: Projeto com URL
- **WHEN** um projeto tem URL definido e o utilizador clica em "Ver projeto"
- **THEN** o URL abre num novo separador

#### Scenario: Projeto sem captura
- **WHEN** um projeto não tem imagem definida
- **THEN** a área 16:10 mostra o placeholder `thumb` e nunca uma imagem partida nem texto entre parênteses retos

### Requirement: Projetos do setor público
Abaixo da grelha de projetos, o site SHALL mostrar o bloco "Setor público", com uma descrição a explicar que os sistemas são de acesso restrito e o selo "Detalhes disponíveis em entrevista" com um ícone de cadeado. Os cartões aparecem em 2 colunas (1 a ≤900px), com borda tracejada. Cada cartão mostra:
- o ícone de instituição e "<ano> · Acesso restrito";
- o nome do sistema;
- a instituição e o papel;
- a descrição;
- a caixa "Resultado" com o impacto;
- os chips de tecnologias.

Os cartões SHALL NOT ter imagens nem links. O bloco inteiro SHALL ficar escondido enquanto a lista de projetos do setor público estiver vazia.

#### Scenario: Sem conteúdo definido
- **WHEN** a lista de projetos do setor público está vazia
- **THEN** o bloco "Setor público" não é renderizado

#### Scenario: Com conteúdo definido
- **WHEN** existem 2 projetos na lista
- **THEN** o bloco mostra o cabeçalho, o selo e 2 cartões tracejados lado a lado em desktop

### Requirement: Tech Stack
A secção `#stack` SHALL ser renderizada no `App` com o título, o subtítulo e 4 cartões (4 colunas em desktop, 2 a ≤900px, 1 a ≤520px):
- FRONT-END: React, Next.js, JavaScript, HTML & CSS
- BACK-END: Node.js, Python, Django, DRF, .NET
- DADOS: PL/SQL e as restantes bases de dados definidas
- CLOUD & DEVOPS: AWS, DevOps

Uma tecnologia por definir SHALL NOT ser renderizada.

#### Scenario: Grelha responsiva
- **WHEN** a largura é 700px
- **THEN** os 4 cartões aparecem em 2 colunas

### Requirement: Contacto
A secção `#contact` SHALL mostrar um bloco de cor invertida (`cta-bg`, raio 28px) com o título "Vamos trabalhar!" (60px, 38px a ≤900px), o subtítulo e as ações de contacto definidas na capability `contact-scheduling`: agendar pelo Calendly ou enviar email.

#### Scenario: Ações de contacto visíveis
- **WHEN** o utilizador chega à secção de Contacto
- **THEN** vê o título, o subtítulo e as duas ações de contacto dentro do bloco invertido

### Requirement: Footer
O footer SHALL mostrar "Obrigado pela visita!" e "Kelman Santos · Full-stack Developer", a coluna "Links" (Sobre, Timeline, Tech Stack, Contacto, que fazem scroll para as âncoras) e a coluna "Social Media" (Email, LinkedIn, Github, Discord, com os URLs reais), e por baixo do divisor o copyright traduzido.

#### Scenario: Links do footer
- **WHEN** o utilizador clica em "Timeline" no footer
- **THEN** a página faz scroll até `#timeline`

### Requirement: Bilingue e responsivo
Todo o texto visível e todos os labels de acessibilidade das secções SHALL vir do i18n, com traduções completas em `pt` e `en`. A página SHALL funcionar sem scroll horizontal desde 360px até 1440px+, com conteúdo limitado a 1200px e padding lateral de 40px (16px a ≤900px).

#### Scenario: Inglês completo
- **WHEN** o idioma é `en`
- **THEN** nenhum texto das secções aparece em português

#### Scenario: Ecrã estreito
- **WHEN** a página abre a 360px
- **THEN** não há scroll horizontal e nenhum texto ou cartão é cortado
