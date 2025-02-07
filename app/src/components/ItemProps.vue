<template>
    <div>
        <p class="text-yellow-600 text-left" v-html="item.name"></p>
        <p class="text-yellow-600 text-right" v-html="item.price"></p>
    </div>
</template>

<script setup>
defineProps ({
    item: Object
})
</script>

<style scoped>

</style>