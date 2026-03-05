<template>
    <div class="news">
        <h2>教學</h2>
    </div>

    <div class="project">
        <div>
            <router-link to='/Arduino'><img src="../assets/arduino.png" alt="Arduino教學">
                <blockquote><strong>●Arduino教學</strong></blockquote>
            </router-link>

        </div>
        <div>
            <img src="../assets/esp32.png" alt="ESP32教學">
            <blockquote><strong>●ESP32教學</strong></blockquote>
            <p><strong>製作中...</strong></p>
        </div>
        <div>
            <img src="../assets/TeachC.png" alt="電腦軟體設計教學">
            <blockquote><strong>●電腦軟體設計教學</strong></blockquote>
            <p><strong>製作中...</strong></p>
        </div>
        <div>
            <img src="../assets/python.jpg" alt="Python教學">
            <blockquote><strong>●Python教學</strong></blockquote>
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
    height: 200px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;
    cursor: pointer;
    
}

.project a {
    text-decoration: none;
    color: inherit;
    display: block;
}

/* 如果你希望滑鼠移上去時也不要出現底線 */
.project a:hover {
    text-decoration: none;
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

@media screen and (max-width: 768px){
    .news h2 {
        font-size: 40px;
    }
}
</style>