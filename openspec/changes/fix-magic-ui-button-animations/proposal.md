## Why

O Shimmer Button e o Pulsating Button não animam. As variáveis `--animate-shimmer-slide`, `--animate-spin-around` e `--animate-pulsate` foram declaradas no `@theme` normal, por isso o Tailwind põe-nas no `:root`. Usam `var(--speed)` e `var(--duration)`, que só existem no próprio botão, e no `:root` ficam inválidas. O resultado é `animation: none`. O brilho parado aparece como uma "linha roxa" fixa no modo escuro e, no iPhone, sai do botão e desfoca o texto acima.

## What Changes

- Mover as três variáveis `--animate-*` dos botões Magic UI para o `@theme inline`, para o Tailwind copiar o valor diretamente para a classe e o `var()` se resolver no botão.
- Manter os `@keyframes` (`shimmer-slide`, `spin-around`, `pulsate`) onde estão, e manter o `clip-path` dos botões (proteção contra o problema de corte do Safari).
- Acrescentar um requisito que garante que as animações dos botões correm, e não apenas que as classes existem.
- Corrigir a nota do `design.md` da change `apply-portfolio-v2-canvas` que diz para mover os keyframes, sem distinguir as variáveis `--animate-*`.

## Capabilities

### New Capabilities

### Modified Capabilities
- `magic-ui-buttons`: novo requisito que obriga a que as animações do Shimmer e do Pulsating corram no próprio botão. A capability é criada pela change `apply-portfolio-v2-canvas`, que SHALL ser arquivada primeiro.

## Impact

- Código: só `src/index.css` (o bloco `@theme`/`@theme inline`).
- Sem mudanças em componentes, dependências ou texto.
- Ordem de arquivo: `apply-portfolio-v2-canvas` primeiro, esta depois.
