<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    // 使用 Intersection Observer 控制進入視窗時的捲動動畫
    const observerOptions = {
        threshold: 0.15 // 進入視窗 15% 觸發
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    // 開始觀察所有的 timeline-item
    const items = document.querySelectorAll(".timeline-item");
    items.forEach(item => observer.observe(item));

    // 組件卸載時停止觀察
    onUnmounted(() => {
        observer.disconnect();
    });
});
</script>

<template>
    <div class="about-page">
        <!-- 🌟 首頁頂部 Banner -->
        <section class="news">
            <div class="banner-content">
                <span class="sub-title">PORTFOLIO & PROFILE</span>
                <h2>關於我</h2>
            </div>
        </section>

        <!-- ⏱️ 時間軸自我介紹區 -->
        <section class="aboutme">
            <div class="section-title-wrap">
                <span class="section-tag">MY CAPABILITIES</span>
                <h2>核心優勢與經歷</h2>
                <div class="title-divider"></div>
            </div>

            <div class="timeline">
                <!-- 項目 1 -->
                <div class="timeline-item left">
                    <div class="card-header">
                        <span class="icon">🏆</span>
                        <h3>技術選手身份</h3>
                    </div>
                    <p>
                        目前致力於 <strong>"技能競賽"</strong> 領域，透過訓練技術，在壓力下保持精準、在複雜邏輯中尋找優解，目標是以技術實力站上國際舞台，為國爭光。
                    </p>
                </div>

                <!-- 項目 2 -->
                <div class="timeline-item right">
                    <div class="card-header">
                        <span class="icon">⚡</span>
                        <h3>硬體開發與焊接</h3>
                    </div>
                    <p>
                        具備豐富的 <strong>"電路板焊接與設計"</strong> 經驗。曾將 <strong>"ESP32"</strong>、<strong>"WiFiBoy"</strong> 及 <strong>"Arduino"</strong> 整合應用於真實生活場景，實現從無到有的硬體開發，解決實際環境中的自動化需求。
                    </p>
                </div>

                <!-- 項目 3 -->
                <div class="timeline-item left">
                    <div class="card-header">
                        <span class="icon">💻</span>
                        <h3>全棧開發思維</h3>
                    </div>
                    <p>
                        擅長使用 <strong>"C++"</strong>、<strong>"Python"</strong>、<strong>"C#"</strong>。能運用 C# 設計專用的應用程式來協助事業與流程優化，實現「軟硬整合」的最高價值。
                    </p>
                </div>

                <!-- 項目 4 -->
                <div class="timeline-item right">
                    <div class="card-header">
                        <span class="icon">⌨️</span>
                        <h3>極速打字</h3>
                    </div>
                    <p>
                        高於常人的打字速度，能更流暢紀錄靈感，讓代碼產出與思考同步。
                    </p>
                </div>

                <!-- 項目 5 -->
                <div class="timeline-item left">
                    <div class="card-header">
                        <span class="icon">🎨</span>
                        <h3>PCB Layout 與電路佈局</h3>
                    </div>
                    <p>
                        將雜亂的電路轉化為專業的電路。熟悉從 <strong>"原理圖繪製 (Schematic)"</strong> 到 <strong>"多層板佈局 (PCB Layout)"</strong> 的完整流程。
                    </p>
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
/* 🎨 黑金色彩主題定義 */
.about-page {
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
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(18, 18, 18, 0.95) 100%), url(@/assets/552st.jpg);
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

/* ⏱️ 自我介紹時間軸區 */
.aboutme {
    padding: 80px 20px 120px;
    background-color: var(--bg-dark);
    text-align: center;
}

.section-title-wrap {
    margin-bottom: 70px;
}

.section-tag {
    font-size: 12px;
    letter-spacing: 4px;
    color: var(--gold-bright);
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
}

.aboutme h2 {
    color: var(--text-white);
    font-size: 42px;
    font-weight: 700;
    margin: 0 0 15px;
    letter-spacing: 2px;
}

.title-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold-bright), var(--gold-dark));
    margin: 0 auto;
    border-radius: 2px;
}

/* 時間軸容器 */
.timeline {
    position: relative;
    max-width: 980px;
    margin: auto;
}

/* 中央貫穿黃金光芒發光線 */
.timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--gold-bright), var(--gold-dark), rgba(255, 215, 0, 0.1));
    transform: translateX(-50%);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

/* 時間軸卡片結構 */
.timeline-item {
    position: relative;
    width: 44%;
    padding: 30px;
    background: var(--bg-card);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    margin-bottom: 60px;
    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity: 0;
    transform: translateY(40px);
}

.timeline-item.show {
    animation: fadeUp 0.8s forwards ease-out;
}

/* 中央發光亮點 (Dots) */
.timeline-item::before {
    content: "";
    position: absolute;
    top: 32px;
    width: 16px;
    height: 16px;
    background: var(--gold-main);
    border: 4px solid var(--bg-dark);
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 12px var(--gold-bright);
}

.timeline-item:hover {
    transform: translateY(-6px);
    background: var(--bg-card-hover);
    border-color: var(--gold-main);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.25);
}

/* 左側卡片對齊 */
.timeline-item.left {
    left: 0;
    text-align: right;
}

.timeline-item.left .card-header {
    justify-content: flex-end;
}

.timeline-item.left::before {
    right: -13.5%;
}

/* 右側卡片對齊 */
.timeline-item.right {
    left: 56%;
    text-align: left;
}

.timeline-item.right .card-header {
    justify-content: flex-start;
}

.timeline-item.right::before {
    left: -13.5%;
}

/* 卡片內部文字與 Icon */
.card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}

.icon {
    font-size: 28px;
    line-height: 1;
}

.timeline-item h3 {
    font-size: 22px;
    font-weight: 700;
    color: var(--gold-bright);
    margin: 0;
    letter-spacing: 1px;
}

.timeline-item p {
    font-size: 16px;
    color: var(--text-gray);
    line-height: 1.8;
    margin: 0;
}

.timeline-item p strong {
    color: var(--text-white);
    font-weight: 600;
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
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

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

/* 📱 響應式手機排版修正 */
@media screen and (max-width: 768px) {
    .news h2 {
        font-size: 40px;
    }

    .aboutme h2 {
        font-size: 32px;
    }

    /* 手機版將軸線移至左側 */
    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        width: calc(100% - 50px);
        left: 50px !important;
        text-align: left !important;
        margin-bottom: 35px;
        padding: 20px;
    }

    .timeline-item.left .card-header,
    .timeline-item.right .card-header {
        justify-content: flex-start;
    }

    .timeline-item.left::before,
    .timeline-item.right::before {
        left: -38px;
        right: auto;
    }

    .timeline-item h3 {
        font-size: 20px;
    }

    .timeline-item p {
        font-size: 15px;
    }

    .icon {
        font-size: 22px;
    }
}
</style>