<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Input from "@/components/Input.vue";
</script>

<template>
  <HelloWorld msg="You did it!" />
  <HelloWorld msg="You did it!" />
  <Input></Input>
</template>

<style scoped>
@font-face {
  font-family: Outfit;
  src: url("./assets/Outfit-VariableFont_wght.ttf");
}
</style>
