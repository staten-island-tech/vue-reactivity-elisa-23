<template>
  <div class="absolute w-[37%] h-[90%] right-10 top-10 p-6">
    <div class="absolute grid grid-cols-3 grid-rows-3 w-[88%] h-[30rem] top-[18%] left-[6%] place-items-center">
      <Card v-for="card in cards" :key="card.name" :card="card"></Card>
    </div>
    <button class="absolute bottom-[10%] left-[35%] rounded-full hover:bg-amber-200 active:bg-amber-400 h-8 w-8 font-bold font-mono text-yellow-700"><</button>
    <button class="absolute bottom-[10%] right-[35%] rounded-full hover:bg-amber-200 active:bg-amber-400 h-8 w-8 font-bold font-mono text-yellow-700">></button>
  </div>
</template>

<script setup>
import Card from './CardProps.vue';
const cards = [{img: "url", description: "hi", name: "table" }, {img: "url", description: "hi", name: "table" }, {img: "url", description: "hi", name: "table" }, {img: "url", description: "hi", name: "table" }];
let inCart = [];
</script>

<style scoped>

</style>