## Context

O título e a description vivem em dois sítios: `meta.*` nos locales (a fonte para o `document.title` em runtime e para o `dist/pt/index.html`, gerado pelo plugin `localized-html`) e o `index.html` em inglês, escrito à mão. A spec obriga a que os dois coincidam. O JSON-LD só existe no `index.html` e é copiado sem alterações para `/pt/`.

O tráfego real de um portfolio pessoal vem de pesquisas pelo nome ou pelo alias e de links partilhados (LinkedIn, CV), não de keywords genéricas como "full-stack developer". Por isso a copy tem de confirmar a identidade e convencer quem clica.

## Goals / Non-Goals

**Goals:**
- Um snippet que não repete o título e mostra senioridade, stack e o tipo de trabalho.
- O alias `k3lm4n` ligado ao nome nos resultados de pesquisa.
- Nenhuma localização no SEO, incluindo o JSON-LD.

**Non-Goals:**
- Mudar o texto visível do hero (o badge com "TeamIt · Lisbon" fica).
- Traduzir "Full-stack Developer" no título PT.
- Nomear portais ou dar números de utilizadores.
- Gerar o `index.html` EN a partir do `en.json`.

## Decisions

**Copy final**

| Campo | EN | PT |
|---|---|---|
| title (45) | Kelman Santos (k3lm4n) · Full-stack Developer | igual |
| description | Full-stack Developer with 5+ years building web products in React, Next.js, Node.js and GraphQL, including public-sector portals. (129) | Full-stack Developer com mais de 5 anos a criar produtos web com React, Next.js, Node.js e GraphQL, incluindo portais do setor público. (135) |

- **Alias entre parênteses no título.** Liga "k3lm4n" a "Kelman Santos" sem passar dos ~60 caracteres. Alternativa rejeitada: pôr o alias só no JSON-LD, que o Google não mostra no snippet.
- **A description começa pelo papel, não pelo nome.** O nome já está no título, e os ~135 caracteres ficam livres para provas.
- **"5+ years" em vez de "5 years".** Coincide com o facto do hero ("5+") e não fica desatualizado tão depressa.
- **Setor público sem nomes nem números.** Foi uma decisão do utilizador. "used by millions" ficou de fora por não ser verificável.
- **`og:image:alt` não muda.** "Kelman Santos, Full-stack Developer" já cumpre a regra.
- **Tirar `address` em vez de o esconder.** Não há outro campo de localização no `Person`, e `jobTitle`, `sameAs` e `alternateName` chegam para a entidade.

## Risks / Trade-offs

- [O `index.html` EN e o `en.json` podem divergir, porque continuam escritos à mão] → a tarefa de verificação compara os dois. Gerar o EN pelo plugin fica para outra change.
- [O LinkedIn e o Facebook mostram a pré-visualização antiga em cache] → depois do deploy, voltar a passar `/` e `/pt/` pelo Post Inspector e pelo Sharing Debugger.
- [O hero continua a mostrar Lisboa, e o Google pode usá-lo] → aceite: a regra cobre só os metadados.
- [O título fica igual em EN e PT] → aceite: "Full-stack Developer" também é o termo usado pelos recrutadores em PT.
