<script setup>
import { onMounted, nextTick } from 'vue';

const copyCode = (event) => {
    const button = event.currentTarget;
    const codeContainer = button.parentElement.querySelector('code');
    if (!codeContainer) return;

    const text = codeContainer.innerText;
    navigator.clipboard.writeText(text).then(() => {
        // 顯示已複製的視覺回饋
        const originalHTML = button.innerHTML;
        button.innerHTML = '<span style="color: #4ade80;">✓ 已複製</span>';
        setTimeout(() => { button.innerHTML = originalHTML; }, 2000);
    });
};

onMounted(async () => {
    await nextTick();
    if (window.hljs) {
        window.hljs.highlightAll();
    }
});
</script>

<template>
    <div class="news">
        <h2>Arduino教學</h2>
    </div>

    <div class="container">
        <aside class="topic">
            <h3>目錄</h3>
            <ul>
                <li><a href="#intro">Arduino 介紹</a></li>
                <li><a href="#led">LED 閃爍</a></li>
                <li><a href="#for">for 迴圈</a></li>
                <li><a href="#if">if 判斷式</a></li>
                <li><a href="#traffic-light">紅綠燈實作</a></li>
            </ul>
        </aside>

        <main class="content">
            <section id="intro">
                <h2>Arduino 介紹</h2>
                <p>Arduino是一個開源的微控制器開發平台，結合了簡單易用的硬體電路板和基於C/C++的軟體開發環境 (IDE)，讓初學者和專業人士都能輕鬆製作能感應環境並控制電子元件的互動式裝置 (如下圖)。</p>


                <img src="../assets/arduino(real).png" alt="Arduino">

            </section>

            <section id="led">
                <h2>LED 閃爍 (Blink)</h2>
                <p>Arduino 入門實習，讓內建的 LED 每秒閃爍一次。</p>
                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
                    <pre class="code-scroll"><code class="language-cpp">
void setup() {
  pinMode(13, OUTPUT); // 設定第13接腳為輸出
}

void loop() {
  digitalWrite(13, HIGH); // 點亮 LED
  delay(1000);
  digitalWrite(13, LOW);  // 熄滅 LED
  delay(1000);
}
</code>
</pre>

                </div>
            </section>
        </main>
    </div>

</template>

<style scoped>
.news {
    background-image: url(../assets/arduinobg.png);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
    padding-top: 120px;
    text-align: center;
    animation: fadeInUp 0.5s ease forwards;
}

.news h2 {
    font-size: 70px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.container {
    display: flex;
    max-width: 1200px;
    /* 這裡決定了你的內容區＋主題區的總寬度 */
    margin: 40px auto;
    /* 讓這整個區塊在螢幕正中間 */
    padding: 0 20px;
    gap: 30px;
    /* 兩者間距 */
    align-items: flex-start;
    justify-content: center;
    /* 讓內部的子元素在容器內水平對齊 */
}

/* 側邊欄 (Topic) */
.topic {
    position: sticky;
    /* 讓目錄跟著滾動 */
    top: 120px;
    width: 220px;
    flex-shrink: 0;
    /* 強制維持寬度，不准被壓縮 */
    background: var(--sidebar-bg);
    padding: 25px;
    border-radius: 15px;
    /* 移除原本的 right: 100px; */
}

.topic h3 {
    color: var(--accent-blue);
    margin-bottom: 15px;
    border-bottom: 1px solid #334155;
    padding-bottom: 10px;
}

.topic ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
}

.topic a {
    color: var(--sidebar-link);
    text-decoration: none;
    font-size: 16px;
    display: block;
    white-space: nowrap;
    transition: all 0.3s ease;
}

.topic a:hover {
    color: var(--accent-blue);
    padding-left: 5px;
}


.content {
    flex: 1;
    /* 填滿剩餘空間 */
    max-width: 850px;
    /* 限制這個寬度，讓內容更精緻好讀 */
    color: var(--text-main);
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 15px var(--shadow-light);
}

.content section {
    margin-bottom: 60px;
    scroll-margin-top: 90px;
}

.content h2 {
    color: var(--primary-dark);
    margin-bottom: 20px;
    border-left: 5px solid var(--accent-blue);
    padding-left: 15px;
}

.content p {
    line-height: 1.8;
    margin-bottom: 15px;
}

.content img {
    max-width: 100%;
    /* 確保圖片不超出白色區塊 */
    height: auto;
    display: block;
    /* 關鍵：轉為塊級元素，才能使用 margin auto */
    margin: 30px auto;
    /* 關鍵：上下留 30px 間距，左右 auto 達成置中 */
    border-radius: 8px;
    /* 圓角（可選） */
}

.code-block {
    background: var(--arduino-bg);
    font-size: large;
    padding: 5px;
    border-radius: 8px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    /* 使用等寬字型 */
    line-height: 1.5;
    margin: 20px 0;
    border-left: 5px solid var(--accent-blue);
    /* 側邊裝飾線 */
    overflow: hidden;
    position: relative;
    margin: 10px 0;
}

/* 複製按鈕樣式 */
.copy-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background-color: var(--primary-dark);
    color: var(--text-light);
    border: 1px solid var(--accent-blue);
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s;
    z-index: 10;
}

.code-scroll {
    overflow-x: auto;
    padding: 20px;
    margin: 0;
}


.copy-btn:hover {
    background-color: var(--accent-blue);
    color: #fff;
}

@media screen and (max-width: 900px) {
    .container {
        flex-direction: column;
        align-items: stretch;
    }

    .topic {
        width: 100%;
    }

    .content {
        width: 100%;
    }

}

:deep(.hljs) {
    color: #e6edf3;
    background: transparent;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 16px;
    line-height: 1.6;
    padding: 20px;
}

/* 關鍵字：void, int, for */
:deep(.hljs-keyword),
:deep(.hljs-type) {
    color: #00979d;
}

/* 函式名稱：setup, loop, digitalWrite */
:deep(.hljs-title),
:deep(.hljs-function) {
    color: #43b5e4;
}

/* 常數：HIGH, LOW, OUTPUT */
:deep(.hljs-built_in),
:deep(.hljs-literal) {
    color: #ff9900;
}

/* 數字 */
:deep(.hljs-number) {
    color: #d35400;
}

/* 註解 */
:deep(.hljs-comment) {
    color: #9aa0a6;
    font-style: italic;
}

/* 字串 */
:deep(.hljs-string) {
    color: #98c379;
}
</style>