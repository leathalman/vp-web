<script setup>
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <div class="flex flex-col">
    <textarea
        class="resize-none"
        ref="textarea"
        v-model="input"
        placeholder="I would love to hear your thoughts. What can I do to help?"
    />
    <div class="mt-4">This is the bar with icons and stuff...</div>

  </div>
</template>

<!--Set some max-height for textarea, but this is a good proof of concept-->
<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: 300px;
  background-color: transparent;
  color: #BEC1C5;

  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

textarea::placeholder {
  color: #BEC1C5;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>