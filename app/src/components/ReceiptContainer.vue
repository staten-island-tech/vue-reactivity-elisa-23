<template>
    <div v-if="cart" class="absolute w-[37rem] h-[49rem] right-10 top-1 p-6 flex items-center justify-center flex-col text-yellow-600 receipt" >
        <p class="text-[10px]"> ᭄᭡ <span class="font-black">NOTE:</span> The list of items is scrollable! Thank you.</p>
        <div class="w-[90%] h-[20%] p-8 pt-3 overflow-y-scroll scroll-smooth"> 
            <ItemProps v-for="item in cart.items" :key="item.name" :item="item" />
        </div>
        <div class="h-[0.1rem] w-[90%] bg-yellow-600"> </div>
        <div class="w-[90%] h-[20%] p-8">
            <p class="text-left">Subtotal</p>
            <p class="text-right" v-html="subTotal"></p>
            <p class="text-left">Tax <span class="text-white">...........</span> 8.875 %</p>
            <p class="text-right" v-html="tax"></p>
            <p class="text-left">Total</p>
            <p class="text-right" v-html="total"></p>
            <br>
            <p class="text-center text-[1rem]" >
                <span># Items Sold = </span>
                <span v-html="itemsTotal"></span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { cart } from '@/variables.js';
import { onMounted, ref, watch } from 'vue';
import ItemProps from './ItemProps.vue';

let total = ref(0);
let subTotal = ref(0);
let tax = ref(0);
let itemsTotal = cart.items.length;

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