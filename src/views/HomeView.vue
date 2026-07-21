<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// 使用標準 ES Module import 避免打包報錯
import img53th from '@/assets/53th.jpg';
import img54th from '@/assets/54th.jpg';
import img54thtw from '@/assets/54thtw.jpg';
import img55thn from '@/assets/55thn.png';
import img55th from '@/assets/55th.png';

const photos = [
    { id: 1, img: img53th, text: "參加第53屆全國技能競賽北區分區賽青少年組電子職種榮獲佳作" },
    { id: 2, img: img54th, text: "參加第54屆全國技能競賽北區分區賽青少年組電子職種榮獲第2️⃣名" },
    { id: 3, img: img54thtw, text: "參加第54屆全國技能競賽青少年組電子職種榮獲第4️⃣名" },
    { id: 4, img: img55thn, text: "參加第55屆全國技能競賽北區分區賽青少年組電子職種榮獲第2️⃣名" },
    { id: 5, img: img55th, text: "參加第55屆全國技能競賽青少年組電子職種榮獲銀牌🥈" },
];
</script>

<template>
    <div class="landing-page">
        <!-- 🌟 自我介紹 Banner 區 -->
        <section class="news">
            <div class="news-content">
                <h2>自我介紹</h2>
                <div class="bio-card">
                    <p>
                        一位青少年，專注於軟體開發與電子工程的高中生，擅長以程式邏輯驅動硬體，並具備獨立進行電路設計與 PCB 佈局（Layout）的實作經驗，熱衷於軟硬體協同設計，目標是透過技術創新開啟屬於自己的創業之路。
                    </p>
                </div>
            </div>
        </section>

        <!-- 🏆 榮譽榜標題條 -->
        <div class="word">
            <span class="word-subtitle">HONORS & AWARDS</span>
            <blockquote><strong>榮譽榜</strong></blockquote>
        </div>

        <!-- 📸 競賽照片區 -->
        <section class="photo-section">
            <div class="photo-grid">
                <article v-for="p in photos" :key="p.id" class="photo-card">
                    <div class="img-wrapper">
                        <img :src="p.img" :alt="p.text" loading="lazy" />
                    </div>
                    <div class="card-text">
                        <p>{{ p.text }}</p>
                    </div>
                </article>
            </div>
        </section>

        <!-- 📜 歷程清單區 -->
        <section class="honor-section">
            <div class="honor-container">
                <div class="honor-list">
                    <ul>
                        <li>
                            <span class="honor-tag">109 年</span>
                            <span class="honor-desc">參加 Scratch 程式設計競賽榮獲佳作</span>
                        </li>
                        <li>
                            <span class="honor-tag">109 年</span>
                            <span class="honor-desc">參加科學展覽會生活與應用科學科榮獲甲等</span>
                        </li>
                    </ul>
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
/* 🎨 黑金頂級色彩變數設定 */
.landing-page {
    --bg-black: #000000;         /* 極致純黑 */
    --bg-dark: #121212;          /* 炭黑背景 */
    --bg-card: #1e1e1e;          /* 深鈦灰卡片 */
    --bg-card-hover: #2a2a2a;    /* 懸停鈦灰 */
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

/* 🌟 Banner 自我介紹區 */
.news {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(18, 18, 18, 0.95) 100%), url(../assets/HomeBackground.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 120px 20px 60px;
    text-align: center;
}

.news-content {
    max-width: 850px;
    width: 100%;
    animation: fadeInUp 0.8s ease forwards;
}

.news h2 {
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 30px;
    letter-spacing: 3px;
    /* 黃金漸層文字 */
    background: linear-gradient(135deg, var(--gold-bright) 0%, var(--gold-main) 50%, var(--gold-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8));
}

.bio-card {
    background: rgba(30, 30, 30, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1.5px solid var(--gold-main);
    border-radius: 20px;
    padding: 32px 36px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 215, 0, 0.15);
}

.bio-card p {
    color: #f4f4f5;
    font-size: 20px;
    line-height: 1.9;
    margin: 0;
    text-align: justify;
    text-justify: inter-ideograph;
}

/* 🏆 榮譽榜雙色標題條 */
.word {
    background: linear-gradient(90deg, #000000 0%, #1a1a1a 50%, #000000 100%);
    padding: 35px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--gold-dark);
    border-bottom: 1px solid var(--gold-dark);
}

.word-subtitle {
    font-size: 13px;
    letter-spacing: 5px;
    color: var(--gold-bright);
    font-weight: 700;
    margin-bottom: 6px;
}

.word blockquote {
    margin: 0;
    font-size: 48px;
    letter-spacing: 3px;
    background: linear-gradient(135deg, #ffffff 20%, var(--gold-main) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* 📸 競賽照片區 */
.photo-section {
    background: var(--bg-dark);
    padding: 70px 5vw 80px;
}

.photo-grid {
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.photo-card {
    background: var(--bg-card);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    flex-direction: column;
}

.photo-card:hover {
    transform: translateY(-8px);
    background: var(--bg-card-hover);
    border-color: var(--gold-main);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.25);
}

/* 📸 修正後的圖片容器與圖片樣式 */
.img-wrapper {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    /* 1. 把背景改為稍亮的深灰，避免純黑底透出 */
    background-color: #1a1a1a; 
    position: relative;
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.3s ease;
    
    /* 2. 微調亮度 (brightness) 與對比度 (contrast)，讓照片透亮 */
    filter: brightness(1.05) contrast(1.02); 
}

.photo-card:hover .img-wrapper img {
    transform: scale(1.08);
}

.card-text {
    padding: 22px 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;
}

.card-text p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-white);
    font-weight: 500;
}

/* 📜 歷程清單區 */
.honor-section {
    background: var(--bg-black);
    padding: 50px 20px 80px;
}

.honor-container {
    max-width: 850px;
    margin: 0 auto;
}

.honor-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.honor-list li {
    background: var(--bg-card);
    color: var(--text-white);
    padding: 20px 25px;
    border-radius: 12px;
    font-size: 18px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 15px;
    border-left: 5px solid var(--gold-main);
}

.honor-list li:hover {
    transform: translateX(8px);
    background: var(--bg-card-hover);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), -2px 0 12px rgba(255, 215, 0, 0.3);
}

.honor-tag {
    background: rgba(255, 215, 0, 0.15);
    color: var(--gold-bright);
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.honor-desc {
    color: var(--text-white);
    font-weight: 500;
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

/* 動畫設定 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 📱 響應式佈局微調 */
@media screen and (max-width: 768px) {
    .news h2 {
        font-size: 40px;
    }

    .bio-card {
        padding: 20px;
    }

    .bio-card p {
        font-size: 17px;
    }

    .word blockquote {
        font-size: 36px;
    }

    .honor-list li {
        font-size: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}
</style>