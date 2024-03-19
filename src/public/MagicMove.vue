<script setup lang="ts">
import { ref } from 'vue'
import { ShikiMagicMovePrecompiled } from 'shiki-magic-move/vue'
const props = defineProps<{
  stepsLz: string
  stepRanges: string[][]
}>()

function generateRandomString(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}
const elementId = generateRandomString(6)
const content = JSON.parse(decodeURIComponent(props.stepsLz))

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
.language-magic-move .block :deep(pre.shiki-magic-move-container) {
  padding-left: 24px;
  padding-right: 24px;
  overflow-y: hidden !important;
}
</style>
