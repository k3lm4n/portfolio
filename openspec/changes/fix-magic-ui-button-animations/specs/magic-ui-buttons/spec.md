## ADDED Requirements

### Requirement: Animações resolvidas no próprio botão
As animações do `ShimmerButton` (`shimmer-slide`, `spin-around`) e do `PulsatingButton` (`pulsate`) SHALL ler a duração e a distância (`--speed`, `--duration`, `--distance`) das variáveis definidas no próprio botão. Por isso, as variáveis de tema `--animate-*` que as referem SHALL ser declaradas em `@theme inline`, para a classe gerada conter o valor da animação e não `var(--animate-*)`.

#### Scenario: CSS gerado
- **WHEN** se corre `npm run build`
- **THEN** o CSS contém `.animate-shimmer-slide{animation:shimmer-slide var(--speed) …}`, `.animate-spin-around{animation:spin-around calc(var(--speed) * 2) …}` e `.animate-pulsate{animation:pulsate var(--duration) …}`, e nenhuma dessas classes usa `var(--animate-*)` (o Tailwind pode continuar a emitir as variáveis no `:root`, mas sem uso)

#### Scenario: Shimmer a correr
- **WHEN** o hero está visível e o movimento reduzido está desligado
- **THEN** o `animation-name` calculado do brilho do "Entre em contacto" é `shimmer-slide`, e o brilho percorre a borda do botão em vez de ficar parado

#### Scenario: Pulsating a correr
- **WHEN** a secção de Contacto está visível e o movimento reduzido está desligado
- **THEN** o anel do "Agendar conversa" pulsa em ciclos de 1.6s

#### Scenario: Sem fuga no iPhone
- **WHEN** a página abre no Safari do iOS, em light e em dark
- **THEN** nenhuma parte do brilho aparece fora da pill e o texto acima dos botões fica nítido
