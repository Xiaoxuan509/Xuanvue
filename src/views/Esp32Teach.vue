<script setup>
const data = [
    { href: "#intro", title: "ESP32介紹" },
    { href: "#setup", title: "開發環境設置" },
    { href: "#basic", title: "基礎語法" },
    { href: "#gpio", title: "GPIO控制" },
    { href: "#mqtt", title: "MQTT通訊" },
    { href: "#bluetooth", title: "藍牙(BLE)" },
    { href: "#modules", title: "模組介面" },
]

import { onMounted, nextTick } from 'vue';

const copyCode = (event) => {
    const button = event.currentTarget;
    const codeContainer = button.parentElement.querySelector('code');
    if (!codeContainer) return;

    const text = codeContainer.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
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
        <h2>ESP32教學</h2>
    </div>

    <div class="container">
        <aside class="topic">
            <h3>目錄</h3>
            <ul>
                <li v-for="d in data" :key="d.title">
                    <a :href="d.href">{{ d.title }}</a>
                </li>
            </ul>
        </aside>

        <main class="content">

            <!-- ===== ESP32 介紹 ===== -->
            <section id="intro">
                <h2>ESP32 介紹</h2>
                <h3><strong>核心觀念：低成本、高整合、WiFi + 藍牙內建</strong></h3>
                <br>
                <p>ESP32 是由樂鑫（Espressif）推出的微控制器，對於習慣 Arduino 的開發者來說，ESP32 最吸引人的地方在於它<strong>內建 WiFi 與藍牙</strong>，卻保有 Arduino 般簡單的開發體驗。它擁有雙核心 240 MHz 處理器、520 KB SRAM，非常適合用於 IoT 專案。</p>
                <p>ESP32 支援多種開發環境，本教學採用 <strong>Arduino IDE</strong> 搭配 C++ 語法進行說明，這是初學者最容易上手的方式。</p>
                <img src="../assets/ESP32Real.jpg" alt="ESP32">
            </section>

            <!-- ===== 開發環境設置 ===== -->
            <section id="setup">
                <h2>開發環境設置</h2>
                <h3><strong>● 安裝 Arduino IDE</strong></h3><br>
                <p>前往 <strong>Arduino 官網</strong> 下載並安裝最新版本的 Arduino IDE（建議 2.x 以上版本）。</p>

                <h3><strong>● 新增 ESP32 開發板來源</strong></h3><br>
                <p>開啟 Arduino IDE，進入 <strong>檔案 → 偏好設定</strong>，在「額外的開發板管理員網址」欄位填入以下網址：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-plaintext">
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
</code></pre>
                </div>

                <h3><strong>● 安裝 ESP32 套件</strong></h3><br>
                <p>進入 <strong>工具 → 開發板 → 開發板管理員</strong>，搜尋 <strong>esp32</strong>，找到 Espressif Systems 出品的套件後點擊安裝。</p>

                <h3><strong>● 選擇開發板與連接埠</strong></h3><br>
                <p>安裝完成後，進入 <strong>工具 → 開發板 → esp32</strong>，選擇 <strong>ESP32 Dev Module</strong>，再至 <strong>工具 → 連接埠</strong> 選擇對應的 COM 埠即可開始上傳程式。</p>
            </section>

            <!-- ===== 基礎語法 ===== -->
            <section id="basic">
                <h2>基礎語法</h2>
                <h3><strong>● 程式結構</strong></h3><br>
                <p>每支 ESP32（Arduino）程式都由兩個核心函式組成：<strong>setup()</strong> 只執行一次（初始化），<strong>loop()</strong> 則無限循環執行（主邏輯）。</p>

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
    // 初始化程式碼，只執行一次
    Serial.begin(115200);
    Serial.println("Hello, ESP32!");
}

void loop() {
    // 主程式，會不斷重複執行
    Serial.println("正在執行中...");
    delay(1000); // 暫停 1000 毫秒（1 秒）
}
</code></pre>
                </div>

                <h3><strong>● 變數宣告</strong></h3><br>
                <p>ESP32 使用 C++ 語法，變數宣告時需要指定型別，常見型別如下：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
