<script setup>
import { ref } from "vue";

import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
import SubHeader from "@/components/SubHeader.vue";

let shouldShowSuccess = ref(false);

function submitTriggered(value) {
  if (value) {
    shouldShowSuccess.value = true;
    setTimeout(resetSubmitTriggered, 10000);
  }
}

function resetSubmitTriggered() {
  shouldShowSuccess.value = false;
}
</script>

<template>
  <Header class=""></Header>
  <SubHeader class="mb-8"></SubHeader>

  <div class="border-gradient">
    <Input @didSubmit="submitTriggered" class="m-3"></Input>
  </div>
  <transition name="fade">
    <div class="text-center mt-4 message" v-show="shouldShowSuccess">
      Thank you for your submission!
    </div>
  </transition>
</template>

<style scoped>
.border-gradient {
  background:
    linear-gradient(#2a2a2d, #2a2a2d) padding-box,
    linear-gradient(to right, #f2b299, #1c317e) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
}

.message {
  font-family: "Outfit", serif;
  font-size: 1rem;
  font-weight: 300;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
