<template>
    <section class="news">
        <h2>關於我</h2>
    </section>
    <section class="aboutme">
        <h2>自我介紹</h2>
        <div class="timeline">
            <div class="timeline-item left">
                <h3>專長</h3>
                <p>打字速度快，轉魔術方塊，攝影，打保齡球。</p>
            </div>
            <div class="timeline-item right">
                <h3>技能</h3>
                <p>編寫 Python、C++、C# 程式語言、電路板焊接、設計電路、網站設計，使用C#設計應用程式幫助事業，曾使用Esp32、WiFiBoy、Arduino應用在真實生活中，現在也是選手身分。</p>
            </div>
            <div class="timeline-item left">
                <h3>未來目標</h3>
                <p>參加技能競賽，獲得榮譽為國爭光。</p>
            </div>
        </div>
    </section>
    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
    </div>

</template>

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
    background-image: url(@/assets/Aboutpage.jpg);
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
</style>