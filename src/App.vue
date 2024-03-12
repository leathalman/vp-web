<script setup>
import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="card-wrapper">
    <Header></Header>
    <Input></Input>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Outfit;
  src: url("./assets/Outfit-VariableFont_wght.ttf");
}
.card-wrapper {
  background-color: #1C1C1C;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
