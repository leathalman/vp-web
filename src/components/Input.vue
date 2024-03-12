<script setup>
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<!--https://stackoverflow.com/questions/6262472/multiple-lines-of-input-in-input-type-text-->

<template>
<div class="flex flex-row justify-between m-3">
  This is thing A.
  <textarea
      class="text-black resize-none"
      ref="textarea"
      v-model="input"
      placeholder="What's on your mind?"
  />
<!--  <button class="border-2" @click="increment">count is: {{ count }}</button>-->
</div>
</template>

<!--Set some max-height for textarea, but this is a good proof of concept-->
<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>