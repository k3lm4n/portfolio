## Context

O `src/index.css` declara no `@theme` normal:

```css
--animate-shimmer-slide: shimmer-slide var(--speed) ease-in-out infinite alternate;
--animate-spin-around: spin-around calc(var(--speed) * 2) infinite linear;
--animate-pulsate: pulsate var(--duration) ease-out infinite;
```

O Tailwind v4 emite estas variáveis no `:root` e gera `.animate-shimmer-slide{animation:var(--animate-shimmer-slide)}`. Os `var()` dentro de uma variável CSS resolvem-se no elemento onde a variável é declarada (o `:root`), onde `--speed` e `--duration` não existem. A variável fica inválida no momento do cálculo e é herdada já assim, por isso `animation` fica `none` no botão, mesmo com `style="--speed: 3s"`. O CLI do shadcn tinha posto estas linhas no `@theme inline`, e a adaptação moveu-as.

## Goals / Non-Goals

**Goals:**
- O Shimmer e o Pulsating voltam a animar, com a duração definida por cada botão.

**Non-Goals:**
- Mudar o aspeto dos botões, os keyframes ou o `clip-path`.
- Rever o blur das animações `rise`/`reveal` (foi revertido à parte e só se volta a ver se o desfoque persistir depois desta correção).

## Decisions

### Usar `@theme inline` para as variáveis `--animate-*` dos botões
Com `inline`, o Tailwind copia o valor para a utility (`animation: shimmer-slide var(--speed) …`), e o `var(--speed)` resolve-se no elemento que tem a classe. Os `@keyframes` continuam no `@theme` normal (são globais e não dependem do contexto).
- **Alternativa: valores por omissão no `:root`** (`--speed: 3s`, `--duration: 1.6s`). Faz a animação correr, mas qualquer `--speed` diferente num botão seria ignorado, porque o valor já fica fixado no `:root`.
- **Alternativa: valores fixos nas classes** (`animate-[shimmer-slide_3s_…]`). Simples, mas tira a configuração por botão e afasta o código do componente do registo.

## Risks / Trade-offs

- [A verificação anterior só confirmou que as classes existiam no CSS] → A verificação passa a incluir o CSS gerado com o valor inline e o `animation-name` calculado num browser real (DevTools ou o iPhone).
- [O `@theme inline` já tem as cores; misturar animações lá pode parecer estranho] → Um comentário no bloco explica porquê.
