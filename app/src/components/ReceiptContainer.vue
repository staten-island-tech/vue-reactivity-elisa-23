<template>
    <div v-if="cart" class="absolute w-[37rem] h-[49rem] right-10 top-10 p-6 flex items-center justify-center flex-col" >
        <div class="w-[90%] h-[20%] p-8 receipt overflow-y-scroll scroll-smooth"> <!-- text-center font-stretch-expanded text-yellow-600 -->
            <ItemProps v-for="item in cart.items" :key="item.name" :item="item" />
        </div>
        <div class="h-[0.5rem] w-[90%] bg-yellow-600"> </div>
        <div class="w-[90%] h-[20%] bg-black"></div>
    </div>
</template>

<script setup>
import { cart } from '@/variables.js';
import { onMounted, ref, watch } from 'vue';
import ItemProps from './ItemProps.vue';

let total = ref(0);
let subTotal = ref(0);
let tax = ref(0);

onMounted(() => {
    priceCalc();
});

watch(cart.items, () => {
    priceCalc();
});

function priceCalc() {
    total.value = 0;
    cart.items.forEach((item) => {
        total.value += item.price;
    });
    subTotal.value = Math.round(total.value * 100) / 100;
    total.value = Math.round((total.value * 1.08875) * 100) / 100;
    tax.value = Math.round((total.value - subTotal.value) * 100) / 100;
    console.log(total.value);
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hubballi&family=Julius+Sans+One&display=swap');

.receipt {
    font-family: "Julius Sans One", serif;
}
</style>