int   count  = 0;        // 整數
float temp   = 25.5;     // 浮點數（小數）
bool  isOn   = true;     // 布林值（true / false）
String name  = "ESP32";  // 字串
</code></pre>
                </div>

                <h3><strong>● 條件判斷</strong></h3><br>
                <p>使用 <strong>if</strong>、<strong>else if</strong>、<strong>else</strong> 進行條件控制：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
int x = 10;

if (x > 10) {
    Serial.println("x 大於 10");
} else if (x == 10) {
    Serial.println("x 等於 10");
} else {
    Serial.println("x 小於 10");
}
</code></pre>
                </div>

                <h3><strong>● 迴圈控制</strong></h3><br>
                <p>使用 <strong>for</strong> 迴圈重複執行程式碼：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
// for (初始值; 條件; 每次變化)
for (int i = 0; i &lt; 5; i++) {
    Serial.println(i);  // 輸出 0 ~ 4
}

// 搭配陣列使用
int pins[] = {2, 4, 5, 18, 19};
int count = 5;

for (int i = 0; i &lt; count; i++) {
    Serial.println(pins[i]);
}
</code></pre>
                </div>

                <h3><strong>● 陣列</strong></h3><br>
                <p>ESP32（C++）使用<strong>陣列</strong>儲存多個相同型別的資料，宣告時需指定長度或初始值：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
// 建立一個整數陣列
int scores[3] = {85, 90, 78};

// 存取元素（從 0 開始計算）
Serial.println(scores[0]);  // 輸出: 85

// 取得陣列長度
int len = sizeof(scores) / sizeof(scores[0]);
Serial.println(len);  // 輸出: 3

// 修改元素
scores[1] = 95;
</code></pre>
                </div>
            </section>

            <!-- ===== GPIO 控制 ===== -->
            <section id="gpio">
                <h2>GPIO 控制</h2>
                <h3><strong>● 數位輸出（點亮 LED）</strong></h3><br>
                <p>使用 <strong>pinMode()</strong> 設定腳位模式，再用 <strong>digitalWrite()</strong> 控制高低電位，以下範例讓接在 GPIO 2 的 LED 每秒閃爍一次：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
const int LED_PIN = 2;  // 內建 LED 通常接在 GPIO 2

void setup() {
    pinMode(LED_PIN, OUTPUT);  // 設定為輸出模式
}

void loop() {
    digitalWrite(LED_PIN, HIGH);  // 點亮 LED
    delay(1000);                  // 等待 1 秒
    digitalWrite(LED_PIN, LOW);   // 熄滅 LED
    delay(1000);                  // 等待 1 秒
}
</code></pre>
                </div>

                <h3><strong>● 數位輸入（讀取按鈕）</strong></h3><br>
                <p>使用 <strong>digitalRead()</strong> 讀取腳位狀態，搭配內部上拉電阻（<strong>INPUT_PULLUP</strong>）可省去外接電阻：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
const int BTN_PIN = 4;
const int LED_PIN = 2;

void setup() {
    pinMode(BTN_PIN, INPUT_PULLUP); // 啟用內部上拉電阻
    pinMode(LED_PIN, OUTPUT);
    Serial.begin(115200);
}

void loop() {
    int state = digitalRead(BTN_PIN);

    if (state == LOW) {
        // 按下按鈕（INPUT_PULLUP 時按下為 LOW）
        digitalWrite(LED_PIN, HIGH);
        Serial.println("按鈕已按下");
    } else {
        digitalWrite(LED_PIN, LOW);
    }
}
</code></pre>
                </div>

                <h3><strong>● 類比輸入（讀取電壓）</strong></h3><br>
                <p>ESP32 的 ADC（類比數位轉換器）解析度為 <strong>12-bit</strong>，讀取值範圍為 <strong>0 ~ 4095</strong>，對應電壓約 0V ~ 3.3V：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
const int POT_PIN = 34;  // GPIO 34 為 ADC 輸入腳

void setup() {
    Serial.begin(115200);
}

