<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue';

// 複製程式碼功能
const copyCode = (event) => {
    const button = event.currentTarget;
    const codeBlock = button.closest('.code-block');
    const codeContainer = codeBlock ? codeBlock.querySelector('code') : null;
    if (!codeContainer) return;

    const text = codeContainer.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<span style="color: #ffea79;">✓ 已複製</span>';
        setTimeout(() => { button.innerHTML = originalHTML; }, 2000);
    });
};

onMounted(async () => {
    await nextTick();
    
    // 1. 初始化 Highlight.js (如果全域有引入)
    if (window.hljs) {
        window.hljs.highlightAll();
    }

    // 2. 捲動進入動畫監聽 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach(sec => observer.observe(sec));

    onUnmounted(() => {
        observer.disconnect();
    });
});
</script>

<template>
    <div class="arduino-page">
        <!-- 🌟 首頁頂部 Banner (黑金風格) -->
        <header class="hero-section">
            <div class="hero-content">
                <span class="sub-title">ARDUINO INTERACTIVE TUTORIAL</span>
                <h2>Arduino 基礎教學</h2>
                <div class="title-divider"></div>
                <p>從零開始學習微控制器、迴圈控制與實用電路模組設計</p>
            </div>
        </header>

        <!-- 📖 主要內容與目錄區域 -->
        <div class="container">
            <!-- 側邊欄目錄 -->
            <aside class="topic">
                <h3><span class="icon">📖</span> 目錄導覽</h3>
                <ul>
                    <li><a href="#intro">Arduino 介紹</a></li>
                    <li><a href="#led">LED 閃爍 (Blink)</a></li>
                    <li><a href="#for">for 迴圈應用</a></li>
                    <li><a href="#if">if 邏輯判斷式</a></li>
                    <li><a href="#traffic-light">紅綠燈實作專案</a></li>
                </ul>
            </aside>

            <!-- 主要內容區 -->
            <main class="content">
                <!-- Arduino 介紹 -->
                <section id="intro" class="animate-section">
                    <h2>Arduino 介紹</h2>
                    <p>Arduino 是一個開源的微控制器開發平台，結合了簡單易用的硬體電路板和基於 C/C++ 的軟體開發環境 (IDE)，讓初學者和專業人士都能輕鬆製作能感應環境並控制電子元件的互動式裝置。</p>
                    <div class="img-wrapper">
                        <img src="../assets/arduino(real).png" alt="Arduino 板子實體圖">
                    </div>
                </section>

                <!-- LED 閃爍 -->
                <section id="led" class="animate-section">
                    <h2>LED 閃爍 (Blink)</h2>
                    <p>Arduino 入門經典第一個實作項目，控制內建的 LED 每秒閃爍一次。</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">C++ / Arduino</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-cpp">void setup() {
  pinMode(13, OUTPUT); // 設定第13接腳為輸出
}

void loop() {
  digitalWrite(13, HIGH); // 點亮 LED
  delay(1000);
  digitalWrite(13, LOW);  // 熄滅 LED
  delay(1000);
}</code></pre>
                    </div>
                </section>

                <!-- for 迴圈 -->
                <section id="for" class="animate-section">
                    <h2>for 迴圈</h2>
                    <p>在 Arduino 語法中，若要執行重複性動作，可善用 <code>for</code> 迴圈。透過設定初始值、條件範圍與增減量，輕鬆控制多組元件。</p>
                    <div class="img-wrapper">
                        <img src="../assets/fordefine.png" alt="for迴圈語法說明">
                    </div>
                    
                    <p class="highlight-title">● for 迴圈跑馬燈實作（Tinkercad 模擬）：</p>
                    <div class="img-wrapper">
                        <img src="../assets/forled.png" alt="for迴圈跑馬燈電路圖">
                    </div>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">C++ / Arduino</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-cpp">// 定義 LED 使用的 12 個腳位（用陣列管理）
const int pins[] = { 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };  

void setup() {
  // 使用 for 迴圈，將所有 LED 腳位設為輸出
  for (int i = 0; i &lt; 12; i++) pinMode(pins[i], OUTPUT); 
}

