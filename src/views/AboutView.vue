<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    // 使用 Intersection Observer 取代 scroll 監聽，效能更好
    const observerOptions = {
        threshold: 0.1 // 只要元素出現 10% 就觸發
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
    <section class="news">
        <h2>關於我</h2>
    </section>
    <section class="aboutme">
        <h2>自我介紹</h2>
        <div class="timeline">
            <div class="timeline-item left">
                <div class="icon">🏆</div>
                <h3>技術選手身份</h3>
                <p>目前致力於<strong>"技能競賽"</strong>領域，透過訓練技術，在壓力下保持精準、在複雜邏輯中尋找優解，目標是以技術實力站上國際舞台，為國爭光。</p>
            </div>
            <div class="timeline-item right">
                <div class="icon">⚡</div>
                <h3>硬體開發與焊接</h3>
                <p>具備的<strong>"電路板焊接與設計"</strong>經驗。曾將 <strong>"ESP32"</strong>、<strong>"WiFiBoy"</strong> 及
                    <strong>"Arduino"</strong> 整合應用於真實生活場景，實現從無到有的硬體開發，解決實際環境中的自動化需求。
                </p>
            </div>
            <div class="timeline-item left">
                <div class="icon">💻</div>
                <h3>全棧開發思維</h3>
                <p>擅長使用 <strong>"C++"</strong>、<strong>"Python"</strong>、<strong>"C#"</strong>。能運用 C#
                    設計專用的應用程式來協助事業與流程優化，實現「軟硬整合」的最高價值。</p>
            </div>
            <div class="timeline-item right">
                <div class="icon">⌨️</div>
                <h3>極速打字</h3>
                <p>高於常人的打字速度，能更流暢紀錄靈感，讓代碼產出與思考同步。</p>
            </div>
            <div class="timeline-item left">
                <div class="icon">🎨</div>
                <h3>PCB Layout 與電路佈局</h3>
                <p>
                    將雜亂的電路轉化為專業的電路。熟悉從<strong>"原理圖繪製 (Schematic)"</strong> 到 <strong>"多層板佈局 (PCB Layout)"</strong>
                    的完整流程。
                </p>
            </div>
        </div>
    </section>
    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
    </div>

</template>



<style scoped>
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.news {
    background-image: url(@/assets/552st.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
    padding-top: 120px;
    text-align: center;
    animation: fadeInUp 1s ease forwards;
}

.news h2 {
    font-size: 70px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.aboutme {
    padding: 100px 20px;
    background-color: var(--bg-light);
    text-align: center;
}

.aboutme h2 {
    color: #696358;
    font-size: 50px;
    margin-bottom: 60px;
    letter-spacing: 2px;
}

.timeline {
    position: relative;
    max-width: 960px;
    margin: auto;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--accent-gold), #ecc786);
    transform: translateX(-50%);
    border-radius: 2px;
}

.timeline-item {
    position: relative;
    width: 45%;
    padding: 25px 35px;
    background-color: var(--timeline-card);
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    margin-bottom: 60px;
    transition: 0.3s ease;
    opacity: 0;
    transform: translateY(50px);
}

.timeline-item.show {
    animation: fadeUp 0.8s forwards;
}

.timeline-item::before {
    content: "";
    position: absolute;
    top: 35px;
    width: 18px;
    height: 18px;
    background: var(--accent-blue);
    border: 4px solid #fff;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 8px rgba(35, 57, 248, 0.6);
}

.timeline-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(35, 57, 248, 0.3);
}

.timeline-item.left {
    left: 0;
    text-align: right;
}

.timeline-item.left::before {
    right: -13px;
}

.timeline-item.right {
    left: 55%;
    text-align: left;
}

.timeline-item.right::before {
    left: -13px;
}

.timeline-item h3 {
    font-size: 26px;
    color: var(--accent-blue);
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.timeline-item p {
    font-size: 18px;
    color: var(--text-main);
    line-height: 1.8;
}

.icon {
    font-size: 30px;
}

.copyright {
    background-color: #747474;
    color: #e2e2e2;
    font-size: 14px;
    letter-spacing: 1px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media screen and (max-width: 768px) {
    .timeline::before {
        left: 30px;
    }

    .timeline-item {
        width: calc(100% - 60px);
        left: 60px !important;
        text-align: left !important;
        margin-bottom: 40px;
        padding: 20px;
    }

    .timeline-item.left::before,
    .timeline-item.right::before {
        left: -40px;
        right: auto;
    }

    .news h2 {
        font-size: 40px;
    }

    .aboutme h2 {
        font-size: 32px;
        margin-bottom: 40px;
    }

    .timeline-item h3 {
        font-size: 22px;
    }

    .icon {
        font-size: 20px;
    }
}
</style>