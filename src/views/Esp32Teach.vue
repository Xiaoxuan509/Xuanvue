<script setup>
import { onMounted, nextTick } from 'vue';

const data = [
    { href: "#intro", title: "ESP32 介紹" },
    { href: "#setup", title: "開發環境設置" },
    { href: "#basic", title: "基礎語法" },
    { href: "#gpio", title: "GPIO 控制" },
    { href: "#mqtt", title: "MQTT 通訊" },
    { href: "#bluetooth", title: "藍牙 (BLE)" },
    { href: "#modules", title: "模組介面" },
];

const copyCode = (event) => {
    const button = event.currentTarget;
    const codeContainer = button.parentElement?.querySelector('code');
    if (!codeContainer) return;

    const text = codeContainer.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<span style="color: #f59e0b; font-weight: 600;">✓ 已複製</span>';
        setTimeout(() => { 
            button.innerHTML = originalHTML; 
        }, 2000);
    }).catch(err => {
        console.error('複製失敗:', err);
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
    <div class="page-wrapper">
        <!-- ===== 頁頭 Banner ===== -->
        <div class="news">
            <div class="news-overlay"></div>
            <div class="news-content">
                <h2>ESP32基礎教學</h2>
                <p>從零開始學習嵌入式開發、無線通訊與物聯網應用</p>
            </div>
        </div>

        <div class="container">
            <!-- ===== 側邊欄目錄 ===== -->
            <aside class="topic">
                <h3>目錄 Navigation</h3>
                <ul>
                    <li v-for="d in data" :key="d.title">
                        <a :href="d.href">
                            <span class="dot"></span>
                            {{ d.title }}
                        </a>
                    </li>
                </ul>
            </aside>

            <!-- ===== 主要文章區塊 ===== -->
            <main class="content">

                <!-- ===== ESP32 介紹 ===== -->
                <section id="intro">
                    <h2>ESP32 介紹</h2>
                    <div class="badge">核心觀念：低成本、高整合、WiFi + 藍牙內建</div>
                    <p>ESP32 是由樂鑫（Espressif）推出的微控制器，對於習慣 Arduino 的開發者來說，ESP32 最吸引人的地方在於它<strong>內建 WiFi 與藍牙</strong>，卻保有 Arduino 般簡單的開發體驗。它擁有雙核心 240 MHz 處理器、520 KB SRAM，非常適合用於 IoT 專案。</p>
                    <p>ESP32 支援多種開發環境，本教學採用 <strong>Arduino IDE</strong> 搭配 C++ 語法進行說明，這是初學者最容易上手的方式。</p>
                    <div class="img-wrapper">
                        <img src="../assets/ESP32Real.jpg" alt="ESP32 Real Board">
                    </div>
                </section>

                <!-- ===== 開發環境設置 ===== -->
                <section id="setup">
                    <h2>開發環境設置</h2>
                    
                    <h3>● 安裝 Arduino IDE</h3>
                    <p>前往 <strong>Arduino 官網</strong> 下載並安裝最新版本的 Arduino IDE（建議 2.x 以上版本）。</p>

                    <h3>● 新增 ESP32 開發板來源</h3>
                    <p>開啟 Arduino IDE，進入 <strong>檔案 → 偏好設定</strong>，在「額外的開發板管理員網址」欄位填入以下網址：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                            </div>
                            <span class="code-lang">URL</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                            </svg>
                            複製
                        </button>
                        <pre class="code-scroll"><code class="language-plaintext">https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</code></pre>
                    </div>

                    <h3>● 安裝 ESP32 套件</h3>
                    <p>進入 <strong>工具 → 開發板 → 開發板管理員</strong>，搜尋 <strong>esp32</strong>，找到 Espressif Systems 出品的套件後點擊安裝。</p>

                    <h3>● 選擇開發板與連接埠</h3>
                    <p>安裝完成後，進入 <strong>工具 → 開發板 → esp32</strong>，選擇 <strong>ESP32 Dev Module</strong>，再至 <strong>工具 → 連接埠</strong> 選擇對應的 COM 埠即可開始上傳程式。</p>
                </section>

                <!-- ===== 基礎語法 ===== -->
                <section id="basic">
                    <h2>基礎語法</h2>
                    
                    <h3>● 程式結構</h3>
                    <p>每支 ESP32（Arduino）程式都由兩個核心函式組成：<code>setup()</code> 只執行一次（初始化），<code>loop()</code> 則無限循環執行（主邏輯）。</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">void setup() {
    // 初始化程式碼，只執行一次
    Serial.begin(115200);
    Serial.println("Hello, ESP32!");
}

void loop() {
    // 主程式，會不斷重複執行
    Serial.println("正在執行中...");
    delay(1000); // 暫停 1000 毫秒（1 秒）
}</code></pre>
                    </div>

                    <h3>● 變數宣告</h3>
                    <p>ESP32 使用 C++ 語法，變數宣告時需要指定型別，常見型別如下：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">int   count  = 0;        // 整數
float temp   = 25.5;     // 浮點數（小數）
bool  isOn   = true;     // 布林值（true / false）
String name  = "ESP32";  // 字串</code></pre>
                    </div>

                    <h3>● 條件判斷</h3>
                    <p>使用 <code>if</code>、<code>else if</code>、<code>else</code> 進行條件控制：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">int x = 10;

if (x > 10) {
    Serial.println("x 大於 10");
} else if (x == 10) {
    Serial.println("x 等於 10");
} else {
    Serial.println("x 小於 10");
}</code></pre>
                    </div>

                    <h3>● 迴圈控制</h3>
                    <p>使用 <code>for</code> 迴圈重複執行程式碼：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">// for (初始值; 條件; 每次變化)
for (int i = 0; i &lt; 5; i++) {
    Serial.println(i);  // 輸出 0 ~ 4
}

// 搭配陣列使用
int pins[] = {2, 4, 5, 18, 19};
int count = 5;

for (int i = 0; i &lt; count; i++) {
    Serial.println(pins[i]);
}</code></pre>
                    </div>

                    <h3>● 陣列</h3>
                    <p>ESP32（C++）使用<strong>陣列</strong>儲存多個相同型別的資料，宣告時需指定長度或初始值：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">// 建立一個整數陣列
int scores[3] = {85, 90, 78};

// 存取元素（從 0 開始計算）
Serial.println(scores[0]);  // 輸出: 85

// 取得陣列長度
int len = sizeof(scores) / sizeof(scores[0]);
Serial.println(len);  // 輸出: 3

// 修改元素
scores[1] = 95;</code></pre>
                    </div>
                </section>

                <!-- ===== GPIO 控制 ===== -->
                <section id="gpio">
                    <h2>GPIO 控制</h2>
                    
                    <h3>● 數位輸出（點亮 LED）</h3>
                    <p>使用 <code>pinMode()</code> 設定腳位模式，再用 <code>digitalWrite()</code> 控制高低電位，以下範例讓接在 GPIO 2 的 LED 每秒閃爍一次：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">const int LED_PIN = 2;  // 內建 LED 通常接在 GPIO 2

void setup() {
    pinMode(LED_PIN, OUTPUT);  // 設定為輸出模式
}

void loop() {
    digitalWrite(LED_PIN, HIGH);  // 點亮 LED
    delay(1000);                  // 等待 1 秒
    digitalWrite(LED_PIN, LOW);   // 熄滅 LED
    delay(1000);                  // 等待 1 秒
}</code></pre>
                    </div>

                    <h3>● 數位輸入（讀取按鈕）</h3>
                    <p>使用 <code>digitalRead()</code> 讀取腳位狀態，搭配內部上拉電阻（<code>INPUT_PULLUP</code>）可省去外接電阻：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">const int BTN_PIN = 4;
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
}</code></pre>
                    </div>

                    <h3>● 類比輸入（讀取電壓）</h3>
                    <p>ESP32 的 ADC（類比數位轉換器）解析度為 <strong>12-bit</strong>，讀取值範圍為 <strong>0 ~ 4095</strong>，對應電壓約 0V ~ 3.3V：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">const int POT_PIN = 34;  // GPIO 34 為 ADC 輸入腳

