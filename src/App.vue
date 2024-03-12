<script setup>
import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header class="mb-6"></Header>
  <div class="border-gradient">
    <div class="bg-phind-gray-accent m-2">
      <Input></Input>
    </div>
  </div>
</template>

<style scoped>
.border-gradient {
  background: linear-gradient(#2A2A2D, #2A2A2D) padding-box,
  linear-gradient(to right, #f2b299, #1c317e) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
}
</style>
