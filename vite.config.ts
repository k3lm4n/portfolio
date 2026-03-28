import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
