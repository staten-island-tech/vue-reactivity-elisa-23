<template>
    <div class="h-[44rem] w-[44rem] absolute top-23 left-40 flex justify-center">
        <img v-if="selectedObj.img" :src="img" :alt="description" class="h-[37rem]">
        <BuyButton v-if="selectedObj.img" />
    </div>
</template>

<script setup>
import BuyButton from './BuyButtonProps.vue';
import { selectedObj } from '@/variables.js';
import { computed } from 'vue';

const img = computed(() => selectedObj.img || '');
const description = computed(() => selectedObj.description || '');

</script>

<style scoped>

</style>