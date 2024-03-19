---
title: Guide
description: Getting started
---

# Get Started

[Shiki magic move](https://github.com/shikijs/shiki-magic-move) for vitepress.

## Preview

:::magic-move 
```vue [Options.vue]
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    count: 1
  }),
  computed: {
    double() {
      return this.count * 2
    }
  },
})
</script>

<template>
  <p class="greeting">
    {{ count }} * 2 = {{ doubled }}
  </p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```
```vue [Composition.vue]
<script setup>
import { computed, ref } from 'vue'

const count = ref(1)
const double = computed(() => count.value * 2)
</script>

<template>
  <p class="greeting">
    {{ count }} = {{ doubled / 2 }}
  </p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```
:::

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

example:

````md
:::magic-move 
```vue [Options.vue]
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    count: 1
  }),
  computed: {
    double() {
      return this.count * 2
    }
  },
})
</script>

<template>
  <p class="greeting">
    {{ count }} * 2 = {{ doubled }}
  </p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```
```vue [Composition.ts]
<script setup>
import { computed, ref } from 'vue'

const count = ref(1)
const double = computed(() => count.value * 2)
</script>

<template>
  <p class="greeting">
    {{ count }} = {{ doubled / 2 }}
  </p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```
:::
````
