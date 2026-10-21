## 1. Correção

- [x] 1.1 Em `src/index.css`, mover `--animate-shimmer-slide`, `--animate-spin-around` e `--animate-pulsate` do `@theme` para o `@theme inline`, com um comentário a explicar que dependem de variáveis do próprio botão. Deixar os `@keyframes` no `@theme`
- [x] 1.2 Corrigir a nota em `openspec/changes/apply-portfolio-v2-canvas/design.md` (D1, adaptação obrigatória): os keyframes podem ir para o `@theme`, mas as variáveis `--animate-*` que usam `var()` ficam no `@theme inline`

## 2. Verificação

- [x] 2.1 `npm run lint` e `npm run build` sem erros
- [x] 2.2 Confirmar no CSS de `dist/` que as três classes têm o valor da animação inline e não usam `var(--animate-*)`
- [ ] 2.3 Num browser (DevTools), confirmar o `animation-name` calculado do brilho do Shimmer e do anel do Pulsating, em light e em dark
- [ ] 2.4 No iPhone, confirmar que o brilho percorre a borda, que não há linha roxa parada e que a descrição do hero fica nítida
