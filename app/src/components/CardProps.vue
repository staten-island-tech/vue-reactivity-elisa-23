<template>
    <div class="bg-white h-[80%] w-[80%]">
            <button class="h-[100%] w-[100%] items-center hover:bg-yellow-200 active:bg-yellow-500" :id="card.id" @click="selectProduct(card.id)">
                <img class="h-[80%] place-self-center" :src="card.img" :alt="card.description">
            </button>
    </div>
</template>

<script setup>
import { selected, selectedObj } from '@/variables.js';
import { cards } from '@/plush.js';

defineProps ({
    card: Object
})

function selectProduct(id) {
    selected.value = id;
    console.log(selected.value);
    cards.forEach(card => {
        if (card.id === selected.value) {
            selectedObj.img = card.img;
            selectedObj.description = card.description;
            selectedObj.name = card.name;
            selectedObj.id = card.id;
            selectedObj.price = card.price;
            selectedObj.stock = card.stock;
            console.log(selectedObj);
        }
    });
}

</script>

<style scoped>

</style>