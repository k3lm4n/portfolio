## Context

O `src/index.css` tem:

```css
@keyframes rise {
  from { opacity: 0; translate: 0 6px; filter: blur(6px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}
.hero-in > * { animation: rise 0.5s ease-out both; }
```

O `both` junta `backwards` (aplica o `from` durante o atraso) e `forwards` (mantém o `to` depois do fim). Com o `forwards`, a animação nunca acaba de verdade: o efeito fica na pilha de animações do elemento. O WebKit trata um elemento com uma animação de `filter`/`translate` mantida como candidato a uma camada composta. No iOS, essa camada é rasterizada durante a entrada e não volta a ser desenhada com nitidez. O `h1` (48px, peso 800) disfarça o problema. A descrição (19px, peso 400, cor `muted`) mostra-o claramente.

A tentativa `b2354bb` trocou `blur(0)` por `filter: none` no `to`, mas manteve o `both`, e foi revertida. A change `fix-magic-ui-button-animations` corrigiu o brilho dos botões, que também desfocava o texto acima, mas o desfoque da descrição continua.

## Goals / Non-Goals

**Goals:**
- A descrição (e os outros filhos do hero) fica nítida no Safari do iOS depois da entrada.
- A entrada fica visualmente igual (blur, deslocamento, duração e atrasos).

**Non-Goals:**
- Mudar o `reveal` com `animation-timeline: view()`. Está sempre ativo enquanto existe uma timeline, por isso o `fill-mode` não chega. Fica para outra change, se for preciso.
- Mudar o `drop` do header ou o `menu-in`. Não têm `filter`, e o header já tem uma camada própria por causa do `backdrop-filter`.

## Decisions

### `animation-fill-mode: backwards` em vez de `both`
O `to` do `rise` é igual ao estilo normal do elemento. Sem `forwards`, quando a animação acaba o elemento fica exatamente onde ficaria com o `to`, mas sem efeito de animação, e o browser pode desenhar o texto na camada normal da página. O `backwards` mantém o `from` durante os atrasos (0.04s a 0.28s), por isso não há um "flash" do texto antes de a entrada começar.
- **Alternativa: `filter: none`/`translate: none` no `to`** (`b2354bb`). Não tira a animação mantida e foi revertida.
- **Alternativa: tirar a classe com JS no `animationend`.** Funciona, mas acrescenta JS a um efeito que é só CSS, e não traz nada em relação ao `backwards`.
- **Alternativa: tirar o `filter` do `rise`.** Resolve a camada, mas muda o Blur Fade pedido no design.

### Manter o `to` explícito
O `to` continua igual (`opacity: 1; translate: 0 0; filter: blur(0)`). Com `backwards`, o `to` só se aplica durante a interpolação, e o estilo depois do fim vem do elemento. Não é preciso mudar o keyframe.

## Risks / Trade-offs

- [A causa pode não ser só a animação mantida (por exemplo, o `backdrop-filter` do header ou o `drift` do `.page-glow`)] → O primeiro passo das tarefas é um teste com `animation: none` no iPhone. Se o texto continuar desfocado, a hipótese cai e esta change para antes da correção.
- [A verificação no simulador ou no desktop pode não mostrar o problema] → A verificação final é num iPhone real, com o Web Inspector ligado (separador Layers).
- [O iPhone pode estar a mostrar uma build antiga] → Confirmar a versão servida (hard reload, ou um build local servido na rede) antes de cada teste.
