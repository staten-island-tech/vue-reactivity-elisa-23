<template>
    <div v-if="cart" class="absolute w-[37rem] h-[49rem] right-10 top-10 p-6 flex items-center justify-center" >
        <div class="bg-black w-[90%] h-[50%] text-center font-stretch-expanded text-yellow-600 p-8 receipt overflow-y-scroll scroll-smooth">
            
        </div>
    </div>
</template>

<script setup>
import { cart } from '@/variables.js';
import { onMounted, ref, watch } from 'vue';

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
    tax.value = total.value - subTotal.value;
    console.log(tax.value);
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hubballi&family=Julius+Sans+One&display=swap');

.receipt {
    font-family: "Julius Sans One", serif;
}
</style>