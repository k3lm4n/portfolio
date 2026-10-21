## 1. Dependência e constantes

- [x] 1.1 `npm install react-calendly@4.4.0` sem `--legacy-peer-deps` (se falhar por peers, parar e reavaliar)
- [x] 1.2 Adicionar `CALENDLY_URL` a `src/contants/links.ts`

## 2. Bloco de Contacto

- [x] 2.1 Chaves i18n `contact.schedule` e `contact.email` em pt e en (substituem `contact.button`)
- [x] 2.2 Em `sections/Contact`: botão primário "Agendar conversa" (`CalendarDays`) que abre o `PopupModal` controlado, renderizado só depois do primeiro clique, com `rootElement` `#root`
- [x] 2.3 Botão secundário "Enviar email" (`Mail`, transparente, borda `cta-muted`, 54px) com `mailto:` e `title` com o endereço; remover o `<span>` com o email

## 3. Coerência com o redesign

- [x] 3.1 Atualizar `redesign-portfolio-v2` (proposal, design e tasks) para não dizerem que o Calendly é removido

## 4. Verificação

- [x] 4.1 `npm run lint` e `npm run build` sem erros
- [ ] 4.2 Verificação manual: o modal abre e fecha (botão de fechar e clique fora), os botões quebram de linha a 360px, o `mailto` funciona, tudo em pt/en e light/dark
