## 1. Imagens OG

- [x] 1.1 No canvas, exportar o artboard "Imagem OG" como PNG 1200×630 com o Tweak `lang` em `en` e o tema `dark`, e guardar como `public/og-en.png`
- [x] 1.2 Repetir com `lang` em `pt` e guardar como `public/og-pt.png`
- [x] 1.3 Confirmar que cada PNG tem 1200×630 e menos de 300 KB (otimizar se for preciso) e apagar `public/og-image.png`

## 2. HTML fonte e sitemap

- [x] 2.1 Em `index.html`, trocar `og-image.png` por `og-en.png` em `og:image` e `twitter:image` e acrescentar os três `<link rel="alternate" hreflang>` (en, pt-PT, x-default)
- [x] 2.2 Atualizar `public/sitemap.xml` com as duas `<url>` (`/` e `/pt/`), cada uma com os alternates `xhtml:link` (en, pt-PT, x-default)

## 3. Plugin de build

- [x] 3.1 Em `vite.config.ts`, criar o plugin `localized-html` (`apply: "build"`, `generateBundle`) que lê o `index.html` emitido e emite `pt/index.html` com as substituições do design (lang, título, description, OG, Twitter, canonical, `og:url`, `og:image`, `og:locale` trocado, `og:image:alt`), com os textos de `pt.json`
- [x] 3.2 Fazer o plugin falhar o build (`this.error`) se algum alvo de substituição não for encontrado
- [x] 3.3 `npm run build` e confirmar com diff que `dist/pt/index.html` só difere de `dist/index.html` nos campos previstos

## 4. Idioma pela URL

- [x] 4.1 Em `src/i18n/index.ts`, pôr `path` primeiro em `detection.order` com `lookupFromPathIndex: 0`
- [x] 4.2 No `syncDocument`, sincronizar a URL (`/` ou `/pt/`) com `history.replaceState`, mantendo `search` e `hash`
- [x] 4.3 Confirmar que a troca no header continua a funcionar sem mudanças no `Header`

## 5. Hosting

- [x] 5.1 Em `firebase.json`, acrescentar o rewrite `/pt/**` → `/pt/index.html` antes de `**` e `"trailingSlash": true`
- [x] 5.2 Com `vite preview`, confirmar com `curl` que `/pt/` serve o HTML PT, que `/pt` redireciona para `/pt/` e que `/og-en.png` e `/og-pt.png` respondem `200`

## 6. Verificação

- [x] 6.1 `npm run lint` e `npm run build` sem erros
- [ ] 6.2 No browser: em `/`, trocar para PT muda a URL para `/pt/` sem reload e mantém o `#hash`; abrir `/pt/` diretamente mostra PT; voltar a EN regressa a `/`
- [ ] 6.3 Depois do deploy, validar `/` e `/pt/` no LinkedIn Post Inspector e testar o hreflang com o Rich Results Test ou a Search Console
- [x] 6.4 Responder e resolver no canvas a thread sobre OG PT e EN no código
