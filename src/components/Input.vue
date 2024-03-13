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
    <div class="flex flex-row mt-4 place-self-end">
      <button id="user_input" @click="console.log('hello')">Submit</button>
    </div>

  </div>
</template>

<!--Set some max-height for textarea, but this is a good proof of concept-->
<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: 250px;
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

button {
  color: #BEC1C5;
  background-color: #171719;
  border-radius: 8px;
  padding: 0.35rem 1rem;
}
</style>