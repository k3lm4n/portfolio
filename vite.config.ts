import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'fs'
import path from 'path'

const SITE_URL = 'https://k3lm4n.paradis.host'

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Emits dist/pt/index.html from the built (English) index.html, swapping the
// static metadata for the Portuguese one so crawlers that don't run JS get it.
function localizedHtml(): Plugin {
  return {
    name: 'localized-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const page = bundle['index.html']
      if (!page || page.type !== 'asset') return this.error('index.html not found in bundle')

      const localePath = path.resolve(import.meta.dirname, 'src/i18n/locales/pt.json')
      const { meta } = JSON.parse(readFileSync(localePath, 'utf-8')) as {
        meta: { title: string; description: string; imageAlt: string }
      }
      const url = `${SITE_URL}/pt/`
      const image = `${SITE_URL}/og-pt.png`

      const attr = (key: 'name' | 'property', id: string) =>
        new RegExp(`(<meta\\s+${key}="${id}"\\s+content=")[^"]*(")`)
      const replacements: [RegExp, string][] = [
        [/(<html lang=")en(")/, 'pt-PT'],
        [/(<title>)[^<]*(<\/title>)/, meta.title],
        [/(<link rel="canonical" href=")[^"]*(")/, url],
        [attr('name', 'description'), meta.description],
        [attr('property', 'og:url'), url],
        [attr('property', 'og:title'), meta.title],
        [attr('property', 'og:description'), meta.description],
        [attr('property', 'og:image'), image],
        [attr('property', 'og:image:alt'), meta.imageAlt],
        [attr('property', 'og:locale'), 'pt_PT'],
        [attr('property', 'og:locale:alternate'), 'en_US'],
        [attr('name', 'twitter:title'), meta.title],
        [attr('name', 'twitter:description'), meta.description],
        [attr('name', 'twitter:image'), image],
      ]

      let html = String(page.source)
      for (const [pattern, value] of replacements) {
        if (!pattern.test(html)) return this.error(`localized-html: no match for ${pattern}`)
        html = html.replace(pattern, (_, before: string, after: string) => before + escapeAttr(value) + after)
      }

      this.emitFile({ type: 'asset', fileName: 'pt/index.html', source: html })
    },
  }
}

// `vite preview` (used in production) would serve the SPA fallback for /pt;
// redirect it to /pt/ so the Portuguese static HTML is the one served.
function ptTrailingSlash(): Plugin {
  return {
    name: 'pt-trailing-slash',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname, query] = (req.url ?? '').split(/\?(.*)/s)
        if (pathname !== '/pt') return next()
        res.statusCode = 301
        res.setHeader('Location', query ? `/pt/?${query}` : '/pt/')
        res.end()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    watch:{
      usePolling: true
    }
  },
  preview:{
    allowedHosts:["k3lm4n.paradis.host"]
  },
  plugins: [react({
    include:"**/*.tsx"
  }), tailwindcss(), localizedHtml(), ptTrailingSlash()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