void setup() {
    Serial.begin(115200);
}

void loop() {
    int rawValue = analogRead(POT_PIN);        // 讀取原始值 0 ~ 4095
    float voltage = rawValue * (3.3 / 4095.0); // 換算為電壓值

    Serial.print("原始值: ");
    Serial.print(rawValue);
    Serial.print("  電壓: ");
    Serial.print(voltage, 2);  // 顯示小數點後 2 位
    Serial.println(" V");

    delay(500);
}</code></pre>
                    </div>
                </section>

                <!-- ===== MQTT 通訊 ===== -->
                <section id="mqtt">
                    <h2>MQTT 通訊</h2>
                    <div class="badge">核心觀念：發布 / 訂閱（Publish / Subscribe）</div>
                    <p>MQTT 是一種輕量級的訊息傳遞協定，非常適合 IoT 裝置使用。它的運作模型是透過一台<strong>Broker（中介伺服器）</strong>來轉發訊息，裝置可以向某個「主題（Topic）」<strong>發布（Publish）</strong>訊息，也可以<strong>訂閱（Subscribe）</strong>某個主題來接收訊息。</p>

                    <h3>● 安裝函式庫</h3>
                    <p>在 Arduino IDE 的 <strong>函式庫管理員</strong> 中搜尋並安裝：</p>
                    <ul>
                        <li><strong>PubSubClient</strong>（作者：Nick O'Leary）— 負責 MQTT 連線與收發訊息</li>
                        <li><strong>WiFi</strong>（ESP32 內建）— 負責連上無線網路</li>
                    </ul>

                    <h3>● WiFi 連線</h3>
                    <p>使用 MQTT 之前，ESP32 必須先連上 WiFi：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;WiFi.h&gt;

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
}</code></pre>
                    </div>

                    <h3>● 發布訊息（Publish）</h3>
                    <p>連上 WiFi 後，設定 MQTT Broker 並向指定 Topic 發布訊息。以下範例每 5 秒發送一次資料：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;WiFi.h&gt;
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

    while (!client.connected()) {
        if (client.connect("ESP32Client")) {
            Serial.println("MQTT 連線成功！");
        } else {
            delay(2000);
        }
    }
}

