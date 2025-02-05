<template>
    <button :class="buttonClass" @click="toCart" v-html="message">
    </button>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { cart, selected } from '@/variables.js';
import { cards } from '@/plush.js';

let message = ref("");
let buttonClass = ref("");

onMounted (() => {
    resetButton();
})

watch (selected, () => {
    resetButton();
});

function resetButton () {   
    cards.forEach((card) => {
        if (card.id === selected.value) {
            if (card in cart.items) {
                message.value = "Added to Cart";
                buttonClass.value = "bg-yellow-500 w-[30rem] h-[7rem] absolute bottom-0 font-bold text-[3rem] text-white";
            } else {
                message.value = "Add to Cart";
                buttonClass.value = "bg-white w-[30rem] h-[7rem] absolute bottom-0 font-bold text-amber-950 text-[3rem] hover:bg-yellow-200 active:bg-yellow-500 active:text-white";
            }
        }
    });
}
function toCart() {
    if (message.value === "Add to Cart"){
        message.value = "Added to Cart";
        buttonClass.value = "bg-yellow-500 w-[30rem] h-[7rem] absolute bottom-0 font-bold text-[3rem] text-white";
        cards.forEach((card) => {
            if (card.id === selected.value) {
                    card.stock --;
                    cart.items.push(card);
                    console.log(cart.items);
                    console.log(card);
            }
        });
    }else {
        message.value = "Add to Cart";
        buttonClass.value = "bg-white w-[30rem] h-[7rem] absolute bottom-0 font-bold text-amber-950 text-[3rem] hover:bg-yellow-200 active:bg-yellow-500 active:text-white";
        cards.forEach((card) => {
            if (card.id === selected.value) {
                    card.stock ++;
                    cart.items.splice(cart.items.indexOf(card), 1)
                    cart.items = newCart;
                    console.log(cart.items);
                    console.log(card);
            }
        });
    }
}

</script>

<style scoped>

</style>