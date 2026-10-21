## MODIFIED Requirements

### Requirement: Tokens de cor light e dark
O site SHALL definir os tokens de cor do design como variáveis CSS, com os valores light em `:root` e os dark em `.dark`, e expô-los como cores Tailwind (`bg-surface`, `border-line`, `text-muted`, `text-accent`, …). Nenhum componente SHALL usar hexadecimais soltos para cores que existam como token.

| Token | Light | Dark |
|---|---|---|
| bg | #F4F5FA | #0B0F1A |
| surface | #FFFFFF | #121826 |
| line | #E4E7EF | #222A3B |
| fg | #0F172A | #E9ECF4 |
| muted | #556074 | #9AA3B6 |
| faint | #9AA2B4 | #5E6779 |
| chip / chip-bg | #334155 / #F0F2F7 | #C7CEDB / #1A2132 |
| nav | rgba(255,255,255,.7) | rgba(18,24,38,.7) |
| nav-line | rgba(255,255,255,.95) | rgba(255,255,255,.06) |
| thumb | #EDEFF6 | #171E2D |
| btn-bg / btn-text | = fg / = bg | = fg / = bg |
| accent | #5B5BD6 | #A5A6FF |
| spark | #FFFFFF | #5B5BD6 |
| pulse | rgba(91,91,214,.35) | rgba(165,166,255,.35) |
| ok-bg / ok-text | #E7F6EE / #17794D | rgba(52,211,153,.12) / #6EE7B7 |
| lock-bg / lock-text | #FFF1E6 / #B4501A | rgba(251,146,60,.12) / #FDBA74 |

Os tokens `btn2-bg`, `cta-bg`, `cta-text`, `cta-muted`, `cta-btn-bg` e `cta-btn-text` SHALL deixar de existir.

#### Scenario: Cores em light
- **WHEN** a página é renderizada sem a classe `dark` no `<html>`
- **THEN** o fundo da página é `#F4F5FA`, os cartões são `#FFFFFF` com borda `#E4E7EF` e o texto principal é `#0F172A`

#### Scenario: Cores em dark
- **WHEN** a classe `dark` está no `<html>`
- **THEN** o fundo da página é `#0B0F1A`, os cartões são `#121826` com borda `#222A3B` e o texto principal é `#E9ECF4`

#### Scenario: Tokens removidos
- **WHEN** se procura `btn2-bg`, `cta-bg`, `cta-text`, `cta-muted` ou `cta-btn` em `src/`
- **THEN** não há nenhuma ocorrência

### Requirement: Glow de fundo
O topo da página SHALL mostrar dois gradientes radiais, lilás à esquerda e pêssego à direita, com a intensidade do tema ativo e animados lentamente (`drift`, 18s, alternate):
- light: `radial-gradient(640px 460px at 18% -6%, rgba(170,172,245,.55), transparent 70%)` e `radial-gradient(560px 420px at 62% -8%, rgba(248,190,170,.5), transparent 70%)`;
- dark: os mesmos gradientes com `rgba(99,102,241,.28)` e `rgba(244,140,120,.18)`.

O site SHALL também ter um token `cta-glow`, a versão mais pequena e suave do glow para o cartão de Contacto:
- light: `radial-gradient(480px 260px at 30% 0%, rgba(170,172,245,.35), transparent 70%)` e `radial-gradient(420px 240px at 75% 0%, rgba(248,190,170,.35), transparent 70%)`;
- dark: os mesmos com alpha .18 e .12.

#### Scenario: Glow por tema
- **WHEN** se alterna entre light e dark
- **THEN** o glow da página e o do Contacto mudam para a variante do tema, sem recarregar a página

### Requirement: Animações de entrada, scroll e hover
O site SHALL aplicar as animações do design, inspiradas no Blur Fade do Magic UI e feitas só com CSS:
- o header entra de cima (`drop`, 0.6s);
- os filhos do hero entram com `rise` (opacity 0→1, blur 6px→0, 6px de deslocamento, 0.5s ease-out), com atrasos de 0.04s, 0.12s, 0.20s e 0.28s;
- os cabeçalhos de secção, a faixa de números, as linhas da timeline e da Tech Stack, os cartões e o CTA revelam-se ao entrar no viewport (`reveal`: opacity, blur 6px e 12px de deslocamento, com `animation-timeline: view()` e `animation-range: entry 0% cover 20%`), só onde o browser o suporta;
- o ponto do badge e o do emprego atual pulsam (`ping`, 2s);
- os cartões sobem 4px no hover, com a sombra `0 18px 40px rgba(15,23,42,.08)`;
- as setas dos links "Ver projeto" deslocam-se (2px, −2px) no hover.

#### Scenario: Browser sem scroll-driven animations
- **WHEN** o browser não suporta `animation-timeline: view()`
- **THEN** todo o conteúdo fica visível, sem animação de reveal e sem ficar com opacity 0

#### Scenario: Movimento reduzido
- **WHEN** o utilizador tem `prefers-reduced-motion: reduce`
- **THEN** não corre nenhuma animação nem transição, incluindo as dos botões Magic UI