void loop() {
    int rawValue = analogRead(POT_PIN);       // 讀取原始值 0 ~ 4095
    float voltage = rawValue * (3.3 / 4095.0); // 換算為電壓值

    Serial.print("原始值: ");
    Serial.print(rawValue);
    Serial.print("  電壓: ");
    Serial.print(voltage, 2);  // 顯示小數點後 2 位
    Serial.println(" V");

    delay(500);
}
</code></pre>
                </div>
            </section>

            <!-- ===== MQTT 通訊 ===== -->
            <section id="mqtt">
                <h2>MQTT 通訊</h2>
                <h3><strong>核心觀念：發布 / 訂閱（Publish / Subscribe）</strong></h3><br>
                <p>MQTT 是一種輕量級的訊息傳遞協定，非常適合 IoT 裝置使用，可以使用手機控制ESP32。它的運作模型是透過一台<strong>Broker（中介伺服器）</strong>來轉發訊息，裝置可以向某個「主題（Topic）」<strong>發布（Publish）</strong>訊息，也可以<strong>訂閱（Subscribe）</strong>某個主題來接收訊息。</p>

                <h3><strong>● 安裝函式庫</strong></h3><br>
                <p>在 Arduino IDE 的 <strong>函式庫管理員</strong> 中搜尋並安裝以下兩個套件：</p>
                <p><strong>PubSubClient</strong>（作者：Nick O'Leary）— 負責 MQTT 連線與收發訊息</p>
                <p><strong>WiFi</strong>（ESP32 內建）— 負責連上無線網路，通常不需額外安裝</p>

                <h3><strong>● WiFi 連線</strong></h3><br>
                <p>使用 MQTT 之前，ESP32 必須先連上 WiFi：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;WiFi.h&gt;

const char* ssid     = "你的WiFi名稱";
const char* password = "你的WiFi密碼";

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    Serial.print("連線中");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi 連線成功！");
    Serial.print("IP 位址：");
    Serial.println(WiFi.localIP());
}
</code></pre>
                </div>

                <h3><strong>● 發布訊息（Publish）</strong></h3><br>
                <p>連上 WiFi 後，設定 MQTT Broker 並向指定 Topic 發布訊息。以下範例每 5 秒向 <code>esp32/sensor</code> 主題發送溫度數值：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;WiFi.h&gt;
#include &lt;PubSubClient.h&gt;

const char* ssid       = "你的WiFi名稱";
const char* password   = "你的WiFi密碼";
const char* mqttServer = "broker.emqx.io"; // 免費公共 Broker
const int   mqttPort   = 1883;

WiFiClient   espClient;
PubSubClient client(espClient);

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) delay(500);

    client.setServer(mqttServer, mqttPort);

    // 連接 MQTT Broker
    while (!client.connected()) {
        if (client.connect("ESP32Client")) {
            Serial.println("MQTT 連線成功！");
        } else {
            delay(2000);
        }
    }
}

void loop() {
    client.loop(); // 保持連線，必須在 loop() 中呼叫

    float temperature = 25.3; // 實際應用時改為感測器讀值
    String payload = String(temperature);

    client.publish("esp32/sensor", payload.c_str());
    Serial.println("已發布：" + payload);

    delay(5000);
}
</code></pre>
                </div>

                <h3><strong>● 訂閱訊息（Subscribe）</strong></h3><br>
                <p>透過設定 <strong>callback 函式</strong>，當訂閱的 Topic 收到訊息時會自動觸發：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
// 收到訊息時自動呼叫此函式
void callback(char* topic, byte* message, unsigned int length) {
    Serial.print("收到訊息，Topic: ");
    Serial.print(topic);
    Serial.print("  內容: ");

    String msgStr = "";
    for (int i = 0; i &lt; length; i++) {
        msgStr += (char)message[i];
    }
    Serial.println(msgStr);

    // 根據訊息內容控制 LED
    if (msgStr == "ON")  digitalWrite(2, HIGH);
    if (msgStr == "OFF") digitalWrite(2, LOW);
}

void setup() {
    // ... WiFi 連線程式碼 ...
    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);     // 設定 callback 函式

    while (!client.connected()) {
        if (client.connect("ESP32Client")) {
            client.subscribe("esp32/control"); // 訂閱主題
        }
    }
}

