## Context

A entrada `farwell` em `src/sections/Projects/index.tsx` não tem `image` nem `url`, com o comentário "Site is down". O cartão já trata os dois campos como opcionais. Com eles definidos, mostra a imagem e o link sem outra mudança no componente.

As outras 4 capturas estão em `src/assets/projects/<id>.webp`, a 1280×800 em WebP (25–55 KB). Foram tiradas a 1440×900 e convertidas com `npx sharp-cli`, como explica o design de `replace-showcase-projects`. Uma captura de teste da Farwell com o Chrome headless a 1440×900 saiu limpa, sem banner de cookies, publicidade nem animações por correr.

## Goals / Non-Goals

**Goals:**
- Pôr a Farwell ao nível dos outros 4 cartões, com captura e link.
- Manter a convenção de imagens existente (local, formato, tamanho, import).

**Non-Goals:**
- Mudar a descrição da Farwell (ver Open Questions).
- Refazer as capturas dos outros projetos.
- Mudar o layout do cartão.

## Decisions

**Capturar com o Chrome headless diretamente, sem Puppeteer.** O site não tem ruído que precise de scripting, por isso basta `--headless=new --window-size=1440,900 --force-device-scale-factor=1 --hide-scrollbars --virtual-time-budget=8000 --screenshot`. A captura fica no scratchpad, fora do repo. A alternativa era reutilizar o script Puppeteer descartável, que já não existe e seria excessivo aqui.

**Converter para `farwell.webp` a 1280×800, qualidade ~80, com `npx sharp-cli`.** É a mesma convenção dos outros 4. O objetivo é ficar abaixo de ~120 KB. A hero do site tem uma fotografia e um gradiente, por isso o ficheiro deve ficar acima dos outros, mas dentro do limite.

**Importar a imagem no componente.** O Vite trata do hash e uma imagem em falta dá erro no build.

**Cenário "Projeto sem URL" passa a ser genérico.** O comportamento continua no código e na spec, mas sem nenhum projeto sem URL como exemplo. Acrescenta-se um cenário próprio para a Farwell com captura e link.

## Risks / Trade-offs

- [O site volta a cair depois do deploy e o link fica partido] → É o mesmo risco que os outros 4 links já correm. Se acontecer, basta remover `url`.
- [O delta MODIFIED parte do requisito "Projetos" em `apply-portfolio-v2-canvas`, que ainda não foi arquivada] → Arquivar `apply-portfolio-v2-canvas` antes desta change. Se a ordem for outra, o texto do requisito volta à versão anterior ao canvas.
- [A hero mostra uma fotografia de pessoas] → É uma imagem pública do próprio site do cliente, usada como captura de marketing, como nas outras capturas.

## Open Questions

- A descrição atual ("Site institucional e portfólio da Farwell Angola.") é genérica. O site mostra uma distribuidora farmacêutica e hospitalar, com catálogo e área de clientes. Fica como está nesta change. Se for para mudar, faz-se num ajuste à parte ou acrescenta-se aqui antes de implementar.
