<template>
    <button :class="buttonClass" @click="toCart" v-html="message">
    </button>
</template>

<script setup>
import { ref } from 'vue';
import { cart } from '@/variables.js';
import { cards } from '@/plush.js';

let message = ref("Add to Cart");
let buttonClass = ref("bg-white w-[30rem] h-[7rem] absolute bottom-0 font-bold text-amber-950 text-[3rem] hover:bg-yellow-200 active:bg-yellow-500 active:text-white");
function toCart() {
    if (message.value === "Add to Cart"){
        message.value = "Added to Cart";
        buttonClass.value = "bg-yellow-500 w-[30rem] h-[7rem] absolute bottom-0 font-bold text-[3rem] text-white";
        cart.value.push()
    }else {
        message.value = "Add to Cart";
        buttonClass.value = "bg-white w-[30rem] h-[7rem] absolute bottom-0 font-bold text-amber-950 text-[3rem] hover:bg-yellow-200 active:bg-yellow-500 active:text-white";
    }
}

</script>

<style scoped>

</style>