void loop() {
    client.loop(); // 必須持續呼叫以接收訊息
}
</code></pre>
                </div>
            </section>

            <!-- ===== 藍牙 BLE ===== -->
            <section id="bluetooth">
                <h2>藍牙（BLE）</h2>
                <h3><strong>核心觀念：低功耗藍牙（Bluetooth Low Energy）</strong></h3><br>
                <p>ESP32 內建<strong>傳統藍牙（Classic Bluetooth）</strong>與<strong>低功耗藍牙（BLE）</strong>兩種模式。BLE 適合與手機 App 溝通、傳送感測器數據等場景，功耗極低，是 IoT 裝置的首選。</p>
                <p>BLE 的核心概念是<strong>服務（Service）</strong>與<strong>特徵值（Characteristic）</strong>，可以把 Service 想成一個資料夾，Characteristic 就是裡面的一個個數值，手機 App 可以讀取或寫入這些數值。</p>

                <h3><strong>● BLE 伺服器（Server）— ESP32 廣播資料</strong></h3><br>
                <p>以下建立一個 BLE Server，讓手機可以連上來讀取或寫入數值：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;BLEDevice.h&gt;
#include &lt;BLEServer.h&gt;
#include &lt;BLEUtils.h&gt;
#include &lt;BLE2902.h&gt;

// 自訂 UUID（可使用線上工具產生）
#define SERVICE_UUID        "12345678-1234-1234-1234-123456789abc"
#define CHARACTERISTIC_UUID "abcd1234-ab12-ab12-ab12-abcdef123456"

BLECharacteristic* pCharacteristic;
bool deviceConnected = false;

// 連線事件處理
class MyServerCallbacks : public BLEServerCallbacks {
    void onConnect(BLEServer* pServer)    { deviceConnected = true;  }
    void onDisconnect(BLEServer* pServer) { deviceConnected = false; }
};

// 收到寫入事件處理
class MyCharCallbacks : public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic* pChar) {
        String value = pChar->getValue().c_str();
        Serial.println("收到手機傳來：" + value);
    }
};

void setup() {
    Serial.begin(115200);
    BLEDevice::init("ESP32-BLE");                       // 裝置名稱

    BLEServer*  pServer  = BLEDevice::createServer();
    pServer->setCallbacks(new MyServerCallbacks());

    BLEService* pService = pServer->createService(SERVICE_UUID);

    pCharacteristic = pService->createCharacteristic(
        CHARACTERISTIC_UUID,
        BLECharacteristic::PROPERTY_READ  |
        BLECharacteristic::PROPERTY_WRITE |
        BLECharacteristic::PROPERTY_NOTIFY
    );
    pCharacteristic->addDescriptor(new BLE2902());
    pCharacteristic->setCallbacks(new MyCharCallbacks());
    pCharacteristic->setValue("Hello BLE");

    pService->start();
    pServer->getAdvertising()->start();                 // 開始廣播
    Serial.println("BLE 開始廣播，等待連線...");
}

void loop() {
    if (deviceConnected) {
        // 每 2 秒透過 Notify 推送數值給手機
        String data = "Temp:" + String(25.3);
        pCharacteristic->setValue(data.c_str());
        pCharacteristic->notify();
        delay(2000);
    }
}
</code></pre>
                </div>

                <h3><strong>● 手機測試工具</strong></h3><br>
                <p>上傳程式後，可使用以下免費 App 測試 BLE 連線：</p>
                <p><strong>nRF Connect</strong>（iOS / Android）— 可掃描、連線、讀寫 Characteristic，是開發階段最常用的工具</p>
                <p><strong>LightBlue</strong>（iOS / Android）— 介面簡潔，適合快速驗證數據是否正確</p>
            </section>

            <!-- ===== 模組介面 ===== -->
            <section id="modules">
                <h2>模組介面</h2>
                <h3><strong>核心觀念：I²C、SPI、UART</strong></h3><br>
                <p>ESP32 支援多種通訊協定來連接外部模組與感測器，三種最常見的有：<strong>I²C</strong>（雙線，適合多個低速裝置）、<strong>SPI</strong>（四線，速度快，適合螢幕或 SD 卡）、<strong>UART</strong>（序列埠，點對點通訊）。</p>

                <h3><strong>● I²C — 掃描裝置位址</strong></h3><br>
                <p>I²C 只需要兩條線：<strong>SDA（資料）</strong>與 <strong>SCL（時脈）</strong>。ESP32 預設 SDA = GPIO 21、SCL = GPIO 22。以下程式可掃描匯流排上所有裝置的位址：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;Wire.h&gt;

