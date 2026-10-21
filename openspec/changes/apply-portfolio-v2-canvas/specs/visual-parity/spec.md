## REMOVED Requirements

### Requirement: Paridade visual após a migração
**Reason**: Servia a migração para o Tailwind v4, já concluída. O redesign V2 muda o visual de propósito, por isso a baseline deixou de existir.
**Migration**: O aspeto esperado está definido em `design-tokens`, `portfolio-sections` e `site-navigation`.

### Requirement: Dark mode por classe
**Reason**: Duplica o requisito "Persistência do tema" de `design-tokens`.
**Migration**: Ver `design-tokens` → "Persistência do tema".

### Requirement: Container centrado
**Reason**: O site já não usa a utility `container`. A largura do conteúdo está definida em `portfolio-sections` → "Bilingue e responsivo".
**Migration**: Nenhuma.

### Requirement: Animações preservadas
**Reason**: Marquee, `spin-around`, `slide` e o `BlurFade` com `motion` já não existem desde o redesign.
**Migration**: As animações atuais estão em `design-tokens` → "Animações de entrada, scroll e hover" e em `magic-ui-buttons`.

### Requirement: Timeline de experiência
**Reason**: A biblioteca de timeline foi removida no redesign.
**Migration**: Ver `portfolio-sections` → "Timeline".

### Requirement: Internacionalização intacta
**Reason**: Duplica `site-navigation` → "Troca de idioma" e `portfolio-sections` → "Bilingue e responsivo".
**Migration**: Nenhuma.
