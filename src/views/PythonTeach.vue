<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, nextTick } from 'vue';

const data = [
    { href: "#intro", title: "Python 介紹" },
    { href: "#basic", title: "基礎語法" },
]

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
    if (window.hljs) {
        window.hljs.highlightAll();
    }
});
</script>

<template>
    <div class="python-page">
        <!-- 🌟 首頁頂部 Banner (黑金風格) -->
        <header class="hero-section">
            <div class="hero-content">
                <span class="sub-title">PYTHON PROGRAMMING TUTORIAL</span>
                <h2>Python 基礎教學</h2>
                <div class="title-divider"></div>
                <p>探索簡潔強大的程式語言，掌握基礎語法、流程控制與列表應用</p>
            </div>
        </header>

        <!-- 📖 主要內容與目錄區域 -->
        <div class="container">
            <!-- 側邊欄目錄 -->
            <aside class="topic">
                <h3><span class="icon">📖</span> 目錄導覽</h3>
                <ul>
                    <li v-for="d in data" :key="d.title">
                        <a :href="d.href">{{ d.title }}</a>
                    </li>
                </ul>
            </aside>

            <!-- 主要內容區 -->
            <main class="content">
                <!-- Python 介紹 -->
                <section id="intro" class="animate-section">
                    <h2>Python 介紹</h2>
                    <p class="highlight-subtitle"><strong>核心觀念：簡潔、強大、無所不在</strong></p>
                    <p>Python 是一種高階通用型程式語言，對於習慣 C# 或 C++ 的開發者來說，Python 最迷人的地方在於其<strong>「可讀性」</strong>，使用縮排來定義區塊，省去了大量的大括號 <code>{}</code>，讓程式碼看起來更像英文。</p>
                </section>

                <!-- 基礎語法 -->
                <section id="basic" class="animate-section">
                    <h2>基礎語法</h2>

                    <h3 class="section-subtitle">● 變數宣告</h3>
                    <p>在 Python 中，不需要事先宣告變數型別，解釋器會自動判斷。</p>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">Python</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-python">x = 10
print(x)</code></pre>
                    </div>
                    <div class="tip-box">💡 輸出結果：<code>10</code></div>

                    <h3 class="section-subtitle">● 條件判斷</h3>
                    <p>使用 <mark>if</mark>、<mark>elif</mark> 與 <mark>else</mark> 來建立多分支邏輯。</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">Python</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-python">x = 1
y = 1

if x == 1:
    print("x為1")
elif y == 1:
    print("y為1")
else:
    print("沒有任何符合的條件")</code></pre>
                    </div>

                    <h3 class="section-subtitle">● 迴圈控制</h3>
                    <p>使用 <code>for</code> 搭配 <code>range(起始值, 結束值, 步長)</code> 進行重複性操作。</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">Python</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-python">x = 10

# for 迴圈基本應用
for i in range(5):
    print(i)    # 輸出 0~4 數字

for i in range(1, 5):
    print(i)    # 輸出 1~4 數字

for i in range(0, 9, 2): 
    print(i)    # 輸出 0, 2, 4, 6, 8 數字

for i in range(x):
    print(i)    # 輸出 0~x 數字</code></pre>
                    </div>

                    <h3 class="section-subtitle">● 列表 (List)</h3>
                    <p>在 Python 中，通常使用<strong>列表</strong>來替代傳統語言（如 C++ 或 Arduino C）中的陣列。</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="dots"><i></i><i></i><i></i></span>
                            <span class="code-lang">Python</span>
                            <button class="copy-btn" @click="copyCode">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                </svg>
                                複製程式碼
                            </button>
                        </div>
                        <pre class="code-scroll"><code class="language-python"># 建立一個列表
fruits = ["蘋果", "香蕉", "櫻桃"]

# 存取元素 (從 0 開始計算)
print(fruits[0])   # 輸出: 蘋果

# 取得列表長度
print(len(fruits)) # 輸出: 3

# 加入新元素
fruits.append("橘子")</code></pre>
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
.python-page {
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

/* 🌟 全寬 Hero Banner */
.hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    padding-top: 80px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), 
                url('../assets/pythonbg.jpg') center/cover no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    z-index: 1;
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

/* 側邊欄 (Sidebar) */
.topic {
    position: sticky;
    top: 90px;
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

/* 主要內容區 */
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
    scroll-margin-top: 90px;
    box-sizing: border-box;
    transition: all 0.3s ease;
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
    margin-bottom: 20px;
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

.highlight-subtitle {
    font-size: 18px;
    color: var(--gold-main);
    margin-bottom: 12px;
}

.section-subtitle {
    font-size: 18px;
    color: var(--text-white);
    margin-top: 28px;
    margin-bottom: 12px;
    font-weight: 600;
}

.content p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-gray);
    margin-bottom: 16px;
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

/* 提示卡片 */
.tip-box {
    background: rgba(255, 215, 0, 0.05);
    border-left: 4px solid var(--gold-main);
    padding: 12px 18px;
    border-radius: 8px;
    color: var(--gold-bright);
    font-size: 15px;
    margin: 16px 0 24px;
    line-height: 1.6;
}

/* ==================== 程式碼區塊 (Code Block) ==================== */
.code-block {
    background: #0d0d0d;
    border-radius: 12px;
    margin: 16px 0 24px;
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

/* Highlight.js 配色微調 */
:deep(.hljs) {
    color: #e4e4e7;
    background: transparent;
    font-family: 'Consolas', 'Fira Code', 'Monaco', monospace;
    font-size: 15px;
    line-height: 1.7;
}

:deep(.hljs-keyword) { color: #ffea79; }
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

/* 動畫 */
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

/* 📱 響應式手機排版優化 */
@media screen and (max-width: 960px) {
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
        margin: 0 auto 16px;
    }

    .container {
        flex-direction: column;
        align-items: center;
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
}
</style>