void setup() {
    Serial.begin(115200);
    Wire.begin();  // SDA=21, SCL=22（ESP32 預設）

    Serial.println("掃描 I²C 裝置...");
    int count = 0;

    for (int addr = 1; addr &lt; 127; addr++) {
        Wire.beginTransmission(addr);
        if (Wire.endTransmission() == 0) {
            Serial.print("找到裝置！位址：0x");
            Serial.println(addr, HEX);
            count++;
        }
    }

    if (count == 0) Serial.println("未找到任何 I²C 裝置");
    else Serial.println("掃描完成");
}

void loop() {}
</code></pre>
                </div>

                <h3><strong>● I²C — 讀取 OLED 螢幕（SSD1306）</strong></h3><br>
                <p>SSD1306 是常見的 0.96 吋 OLED 螢幕，I²C 位址通常為 <strong>0x3C</strong>。安裝 <strong>Adafruit SSD1306</strong> 與 <strong>Adafruit GFX Library</strong> 後即可使用：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;Wire.h&gt;
#include &lt;Adafruit_GFX.h&gt;
#include &lt;Adafruit_SSD1306.h&gt;

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_ADDR 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire);

void setup() {
    Serial.begin(115200);
    Wire.begin();

    if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
        Serial.println("找不到 SSD1306！");
        while (true);
    }

    display.clearDisplay();
    display.setTextSize(2);            // 字體大小（1~3）
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(10, 20);         // 設定起始座標
    display.println("Hello!");
    display.display();                 // 更新螢幕
}

void loop() {}
</code></pre>
                </div>

                <h3><strong>● SPI — 連接 SD 卡模組</strong></h3><br>
                <p>SPI 使用四條線：<strong>MOSI、MISO、SCK、CS</strong>。ESP32 預設 MOSI = 23、MISO = 19、SCK = 18，CS 腳可自行指定。以下範例讀寫 SD 卡中的文字檔：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
#include &lt;SPI.h&gt;
#include &lt;SD.h&gt;

const int CS_PIN = 5;  // CS 接 GPIO 5

void setup() {
    Serial.begin(115200);

    if (!SD.begin(CS_PIN)) {
        Serial.println("SD 卡初始化失敗！");
        return;
    }
    Serial.println("SD 卡初始化成功！");

    // 寫入檔案
    File file = SD.open("/data.txt", FILE_WRITE);
    if (file) {
        file.println("溫度: 25.3");
        file.println("濕度: 60%");
        file.close();
        Serial.println("寫入完成");
    }

    // 讀取檔案
    file = SD.open("/data.txt");
    if (file) {
        while (file.available()) {
            Serial.write(file.read());
        }
        file.close();
    }
}

void loop() {}
</code></pre>
                </div>

                <h3><strong>● UART — 與其他裝置序列通訊</strong></h3><br>
                <p>ESP32 有三組硬體 UART（Serial0 / Serial1 / Serial2），可用來與 GPS 模組、藍牙模組或其他 MCU 通訊。以下使用 Serial2 連接一個 GPS 模組：</p>

                <div class="code-block">
                    <button class="copy-btn" @click="copyCode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                    </button>
<pre class="code-scroll"><code class="language-cpp">
// Serial2：RX = GPIO 16、TX = GPIO 17

void setup() {
    Serial.begin(115200);          // 電腦監控用
    Serial2.begin(9600);           // GPS 模組鮑率通常為 9600
    Serial.println("等待 GPS 資料...");
}

void loop() {
    // 將 Serial2 收到的資料轉發到電腦
    while (Serial2.available()) {
        char c = Serial2.read();
        Serial.write(c);
    }

    // 也可以反向，從電腦傳指令給模組
    while (Serial.available()) {
        Serial2.write(Serial.read());
    }
}
</code></pre>
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
    background-image: url(../assets/esp32bg.png);
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
    margin: 40px auto;
    padding: 0 20px;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
}

/* 側邊欄 (Topic) */
.topic {
    position: sticky;
    top: 120px;
    width: 220px;
    flex-shrink: 0;
    background: var(--sidebar-bg);
    padding: 25px;
    border-radius: 15px;
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
    max-width: 850px;
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
    height: auto;
    display: block;
    margin: 30px auto;
    border-radius: 8px;
}

.code-block {
    background: var(--arduino-bg);
    font-size: large;
    padding: 5px;
    border-radius: 8px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    line-height: 1.5;
    margin: 20px 0;
    border-left: 5px solid var(--accent-blue);
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