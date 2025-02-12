<template>
    <div v-if="cart.items" class="h-[55%] w-[30%] absolute top-[25%] left-[15%] bg-[url('/claw-machine.png')] bg-cover flex justify-center items-center shadow-purple-300 shadow-2xl">
        <div class="h-[40%] w-[40%] overflow-y-scroll flex flex-col items-center snap-y snap-proximity">
            <img v-for="image in cartImages" :src="image" alt="plush image" class="h-[90%] m-1 snap-center">
        </div>
    </div>
</template>

<script setup>
import { cart } from '@/variables.js';
import { onMounted, watch, reactive } from 'vue';

let cartImages = reactive([]);

onMounted (() => {
    refreshImg();
})

watch(cart.items, () => {
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