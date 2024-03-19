import type { PluginOption } from 'vite'

// export interface MermaidConfig {
//   [x: string]: any;
// }

// Additional configuration for plugin itself. Separate model, not to risk name conflicts with future MermaidConfig options
export interface MermaidPluginConfig {
  class?: string
}

const DEFAULT_OPTIONS = {
  // We set loose as default here because is needed to load images
  securityLevel: 'loose',
  startOnLoad: false,
}

export default function MermaidPlugin(): PluginOption {
  const virtualModuleId = 'virtual:mermaid-config'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-mermaid',
    enforce: 'post',

    transform(src, id) {
      // Register Mermaid component in vue instance creation
      if (id.includes('vitepress/dist/client/app/index.js')) {
        src
          = `\nimport MagicMove from 'vitepress-plugin-magic-move/MagicMove.vue';\n${
           src}`

        const lines = src.split('\n')

        const targetLineIndex = lines.findIndex(line =>
          line.includes('app.component'),
        )

        lines.splice(
          targetLineIndex,
          0,
          '  app.component("MagicMove", MagicMove);',
        )

        src = lines.join('\n')

        return {
          code: src,
          map: null, // provide source map if available
        }
      }
    },

    // async resolveId(id) {
    //   if (id === virtualModuleId)
    //     return resolvedVirtualModuleId
    // },
    // async load(this, id) {
    //   if (id === resolvedVirtualModuleId)
    //     return `export default ${JSON.stringify(options)};`
    // },
  }
}
