import { builtinModules } from 'module'
import { defineConfig } from 'tsup'

import pkg from './package.json'

export default defineConfig({
  entry: {
    'vitepress-plugin-magic-move': 'src/index.ts',
  },
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  external: [...builtinModules, ...Object.keys(pkg.dependencies || {})],
  dts: true,
  publicDir: 'src/public',
})
