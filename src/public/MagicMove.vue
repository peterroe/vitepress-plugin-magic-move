<script setup lang="ts">
import lz from 'lz-string'
import { ref } from 'vue'
import { ShikiMagicMovePrecompiled } from 'shiki-magic-move/vue'
import { customAlphabet } from 'nanoid'
const props = defineProps<{
  stepsLz: string
  stepRanges: string[][]
}>()
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10)
const elementId = nanoid()
const id = 'id'
const content = JSON.parse(lz.decompressFromBase64(props.stepsLz))

console.log({ content })

const step = ref(0)

const toggle = (i: number) => {
  step.value = i
}
</script>

<template>
  <div class="language-magic-move vp-code-group">
    <div class="tabs">
      <template v-for="(item, index) in content">
        <input :id="elementId + index" :name="elementId" :checked="index === 0" type="radio" @click="toggle(index)">
        <label :for="elementId + index" flex items-center>
          <div inline-block align-middle w-1.2em h-1.2em class="lang-icon" />
          {{ item.fileName }}
        </label>
      </template>
    </div>
    <div class="block">
      <ShikiMagicMovePrecompiled :steps="content" :step="step" />
    </div>
  </div>
</template>

<style scoped>
.block {
  display: block;
  min-width: 100%;
  overflow-x: auto;
  line-height: var(--vp-code-line-height);
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-block-color);
  transition: color 0.5s;
}
.tabs {
  background-color: transparent !important;
}

.language-magic-move {
  overflow-x: hidden !important;
}
.language-magic-move :deep(pre) {
  padding-left: 24px;
  padding-right: 24px;
  overflow-y: hidden !important;
}
</style>
