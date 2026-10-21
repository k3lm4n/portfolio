## 1. Locales

- [x] 1.1 Em `src/i18n/locales/en.json`, pôr em `meta.title` "Kelman Santos (k3lm4n) · Full-stack Developer" e em `meta.description` a copy EN do design
- [x] 1.2 Em `src/i18n/locales/pt.json`, pôr o mesmo `meta.title` e em `meta.description` a copy PT do design

## 2. HTML fonte

- [x] 2.1 Em `index.html`, atualizar `<title>`, `og:title` e `twitter:title` com o novo título
- [x] 2.2 Em `index.html`, atualizar `meta description`, `og:description` e `twitter:description` com a copy EN, exatamente igual a `en.json`
- [x] 2.3 Em `index.html`, remover o bloco `address` do JSON-LD `Person`

## 3. Verificação

- [x] 3.1 `npm run build` sem erros do plugin `localized-html`
- [x] 3.2 Confirmar que `dist/index.html` e `dist/pt/index.html` têm o título e a description dos respetivos locales, e que cada description tem entre 70 e 160 caracteres
- [x] 3.3 Procurar "Lisbon", "Lisboa" e "addressCountry" no `<head>` dos dois HTML e confirmar que não há resultados
- [ ] 3.4 Passar o JSON-LD pelo Schema Markup Validator e confirmar um `Person` sem erros
- [ ] 3.5 Depois do deploy, passar `/` e `/pt/` pelo LinkedIn Post Inspector e pelo Facebook Sharing Debugger para refrescar a cache
