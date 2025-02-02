<template>
  <RouterLink to="/" event="click">
    <button class="absolute w-[7rem] h-[3rem] bg-yellow-950 hover:bg-yellow-600 hover:text-yellow-950 active:bg-yellow-700 rounded-md text-amber-100 top-8 left-7 font-bold font-mono text-right pr-4">
      <img src="/shop-icon.png" alt="icon of a yellow cart" class="h-[1.75rem] w-[2rem] absolute left-3 bottom-2.5">
      <p>Shop</p>
    </button>
  </RouterLink>
  <RouterLink to="/cart" event="click">
    <button class="absolute w-[7rem] h-[3rem] bg-yellow-950 hover:bg-yellow-600 hover:text-yellow-950 active:bg-yellow-700 rounded-md text-amber-100 top-8 left-40 font-bold font-mono text-right pr-4">
    <img src="/cart-icon.png" alt="icon of a yellow cart" class="h-[1.75rem] w-[2rem] absolute left-3 bottom-2.5">
    <p>Cart</p>
  </button>
  </RouterLink>
  <div class="absolute w-[37%] h-[90%] rounded-[2rem] border-yellow-500 bg-white border-8 right-10 top-10 p-6">
    <div class="self-center h-2 bg-yellow-500 mt-2"></div>
    <div class="self-center h-14">
      <img src="/biyoo-logo.png" alt="image of biyoo eating a bun" class="h-13 w-14 absolute top-11.5 left-8">
    </div>
    <div class="self-center h-2 bg-yellow-500 mt-2"></div>
  </div>
  <TrayContainer />
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TrayContainer from './components/TrayContainer.vue';


</script>

<style scoped>

</style>