<template>
    <div class="h-[44rem] w-[44rem] absolute top-23 left-40 flex justify-center">
        <img :src="selectedObj.value.img" :alt="selectedObj.value.description" class="h-[37rem]">
        <BuyButton />
    </div>
</template>

<script setup>
import BuyButton from './BuyButtonProps.vue';
import { selectedObj } from '@/variables.js';
</script>

<style scoped>

</style>