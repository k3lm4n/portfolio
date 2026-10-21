## Why

A grelha de projetos mostra Venator, Messier Notes, Kale, Smooth Player e Social Mate, sem capturas nem links. Já não representam o trabalho atual. Os projetos recentes estão em produção, têm sites públicos e mostram papéis que a grelha ainda não comunica (CMS, DevOps, QA, Frontend), alguns feitos em parceria com a Paradis Labs.

## What Changes

- Substituir os 5 projetos da grelha por: **Génesis Sport Club**, **Kitenda**, **Ficha Segura**, **Kale** e **Farwell Angola**.
- Mudar o destaque: Génesis Sport Club e Kitenda passam a ocupar os 2 cartões largos (3 colunas); Ficha Segura, Kale e Farwell Angola ficam nos 3 cartões estreitos (2 colunas).
- Adicionar ao cartão os **papéis** no projeto, como chips (ex.: "CMS", "DevOps").
- Adicionar ao cartão a menção **"com Paradis Labs"** nos projetos feitos com a Paradis Labs (Génesis Sport Club, Kitenda e Ficha Segura).
- Adicionar a captura de ecrã e o URL público de cada projeto. A Farwell Angola fica sem captura e sem link enquanto o site estiver em baixo.
- Reescrever as descrições em PT e EN, em versão curta.
- Remover as chaves i18n de Venator, Messier Notes, Smooth Player e Social Mate.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `portfolio-sections`: o requisito "Projetos" muda a lista de projetos e o destaque, e o cartão passa a mostrar chips de papel e a menção à Paradis Labs.

## Impact

- `src/sections/Projects/index.tsx`: tipo `Project` (ids, `roles`, `paradis`), array `projects` e o markup do cartão.
- `src/i18n/locales/pt.json` e `en.json`: `projects.items.*` e uma nova chave para "com Paradis Labs".
- Novos ficheiros de imagem em `src/assets/projects/`.
- Depende de `redesign-portfolio-v2`, que introduz o requisito "Projetos" em `portfolio-sections`. Essa change tem de ser arquivada antes desta para o delta MODIFIED se aplicar.
