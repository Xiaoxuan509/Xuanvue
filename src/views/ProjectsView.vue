<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// 標準 ES Module Import，避免打包報錯
import tetrisImg from '../assets/tetris.png';
import pcCheckImg from '../assets/PCCheck.png';

const projects = [
    {
        id: 1,
        title: "俄羅斯方塊小遊戲",
        tag: "Embedded System",
        img: tetrisImg,
        description: "利用 Arduino UNO 搭配 OLED 來製作俄羅斯方塊遊戲，可使用藍、綠按鈕移動方塊，使用黑色按鈕控制方向和速度。"
    },
    {
        id: 2,
        title: "電腦檢測軟體",
        tag: "Python App",
        img: pcCheckImg,
        description: "利用 Python 製作電腦檢測軟體，可以檢測 CPU、記憶體狀態，以及硬碟的使用率，透過軟體去推測電腦卡頓的原因。"
    }
];
</script>

<template>
    <div class="project-page">
        <!-- 🌟 首頁頂部 Banner -->
        <section class="news">
            <div class="banner-content">
                <span class="sub-title">PORTFOLIO & PROJECTS</span>
                <h2>作品集</h2>
            </div>
        </section>

        <!-- 🚀 作品展示區 -->
        <section class="project-section">
            <div class="project-grid">
                <!-- 已完成的作品卡片 -->
                <article v-for="item in projects" :key="item.id" class="project-card">
                    <div class="img-wrapper">
                        <img :src="item.img" :alt="item.title" loading="lazy" />
                    </div>
                    <div class="card-body">
                        <div class="card-header">
                            <span class="tag-badge">{{ item.tag }}</span>
                            <h3>● {{ item.title }}</h3>
                        </div>
                        <p>{{ item.description }}</p>
                    </div>
                </article>

                <!-- 敬請期待占位卡片 -->
                <article class="project-card placeholder-card">
                    <div class="placeholder-content">
                        <div class="glow-icon">✨</div>
                        <h3>● 敬請期待...</h3>
                        <p>更多軟硬體整合專案正在積極開發中</p>
                    </div>
                </article>
            </div>
        </section>

        <!-- 頁腳 -->
        <footer class="copyright">
            <p>Copyright © 2026 Xiaoxuan</p>
        </footer>
    </div>
</template>

<style scoped>
/* 🎨 黑金色彩主題定義 */
.project-page {
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

/* 🌟 Banner 頂部區 */
.news {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(18, 18, 18, 0.95) 100%), url(../assets/ProjectBg.jpg);
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

/* 🚀 作品展示區 */
.project-section {
    background-color: var(--bg-dark);
    padding: 80px 5vw 120px;
}

.project-grid {
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 35px;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    background: var(--bg-card-hover);
    border-color: var(--gold-main);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.25);
}

.img-wrapper {
    width: 100%;
    height: 260px;
    background-color: #080808;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
}

.project-card:hover .img-wrapper img {
    transform: scale(1.06);
}

.card-body {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-header {
    margin-bottom: 12px;
}

.tag-badge {
    background: rgba(255, 215, 0, 0.15);
    color: var(--gold-bright);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid rgba(255, 215, 0, 0.3);
    display: inline-block;
    margin-bottom: 8px;
}

.card-body h3 {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-white);
    margin: 0;
}

.card-body p {
    font-size: 15px;
    color: var(--text-gray);
    line-height: 1.8;
    margin: 0;
    text-align: justify;
}

/* ✨ 敬請期待占位卡片設計 */
.placeholder-card {
    border: 2px dashed rgba(255, 215, 0, 0.3);
    background: rgba(30, 30, 30, 0.4);
    justify-content: center;
    align-items: center;
    min-height: 380px;
}

.placeholder-card:hover {
    border-color: var(--gold-main);
    background: rgba(30, 30, 30, 0.7);
}

.placeholder-content {
    text-align: center;
    padding: 40px 20px;
}

.glow-icon {
    font-size: 40px;
    margin-bottom: 15px;
    animation: float 2.5s ease-in-out infinite;
}

.placeholder-content h3 {
    font-size: 24px;
    color: var(--gold-bright);
    margin-bottom: 10px;
}

.placeholder-content p {
    font-size: 14px;
    color: var(--text-gray);
    margin: 0;
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

/* 動畫定義 */
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

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* 📱 響應式微調 */
@media screen and (max-width: 768px) {
    .news h2 {
        font-size: 40px;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .img-wrapper {
        height: 220px;
    }
}
</style>