void loop() {
    client.loop();

    float temperature = 25.3;
    String payload = String(temperature);

    client.publish("esp32/sensor", payload.c_str());
    Serial.println("已發布：" + payload);

    delay(5000);
}</code></pre>
                    </div>

                    <h3>● 訂閱訊息（Subscribe）</h3>
                    <p>透過設定 <code>callback</code> 函式，當訂閱的主題收到訊息時會自動觸發：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">void callback(char* topic, byte* message, unsigned int length) {
    Serial.print("收到訊息，Topic: ");
    Serial.print(topic);
    Serial.print("  內容: ");

    String msgStr = "";
    for (int i = 0; i &lt; length; i++) {
        msgStr += (char)message[i];
    }
    Serial.println(msgStr);

    if (msgStr == "ON")  digitalWrite(2, HIGH);
    if (msgStr == "OFF") digitalWrite(2, LOW);
}

void setup() {
    // ... WiFi 連線程式碼 ...
    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);

    while (!client.connected()) {
        if (client.connect("ESP32Client")) {
            client.subscribe("esp32/control");
        }
    }
}

void loop() {
    client.loop();
}</code></pre>
                    </div>
                </section>

                <!-- ===== 藍牙 BLE ===== -->
                <section id="bluetooth">
                    <h2>藍牙（BLE）</h2>
                    <div class="badge">核心觀念：低功耗藍牙 (Bluetooth Low Energy)</div>
                    <p>ESP32 內建<strong>傳統藍牙</strong>與<strong>低功耗藍牙 (BLE)</strong>。BLE 適合與手機 App 溝通、傳送感測器數據等場景，功耗極低。</p>
                    <p>BLE 的核心概念是 <strong>Service（服務）</strong> 與 <strong>Characteristic（特徵值）</strong>，手機 App 可以對特徵值進行讀取、寫入與訂閱通知。</p>

                    <h3>● BLE 伺服器（Server）</h3>
                    <p>以下建立一個 BLE Server，讓手機可以連線並接收廣播資料：</p>

                    <div class="code-block">
                        <div class="code-header">
                            <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                            <span class="code-lang">C++</span>
                        </div>
                        <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;BLEDevice.h&gt;
