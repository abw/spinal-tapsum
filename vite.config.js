import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/spinal-tapsum.local.wardley.org.key'),
  cert: fs.readFileSync('etc/certs/spinal-tapsum.local.wardley.org.crt'),
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  root: 'web',
  base: '/',
  envDir: '../',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../demo'
  },
  server: {
    host: 'spinal-tapsum.local.wardley.org',
    port: 3011,
    https
  }
})

