<template>
    <div class="h-[70%] w-[70%] absolute top-[15%] left-[15%]">
        <img v-for="image in cartImages" :src="image" alt="plush image" class="object-cover">
    </div>
</template>

<script setup>
import { cart } from '@/variables.js';
import { onMounted, reactive } from 'vue';

let cartImages = reactive([]);

onMounted (() => {
    refreshImg();
})

watch(cart.images, () => {
    refreshImg();
})

function refreshImg() {
    cartImages.splice(0, cartImages.length);
    cart.items.forEach((item) => {
        cartImages.push(item.img);
    });
}
</script>

<style scoped>

</style>