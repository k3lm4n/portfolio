# visual-parity Specification

## Purpose
Garantir que o site mantém a mesma aparência e comportamento (tema, animações, timeline, i18n) depois da atualização de dependências e da migração para o Tailwind CSS v4. Criado pela change upgrade-deps-tailwind-v4.

## Requirements

### Requirement: Paridade visual após a migração
Depois da migração, o site SHALL apresentar a mesma aparência que o build anterior, em todas as combinações de tema (light/dark), idioma (en/pt) e viewport (mobile 390px, desktop 1440px). Uma diferença só é aceitável se estiver identificada como intencional no design (por exemplo, o ajuste de tom da paleta oklch).

#### Scenario: Comparação com a baseline
- **WHEN** se capturam screenshots de página inteira do build novo para as 8 combinações de tema × idioma × viewport
- **THEN** cada screenshot corresponde à baseline do build anterior, sem diferenças de layout, espaçamento, cor de tema ou tipografia não documentadas

### Requirement: Dark mode por classe
O dark mode SHALL continuar a ser ativado pela classe `dark` no `<html>`, controlada pelo `useDarkMode`, e não pela preferência do sistema operativo depois de o utilizador escolher um tema.

#### Scenario: Alternar tema
- **WHEN** o utilizador carrega no botão sol/lua da Navbar
- **THEN** a classe `dark` é alternada no `<html>`, todas as utilities `dark:` mudam de acordo, e a escolha persiste após recarregar

#### Scenario: Preferência do sistema ignorada após escolha
- **WHEN** o sistema operativo está em dark e o utilizador escolheu o tema light
- **THEN** a página é renderizada em light

### Requirement: Container centrado
A utility `container` SHALL continuar a centrar o conteúdo com padding horizontal de 2rem e largura máxima de 1400px no breakpoint `2xl`.

#### Scenario: Layout do About e do Container em desktop
- **WHEN** a página é aberta com 1440px de largura
- **THEN** as secções que usam `container`/`md:container` estão centradas, com a mesma largura e padding que na baseline

### Requirement: Animações preservadas
As animações personalizadas (`marquee`, `marquee-vertical`, `spin-around`, `slide`), as animações de entrada e saída do navigation menu e o `BlurFade` SHALL continuar a funcionar.

#### Scenario: Marquee em movimento
- **WHEN** a secção com o Marquee está visível
- **THEN** as linhas deslocam-se continuamente com as durações `[--duration:20s]`/`[--duration:30s]`, e param no hover

#### Scenario: BlurFade ao entrar no viewport
- **WHEN** uma secção envolvida em `BlurFade` entra no viewport
- **THEN** o conteúdo aparece com o fade e o blur de antes

### Requirement: Timeline de experiência
A timeline de experiência SHALL ser renderizada com os estilos da biblioteca e os `contentStyle`/`iconStyle` dependentes do tema, como antes.

#### Scenario: Timeline em ambos os temas
- **WHEN** a secção Experience é vista em light e em dark
- **THEN** os cartões, as setas, os ícones e as tags de tecnologias têm as cores de cada tema, e o subtítulo mantém `font-light`, `text-sm` e a margem negativa

### Requirement: Internacionalização intacta
A troca de idioma SHALL continuar a funcionar com o i18next 26 e o react-i18next.

#### Scenario: Trocar idioma
- **WHEN** o utilizador carrega no botão PT/EN
- **THEN** todos os textos traduzidos mudam para o outro idioma, sem chaves em bruto visíveis
