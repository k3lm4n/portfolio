## MODIFIED Requirements

### Requirement: Projetos
A secção `#projects` SHALL mostrar o título, o subtítulo e uma grelha de 6 colunas: Génesis Sport Club e Kitenda ocupam 3 colunas cada, e Ficha Segura, Kale e Farwell Angola ocupam 2 colunas cada, por esta ordem. A ≤900px a grelha passa a 1 coluna. Cada cartão SHALL ter:
- uma área de imagem 16:10 (a captura do projeto, ou um placeholder neutro na cor `thumb` com o nome do projeto quando ainda não houver captura);
- o título;
- os papéis no projeto como chips, logo abaixo do título;
- a menção "com Paradis Labs" ("with Paradis Labs" em inglês), apenas nos projetos feitos com a Paradis Labs;
- a descrição curta;
- o link "Ver projeto" com o ícone ↗.

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
- **THEN** a primeira linha mostra Génesis Sport Club e Kitenda em cartões de 3 colunas, e a segunda mostra Ficha Segura, Kale e Farwell Angola em cartões de 2 colunas

#### Scenario: Papéis e Paradis Labs
- **WHEN** a secção é renderizada em português
- **THEN** o cartão da Kitenda mostra os chips "DevOps" e "QA" e a menção "com Paradis Labs", e o cartão da Kale mostra os chips "Frontend" e "CMS" sem a menção

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
- **THEN** a área 16:10 mostra o placeholder `thumb` e nunca uma imagem partida nem texto entre parênteses retos
