<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 1. 定義一個變數來控制開關狀態
const isMenuOpen = ref(false)

const navitems = [
  { name: "首頁", to: "/" },
  { name: "關於我", to: "/about" },
  { name: "作品", to: "/project" },
  { name: "教學", to: "/teach" },
]

// 2. 監聽路由，換頁時自動關閉選單
watch(() => route.path, () => {
  isMenuOpen.value = false
})

// 3. 切換開關的函式
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <h1><router-link to="/">Xuan的網站</router-link></h1>
    
    <ul :class="{ 'show': isMenuOpen }">
      <li v-for="item in navitems" :key="item.name">
        <router-link :to="item.to">{{ item.name }}</router-link>
      </li>
    </ul>

    <button class="menu-toggle" @click="toggleMenu" aria-label="切換選單">☰</button>
    
    <div v-if="isMenuOpen" class="overlay" @click="isMenuOpen = false"></div>
  </header>
</template>

<style>
:root {
  --primary-dark: #1b2a2f;
  --accent-blue: #2339f8;
  --accent-light-blue: #38bdf8;
  --accent-gold: #E2D1B3;
  --bg-light: #dadada;
  --text-main: #334155;
  --text-light: #EFE6D8;
  --code-bg: #282c34;
  --hover-bg: rgba(204, 196, 174, 0.1);
  --nav-text: #E2E8F0;
  --timeline-card: rgba(255, 255, 255, 0.7);
  --shadow-dark: rgba(0, 0, 0, 0.5);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  font-family: 'Microsoft JhengHei', sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
}

header {
  background-color: rgba(27, 42, 47, 0.7);
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5vw;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-radius: 20px;
  box-shadow: 0 10px 40px var(--shadow-dark);
  backdrop-filter: blur(6px);
}

header h1 {
  position: relative;
  line-height: 55px;
  text-indent: center;
  font-size: 30px;
}

header h1 a {
  color: var(--text-light);
  text-decoration: none;
}

header ul {
  list-style: none;
  display: flex;
  gap: 3vw;
  line-height: 55px;
}

header ul li a {
  color: var(--nav-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

header ul li a:hover {
  color: var(--text-light);
  background-color: var(--hover-bg);
  transform: scale(1.1);
}

ul {
  list-style: none;
  display: flex;
  gap: 3vw;
  position: relative;
  right: 0;
  top: 0;
  line-height: 55px;
  transition: right 0.3s ease;
}

li {
  display: inline;
}

li a {
  color: var(--nav-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

li a:hover {
  color: var(--text-light);
  background-color: var(--hover-bg);
  transform: scale(1.1);
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 6vw;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 3000;
  user-select: none;
  transition: color 0.3s ease;
}

.menu-toggle:hover {
  color: #ffcc70;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3500;
}

ul.show {
  right: 0 !important;
}


@media screen and (max-width: 768px) {
  header h1 {
    left: 50%;
    transform: translateX(-50%);
    line-height: 55px;
  }

  .news h2 {
    font-size: 50px;
  }

  ul {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -300px;
    width: 200px;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    padding: 80px 30px;
    box-shadow: -6px 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px 0 0 20px;
    transition: right 0.3s ease;
    z-index: 4000;
  }

  ul li a {
    color: #ffffff;
    font-size: 18px;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