#include &lt;BLEServer.h&gt;
#include &lt;BLEUtils.h&gt;
#include &lt;BLE2902.h&gt;

#define SERVICE_UUID        "12345678-1234-1234-1234-123456789abc"
#define CHARACTERISTIC_UUID "abcd1234-ab12-ab12-ab12-abcdef123456"

BLECharacteristic* pCharacteristic;
bool deviceConnected = false;

class MyServerCallbacks : public BLEServerCallbacks {
    void onConnect(BLEServer* pServer)    { deviceConnected = true;  }
    void onDisconnect(BLEServer* pServer) { deviceConnected = false; }
};

class MyCharCallbacks : public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic* pChar) {
        String value = pChar->getValue().c_str();
        Serial.println("收到手機傳來：" + value);
    }
};

void setup() {
    Serial.begin(115200);
    BLEDevice::init("ESP32-BLE");

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
    pServer->getAdvertising()->start();
    Serial.println("BLE 開始廣播，等待連線...");
}

void loop() {
    if (deviceConnected) {
        String data = "Temp:" + String(25.3);
        pCharacteristic->setValue(data.c_str());
        pCharacteristic->notify();
        delay(2000);
    }
}</code></pre>
                </div>

                <h3>● 手機測試 App</h3>
                <ul>
                    <li><strong>nRF Connect</strong>（iOS / Android）— 推薦開發首選，功能全面。</li>
                    <li><strong>LightBlue</strong>（iOS / Android）— 介面直覺，適合快速調試。</li>
                </ul>
            </section>

            <!-- ===== 模組介面 ===== -->
            <section id="modules">
                <h2>模組介面</h2>
                <div class="badge">核心觀念：I²C、SPI、UART 通訊協定</div>
                <p>ESP32 支援多種常用硬體通訊介面：<strong>I²C</strong>（雙線，適合感測器與螢幕）、<strong>SPI</strong>（高頻寬，適合顯示屏與 SD 卡）、<strong>UART</strong>（序列通訊）。</p>

                <h3>● I²C — 掃描裝置位址</h3>
                <p>ESP32 預設 SDA = GPIO 21、SCL = GPIO 22。可用以下程式掃描線上裝置：</p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                        <span class="code-lang">C++</span>
                    </div>
                    <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;Wire.h&gt;

void setup() {
    Serial.begin(115200);
    Wire.begin();

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

void loop() {}</code></pre>
                </div>

                <h3>● I²C — 驅動 OLED 螢幕 (SSD1306)</h3>
                <p>預設位址通常為 <code>0x3C</code>，需先安裝 <strong>Adafruit SSD1306</strong> 套件：</p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                        <span class="code-lang">C++</span>
                    </div>
                    <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;Wire.h&gt;
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
    display.setTextSize(2);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(10, 20);
    display.println("Hello!");
    display.display();
}

void loop() {}</code></pre>
                </div>

                <h3>● SPI — 讀寫 SD 卡模組</h3>
                <p>ESP32 預設 MOSI=23, MISO=19, SCK=18，CS 腳位可自訂：</p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                        <span class="code-lang">C++</span>
                    </div>
                    <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">#include &lt;SPI.h&gt;
