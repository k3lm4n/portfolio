## Why

No Safari do iOS, a descrição do hero (`hero.description`) continua desfocada depois de a animação de entrada acabar, mesmo com a correção dos botões Magic UI (`fix-magic-ui-button-animations`). A animação `rise` usa `animation-fill-mode: both`, por isso o último keyframe (com `filter` e `translate`) fica aplicado para sempre. O WebKit mantém os filhos do hero numa camada composta, rasterizada durante o blur, e o texto fino em cor `muted` fica "mole". A tentativa anterior (`filter: none` no fim, revertida em `162d1b1`) mudava o valor final, mas não tirava a animação de cima do elemento.

## What Changes

- A animação `rise` dos filhos do hero passa de `both` para `backwards`. O `from` continua aplicado durante o atraso (sem "flash" antes da entrada), e no fim o elemento volta ao estilo normal, sem nenhum efeito de animação ativo.
- Um comentário junto ao `.hero-in > *` explica porque não se usa `both`.
- Um novo requisito garante que o texto do hero fica nítido depois da entrada, e que a verificação é feita num iPhone real.
- O `reveal` (scroll-driven) fica de fora: uma animação ligada a `animation-timeline: view()` está sempre ativa, e o `backwards` não resolve. Se aparecer texto desfocado nas secções, trata-se numa change à parte.

## Capabilities

### New Capabilities

### Modified Capabilities
- `design-tokens`: novo requisito que obriga a que as animações de entrada do hero não deixem efeito ativo depois de acabarem, para o texto ficar nítido no iOS. O requisito "Animações de entrada, scroll e hover" (blur, deslocamento, duração e atrasos do `rise`) mantém-se.

## Impact

- Código: só `src/index.css` (a regra `.hero-in > *`).
- Sem mudanças no aspeto da entrada, em componentes, dependências ou texto.
- Ordem de arquivo: `apply-portfolio-v2-canvas` e `fix-magic-ui-button-animations` primeiro, esta depois.
