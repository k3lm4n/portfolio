## Why

A description atual ("Kelman Santos is a Full-stack Developer, building elegant, functional web products…") repete o título, gasta quase um terço do snippet a dizê-lo e não traz nada que distinga o perfil: nem anos de experiência, nem back-end, nem o trabalho em portais do setor público. A versão PT tem ainda uma vírgula mal posta ("é Full-stack Developer, e cria"). Além disso, o commit `179a376` tirou a localização das metas, mas o JSON-LD `Person` continua a declarar `address` Lisbon, PT, e a spec `seo-metadata` obriga a mantê-lo.

## What Changes

- Nova copy para o título e a description, em EN e PT, aplicada a `<title>`, `meta description`, Open Graph e Twitter. A fonte é `meta.*` em `en.json` e `pt.json`, e o `index.html` espelha o EN:
  - Título (EN e PT): `Kelman Santos (k3lm4n) · Full-stack Developer`
  - EN: `Full-stack Developer with 5+ years building web products in React, Next.js, Node.js and GraphQL, including public-sector portals.`
  - PT: `Full-stack Developer com mais de 5 anos a criar produtos web com React, Next.js, Node.js e GraphQL, incluindo portais do setor público.`
- O JSON-LD `Person` deixa de ter `address`.
- Os metadados SEO e sociais deixam de poder mencionar localização (cidade ou país). Isto passa a ser uma regra da spec.

Fica de fora: o texto visível do hero (o badge "TeamIt · Lisbon" mantém-se), as imagens OG, o `og:image:alt` e a estrutura das páginas por idioma.

## Capabilities

### New Capabilities
<!-- Nenhuma. -->

### Modified Capabilities
- `seo-metadata`: o requisito `Person` deixa de exigir `address` e passa a proibi-lo. Um novo requisito fixa as regras da copy: sem localização, alias `k3lm4n` no título e description que não repete o título.

## Impact

- **Código**: `index.html` (título, description, OG, Twitter e JSON-LD), `src/i18n/locales/en.json` e `src/i18n/locales/pt.json` (`meta.title` e `meta.description`). O plugin `localized-html` em `vite.config.ts` não muda: continua a ler `pt.json`.
- **Specs**: `openspec/specs/seo-metadata/spec.md`.
- **Externo**: o LinkedIn e o Facebook guardam a pré-visualização em cache, por isso é preciso voltar a passar as URLs pelos inspectores depois do deploy.
