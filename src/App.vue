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
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>