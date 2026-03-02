<template>
    <div class="news">
        <h2>作品</h2>
    </div>
    <section class="project">
        <div>
            <img src="../assets/tetris.png" alt="●俄羅斯方塊小遊戲">
            <blockquote><strong>●俄羅斯方塊小遊戲</strong></blockquote>
            <p>利用Arduino UNO 搭配 OLED 來製作俄羅斯方塊遊戲，可使用藍、綠按鈕移動方塊，使用黑色按鈕控制方向和速度</p>
        </div>
        <blockquote><strong>●敬請期待...</strong></blockquote>
    </section>


    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
    </div>
</template>

<style scoped>
:root {
  --primary-dark: #1b2a2f;
  --accent-blue: #38bdf8;
  --bg-light: #dadada;
  --text-main: #303030;
  --text-light: #EFE6D8;
  --nav-text: #E2E8F0;
  --hover-bg: rgba(204, 196, 174, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.6);
}

.news {
    background-image: url(../assets/ProjectBg.jpg);
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