void loop() {
  for (int i = 0; i &lt; 12; i++) {     // LED 由左到右依序亮起
    digitalWrite(pins[i], 1);     // 第 i 顆 LED 亮
    delay(100);  
  }

  for (int i = 0; i &lt; 12; i++) {     // LED 由左到右依序熄滅
    digitalWrite(pins[i], 0);       // 第 i 顆 LED 滅
    delay(100);
  }

  for (int i = 11; i >= 0; i--) {   // LED 由右到左依序亮起
    digitalWrite(pins[i], 1);       // 第 i 顆 LED 亮
    delay(100);
  }

  for (int i = 11; i >= 0; i--) {   // LED 由右到左依序熄滅
    digitalWrite(pins[i], 0);       // 第 i 顆 LED 滅
    delay(100);
  }

  for (int j = 0; j &lt; 3; j++) {     // 整組奇偶閃爍重複 3 次
    for (int i = 0; i &lt; 12; i += 2) 
        digitalWrite(pins[i], 1);   // 偶數索引 LED（0,2,4...）亮
    for (int i = 1; i &lt; 12; i += 2) 
        digitalWrite(pins[i], 0);   // 奇數索引 LED（1,3,5...）滅
    delay(200);

    for (int i = 0; i &lt; 12; i += 2) 
        digitalWrite(pins[i], 0);   // 偶數索引 LED 滅
    for (int i = 1; i &lt; 12; i += 2) 
        digitalWrite(pins[i], 1);   // 奇數索引 LED 亮
    delay(200);
  }

  for (int i = 0; i &lt; 12; i++) digitalWrite(pins[i], LOW);  // LED 最後都熄滅
}</code></pre>
                    </div>
                    
                    <div class="tip-box">
                        💡 <strong>小觀念：</strong><code>for</code> 迴圈與 <code>if</code> 判斷式若只執行單行指令時可省略大括號 <code>{}</code>，但多行指令則必須使用大括號包覆。
                    </div>
                </section>

                <!-- if 判斷式 -->
                <section id="if" class="animate-section">
                    <h2>if 判斷式</h2>
                    <p><code>if</code> 判斷式用來根據條件執行不同的程式碼區塊，常用於讀取感測器或按鈕狀態。</p>
                    <div class="img-wrapper">
                        <img src="../assets/if.png" alt="if判斷式語法結構">
                    </div>

                    <p class="highlight-title">● 按鈕控制多色 LED 燈實作：</p>
                    <div class="img-wrapper">
                        <img src="../assets/ifarduino.png" alt="if按鈕控制電路圖">
                    </div>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">C++ / Arduino</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-cpp">#define Red 7     // 定義紅燈接在第 7 腳
#define Blue 5    // 定義藍燈接在第 5 腳
#define Green 4   // 定義綠燈接在第 4 腳

#define ButtonPin1 12   // 定義按鈕1接在第 12 腳
#define ButtonPin2 9    // 定義按鈕2接在第 9 腳

void setup() {
  pinMode(Red, OUTPUT);
  pinMode(Blue, OUTPUT);
  pinMode(Green, OUTPUT);

  // 使用內建上拉電阻，按鈕未按下時為 1，按下時為 0
  pinMode(ButtonPin1, INPUT_PULLUP);
  pinMode(ButtonPin2, INPUT_PULLUP);
}

void loop() {
  int btn1 = digitalRead(ButtonPin1);
  int btn2 = digitalRead(ButtonPin2);

  if (!btn1) LED_Control(2);      // 按鈕 1 按下 -> 藍燈亮
  else if (!btn2) LED_Control(3); // 按鈕 2 按下 -> 綠燈亮
  else LED_Control(1);            // 均未按下 -> 紅燈亮
}

void LED_Control(int number) {
  digitalWrite(Red, number == 1);
  digitalWrite(Blue, number == 2);
  digitalWrite(Green, number == 3);
}</code></pre>
                    </div>
                </section>

                <!-- 紅綠燈實作 -->
                <section id="traffic-light" class="animate-section">
                    <h2>紅綠燈實作</h2>
                    <p>利用紅、黃、綠三顆 LED，模擬十字路口的紅綠燈變換邏輯：<mark>紅燈亮 5 秒 ➔ 綠燈亮 3 秒 ➔ 黃燈亮 2 秒</mark>。</p>
                    
                    <div class="component-card">
                        <h4>🛠️ 所需材料</h4>
                        <ul>
                            <li>Arduino 開發板 x1</li>
                            <li>紅 / 黃 / 綠 LED 各 x1</li>
                            <li>220Ω 限流電阻 x3</li>
                            <li>麵包板與跳線若干</li>
                        </ul>
                    </div>

                    <div class="img-wrapper">
                        <img src="../assets/arduino rgy.png" alt="紅綠燈電路接線圖">
                    </div>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">C++ / Arduino</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-cpp">#define traffic_light_Red 2     // 定義紅燈接在 2 號腳位
