## 1. Confirmar a causa

- [ ] 1.1 Servir a build atual na rede local (`npm run build` e `npm run preview`, que já usa `--host`) e abri-la no iPhone, confirmando que não é uma versão em cache
- [ ] 1.2 Com o Web Inspector ligado (Safari → Develop → iPhone), ver no separador Layers se o `<p>` da descrição tem uma camada própria e qual é o motivo
- [ ] 1.3 Testar temporariamente `animation: none` em `.hero-in > *` e confirmar que a descrição fica nítida. Se não ficar, parar e voltar ao explore com o resultado

## 2. Correção

- [x] 2.1 Em `src/index.css`, trocar `animation: rise 0.5s ease-out both` por `animation: rise 0.5s ease-out backwards` em `.hero-in > *`, com um comentário a explicar que o `both` deixa a animação ativa e o texto desfocado no iOS
- [x] 2.2 Desfazer o teste da tarefa 1.3 (não foi preciso: a correção foi aplicada diretamente e o teste no iPhone é feito sobre ela)

## 3. Verificação

- [x] 3.1 `npm run lint` e `npm run build` sem erros
- [ ] 3.2 No desktop, confirmar que a entrada do hero está igual (sem flash antes dos atrasos e sem salto no fim) e que `getAnimations()` dos filhos de `.hero-in` devolve uma lista vazia depois de 0.8s
- [ ] 3.3 No iPhone, em light e em dark, confirmar que a descrição fica nítida e que o separador Layers já não mostra uma camada para o `<p>` por causa da animação
