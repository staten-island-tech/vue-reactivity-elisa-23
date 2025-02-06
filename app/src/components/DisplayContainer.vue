<template>
    <div class="h-[44rem] w-[44rem] absolute top-23 left-40 flex justify-center">
        <img v-if="selectedObj.img" :src="img" :alt="description" class="h-[37rem]">
        <BuyButton v-if="selectedObj.img" />
        <p v-if="selectedObj.img" class="absolute bottom-[-3rem] font-bold text-yellow-950 text-[1.5rem]">price: {{ price }}</p>
    </div>
</template>

<script setup>
import BuyButton from './BuyButtonProps.vue';
import { selectedObj } from '@/variables.js';
import { computed } from 'vue';

const img = computed(() => selectedObj.img || '');
const description = computed(() => selectedObj.description || '');
const price = computed(() => selectedObj.price || '');

</script>

<style scoped>

</style>