## 1. Tokens e motion

- [x] 1.1 Atualizar `:root` e `.dark` em `src/index.css` com a tabela V2: novos valores e os tokens `accent`, `spark`, `pulse`, `ok-bg`/`ok-text` e `lock-bg`/`lock-text`. `btn-bg`/`btn-text` passam a aliases de `fg`/`bg`. Expor tudo em `@theme inline`
- [x] 1.2 Substituir `--glow` pelos gradientes V2, adicionar `--cta-glow` e a classe `cta-glow`, e renomear a animação de fundo para `drift` (18s alternate)
- [x] 1.3 Ajustar os keyframes: `rise` (0.5s, blur 6px, 6px) com atrasos de 0.04/0.12/0.20/0.28s, `reveal` (blur 6px, 12px, sem scale, `cover 20%`), `ping` para os pontos verdes, e hover do `.card` a −4px com a sombra `.08`
- [x] 1.4 Remover `nav-link::after`, `.xp-row` e os tokens `btn2-bg` e `cta-*`. Confirmar com `grep` que não sobra nenhuma referência em `src/`

## 2. Botões Magic UI

- [x] 2.1 Num branch limpo, correr `npx shadcn@latest add` para `shimmer-button`, `interactive-hover-button` e `pulsating-button` do registo do Magic UI. Rever o diff e reverter qualquer alteração fora de `src/components/ui/` e qualquer pacote novo
- [x] 2.2 Mover os keyframes dos componentes para `src/index.css`, sob o bloco de `prefers-reduced-motion`
- [x] 2.3 Adaptar o `ShimmerButton` aos tokens (`fg`/`bg`/`spark`) e às medidas do canvas (pill, 50px, 15px semibold, brilho cónico de 3s, hover −1px)
- [x] 2.4 Adaptar o `InteractiveHoverButton`: ponto `fg` que se expande, texto que sai, cópia `bg` com → e `aria-hidden`, e fundo configurável (`surface`/`bg`)
- [x] 2.5 Adaptar o `PulsatingButton`: fundo `fg`, anel `pulse` de 8px em ciclos de 1.6s, altura 52px
- [x] 2.6 Tornar os três polimórficos (`href` → `<a>`, sem `href` → `<button type="button">`), com tipos de união e foco visível

## 3. Header

- [x] 3.1 Mostrar o logótipo "Kelman." (ponto `text-accent`) em todos os tamanhos, como link para `#about`
- [x] 3.2 Pôr os links a 14px `muted`, com gap de 26px e hover de opacidade 0.6. Raio do contentor a 18px, botões de ícone a 12px, sticky a 16px do topo
- [x] 3.3 Manter a linha de ícones sociais no painel móvel e aplicar raio 18px e fundo `surface`/borda `line` ao painel

## 4. Hero

- [x] 4.1 H1 a 80px/48px, peso 800, `leading-none`, −0.045em, "Sou o" em `faint` peso 700. Coluna até 780px, parágrafo 19px/1.7 até 600px, `pt` de 120px
- [x] 4.2 Trocar os CTAs por `ShimmerButton href="#contact"` e `InteractiveHoverButton href="#projects"` (fundo `surface`)
- [x] 4.3 Faixa de números com `mt` de 88px e raio 22px, com divisores horizontais a ≤900px

## 5. Timeline

- [x] 5.1 Reescrever `Timeline` como lista vertical: grid `170px 24px 1fr`, marcador com ponto de 11px e linha de 1px (sem linha na última entrada) e conteúdo com cargo, empresa · local e chips
- [x] 5.2 Ponto verde cheio com `ping` na entrada atual (TeamIt), e borda `faint` com interior `bg` nas restantes
- [x] 5.3 Layout a ≤900px: `24px 1fr`, data por cima do cargo, marcador em `row-span-2`

## 6. Projetos e Setor público

- [x] 6.1 Aspect ratio por `span` (16:9 nos de 3 colunas, 16:10 nos de 2) e raio 22px
- [x] 6.2 Cartões de 3 colunas: "com Paradis Labs" à direita do título, e chips e "Ver projeto" na mesma linha
- [x] 6.3 Setor público: pill de estado com ponto (`ok-*`/`lock-*`) e ano no topo, sem ícone nem borda tracejada. Selo do bloco com `surface` e borda, `mt` de 88px, h3 a 28px, caixa "Resultado" com raio 14px

## 7. Tech Stack

- [x] 7.1 Reescrever `TechStack` como linhas `200px 1fr` com divisores `line` (incluindo o de cima): etiqueta em maiúsculas 13px/600/0.06em `muted`, e pills rounded-full com `surface`, borda `line`, 14px/500
- [x] 7.2 Empilhar a etiqueta e as pills a ≤900px. Remover o `size="md"` do `Chip` se deixar de ser usado

## 8. Contacto

- [x] 8.1 Cartão centrado com `surface`, `cta-glow`, borda `line`, raio 28px e padding de 72px por 32px. Título 60px/48px peso 800 −0.045em, subtítulo 18px até 520px
- [x] 8.2 "Agendar conversa" como `PulsatingButton` (botão, abre o Calendly, ícone de calendário) e "Enviar email" como `InteractiveHoverButton href="mailto:…"` com `title` e fundo `bg`

## 9. Secções e limpeza

- [x] 9.1 Ajustar o `Section` (h2 −0.035em, margem inferior de 40px) e o padding de cada secção ao canvas (72px na Timeline e nos Projetos, 112px na Tech Stack e no Contacto)
- [ ] 9.2 Decidir o valor do `faint` light (canvas #9AA2B4 ou ≥3:1) e registar a decisão no `design.md`

## 10. Verificação

- [x] 10.1 `npm run lint` e `npm run build` sem erros
- [ ] 10.2 Comparar com o canvas em light e dark a 1440px e a 390px, em PT e EN: sem scroll horizontal a 360px e sem texto cortado
- [ ] 10.3 Testar o teclado (Tab por todos os CTAs, Enter abre o Calendly, Escape fecha o menu móvel), `prefers-reduced-motion` e um browser sem `animation-timeline` (Firefox)
