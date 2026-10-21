## Context

`src/sections/Projects/index.tsx` define um array `projects` de `{ id, span, image?, url? }`, com `id` como union fechada. Os textos (`name`, `description`) vêm de `projects.items.<id>` no i18n. O cartão já mostra uma imagem quando existe `image`, cai para um placeholder `thumb` com o nome, e só mostra "Ver projeto" quando há `url`. Falta onde mostrar o papel e a parceria com a Paradis Labs.

`src/assets/` foi apagado no redesign, por isso não há convenção ativa para imagens. As capturas foram tiradas com o Chrome headless a 1440×900 (16:10, a mesma proporção da área de imagem do cartão). Saíram com ruído: o banner de cookies na Génesis, a faixa "Publicidade" na Ficha Segura e os contadores do Kale em "0+" porque a animação não tinha corrido. O site da Farwell Angola está em baixo (HTTP 500/406).

## Goals / Non-Goals

**Goals:**
- Trocar os 5 projetos e o destaque conforme a spec.
- Mostrar os papéis e a menção à Paradis Labs sem mudar o layout do cartão.
- Ter capturas limpas e leves para os 4 sites que estão no ar.

**Non-Goals:**
- Logo ou link da Paradis Labs (fica só a menção em texto).
- Página de detalhe por projeto, filtros por papel ou carrossel de imagens.
- Mudanças no bloco "Setor público".

## Decisions

**Papéis e Paradis Labs como dados no array, não no i18n.** O tipo ganha `roles: string[]` e `paradis?: boolean`. Os nomes dos papéis (CMS, DevOps, QA, Frontend) são iguais nas duas línguas, por isso pô-los no i18n só duplicava texto. A menção usa uma única chave i18n, `projects.paradis` ("com Paradis Labs" / "with Paradis Labs"). A alternativa era meter o papel dentro da descrição, mas ficava ilegível em leitura rápida e misturava produto com contribuição.

**Reutilizar `Chip` (size `sm`) para os papéis.** Já é o padrão da Timeline e do Setor público, e mantém o sistema visual. Os chips e a menção ficam numa linha com `flex-wrap` entre o título e a descrição. A menção vai em texto `muted`, separada por "·", sem pill para não competir com os chips.

**Novos ids:** `"genesis" | "kitenda" | "fichaSegura" | "kale" | "farwell"`. A chave `kale` mantém-se no i18n e só muda o texto. As chaves de Venator, Messier Notes, Smooth Player e Social Mate são removidas.

**Imagens em `src/assets/projects/<id>.webp`, importadas no componente.** Assim o Vite trata do hash e do cache-busting, e uma imagem em falta dá erro no build em vez de uma imagem partida em produção. Ficam a 1280×800, em WebP com qualidade ~80, com o objetivo de ficarem abaixo de ~120 KB cada. A conversão é feita uma vez com `npx sharp-cli` (não há `cwebp` nem ImageMagick na máquina), sem nova dependência no `package.json`. Os `<img>` levam `loading="lazy"`, `decoding="async"` e `width`/`height`, para evitar layout shift.

**Capturas refeitas com um script Puppeteer descartável, no scratchpad e fora do repo.** O script carrega cada site a 1440×900 com `deviceScaleFactor: 1` e espera pela rede. Antes de capturar, recusa o banner de cookies da Génesis, esconde por CSS a faixa de publicidade da Ficha Segura e espera que os contadores do Kale terminem (ou faz scroll até eles para disparar a animação). A alternativa era recortar as capturas atuais, mas isso perde a proporção 16:10 e não resolve os contadores.

**Farwell Angola sem `image` nem `url`.** O cartão usa o placeholder já existente. Pôr o link com o site em baixo mostraria um link partido. Quando o site voltar basta acrescentar `image` e `url` ao array.

## Risks / Trade-offs

- [Os sites mudam e as capturas ficam desatualizadas] → São capturas de marketing, não espelhos. Dá para refazê-las com o mesmo script quando for preciso.
- [A Farwell continua em baixo durante muito tempo] → O cartão fica funcional com o placeholder. Fica registado como pendente nas tasks e não bloqueia o resto.
- [O delta MODIFIED depende de um requisito que só existe em `redesign-portfolio-v2`] → Arquivar `redesign-portfolio-v2` antes desta change.
- [Seletores do banner de cookies ou da publicidade mudam] → O script é descartável. Se um seletor falhar, ajusta-se na hora e confirma-se a captura visualmente antes de a commitar.
