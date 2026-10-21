## 1. Design no Claude Design

- [x] 1.1 No canvas "Portfólio Kelman Santos" (https://claude.ai/artifact/C1hfMzYTg9KbdKMosRgrbt), criar um frame Favicon 512×512 com o monograma KS em Inter 800, `#f8fafc` sobre `#0f172a`, num quadrado com cantos de cerca de 22%
- [x] 1.2 Rever o monograma a 16 e 32 px, numa tab clara e numa tab escura, e ajustar o peso e o tracking até as letras K e S se distinguirem
- [x] 1.3 Criar um frame OG 1200×630 com o fundo `--bg`, o gradiente `--glow`, o monograma, "Kelman Santos" e "Full-stack Developer · Lisbon", com o texto dentro da área central de 1080×560
- [x] 1.4 Exportar `favicon.svg` com as letras convertidas em paths (sem `<text>`) e `og-image.png` com menos de 300 KB

## 2. Ícones e ficheiros estáticos

- [x] 2.1 Pôr `favicon.svg` e `og-image.png` em `public/` e apagar `public/vite.svg`
- [x] 2.2 Com um script descartável na scratchpad, gerar `favicon.ico` (32), `apple-touch-icon.png` (180, sem cantos arredondados), `icon-192.png` e `icon-512.png` (com as letras dentro de 80% do centro) e commitá-los em `public/`
- [x] 2.3 Criar `public/site.webmanifest` com `name` "Kelman Santos", `short_name` "KS", os ícones 192 e 512 (`purpose: "any maskable"`), `theme_color` `#0f172a` e `background_color` `#f2f4fa`
- [x] 2.4 Criar `public/robots.txt` (`User-agent: *`, `Allow: /`, `Sitemap: https://k3lm4n.paradis.host/sitemap.xml`)
- [x] 2.5 Criar `public/sitemap.xml` com uma única `<url><loc>https://k3lm4n.paradis.host/</loc></url>`

## 3. `<head>` estático

- [x] 3.1 Em `index.html`, substituir o título pelo de EN (`Kelman Santos · Full-stack Developer in Lisbon`) e acrescentar a `<meta name="description">` e o `<link rel="canonical">`
- [x] 3.2 Trocar o `<link rel="icon" href="/vite.svg">` pelos links de `favicon.svg`, `favicon.ico` (`sizes="32x32"`), `apple-touch-icon.png` e `site.webmanifest`
- [x] 3.3 Acrescentar as tags Open Graph e Twitter card com URLs absolutos e `og:image:width`, `og:image:height` e `og:image:alt`
- [x] 3.4 Acrescentar as duas `<meta name="theme-color">` com `media` para os modos claro e escuro
- [x] 3.5 Acrescentar o JSON-LD `Person` (name, alternateName, jobTitle, url, address, e GitHub e LinkedIn em sameAs)
- [x] 3.6 Pôr o `<meta charset>` e o `<meta viewport>` no topo do `<head>`, antes do script do gtag

## 4. Helmet e idioma

- [x] 4.1 Retirar o `HelmetProvider` e o `<Helmet>` de `src/main.tsx`
- [x] 4.2 Desinstalar `react-helmet-async` (`npm uninstall`) e confirmar que o `package-lock.json` foi atualizado
- [x] 4.3 Acrescentar `meta.title` e `meta.description` a `src/i18n/locales/en.json` (iguais ao `index.html`) e a `pt.json` (em português de Portugal)
- [x] 4.4 No listener `languageChanged` de `src/i18n/index.ts`, definir `document.title` e o `content` da meta description, e confirmar que também corre na deteção inicial do idioma

## 5. Verificação

- [x] 5.1 `npm run lint` e `npm run build` sem erros, e `grep -rn "Helmet\|vite.svg" src index.html` sem resultados
- [x] 5.2 Com `npm run preview`, confirmar com `curl` que `/robots.txt`, `/sitemap.xml`, `/og-image.png` e `/site.webmanifest` respondem `200` com o ficheiro real
- [ ] 5.3 No browser, confirmar o favicon na tab, a troca do título EN para PT e a ausência de erros na tab Application > Manifest
- [ ] 5.4 Depois do deploy, validar com o LinkedIn Post Inspector, o Facebook Sharing Debugger e o Schema Markup Validator
