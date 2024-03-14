<script setup>
import { ref } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
import { saveData } from "../firebase/firebase-manager.js";
import { uuid } from "vue-uuid";

const { textarea, input } = useTextareaAutosize();
const name = ref("");
const email = ref("");
const session_uuid = uuid.v4();

const emit = defineEmits(["didSubmit"]);

function checkNewline() {
  if (
    input.value === "" ||
    input.value === "\n" ||
    input.value === undefined ||
    input.value === null
  ) {
    console.log("Nothing to save.");
    input.value = "";
  } else {
    if (input.value.includes("\n")) {
      saveData(formatData());
      resetFields();
      emit("didSubmit", "true");
    }
  }
}

function submitPressed() {
  if (
    input.value === "" ||
    input.value === "\n" ||
    input.value === undefined ||
    input.value === null
  ) {
    console.log("Nothing to save.");
  } else {
    saveData(formatData());
    resetFields();
    emit("didSubmit", "true");
  }
}

function formatData() {
  return {
    input: input.value.replace("\n", ""),
    name: name.value,
    email: email.value,
    date: new Date().toLocaleString(),
    session_uuid: session_uuid,
  };
}

function resetFields() {
  input.value = "";
  name.value = "";
  email.value = "";
}
</script>

<template>
  <div class="flex flex-col">
    <textarea
      class="resize-none user-input"
      ref="textarea"
      v-model="input"
      placeholder="I would love to hear your thoughts."
      @input="checkNewline"
    />
    <div class="flex flex-row mt-6 items-end">
      <div class="justify-self-start">
        <input
          v-model="name"
          class="user-input"
          type="text"
          id="name"
          placeholder="Name (Optional)"
        />
        <input
          v-model="email"
          class="user-input ml-7"
          type="text"
          id="email"
          placeholder="Email (Optional)"
        />
      </div>
      <button class="ml-auto" id="user_input" @click="submitPressed">
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.user-input {
  background-color: transparent;
  color: #bec1c5;

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
  color: #bec1c5;
}

textarea::-webkit-scrollbar {
  display: none;
}

button {
  color: #bec1c5;
  background-color: #171719;
  border-radius: 8px;
  padding: 0.35rem 1rem;
}

input {
  min-width: 100px;
  width: 140px;
}

input::placeholder {
  color: #bec1c5;
}

@media (max-width: 700px) {
  input {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 120px;
  }

  textarea {
    min-height: 50px;
  }
}
</style>
