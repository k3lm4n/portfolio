## ADDED Requirements

### Requirement: Tokens de cor light e dark
O site SHALL definir os tokens de cor do design como variáveis CSS, com valores light em `:root` e valores dark em `.dark`, e expô-los como cores Tailwind (`bg-surface`, `border-line`, `text-muted`, …). Nenhum componente SHALL usar hexadecimais soltos para cores que existam como token.

| Token | Light | Dark |
|---|---|---|
| bg | #F2F4FA | #0B1020 |
| surface | #FFFFFF | #121829 |
| line | #E1E5EE | #222A3E |
| text | #0F172A | #E8ECF5 |
| muted | #556074 | #9AA3B8 |
| faint | #8A93A6 | #6B7489 |
| chip | #334155 | #C9D0DE |
| chip-bg | #EEF1F7 | #1A2236 |
| nav | rgba(255,255,255,.62) | rgba(18,24,41,.62) |
| nav-line | rgba(255,255,255,.9) | rgba(255,255,255,.08) |
| btn-bg / btn-text | #0F172A / #FFFFFF | #E8ECF5 / #0B1020 |
| btn2-bg | #E4E8F0 | #1C2438 |
| thumb | #E9EDF5 | #171E31 |
| cta-bg / cta-text / cta-muted | #0F172A / #F8FAFC / #B4BDCC | #E8ECF5 / #0B1020 / #465066 |
| cta-btn-bg / cta-btn-text | #FFFFFF / #0F172A | #0B1020 / #E8ECF5 |

#### Scenario: Cores em light
- **WHEN** a página é renderizada sem a classe `dark` no `<html>`
- **THEN** o fundo da página é `#F2F4FA`, os cartões são `#FFFFFF` com borda `#E1E5EE`, e o texto principal é `#0F172A`

#### Scenario: Cores em dark
- **WHEN** a classe `dark` está no `<html>`
- **THEN** o fundo da página é `#0B1020`, os cartões são `#121829` com borda `#222A3E`, e o texto principal é `#E8ECF5`

### Requirement: Glow de fundo
O topo da página SHALL mostrar dois gradientes radiais (lilás à esquerda, pêssego à direita), com a intensidade do tema ativo, animados lentamente (16s, alternate). Os ficheiros `headergradient.svg` e `footergradient.svg` SHALL deixar de ser usados.

#### Scenario: Glow por tema
- **WHEN** se alterna entre light e dark
- **THEN** o glow muda para a variante do tema (light: alpha .55, dark: .30/.22) sem recarregar a página

### Requirement: Tipografia Inter
O site SHALL usar Inter (pesos 200–800) como fonte única, com `-webkit-font-smoothing: antialiased` e números tabulares nas datas e etiquetas.

#### Scenario: Fonte carregada
- **WHEN** a página carrega
- **THEN** todo o texto é renderizado em Inter, com fallback `system-ui, sans-serif`

### Requirement: Animações de entrada, scroll e hover
O site SHALL aplicar as animações do design:
- o header entra de cima (`drop`, 0.6s);
- os filhos do hero sobem com blur e escalonamento de 0.10s, 0.20s, 0.32s e 0.44s (`rise`);
- os cabeçalhos de secção, a faixa de números, as linhas da timeline, os cartões e o CTA revelam-se ao entrar no viewport (`reveal` com `animation-timeline: view()`), só onde o browser o suporta;
- o ponto do badge pulsa;
- os botões, os cartões e as linhas da timeline têm os hovers do design.

#### Scenario: Browser sem scroll-driven animations
- **WHEN** o browser não suporta `animation-timeline: view()`
- **THEN** todo o conteúdo fica visível, sem animação de reveal e sem ficar com opacity 0

#### Scenario: Movimento reduzido
- **WHEN** o utilizador tem `prefers-reduced-motion: reduce`
- **THEN** não corre nenhuma animação nem transição

### Requirement: Persistência do tema
A escolha de tema SHALL continuar a usar a classe `dark` no `<html>`, a persistir em `localStorage`, e a seguir a preferência do sistema enquanto o utilizador não escolher um tema.

#### Scenario: Primeira visita em sistema escuro
- **WHEN** não há tema guardado e o sistema está em dark
- **THEN** a página abre em dark

#### Scenario: Escolha persistida
- **WHEN** o utilizador escolhe light e recarrega a página
- **THEN** a página abre em light, qualquer que seja a preferência do sistema