#define traffic_light_Yellow 3  // 定義黃燈接在 3 號腳位
#define traffic_light_Green 4   // 定義綠燈接在 4 號腳位

void setup() {
  for (int i = 2; i &lt;= 4; i++) pinMode(i, OUTPUT);
}

void loop() {
  traffic_light_Control(1); // 顯示紅燈
  delay(5000);
  traffic_light_Control(3); // 顯示綠燈
  delay(3000);
  traffic_light_Control(2); // 顯示黃燈
  delay(2000);
}

void traffic_light_Control(int number) {
  digitalWrite(traffic_light_Red, number == 1);    
  digitalWrite(traffic_light_Yellow, number == 2);
  digitalWrite(traffic_light_Green, number == 3);
}</code></pre>
                    </div>
                </section>
            </main>
        </div>

        <!-- 頁腳 -->
        <footer class="copyright">
            <p>Copyright © 2026 Xiaoxuan</p>
        </footer>
    </div>
</template>

<style scoped>
/* 🎨 黑金色彩主題定義 */
.arduino-page {
    --bg-black: #000000;
    --bg-dark: #121212;
    --bg-card: #1e1e1e;
    --bg-card-hover: #262626;
    --gold-main: #ffd700;
    --gold-bright: #ffea79;
    --gold-dark: #b39200;
    --text-white: #ffffff;
    --text-gray: #a1a1aa;

    background-color: var(--bg-black);
    color: var(--text-white);
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 🌟 全寬 Hero Banner (完全適應 Fixed Header) */
.hero-section {
    position: relative;
    width: 100%;
    /* 核心 1：固定 Banner 高度（380px ~ 420px 最適合作品集風格），避免圖片過大 */
    height: 400px;
    
    /* 核心 2：對齊 Header 下方空間（Padding Top 給 80px 剛好讓出 Header 高度） */
    padding-top: 80px;
    
    /* 背景圖與壓暗遮罩 */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), 
                url('../assets/arduinobg.png') center/cover no-repeat;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    z-index: 1; /* 確保不會壓過 Header (Header z-index 為 1000) */
}

.hero-content {
    max-width: 800px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    animation: fadeInDown 0.8s ease forwards;
}

.sub-title {
    font-size: 13px;
    letter-spacing: 5px;
    color: var(--gold-bright);
    font-weight: 700;
    margin-bottom: 12px;
    display: block;
    text-transform: uppercase;
}

.hero-content h2 {
    font-size: 48px;
    font-weight: 800;
    margin: 0 0 12px;
    letter-spacing: 3px;
    background: linear-gradient(135deg, #ffffff 30%, var(--gold-main) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.8));
}

.title-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold-bright), var(--gold-dark));
    margin: 0 auto 16px;
    border-radius: 2px;
}

.hero-content p {
    font-size: 16px;
    color: var(--text-gray);
    margin: 0;
    font-weight: 300;
    line-height: 1.6;
}

/* ⏱️ 主要內容區容器 */
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 24px 100px;
    gap: 32px;
    box-sizing: border-box;
}

/* 側邊欄 (Sidebar) 修正吸頂位置 */
.topic {
    position: sticky;
    top: 90px; /* 留出 90px 避免被固定導覽列遮住 */
    width: 260px;
    flex-shrink: 0;
    background: var(--bg-card);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    z-index: 10;
}

.topic h3 {
    font-size: 18px;
    color: var(--gold-bright);
    margin: 0 0 16px 0;
    border-bottom: 1px solid rgba(255, 215, 0, 0.15);
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.topic ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.topic a {
    color: var(--text-gray);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    display: block;
    padding: 10px 14px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.topic a:hover {
    color: var(--gold-bright);
    background: var(--bg-card-hover);
    transform: translateX(5px);
}

/* 主要內容區 (Main Content) */
.content {
    flex: 1;
    min-width: 0;
}

.animate-section {
    background: var(--bg-card);
    border: 1px solid rgba(255, 215, 0, 0.18);
    border-radius: 16px;
    padding: 36px;
    margin-bottom: 32px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    scroll-margin-top: 90px; /* 點目錄跳轉時的頂部留白 */
    box-sizing: border-box;
}

.animate-section.show {
    animation: fadeUp 0.8s forwards ease-out;
}

.animate-section:hover {
    border-color: rgba(255, 215, 0, 0.4);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.15);
}

.content h2 {
    font-size: 26px;
    font-weight: 700;
    color: var(--gold-bright);
    margin-top: 0;
    margin-bottom: 18px;
    position: relative;
    padding-left: 16px;
}

.content h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 4px;
    background: linear-gradient(to bottom, var(--gold-bright), var(--gold-dark));
    border-radius: 2px;
}

