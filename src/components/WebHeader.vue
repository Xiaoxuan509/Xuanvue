<script setup>
const navitems = [
  { name: "首頁", to: "/" },
  { name: "關於我", to: "/About" },
  { name: "作品", to: "/Project" },
  { name: "教學", to: "/teach" },
]

</script>

<template>
  <header>
    <h1><router-link to="/">Xuan的網站</router-link></h1>
    <ul>
      <li v-for="item in navitems" :key="item.name">
        <router-link :to="item.to">{{ item.name }}</router-link>
      </li>
    </ul>
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
  scroll-behavior: smooth;
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

</style>

