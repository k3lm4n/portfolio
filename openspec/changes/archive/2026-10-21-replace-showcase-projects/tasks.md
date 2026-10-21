## 1. Capturas de ecrã

- [x] 1.1 Escrever no scratchpad um script Puppeteer descartável que captura cada site a 1440×900: recusar o banner de cookies da Génesis, esconder a faixa "Publicidade" da Ficha Segura e esperar que os contadores do Kale terminem a animação
- [x] 1.2 Capturar Génesis Sport Club, Kitenda, Ficha Segura e Kale, e confirmar visualmente que nenhuma tem banners, publicidade ou contadores a "0+"
- [x] 1.3 Converter para `src/assets/projects/<id>.webp` a 1280×800, qualidade ~80 (`sharp`, instalado só no scratchpad), e confirmar que cada ficheiro fica abaixo de ~120 KB

## 2. Dados e componente

- [x] 2.1 Em `src/sections/Projects/index.tsx`, mudar a union de ids para `"genesis" | "kitenda" | "fichaSegura" | "kale" | "farwell"` e acrescentar `roles: string[]` e `paradis?: boolean` ao tipo `Project`
- [x] 2.2 Reescrever o array `projects` pela ordem Génesis, Kitenda (span 3), Ficha Segura, Kale, Farwell (span 2), com papéis, `paradis`, imagens importadas e URLs conforme a spec. A Farwell fica sem `image` e sem `url`
- [x] 2.3 Entre o título e a descrição do cartão, renderizar uma linha `flex-wrap` com os papéis em `Chip` (sm) e, quando `paradis` for verdadeiro, a menção `t("projects.paradis")` em `muted` precedida de "·"
- [x] 2.4 Acrescentar ao `<img>` `loading="lazy"`, `decoding="async"` e `width`/`height` (1280×800)

## 3. i18n

- [x] 3.1 Em `pt.json` e `en.json`, substituir `projects.items` pelos 5 novos projetos com o nome e as descrições curtas da spec
- [x] 3.2 Acrescentar `projects.paradis` ("com Paradis Labs" / "with Paradis Labs")
- [x] 3.3 Confirmar que não há referências às chaves antigas (`venator`, `messierNotes`, `smoothPlayer`, `socialMate`)

## 4. Verificação

- [x] 4.1 `npm run build` e `npm run lint` sem erros
- [x] 4.2 Validar no browser a 1440px e a 390px, em PT e EN e em modo claro e escuro: ordem e destaque, chips, menção à Paradis só nos 3 projetos, "Ver projeto" a abrir num novo separador, e a Farwell com placeholder e sem link
- [ ] 4.3 Pendente: quando o site da Farwell Angola voltar, capturar a imagem e acrescentar `image` e `url` (https://farwell.co.ao/)