#include &lt;SD.h&gt;

const int CS_PIN = 5;

void setup() {
    Serial.begin(115200);

    if (!SD.begin(CS_PIN)) {
        Serial.println("SD 卡初始化失敗！");
        return;
    }

    File file = SD.open("/data.txt", FILE_WRITE);
    if (file) {
        file.println("溫度: 25.3");
        file.close();
    }
}

void loop() {}</code></pre>
                </div>

                <h3>● UART — 序列埠讀取 (例如 GPS)</h3>
                <p>使用硬體 Serial2 (RX=16, TX=17) 接收數據：</p>

                <div class="code-block">
                    <div class="code-header">
                        <div class="window-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
                        <span class="code-lang">C++</span>
                    </div>
                    <button class="copy-btn" @click="copyCode">複製</button>
<pre class="code-scroll"><code class="language-cpp">void setup() {
    Serial.begin(115200);
    Serial2.begin(9600);
}

void loop() {
    while (Serial2.available()) {
        char c = Serial2.read();
        Serial.write(c);
    }
}</code></pre>
                </div>
            </section>

        </main>
    </div>

    <!-- ===== 頁尾 Copyright ===== -->
    <footer class="copyright">
        <p>Copyright © 2026 Xiaoxuan. Designed for ESP32 Developers.</p>
    </footer>
</div>
</template>

<style scoped>
/* ===== 全局底色與字體 ===== */
.page-wrapper {
    background-color: #0a0c10;
    color: #cbd5e1;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* ===== 頂部 Banner (黑金奢華調) ===== */
.news {
    position: relative;
    background-image: url('../assets/esp32bg.png');
    background-size: cover;
    background-position: center;
    height: 42vh;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.news-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 12, 16, 0.75) 0%, rgba(10, 12, 16, 0.98) 100%);
    backdrop-filter: blur(4px);
}

.news-content {
    position: relative;
    z-index: 1;
    padding: 0 20px;
}

.news-content h2 {
    font-size: 3.2rem;
    font-weight: 900;
    letter-spacing: 1px;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #fff 20%, #f59e0b 80%, #fbbf24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(245, 158, 11, 0.2);
}

.news-content p {
    font-size: 1.15rem;
    color: #94a3b8;
    letter-spacing: 0.5px;
}

/* ===== 主要佈局 ===== */
.container {
    display: flex;
    max-width: 1240px;
    margin: -30px auto 60px auto;
    padding: 0 24px;
    gap: 32px;
    position: relative;
    z-index: 2;
}

/* ===== 側邊導覽列（黑金毛玻璃卡片） ===== */
.topic {
    position: sticky;
    top: 30px;
    width: 240px;
    flex-shrink: 0;
    background: rgba(18, 22, 31, 0.85);
    backdrop-filter: blur(12px);
    padding: 24px 20px;
    border-radius: 14px;
    border: 1px solid rgba(245, 158, 11, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.topic h3 {
    font-size: 1rem;
    color: #f59e0b;
    font-weight: 700;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(245, 158, 11, 0.2);
    letter-spacing: 0.5px;
}

.topic ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.topic a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.25s ease;
}

.topic a .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #475569;
    margin-right: 10px;
    transition: all 0.25s ease;
}

.topic a:hover {
    color: #fbbf24;
    background: rgba(245, 158, 11, 0.1);
    transform: translateX(4px);
}

.topic a:hover .dot {
    background-color: #f59e0b;
    box-shadow: 0 0 8px #f59e0b;
    transform: scale(1.3);
}