.content p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-gray);
    margin-bottom: 20px;
}

.highlight-title {
    font-weight: 700;
    color: var(--text-white);
    margin-top: 28px;
}

mark {
    background: rgba(255, 215, 0, 0.2);
    color: var(--gold-bright);
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

code {
    background: #121212;
    color: var(--gold-bright);
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
    font-size: 0.9em;
    border: 1px solid #333;
}

/* 圖片容器 */
.img-wrapper {
    background: #121212;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 16px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
}

.content img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

/* 提示卡片與材料清單 */
.tip-box {
    background: rgba(255, 215, 0, 0.05);
    border-left: 4px solid var(--gold-main);
    padding: 16px 20px;
    border-radius: 8px;
    color: var(--gold-bright);
    font-size: 15px;
    margin: 20px 0;
    line-height: 1.6;
}

.component-card {
    background: #121212;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 20px 0;
}

.component-card h4 {
    margin: 0 0 12px 0;
    color: var(--gold-bright);
}

.component-card ul {
    margin: 0;
    padding-left: 20px;
    color: var(--text-gray);
    line-height: 1.8;
}

/* ==================== 程式碼區塊 (Code Block) ==================== */
.code-block {
    background: #0d0d0d;
    border-radius: 12px;
    margin: 20px 0;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.code-header {
    background: #181818;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #2a2a2a;
}

.dots {
    display: flex;
    gap: 6px;
}

.dots i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
}

.dots i:nth-child(1) { background: #ff5f56; }
.dots i:nth-child(2) { background: #ffbd2e; }
.dots i:nth-child(3) { background: #27c93f; }

.code-lang {
    color: var(--text-gray);
    font-size: 12px;
    font-family: monospace;
}

.copy-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-gray);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s ease;
}

.copy-btn:hover {
    background: var(--gold-main);
    color: #000;
    border-color: var(--gold-main);
    font-weight: 600;
}

.code-scroll {
    overflow-x: auto;
    padding: 20px;
    margin: 0;
}

.code-scroll code {
    background: transparent;
    padding: 0;
    border: none;
}

/* Highlight.js 黑金配色微調 */
:deep(.hljs) {
    color: #e4e4e7;
    background: transparent;
    font-family: 'Consolas', 'Fira Code', 'Monaco', monospace;
    font-size: 15px;
    line-height: 1.7;
}

:deep(.hljs-keyword), :deep(.hljs-type) { color: #ffea79; }
:deep(.hljs-title), :deep(.hljs-function) { color: #38bdf8; }
:deep(.hljs-built_in), :deep(.hljs-literal) { color: #f97316; }
:deep(.hljs-number) { color: #22c55e; }
:deep(.hljs-comment) { color: #71717a; font-style: italic; }
:deep(.hljs-string) { color: #4ade80; }

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

/* 📱 響應式手機排版 */
/* 📱 響應式手機排版優化 */
@media screen and (max-width: 960px) {
    /* 1. Hero Banner 區塊與文字強制致中 */
    .hero-section {
        height: auto;
        min-height: 320px;
        padding-top: 100px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        padding: 0 16px;
    }

    .hero-content h2,
    .hero-content p,
    .sub-title {
        text-align: center;
        width: 100%;
    }

    .hero-content h2 {
        font-size: 32px;
    }

    .title-divider {
        margin: 0 auto 16px; /* 確保分隔線置中 */
    }

    /* 2. 主要內容與目錄區塊調整 */
    .container {
        flex-direction: column;
        align-items: center; /* 讓子元件在手機上置中 */
        padding: 24px 16px;
    }

    .topic {
        width: 100%;
        position: static;
        margin-bottom: 24px;
    }

    .content {
        width: 100%;
    }

    .animate-section {
        padding: 24px 18px;
    }

    /* 3. 圖片與程式碼區塊在手機上填滿且置中 */
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-wrapper img {
        margin: 0 auto;
    }
}
</style>