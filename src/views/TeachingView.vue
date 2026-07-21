<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// 標準 Vue 3 / Vite 圖片匯入方式
import arduinoImg from '@/assets/arduino.png';
import pythonImg from '@/assets/python.jpg';
import esp32Img from '@/assets/esp32.png';
import teachCImg from '@/assets/TeachC.png';

const tutorial = [
    { 
        id: 'arduino',
        route: "/Arduino", 
        img: arduinoImg, 
        text: "Arduino 教學", 
        tag: "Microcontroller",
        isBuild: false 
    },
    { 
        id: 'python',
        route: "/Python", 
        img: pythonImg, 
        text: "Python 教學", 
        tag: "Software & AI",
        isBuild: false 
    },
    { 
        id: 'esp32',
        route: "/Esp32", 
        img: esp32Img, 
        text: "ESP32 教學", 
        tag: "IoT & Wireless",
        isBuild: false 
    },
    { 
        id: 'forms',
        route: "/Forms", 
        img: teachCImg, 
        text: "電腦軟體設計教學", 
        tag: "C# / WinForms",
        isBuild: true 
    },
];
</script>

<template>
    <div class="tutorial-page">
        <!-- 🌟 首頁頂部 Banner（保留你喜歡的 rgba(27, 42, 47, 0.7) 透明疊加） -->
        <section class="news">
            <div class="banner-content">
                <span class="sub-title">LEARNING & RESOURCES</span>
                <h2>教學資源</h2>
            </div>
        </section>

        <!-- 📚 教學卡片列表 -->
        <section class="tutorial-section">
            <div class="tutorial-grid">
                <div 
                    v-for="t in tutorial" 
                    :key="t.id" 
                    class="tutorial-card"
                    :class="{ 'is-building': t.isBuild }"
                >
                    <component 
                        :is="t.isBuild ? 'div' : 'router-link'" 
                        :to="t.isBuild ? undefined : t.route" 
                        class="card-link"
                    >
                        <div class="img-wrapper">
                            <img :src="t.img" :alt="t.text" loading="lazy">
                            <span v-if="t.isBuild" class="status-badge building">🚧 內容籌備中</span>
                            <span v-else class="status-badge ready">📖 開始學習</span>
                        </div>
                        <div class="card-body">
                            <span class="category-tag">{{ t.tag }}</span>
                            <h3>● {{ t.text }}</h3>
                            <p v-if="t.isBuild" class="building-text">內容編撰中，敬請期待...</p>
                            <p v-else class="start-text">點擊進入完整系列課程 ➔</p>
                        </div>
                    </component>
                </div>
            </div>
        </section>

        <!-- 頁腳 -->
        <footer class="copyright">
            <p>Copyright © 2026 Xiaoxuan</p>
        </footer>
    </div>
</template>

<style scoped>
/* 🎨 黑金色彩主題定義（完全同步「關於我」頁面） */
.tutorial-page {
    --bg-black: #000000;         /* 極致純黑 */
    --bg-dark: #121212;          /* 炭黑背景 */
    --bg-card: #1e1e1e;          /* 鈦灰卡片 */
    --bg-card-hover: #262626;    /* 懸停鈦灰 */
    --gold-main: #ffd700;        /* 璀璨黃金 */
    --gold-bright: #ffea79;      /* 耀金高光 */
    --gold-dark: #b39200;        /* 暗金邊框 */
    --text-white: #ffffff;       /* 純白文字 */
    --text-gray: #a1a1aa;        /* 柔灰文字 */

    background-color: var(--bg-black);
    color: var(--text-white);
    width: 100%;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 🌟 Banner 頂部區（結合黑金與你的 rgba(27, 42, 47, 0.7)） */
.news {
    background-color: rgba(27, 42, 47, 0.7);
    background-blend-mode: multiply;
    background-image: linear-gradient(
        180deg, 
        rgba(27, 42, 47, 0.75) 0%, 
        rgba(18, 18, 18, 0.95) 100%
    ), url(../assets/Teachbg.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    padding-top: 100px;
    text-align: center;
}

.banner-content {
    animation: fadeInDown 0.8s ease forwards;
}

.sub-title {
    font-size: 13px;
    letter-spacing: 5px;
    color: var(--gold-bright);
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
}

.news h2 {
    font-size: 64px;
    font-weight: 800;
    margin: 0;
    letter-spacing: 4px;
    background: linear-gradient(135deg, #ffffff 30%, var(--gold-main) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8));
}

/* 📚 教學卡片區域 */
.tutorial-section {
    background-color: var(--bg-dark);
    padding: 80px 5vw 120px;
}

.tutorial-grid {
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 35px;
}

.tutorial-card {
    background: var(--bg-card);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.tutorial-card:not(.is-building):hover {
    transform: translateY(-8px);
    background: var(--bg-card-hover);
    border-color: var(--gold-main);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.25);
}

/* 籌備中卡片樣式 */
.tutorial-card.is-building {
    opacity: 0.7;
    border-style: dashed;
    border-color: rgba(255, 215, 0, 0.25);
    cursor: not-allowed;
}

/* 圖片容器 */
.img-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    background-color: #080808;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
}

.tutorial-card:not(.is-building):hover .img-wrapper img {
    transform: scale(1.08);
}

/* 狀態標籤 */
.status-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    backdrop-filter: blur(8px);
}

.status-badge.ready {
    background: rgba(255, 215, 0, 0.15);
    color: var(--gold-bright);
    border: 1px solid rgba(255, 215, 0, 0.4);
}

.status-badge.building {
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    border: 1px solid rgba(239, 68, 68, 0.4);
}

/* 卡片文字資訊 */
.card-body {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: left;
}

.category-tag {
    font-size: 12px;
    color: var(--gold-bright);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 6px;
    text-transform: uppercase;
}

.card-body h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-white);
    margin: 0 0 12px 0;
}

.start-text {
    font-size: 14px;
    color: var(--gold-main);
    margin: auto 0 0 0;
    font-weight: 600;
    transition: transform 0.2s;
}

.tutorial-card:hover .start-text {
    transform: translateX(4px);
}

.building-text {
    font-size: 14px;
    color: var(--text-gray);
    margin: auto 0 0 0;
    font-style: italic;
}

/* 頁腳 */
.copyright {
    background-color: #080808;
    color: var(--text-gray);
    font-size: 13px;
    letter-spacing: 1px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* 動畫 */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 📱 響應式微調 */
@media screen and (max-width: 768px) {
    .news h2 {
        font-size: 40px;
    }

    .tutorial-grid {
        grid-template-columns: 1fr;
    }

    .img-wrapper {
        height: 180px;
    }
}
</style>