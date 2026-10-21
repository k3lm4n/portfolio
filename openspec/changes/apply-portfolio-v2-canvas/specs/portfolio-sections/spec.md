## MODIFIED Requirements

### Requirement: Hero
A secção `#about` SHALL mostrar, por esta ordem, numa coluna alinhada à esquerda até 780px:
- um badge em pill (fundo `surface`, borda `line`, 13px, `muted`) com um ponto verde pulsante e o texto "Full-stack Developer na TeamIt · Lisboa, PT";
- o H1 "Sou o Kelman Santos" (80px em desktop e 48px a ≤900px, peso 800, line-height 1, letter-spacing −0.045em), com "Sou o" na cor `faint` e peso 700;
- o parágrafo de apresentação (19px, line-height 1.7, até 600px) na cor `muted`;
- o CTA primário "Entre em contacto" como `ShimmerButton` (→ `#contact`);
- o CTA secundário "Ver projetos" como `InteractiveHoverButton` com fundo `surface` (→ `#projects`).

88px abaixo SHALL aparecer uma faixa de 3 números (fundo `surface`, borda `line`, raio 22px): "5+ anos de experiência profissional", "5 empresas e equipas de produto" e "3 países · Portugal, Angola, EUA". A faixa tem 3 colunas com divisores verticais em desktop e 1 coluna com divisores horizontais a ≤900px. O hero SHALL NOT mostrar imagem nem botão de currículo.

#### Scenario: Hero em desktop
- **WHEN** a página abre a 1440px
- **THEN** o hero mostra o badge, o H1 a 80px, a descrição e os 2 CTAs em pill, com a faixa de 3 números 88px abaixo

#### Scenario: Hero em mobile
- **WHEN** a página abre a 390px
- **THEN** o H1 tem 48px, os CTAs quebram de linha sem overflow horizontal e a faixa de números empilha

