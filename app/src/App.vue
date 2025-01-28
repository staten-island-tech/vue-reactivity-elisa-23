<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <header>

    <div class="" id="body">
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-4">Hello Vite!</h1>
        <button class="btn btn-primary">Click Me</button>
    </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
#body{
  background-color: bisque;
}
</style>