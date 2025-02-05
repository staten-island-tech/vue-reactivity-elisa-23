<template>
  <CardContainer />
  <DisplayContainer v-if="selectedObj" />
</template>

<script setup>
import CardContainer from '@/components/CardContainer.vue';
import DisplayContainer from '@/components/DisplayContainer.vue';
import { selectedObj } from '@/variables.js';
</script>

<style scoped>

</style>