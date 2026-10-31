## 1. Captura

- [x] 1.1 Confirmar que https://farwell.co.ao/ responde com HTTP 200
- [x] 1.2 Capturar o site com o Chrome headless a 1440×900 (`deviceScaleFactor` 1, sem scrollbars) para o scratchpad e confirmar visualmente que a captura está limpa
- [x] 1.3 Converter para `src/assets/projects/farwell.webp` a 1280×800, qualidade ~80, com `npx sharp-cli`, e confirmar que fica abaixo de ~120 KB

## 2. Componente

- [x] 2.1 Em `src/sections/Projects/index.tsx`, importar `farwellImg` de `@/assets/projects/farwell.webp`
- [x] 2.2 Na entrada `farwell`, acrescentar `image: farwellImg` e `url: "https://farwell.co.ao/"`, no mesmo formato multi-linha das outras entradas, e remover o comentário "Site is down"

## 3. Verificação

- [x] 3.1 Correr `npm run build` e `npm run lint` sem erros
- [x] 3.2 Validar no browser a 1440px e a 390px, em claro e escuro: o cartão da Farwell mostra a captura 16:10 sem distorção e "Ver projeto" abre https://farwell.co.ao/ num novo separador
