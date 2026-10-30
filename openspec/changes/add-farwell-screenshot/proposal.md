## Why

O cartão da Farwell Angola ficou com o placeholder e sem link porque o site estava em baixo (HTTP 500/406) quando a grelha de projetos foi refeita. Ficou registado como tarefa pendente (4.3 em `replace-showcase-projects`). O site https://farwell.co.ao/ voltou (HTTP 200) e a captura sai limpa, por isso o cartão pode ficar igual aos outros 4.

## What Changes

- Acrescentar a captura de ecrã da Farwell Angola ao cartão, no lugar do placeholder `thumb`.
- Acrescentar o URL https://farwell.co.ao/ ao cartão, que passa a mostrar o link "Ver projeto".
- Atualizar a tabela de dados e o cenário "Projeto sem URL" da spec, que usava a Farwell como exemplo.

## Capabilities

### New Capabilities

_Nenhuma._

### Modified Capabilities

- `portfolio-sections`: no requisito "Projetos", a Farwell Angola passa a ter URL e captura. O cenário "Projeto sem URL" deixa de depender da Farwell e passa a descrever o comportamento de forma genérica.

## Impact

- `src/assets/projects/farwell.webp`: novo ficheiro.
- `src/sections/Projects/index.tsx`: import da imagem e `image`/`url` na entrada `farwell`. Sai o comentário "Site is down".
- Sem novas dependências e sem mudanças no i18n (a descrição mantém-se).
