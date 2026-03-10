<script setup>
import { onMounted, nextTick } from 'vue';

const copyCode = (event) => {
    const button = event.currentTarget;
    const codeContainer = button.parentElement.querySelector('code');
    if (!codeContainer) return;

    const text = codeContainer.innerText.trim();
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
</code></pre>

                </div>
            </section>

            <section id="for">
                <h2>for迴圈</h2>

                <p>在Arduino語法中，若要執行超過兩次的重複動作，就可以用for迴圈來撰寫，先設定初始變數 i 當作迴圈變數，下一段指定迴圈的範圍，最後一段指令迴圈的動作是要加還是減</p>
                <img src="../assets/fordefine.png" alt="for">
                <p><strong>● for迴圈範例： (使用<a href="https://www.tinkercad.com/" target="_blank"
                            style="text-decoration: none;">Tinkercad</a>模擬軟體)</strong></p>
                <img src="../assets/forled.png" alt="">
                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
                    <pre class="code-scroll"><code class="language-cpp">
// 定義 LED 使用的 12 個腳位（用陣列管理）
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

  for (int i = 0; i &lt; 12; i++) {    // LED 由左到右依序熄滅
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
}
</code></pre>
                </div>
                <p><strong>● for迴圈如果需要執行一行程式碼，則不需要大括號，一行以上則需要，if也是同觀念</strong></p>
            </section>

            <section id="if">
                <h2>if判斷式</h2>
                <p>if判斷式用來根據條件執行不同的程式碼區塊，基本語法如下：</p>
                <img src="../assets/if.png" alt="">

                <p><strong>● if 判斷按鈕實作： (使用<a href="https://www.tinkercad.com/" target="_blank"
                            style="text-decoration: none;">Tinkercad</a>模擬軟體)</strong></p>
                <img src="../assets/ifarduino.png" alt="">
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
                    <pre class="code-scroll"><code class="language-cpp">
#define Red 7     // 定義紅燈接在第 7 腳
#define Blue 5    // 定義藍燈接在第 5 腳
#define Green 4   // 定義綠燈接在第 4 腳

#define ButtonPin1 12   // 定義按鈕1接在第 12 腳
#define ButtonPin2 9    // 定義按鈕1接在第 9 腳

void setup() {
  pinMode(Red, OUTPUT);
  pinMode(Blue, OUTPUT);
  pinMode(Green, OUTPUT);

  // 使用內建上拉電阻，按鈕未按下時為 1，按下時為 0
  pinMode(ButtonPin1, INPUT_PULLUP);
  pinMode(ButtonPin2, INPUT_PULLUP);
}

void loop() {
  // 讀取按鈕狀態 (0 代表按下)
  int btn1 = digitalRead(ButtonPin1);
  int btn2 = digitalRead(ButtonPin2);

  // !btn => btn == 0
  if (!btn1) LED_Control(2);      // 當按鈕 1 被按下，切換到模式 2 (亮藍燈)
  else if (!btn2) LED_Control(3); // 按鈕 1 沒按，按鈕 2 按下，切換到模式 3(亮綠燈)
  else LED_Control(1);                // 兩個都沒按時，維持模式 1 (亮紅燈)
}

// 燈號控制函式：根據傳入的數字切換燈號
void LED_Control(int number) {
  // 邏輯判斷：若 number 等於對應數字，則該腳位輸出 HIGH (1)
  digitalWrite(Red, number == 1);
  digitalWrite(Blue, number == 2);
  digitalWrite(Green, number == 3);
}
</code></pre>
                </div>
            </section>

            <section id="traffic-light">
                <h2>紅綠燈實作</h2>
                <p>利用紅、黃、綠三顆 LED，模擬馬路上的紅綠燈切換邏輯，<strong>紅燈亮5秒，綠燈亮3秒，黃燈亮2秒。</strong></p>
                <p><strong>所需材料：</strong> 紅/黃/綠 LED、220Ω 電阻 x3、麵包板。(電路接法如下圖)</p>

                <img src="../assets/arduino rgy.png" alt="">


                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
                    <pre class="code-scroll"><code class="language-cpp">
#define traffic_light_Red 2     // 定義紅燈接在 Arduino 腳位 2
#define traffic_light_Yellow 3  // 定義黃燈接在 Arduino 腳位 3
#define traffic_light_Green 4   // 定義綠燈接在 Arduino 腳位 4

void setup() {
  // 使用 for 迴圈，將 2~4 腳位設為輸出（紅黃綠燈）
  for (int i = 2; i &lt;= 4; i++) pinMode(i, OUTPUT);
}

void loop() {
  traffic_light_Control(1); // 呼叫函式，顯示紅燈
  delay(5000);
  traffic_light_Control(3); // 呼叫函式，顯示綠燈
  delay(3000);
  traffic_light_Control(2); // 呼叫函式，顯示黃燈
  delay(2000);
}

// 副程式寫法
void traffic_light_Control(int number) {
  // 當 number 為 1 時紅燈亮，其餘時間熄滅
  digitalWrite(traffic_light_Red, number == 1);     

  // 當 number 為 2 時黃燈亮，其餘時間熄滅
  digitalWrite(traffic_light_Yellow, number == 2);

  // 當 number 為 3 時綠燈亮，其餘時間熄滅
  digitalWrite(traffic_light_Green, number == 3);
}</code></pre>
                </div>
            </section>
        </main>
    </div>

    <div class="copyright">
        <p>Copyright © 2026 Xiaoxuan</p>
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
    .news h2 {
        font-size: 40px;
    }
}
</style>