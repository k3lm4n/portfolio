## Context

Depois de `redesign-portfolio-v2`, [Contact](../../../src/sections/Contact/index.tsx) tem um único botão `mailto:` e o email em texto. O `react-calendly` foi desinstalado. A implementação anterior (`GetInTouch`) metia um `PopupButton` dentro de um `ShimmerButton` e abria o popup com `ref.current.setState({ isOpen: true })`, uma API interna do componente.

## Goals / Non-Goals

**Goals:**
- Recuperar o agendamento pelo Calendly no bloco de Contacto, com o visual do novo design.
- Manter o email como alternativa de um clique.

**Non-Goals:**
- Abrir o Calendly a partir do Hero ou do header.
- Personalizar as cores do Calendly ao tema: os parâmetros `background_color`/`text_color`/`primary_color` exigem um plano pago.
- Embutir o calendário inline na página.

## Decisions

### 1. `PopupModal` controlado
O botão é nosso (`<button className="btn …">`) e alterna o estado `const [open, setOpen] = useState(false)`. O `<PopupModal url open onModalClose={() => setOpen(false)} rootElement={document.getElementById("root")!} />` só é renderizado depois do primeiro clique, para não carregar o iframe do Calendly antes de ser preciso.
- *Alternativas*: o `PopupButton` com `ref.setState` (frágil, API interna) e o script `widget.js` com `Calendly.initPopupWidget` (script externo à mão e sem tipos). Foram ambas rejeitadas.

### 2. Hierarquia dos botões
O primário é "Agendar conversa", com o estilo atual do botão do CTA (`cta-btn-bg`) e o ícone `CalendarDays` do lucide. O secundário é "Enviar email", com `bg-transparent`, `border border-cta-muted`, `text-cta-text` e o ícone `Mail`, à mesma altura (54px). O `<span>` com o email em texto sai, e o endereço passa para o `title` do link.

### 3. Constantes
`CALENDLY_URL` junta-se ao `EMAIL` em `src/contants/links.ts`.

## Risks / Trade-offs

- [O modal do Calendly é sempre claro, também em dark mode] → É aceitável, porque o overlay escurece a página. Reavaliar se houver um plano pago.
- [O `rootElement` exige que `#root` exista] → Existe sempre no `index.html`. Usar non-null assertion com comentário.
- [Compatibilidade de peers] → O `react-calendly` 4.4.0 declara `react`/`react-dom` `>=16.8.0`, por isso o React 19 instala sem `--legacy-peer-deps` (verificado com `npm view`).

## Migration Plan

Aplicar no branch `feat/redesign-portfolio-v2`, por cima do redesign. Fazer rollback com revert. Não há dados envolvidos.

## Open Questions

- Os textos dos botões: "Agendar conversa" / "Enviar email" (pt) e "Book a call" / "Send an email" (en). Confirmar.
