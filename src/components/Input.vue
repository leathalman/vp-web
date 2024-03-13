<script setup>
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize();

function checkForNewline() {
  if (this.input.includes("\n")) {
    // call Firebase here and save data
    const data = this.input;
    this.input = "";
    saveData(data);
  }
}

function submitPressed() {
  const data = this.input;
  this.input = "";
  saveData(data);
}

function saveData(data) {
  if (data === "" || data === "\n" || data === undefined || data === null) {
    console.log("Nothing to save.")
  } else {
    // save to Firebase here
    console.log(data);
  }
}

</script>

<template>
  <div class="flex flex-col">
    <textarea
        class="resize-none user-input "
        ref="textarea"
        v-model="input"
        placeholder="I would love to hear your thoughts."
        @input="checkForNewline(input)"
    />
    <div class="flex flex-row mt-6 items-end">
      <div class="justify-self-start">
        <input class="user-input" type="text" id="name" placeholder="Name (Optional)"></input>
        <input class="user-input ml-7" type="text" id="email" placeholder="Email (Optional)"></input>
      </div>
      <button class="ml-auto" id="user_input" @click="submitPressed()">Submit</button>
    </div>
  </div>
</template>

<!--Set some max-height for textarea, but this is a good proof of concept-->
<style scoped>
.user-input {
  background-color: transparent;
  color: #BEC1C5;

  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: 250px;
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

input {
  min-width: 100px;
  width: 120px;
}

input::placeholder {
  color: #BEC1C5;
}

@media(max-width: 700px) {
  input {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  textarea {
    min-height: 50px;
  }
}
</style>