### Requirement: Timeline
A secção `#timeline` SHALL mostrar o título, o subtítulo e uma timeline vertical, sem cartão à volta. Cada entrada é uma linha de 3 colunas: a data (170px, 14px, `muted`, números tabulares) | um marcador de 24px com um ponto de 11px e uma linha vertical de 1px na cor `line` até à entrada seguinte | o cargo (19px, 600), a empresa · local (15px, `muted`) e os chips de tecnologias. O ponto da entrada atual (TeamIt) SHALL ser verde e cheio (#22A06B). Os outros têm borda `faint` e interior `bg`. A ≤900px a data passa para cima do cargo e o marcador fica à esquerda. As entradas são, por ordem: TeamIt, TSCO, Horizon, CBS, Hestia e ISPTEC (com o chip "Formação"). Os dados SHALL vir de um array no componente, com os textos traduzíveis no i18n.

#### Scenario: Conteúdo da timeline
- **WHEN** a secção é renderizada em português
- **THEN** aparecem 6 entradas. A primeira mostra "Abr 2025 — Presente", um ponto verde, "Full-stack Developer", "TeamIt · Lisboa, PT" e os chips Next.js, Node.js, Django e DevOps

#### Scenario: Timeline em mobile
- **WHEN** a página abre a 390px
- **THEN** cada entrada mostra o marcador à esquerda e a data por cima do cargo, sem overflow horizontal

### Requirement: Projetos
A secção `#projects` SHALL mostrar o título, o subtítulo e uma grelha de 6 colunas com intervalo de 20px: Génesis Sport Club e Kitenda ocupam 3 colunas cada, e Ficha Segura, Kale e Farwell Angola ocupam 2 colunas cada, por esta ordem. A ≤900px a grelha passa a 1 coluna. Os cartões têm fundo `surface`, borda `line` e raio 22px. Cada cartão SHALL ter:
- uma área de imagem (16:9 nos cartões de 3 colunas e 16:10 nos de 2) com a captura do projeto, ou um placeholder neutro na cor `thumb` com o nome do projeto quando ainda não houver captura;
- o título;
- os papéis no projeto como chips;
- a menção "com Paradis Labs" ("with Paradis Labs" em inglês), apenas nos projetos feitos com a Paradis Labs. Nos cartões de 3 colunas aparece à direita do título, nos de 2 colunas a seguir aos chips;
- a descrição curta;
- o link "Ver projeto" com o ícone ↗. Nos cartões de 3 colunas fica na mesma linha dos chips, alinhado à direita.

Os projetos SHALL ter os seguintes dados:

| Projeto | Papéis | Paradis Labs | URL |
|---|---|---|---|
| Génesis Sport Club | CMS, DevOps | sim | https://genesissportclub.ao/ |
| Kitenda | DevOps, QA | sim | https://kitenda.ao/ |
| Ficha Segura | DevOps, QA | sim | https://fichasegura.ao/ |
| Kale | Frontend, CMS | não | https://www.kaleacquisition.com/ |
| Farwell Angola | CMS, DevOps | não | — |

As descrições SHALL ser, em português e em inglês:
- Génesis Sport Club: "Site oficial do clube angolano de formação desportiva, bilingue, com notícias, modalidades e adesão de sócios." / "Official site for the Angolan youth sports club, bilingual, with news, sports and membership sign-up."
- Kitenda: "Calculadora de conversão de Kwanza para moeda estrangeira para carregamento de cartões, com taxas de câmbio actualizadas." / "Calculator converting Kwanza to foreign currency for card top-ups, with up-to-date exchange rates."
- Ficha Segura: "Simulador que compara depósitos a prazo dos principais bancos de Angola." / "Simulator comparing term deposits across Angola's main banks."
- Kale: "Landing page de um serviço gerido de cold email para empresas que vendem a PMEs." / "Landing page for a managed cold email service targeting local and SMB businesses."
- Farwell Angola: "Site institucional e portfólio da Farwell Angola." / "Corporate site and portfolio for Farwell Angola."

Os nomes dos papéis SHALL NOT ser traduzidos. Um projeto sem URL SHALL NOT mostrar o link.

#### Scenario: Ordem e destaque
- **WHEN** a secção é renderizada a 1440px
- **THEN** a primeira linha mostra Génesis Sport Club e Kitenda em cartões de 3 colunas com imagem 16:9, e a segunda mostra Ficha Segura, Kale e Farwell Angola em cartões de 2 colunas com imagem 16:10

#### Scenario: Papéis e Paradis Labs
- **WHEN** a secção é renderizada em português
- **THEN** o cartão da Kitenda mostra "com Paradis Labs" à direita do título e os chips "DevOps" e "QA", e o cartão da Kale mostra os chips "Frontend" e "CMS" sem a menção

#### Scenario: Troca de idioma
- **WHEN** o utilizador muda o idioma para inglês
- **THEN** as descrições e a menção passam a inglês ("with Paradis Labs") e os chips de papel mantêm o mesmo texto

#### Scenario: Projeto com URL
- **WHEN** um projeto tem URL definido e o utilizador clica em "Ver projeto"
- **THEN** o URL abre num novo separador

#### Scenario: Projeto sem URL
- **WHEN** o cartão da Farwell Angola é renderizado
- **THEN** não aparece o link "Ver projeto"

#### Scenario: Projeto sem captura
- **WHEN** um projeto não tem imagem definida
- **THEN** a área da imagem mostra o placeholder `thumb` e nunca uma imagem partida nem texto entre parênteses retos

### Requirement: Projetos do setor público
Abaixo da grelha de projetos (88px), o site SHALL mostrar o bloco "Setor público": o título (28px), a descrição e, à direita, o selo "Detalhes disponíveis em entrevista" com um ícone de cadeado (pill com fundo `surface` e borda `line`). Os cartões aparecem em 2 colunas (1 a ≤900px), com fundo `surface`, borda sólida `line`, raio 22px e padding de 28px. Cada cartão mostra:
- no topo, uma pill de estado com ponto ("Acesso público" com `ok-bg`/`ok-text`, ou "Acesso restrito" com `lock-bg`/`lock-text`) e, à direita, o ano (números tabulares);
- o nome do sistema;
- a instituição · o papel;
- a descrição;
- a caixa "Resultado" (fundo `bg`, raio 14px) com o impacto;
- os chips de tecnologias;
- o link "Ver projeto" ↗, apenas quando o projeto tem URL.

Os cartões SHALL NOT ter imagens. Os textos SHALL vir de `publicSectorItems`, sem alterações. O bloco inteiro SHALL ficar escondido enquanto a lista estiver vazia.

#### Scenario: Sem conteúdo definido
- **WHEN** a lista de projetos do setor público está vazia
- **THEN** o bloco "Setor público" não é renderizado

#### Scenario: Estado de acesso
- **WHEN** o bloco é renderizado em português
- **THEN** o cartão "3S — Sistema de Segurança Social" mostra a pill laranja "Acesso restrito" sem link, e o "Portal Mais Transparência (+T)" mostra a pill verde "Acesso público" e o link "Ver projeto"

### Requirement: Tech Stack
A secção `#stack` SHALL ser renderizada no `App` com o título, o subtítulo e uma lista de linhas separadas por divisores `line` (com divisor também acima da primeira linha). Cada linha tem 2 colunas: a etiqueta do grupo (200px, 13px, peso 600, maiúsculas, letter-spacing 0.06em, `muted`) | as tecnologias como pills (rounded-full, fundo `surface`, borda `line`, 14px, peso 500). A ≤900px as colunas empilham. Os grupos e as tecnologias SHALL ser, por ordem:
- Front-end: React, Next.js, HTML & CSS, Tailwind CSS
- Back-end: Node.js / Express, Django / FastAPI, .NET Core, GraphQL, REST APIs
- Bases de dados: PostgreSQL, PL/pgSQL, MongoDB, Elasticsearch
- CMS: Directus, Squidex, WordPress, Sanity.io, Strapi
- Cloud & DevOps: Docker, Kubernetes, GitOps, CI/CD, NGINX, AKS, AWS

Os nomes dos grupos SHALL vir do i18n.

#### Scenario: Lista em desktop
- **WHEN** a secção é renderizada a 1440px
- **THEN** aparecem 5 linhas, com a etiqueta à esquerda e as pills à direita

#### Scenario: Lista em mobile
- **WHEN** a largura é 390px
- **THEN** a etiqueta de cada grupo aparece por cima das pills, que quebram de linha sem overflow

### Requirement: Contacto
A secção `#contact` SHALL mostrar um cartão centrado (fundo `surface` com `cta-glow`, borda `line`, raio 28px, padding de 72px por 32px) com o título "Vamos trabalhar!" (60px e 48px a ≤900px, peso 800, −0.045em), o subtítulo (18px, `muted`, até 520px) e, centradas, as ações de contacto definidas na capability `contact-scheduling`: agendar pelo Calendly ou enviar email.

#### Scenario: Ações de contacto visíveis
- **WHEN** o utilizador chega à secção de Contacto
- **THEN** vê, centrados no cartão, o título, o subtítulo e as duas ações de contacto

#### Scenario: Contacto em dark
- **WHEN** o tema é dark
- **THEN** o cartão usa o `surface` dark com o `cta-glow` dark, e não um bloco de cor invertida
