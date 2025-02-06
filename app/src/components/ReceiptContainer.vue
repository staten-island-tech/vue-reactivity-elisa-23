<template>
    <div>

    </div>
</template>

<script setup>
import { cart } from '@/variables.png';
import { onMounted, ref, watch } from 'vue';

let total = ref(0);
let subTotal = ref(0);
let tax = ref(0);

onMounted(() => {
    priceCalc();
})

watch(cart, () => {
    priceCalc();
})

function priceCalc() {
    cart.forEach((item) => {
        total.value += item.price;
    });
    subTotal.value = total.value;
    tax.value = total.value * 0.08875;
    total.value = total.value * 1.08875;
    console.log(total.value);
}

</script>

<style scoped>

</style>