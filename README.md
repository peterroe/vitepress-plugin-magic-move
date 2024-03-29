## vitepress-plugin-magic-move

[shiki-magic-move](https://github.com/shikijs/shiki-magic-move) for vitepress

Document: https://peterroe.github.io/vitepress-plugin-magic-move/

## Install

Install dependencies first

```bash
pnpm i vitepress-plugin-magic-move shiki-magic-move
```

Then add plugin to `.vitepress/config.ts`

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { withMagicMove } from 'vitepress-plugin-magic-move'

export default withMagicMove(defineConfig({
  // your config
}))
```

And add css style in `.vitepress/theme/index.ts`

```ts
// .vitepress/theme/index.ts
import 'shiki-magic-move/style.css'

export default {
  // ...
}
```

## Usage

````md
:::magic-move
```ts
// code here
```
```ts
// code here
```
```ts
// ...
```
:::
````
