<script setup>
const photos = [
    { img: require('@/assets/53th.jpg'), text: "參加第53屆全國技能競賽北區分區賽青少年組電子職種榮獲佳作" },
    { img: require('@/assets/54th.jpg'), text: "參加第54屆全國技能競賽北區分區賽青少年組電子職種榮獲第2️⃣名" },
    { img: require('@/assets/54thtw.jpg'), text: "參加第54屆全國技能競賽青少年組電子職種榮獲第4️⃣名" },
    { img: require('@/assets/55thn.png'), text: "參加第55屆全國技能競賽北區分區賽青少年組電子職種榮獲第2️⃣名" },
    { img: require('@/assets/55th.png'), text: "參加第55屆全國技能競賽青少年組電子職種榮獲銀牌🥈" },
];

</script>


<template>
    <section class="news">
        <h2>自我介紹</h2>
        <p>一位青少年，專注於軟體開發與電子工程的高中生，擅長以程式邏輯驅動硬體，並具備獨立進行電路設計與 PCB 佈局（Layout）的實作經驗，熱衷於軟硬體協同設計，目標是透過技術創新開啟屬於自己的創業之路。
        </p>
    </section>

    <div class="word">
        <blockquote><strong>榮譽榜</strong></blockquote>
    </div>

    <section class="photo">
        <div v-for="p in photos" :key="p.img">
            <img :src="p.img" alt="test" />
            <p>{{ p.text }}</p>
        </div>
    </section>

    <div class="honor-list">
        <ul>
            <li>參加109年Scratch程式設計競賽榮獲佳作</li>
            <li>參加109年科學展覽會生活與應用科學科榮獲甲等</li>
        </ul>
    </div>
    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
    </div>
</template>


<style scoped>
.news {
    background-image: url(../assets/HomeBackground.jpg);
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
    color: var(--text-light);
    font-size: 70px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.news p {
    background-color: rgba(0, 0, 0, 0.7);
    max-width: 800px;
    width: 90%;
    padding: 20px;
    margin: 20px auto;
    border: 2px solid #E2D1B3;
    border-radius: 20px;
    font-size: 20px;
    line-height: 2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInUp 1.5s ease forwards;
    color: var(--nav-text);
}

.word {
    background-color: #303030;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: flicker 2.5s infinite alternate;
}

.honor-list {
    background-color: var(--bg-light);
    padding: 60px 20px;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    animation: fadeInUp 2.5s ease forwards;
}

.honor-list ul {
    list-style: none;
    padding: 0;
}

.honor-list li {
    background-color: var(--bg-light);
    color: #0F172A;
    padding: 15px 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    font-size: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    transition: transform 0.3s;
}

.honor-list li:hover {
    transform: translateY(-5px);
    background-color: #bbbbbb;
}

.photo {
    display: flex;
    background-color: var(--bg-light);
    color: #1E293B;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding: 80px 5vw 100px;
    gap: 30px;
    animation: fadeInUp 3s ease forwards;
}

.photo div {
    max-width: 300px;
    text-align: center;
}

.photo img {
    width: 100%;
    height: auto;
    background-color: #1E293B;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;
    cursor: pointer;
}

.photo img:hover {
    transform: scale(1.05);
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