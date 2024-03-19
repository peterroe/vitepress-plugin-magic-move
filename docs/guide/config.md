# Config

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
