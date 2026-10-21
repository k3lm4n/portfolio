## ADDED Requirements

### Requirement: Texto do hero nítido depois da entrada
A animação `rise` dos filhos do hero SHALL deixar de ter efeito quando acaba. Para isso, SHALL usar `animation-fill-mode: backwards` (não `both` nem `forwards`), e o seu último keyframe SHALL ser igual ao estilo normal do elemento (opacity 1, sem deslocamento, sem filtro). Assim, o browser deixa de manter uma camada composta para esse texto.

#### Scenario: Entrada sem flash
- **WHEN** a página abre e o movimento reduzido está desligado
- **THEN** cada filho do hero fica invisível e desfocado durante o seu atraso, entra com `rise` como antes e, no fim, não salta de posição nem de opacidade

#### Scenario: Sem animação ativa no fim
- **WHEN** passaram mais de 0.8s desde que a página abriu
- **THEN** o `getAnimations()` de cada filho de `.hero-in` devolve uma lista vazia, e o `filter` calculado é `none`

#### Scenario: Texto nítido no iPhone
- **WHEN** a página abre no Safari do iOS, em light e em dark, e a entrada acaba
- **THEN** a descrição do hero fica tão nítida como um parágrafo de uma secção sem animação de entrada, e o Web Inspector (separador Layers) não mostra uma camada própria para o `<p>` causada por animação ou filtro
