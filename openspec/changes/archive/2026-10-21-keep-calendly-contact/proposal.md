## Why

O redesign (`redesign-portfolio-v2`) seguiu o design à risca e trocou o popup do Calendly por um `mailto:` no bloco de Contacto. O agendamento direto de uma conversa é o principal caminho de conversão do portfolio e deve manter-se. O email continua disponível para quem preferir escrever.

## What Changes

- O bloco de Contacto passa a ter dois botões: o primário "Agendar conversa", que abre o popup do Calendly (`https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1`), e o secundário "Enviar email", que abre `mailto:kelmandossantos@gmail.com`. O botão secundário substitui o email em texto simples.
- Reinstalar `react-calendly` (4.4.0) e usar o `PopupModal` controlado por estado React. Não volta o hack de `ref.setState` do `PopupButton` antigo.
- Acrescentar ao i18n (pt/en) as chaves dos dois botões.
- O CTA "Entre em contacto" do Hero não muda: continua a fazer scroll até `#contact`.

## Capabilities

### New Capabilities
- `contact-scheduling`: agendamento de uma conversa pelo Calendly a partir do bloco de Contacto, com o email como alternativa.

### Modified Capabilities
<!-- portfolio-sections ainda não está em openspec/specs/ (redesign-portfolio-v2 por arquivar); o requisito do Contacto é complementado por contact-scheduling. -->

## Impact

- **Código**: `src/sections/Contact/index.tsx`, `src/i18n/locales/{pt,en}.json`, `src/index.css` (só se for preciso estilo para o modal).
- **Dependências**: `react-calendly` volta para `dependencies`.
- **Change relacionada**: `redesign-portfolio-v2`, cujo proposal, design e tasks dizem que o Calendly sai. Os textos dessa change são atualizados para não se contradizerem.