/* ===== 主要內容區塊 ===== */
.content {
    flex: 1;
    background: rgba(18, 22, 31, 0.75);
    backdrop-filter: blur(12px);
    padding: 48px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.content section {
    margin-bottom: 56px;
    scroll-margin-top: 40px;
}

/* 金屬標題 */
.content h2 {
    font-size: 1.8rem;
    color: #f3f4f6;
    font-weight: 800;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.content h2::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    box-shadow: 0 0 10px #f59e0b;
}

.content h3 {
    font-size: 1.12rem;
    color: #f59e0b;
    margin: 28px 0 12px 0;
    font-weight: 600;
}

.content p {
    color: #94a3b8;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 0.98rem;
}

.content strong {
    color: #f3f4f6;
}

/* 行內 Code */
.content code:not(pre code) {
    background-color: rgba(245, 158, 11, 0.12);
    color: #fbbf24;
    border: 1px solid rgba(245, 158, 11, 0.25);
    padding: 2px 7px;
    border-radius: 5px;
    font-family: 'Fira Code', monospace;
    font-size: 0.88em;
}

/* ===== 黑金徽章 Badge ===== */
.badge {
    display: inline-block;
    background: rgba(245, 158, 11, 0.1);
    color: #fbbf24;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 6px 14px;
    border-radius: 20px;
    margin-bottom: 18px;
    border: 1px solid rgba(245, 158, 11, 0.3);
    box-shadow: 0 0 12px rgba(245, 158, 11, 0.1);
}

/* ===== 圖片區塊 ===== */
.img-wrapper {
    margin: 24px 0;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(245, 158, 11, 0.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.img-wrapper img {
    width: 100%;
    display: block;
    object-fit: cover;
}

/* ===== 程式碼區塊（極客黑金視窗） ===== */
.code-block {
    position: relative;
    background: #0d0f14;
    border-radius: 12px;
    margin: 18px 0 28px 0;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #141822;
    padding: 10px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.window-dots {
    display: flex;
    gap: 6px;
}

.window-dots .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.window-dots .red { background-color: #ef4444; }
.window-dots .yellow { background-color: #f59e0b; }
.window-dots .green { background-color: #10b981; }

.code-lang {
    color: #64748b;
    font-size: 0.75rem;
    font-family: monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* 金屬複製按鈕 */
.copy-btn {
    position: absolute;
    top: 42px;
    right: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(245, 158, 11, 0.1);
    color: #fbbf24;
    border: 1px solid rgba(245, 158, 11, 0.3);
    padding: 5px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.78rem;
    backdrop-filter: blur(4px);
    transition: all 0.2s ease;
    z-index: 5;
}

.copy-btn:hover {
    background: rgba(245, 158, 11, 0.25);
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
}

.code-scroll {
    overflow-x: auto;
    padding: 20px;
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.6;
}

/* 自訂金色捲軸 */
.code-scroll::-webkit-scrollbar {
    height: 7px;
}
.code-scroll::-webkit-scrollbar-thumb {
    background: rgba(245, 158, 11, 0.3);
    border-radius: 4px;
}
.code-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(245, 158, 11, 0.5);
}

/* ===== 頁尾 ===== */
.copyright {
    text-align: center;
    padding: 30px;
    color: #64748b;
    font-size: 0.88rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: #07080b;
}

/* ===== 響應式微調 ===== */
@media screen and (max-width: 960px) {
    .container {
        flex-direction: column;
        margin-top: -10px;
    }

    .topic {
        width: 100%;
        position: static;
    }

    .content {
        padding: 24px;
    }

    .news-content h2 {
        font-size: 2.2rem;
    }
}

/* highlight.js 程式碼高亮顏色對齊黑金風 */
:deep(.hljs) {
    color: #e2e8f0;
    background: transparent;
    font-family: 'Fira Code', 'Consolas', monospace;
}

:deep(.hljs-keyword),
:deep(.hljs-selector-tag) {
    color: #f59e0b; /* 關鍵字金 */
    font-weight: 600;
}

:deep(.hljs-string),
:deep(.hljs-title) {
    color: #34d399; /* 字串螢光綠/翡翠 */
}

:deep(.hljs-number),
:deep(.hljs-literal) {
    color: #f43f5e; /* 數字紅/粉 */
}

:deep(.hljs-comment) {
    color: #52525b; /* 註解暗灰 */
    font-style: italic;
}
</style>