## MODIFIED Requirements

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
| Farwell Angola | CMS, DevOps | não | https://farwell.co.ao/ |

Todos os projetos da grelha SHALL ter captura de ecrã.

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

#### Scenario: Farwell Angola com captura e link
- **WHEN** o cartão da Farwell Angola é renderizado
- **THEN** a área 16:10 mostra a captura do site e o link "Ver projeto" abre https://farwell.co.ao/ num novo separador

#### Scenario: Projeto sem URL
- **WHEN** um projeto não tem URL definido
- **THEN** não aparece o link "Ver projeto"

#### Scenario: Projeto sem captura
- **WHEN** um projeto não tem imagem definida
- **THEN** a área da imagem mostra o placeholder `thumb` e nunca uma imagem partida nem texto entre parênteses retos
