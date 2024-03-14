<script setup>
import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
import SubHeader from "@/components/SubHeader.vue";
</script>

<template>
  <Header class=""></Header>
  <SubHeader class="mb-8"></SubHeader>

  <div class="border-gradient">
    <Input class="m-3"></Input>
  </div>
</template>

<style scoped>
.border-gradient {
  background:
    linear-gradient(#2a2a2d, #2a2a2d) padding-box,
    linear-gradient(to right, #f2b299, #1c317e) border-box;
  border-radius: 12px;
  border: 3px solid transparent;
}
</style>
