<template>
  <WebHeader />
  
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import WebHeader from './components/WebHeader.vue'
</script>

<style>
:root {
  --primary-dark: #1b2a2f;
  --accent-blue: #38bdf8;
  --bg-light: #dadada;
  --text-main: #303030;
  --text-light: #EFE6D8;
  --nav-text: #E2E8F0;
  --hover-bg: rgba(204, 196, 174, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.6);
  --accent-light-blue: #38bdf8;
  --accent-gold: #E2D1B3;
  --text-main: #334155;
  --text-light: #EFE6D8;
  --code-bg: #282c34;
  --hover-bg: rgba(204, 196, 174, 0.1);
  --nav-text: #E2E8F0;
  --timeline-card: rgba(255, 255, 255, 0.7);
  --shadow-dark: rgba(0, 0, 0, 0.5);
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>