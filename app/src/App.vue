<template>
  <button class="absolute w-[7rem] h-[3rem] bg-yellow-950 rounded-md text-amber-100 top-8 left-7 font-bold font-mono">
    <RouterLink to="/" event>Inventory</RouterLink>
  </button>
  <button class="absolute w-[7rem] h-[3rem] bg-yellow-950 rounded-md text-amber-100 top-8 left-40 font-bold font-mono">Shopping Cart</button>
  <div class="absolute w-[37rem] h-[46rem] rounded-[2rem] border-yellow-500 bg-white border-8 right-10 top-10 p-6">
    <div class="self-center h-2 w-{20rem} bg-yellow-500 mt-2"></div>
    <div class="self-center h-14"></div>
    <div class="self-center h-2 w-{20rem} bg-yellow-500 mt-2"></div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>