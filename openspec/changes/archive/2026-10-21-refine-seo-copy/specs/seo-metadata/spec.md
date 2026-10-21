## MODIFIED Requirements

### Requirement: Dados estruturados Person
O `<head>` SHALL incluir um `<script type="application/ld+json">` com um objeto schema.org `Person` que tenha `name` "Kelman Santos", `alternateName` "k3lm4n", `jobTitle` "Full-stack Developer", `url` `https://k3lm4n.paradis.host/` e `sameAs` com os URLs de GitHub e LinkedIn de `src/contants/links.ts`. O objeto MUST NOT ter `address`, `homeLocation` nem outro campo de localização.

#### Scenario: Validação de dados estruturados
- **WHEN** se passa o HTML pelo Schema Markup Validator (validator.schema.org)
- **THEN** é detetada uma entidade `Person` sem erros, com os campos acima e sem `address`

## ADDED Requirements

### Requirement: Copy dos metadados
Em cada locale, `meta.title` SHALL conter "Kelman Santos" e o alias "k3lm4n". `meta.description` SHALL ter entre 70 e 160 caracteres, MUST NOT começar por "Kelman Santos" e SHALL referir os anos de experiência e a stack principal (React, Next.js, Node.js e GraphQL). Nem o título, nem a description, nem o `og:image:alt` MUST mencionar uma cidade ou um país, em nenhum locale.

#### Scenario: Título com alias
- **WHEN** se lê o `<title>` de `dist/index.html` e de `dist/pt/index.html`
- **THEN** ambos contêm "Kelman Santos" e "k3lm4n"

#### Scenario: Description não repete o título
- **WHEN** se lê `meta.description` em `en.json` e `pt.json`
- **THEN** nenhuma começa por "Kelman Santos", cada uma tem 70 a 160 caracteres e ambas referem React, Next.js, Node.js e GraphQL

#### Scenario: Sem localização
- **WHEN** se procuram "Lisbon", "Lisboa", "Portugal" e "PT" como país no `<head>` de `dist/index.html` e `dist/pt/index.html` (título, metas e JSON-LD)
- **THEN** não há resultados
