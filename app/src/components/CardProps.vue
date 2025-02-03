<template>
    <div class="bg-white h-[80%] w-[80%]">
        <button class="h-[100%] w-[100%] items-center hover:bg-yellow-200 active:bg-yellow-500">
            <img class="h-[80%] place-self-center" :src="card.img" :alt="card.description">
        </button>
    </div>
</template>

<script setup>
defineProps ({
    card: Object
})
</script>

<style scoped>

</style>