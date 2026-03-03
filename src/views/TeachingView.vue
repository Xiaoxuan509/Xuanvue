<template>
    <div class="news">
        <h2>教學</h2>
    </div>

    <div class="project">
        <div>
            <a href="Arduino.html"><img src="../assets/arduino.png" alt="Arduino教學機"></a>
            <blockquote><strong>●Arduino教學</strong></blockquote>
        </div>
        <div>
            <img src="../assets/esp32.png" alt="ESP32教學">
            <blockquote><strong>●ESP32教學</strong></blockquote>
            <p><strong>製作中...</strong></p>
        </div>
    </div>

    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
    </div>
</template>

<style scoped>
.news {
    background-image: url(../assets/Teachbg.png);
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

.project {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding: 80px 5vw 100px;
    gap: 30px;
    animation: fadeInUp 3s ease forwards;
    color: var(--text-main);
}

.project blockquote {
    font-size: 25px;
}

.project div {
    max-width: 600px;
    text-align: center;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 6px 20px var(--shadow-color);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project div:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.project img {
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;
    cursor: pointer;
}
</style>