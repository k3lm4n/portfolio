## MODIFIED Requirements

### Requirement: Agendar conversa pelo Calendly
O cartão de Contacto (`#contact`) SHALL ter um botão primário com o estilo do `PulsatingButton` (fundo `fg`, texto `bg`, anel `pulse`, ícone de calendário) e com o texto "Agendar conversa" (en: "Book a call"). Esse botão SHALL abrir um popup modal do Calendly com o URL `https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1`, sem sair da página.

#### Scenario: Abrir o agendamento
- **WHEN** o utilizador clica em "Agendar conversa"
- **THEN** abre-se por cima da página o modal do Calendly com o evento de 30 minutos

#### Scenario: Fechar o agendamento
- **WHEN** o modal está aberto e o utilizador o fecha (no botão de fechar ou clicando fora)
- **THEN** o modal fecha e o utilizador continua na secção de Contacto

#### Scenario: Botão nativo e acessível
- **WHEN** o utilizador chega ao botão com Tab e carrega em Enter
- **THEN** o modal abre, porque o botão é um `<button type="button">` com foco visível

### Requirement: Email como alternativa
Ao lado do botão de agendamento, o cartão de Contacto SHALL ter um botão secundário "Enviar email" (en: "Send an email") com o estilo do `InteractiveHoverButton` (fundo `bg`, borda `line`), que abre `mailto:kelmandossantos@gmail.com`. O endereço SHALL continuar visível ou acessível como texto do link (`title`) para quem quiser copiá-lo.

#### Scenario: Escrever um email
- **WHEN** o utilizador clica em "Enviar email"
- **THEN** o cliente de email abre com o destinatário `kelmandossantos@gmail.com`

#### Scenario: Layout em mobile
- **WHEN** a página é aberta a 360px
- **THEN** os dois botões quebram de linha, centrados, sem scroll horizontal
