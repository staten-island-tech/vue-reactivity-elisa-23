<template>
  <div class="absolute w-[37rem] h-[49rem] right-10 top-10 p-6">
    <div class="absolute grid grid-cols-3 grid-rows-3 w-[88%] h-[30rem] top-[18%] left-[6%] place-items-center">
      <Card v-for="card in displayedCards" :key="card.name" :card="card"></Card>
    </div>
    <button class="absolute bottom-[10%] left-[35%] rounded-full hover:bg-amber-200 active:bg-amber-400 h-8 w-8 font-bold font-mono text-yellow-700" @click="changePage(back)"><</button>
    <button class="absolute bottom-[10%] right-[35%] rounded-full hover:bg-amber-200 active:bg-amber-400 h-8 w-8 font-bold font-mono text-yellow-700" @click="changePage(forward)">></button>
  </div>
  
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Card from './CardProps.vue';
import { cards } from '@/plush.js';

const back = "<";
const forward = ">";

let displayedCards = reactive([]);
let page = ref(1);
onMounted(() => {
  cards.forEach((card) => {
    if (displayedCards.length < 9) {
      displayedCards.push(card);
    }
  });
  console.log(displayedCards);
})

function changePage(direction) {
  displayedCards.splice(0, displayedCards.length);
  if (direction === "<") {
    if (page.value === 1) {
      alert("Cannot turn back any further...");
    } else {
      page.value --;
      cards.forEach((card) => {
        if (displayedCards.length < 9) {
          displayedCards.push(card);
        }
      });
    }
  } else {
    if (page.value === 2) {
      alert("Cannot go forward any further...");
    } else {
      page.value ++;
      cards.forEach((card) => {
        displayedCards.push(card);
      });
    }
  }
  console.log(page, displayedCards);
}

</script>

<style scoped>

</style>