<script setup>
import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="border-gradient p-4">
    <div class="bg-phind-gray-accent p-4">
      <Input class="bg-phind-gray-accent"></Input>
    </div>
  </div>
</template>

<style scoped>
.border-gradient {
  background: linear-gradient(#171719, #171719) padding-box,
  linear-gradient(to right, #1c317e, #f2b299) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
}
</style>
