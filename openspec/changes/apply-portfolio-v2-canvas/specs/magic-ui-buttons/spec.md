## ADDED Requirements

### Requirement: Componentes Magic UI no projeto
O site SHALL ter os componentes `ShimmerButton`, `InteractiveHoverButton` e `PulsatingButton` em `src/components/ui/`, tirados do registo do Magic UI (https://magicui.design) e adaptados aos tokens do projeto. Os componentes SHALL usar só Tailwind, CSS e `cn`, SHALL NOT adicionar dependências de runtime (como `motion`) e SHALL NOT usar cores soltas que existam como token.

#### Scenario: Sem dependências novas
- **WHEN** se compara o `package.json` antes e depois da change
- **THEN** não há nenhuma dependência nova em `dependencies`

### Requirement: Polimórficos entre link e botão
Cada componente SHALL poder ser renderizado como `<a href>` (navegação) ou como `<button type="button">` (ação), mantendo o mesmo aspeto, o foco visível e as props nativas do elemento.

#### Scenario: Link de navegação
- **WHEN** o `ShimmerButton` do hero é renderizado com `href="#contact"`
- **THEN** o DOM tem um `<a href="#contact">` com o efeito shimmer

#### Scenario: Botão de ação
- **WHEN** o `PulsatingButton` do Contacto é renderizado com `onClick`
- **THEN** o DOM tem um `<button type="button">` que responde a Enter e a Espaço

### Requirement: Shimmer Button
O `ShimmerButton` SHALL ser uma pill (altura 50px, padding horizontal 24px, `font-semibold` 15px) com fundo `fg` e texto `bg`, e com um brilho cónico na cor `spark` que roda continuamente à volta da borda (3s, linear). No hover sobe 1px e o brilho interior intensifica-se. No `:active` desce 1px.

#### Scenario: Em light e dark
- **WHEN** o tema alterna
- **THEN** o fundo, o texto e a cor do brilho passam para os valores do tema ativo

### Requirement: Interactive Hover Button
O `InteractiveHoverButton` SHALL ser uma pill com borda `line` e um ponto de 8px na cor `fg` à esquerda do texto. No hover, o ponto expande-se até preencher o botão, o texto sai para a direita e entra por baixo uma cópia do texto na cor `bg`, com uma seta →. A cópia SHALL ter `aria-hidden="true"`, para o nome acessível não aparecer em duplicado. O fundo do botão é configurável (`surface` no hero, `bg` no Contacto).

#### Scenario: Hover
- **WHEN** o cursor passa sobre "Ver projetos"
- **THEN** o botão fica preenchido com a cor `fg` e mostra "Ver projetos →" na cor `bg`

#### Scenario: Leitor de ecrã
- **WHEN** um leitor de ecrã lê o botão
- **THEN** o nome acessível é anunciado uma única vez

### Requirement: Pulsating Button
O `PulsatingButton` SHALL ser uma pill (altura 52px) com fundo `fg` e texto `bg`, rodeada por um anel na cor `pulse` que cresce até 8px e desaparece em ciclos de 1.6s. No hover sobe 1px.

#### Scenario: Pulsação
- **WHEN** o botão está visível e o movimento reduzido está desligado
- **THEN** o anel pulsa continuamente à volta do botão

#### Scenario: Movimento reduzido
- **WHEN** o utilizador tem `prefers-reduced-motion: reduce`
- **THEN** o anel não anima, o shimmer não roda e o hover do Interactive Hover Button muda de estado sem transição
