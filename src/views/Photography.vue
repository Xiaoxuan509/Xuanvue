<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed } from 'vue';

// ✈️ 飛機攝影作品資料庫（可自行增加/修改照片路徑與航機資訊）
const photos = ref([
    {
        id: "a1",
        title: "長榮航空 B787-10",
        category: "民航客機",
        url: "https://picsum.photos/id/1015/1200/800", // 可換成你的飛機照片 (例: ../assets/eva-787.jpg)
        description: "跑道 23L 順光降落，羽田機場捕獲夢幻客機美麗身影。"
    },
    {
        id: "a2",
        title: "中華航空 A350-900",
        category: "民航客機",
        url: "https://picsum.photos/id/1018/1200/800",
        description: "帝雉號彩繪機拉起仰角起飛瞬間，背景搭配滿滿藍天。"
    },
    {
        id: "a3",
        title: "國泰貨機 B747-8F",
        category: "貨機",
        url: "https://picsum.photos/id/1025/1200/800",
        description: "空中女王最後的榮光，重載滾轉起飛震撼力十足。"
    },
    {
        id: "a4",
        title: "GE90 引擎龐然細節",
        category: "機身特寫",
        url: "https://picsum.photos/id/1039/1200/800",
        description: "B777-300ER 巨大引擎扇葉細節與金屬質感。"
    },
    {
        id: "a5",
        title: "星宇航空 A330neo",
        category: "民航客機",
        url: "https://picsum.photos/id/1040/1200/800",
        description: "夕陽餘暉灑落機身，大地色系塗裝極具高雅質感。"
    },
    {
        id: "a6",
        title: "黑夜中的跑道燈海",
        category: "夜拍",
        url: "https://picsum.photos/id/1043/1200/800",
        description: "長時間曝光捕捉飛機降落時留下的美麗光軌。"
    }
]);

// 2. 分類篩選邏輯
const currentCategory = ref('全部');

const categories = computed(() => {
    const list = ['全部'];
    photos.value.forEach(p => {
        if (!list.includes(p.category)) list.push(p.category);
    });
    return list;
});

const filteredPhotos = computed(() => {
    if (currentCategory.value === '全部') return photos.value;
    return photos.value.filter(p => p.category === currentCategory.value);
});

// 3. 點擊放大預覽 (Lightbox)
const selectedPhoto = ref(null);

const openLightbox = (photo) => {
    selectedPhoto.value = photo;
};

const closeLightbox = () => {
    selectedPhoto.value = null;
};
</script>

<template>
    <!-- ✈️ 航空藝廊 Banner -->
    <div class="gallery-banner">
        <div class="banner-content">
            <span class="sub-title">AVIATION PHOTOGRAPHY</span>
            <h2>Airlines & Wings</h2>
            <p>紀錄銀翼劃過天空的瞬間 ✈️</p>
        </div>
    </div>

    <!-- 主要相簿區 -->
    <main class="gallery-container">
        <!-- 分類切換按鈕區 -->
        <div class="filter-bar">
            <button 
                v-for="cat in categories" 
                :key="cat"
                class="filter-btn"
                :class="{ active: currentCategory === cat }"
                @click="currentCategory = cat"
            >
                {{ cat }}
            </button>
        </div>

        <!-- 藝廊照片網格區 -->
        <TransitionGroup name="stagger" tag="div" class="photo-grid">
            <article 
                v-for="photo in filteredPhotos" 
                :key="photo.id" 
                class="photo-card"
                @click="openLightbox(photo)"
            >
                <!-- 圖片包覆與防下載區 -->
                <div 
                    class="img-wrapper" 
                    @contextmenu.prevent 
                    @dragstart.prevent
                >
                    <img 
                        :src="photo.url" 
                        :alt="photo.title" 
                        loading="lazy" 
                        class="no-download"
                        @contextmenu.prevent
                        @dragstart.prevent
                    />
                    
                    <!-- Hover 浮現質感文字資訊 -->
                    <div class="photo-overlay">
                        <span class="category-tag">{{ photo.category }}</span>
                        <h3 class="photo-title">{{ photo.title }}</h3>
                        <p class="photo-desc" v-if="photo.description">{{ photo.description }}</p>
                        <span class="zoom-hint">🔍 點擊檢視高畫質大圖</span>
                    </div>
                </div>
            </article>
        </TransitionGroup>
    </main>

    <!-- 放大預覽燈箱 (Lightbox) -->
    <Transition name="fade">
        <div v-if="selectedPhoto" class="lightbox" @click="closeLightbox">
            <div 
                class="lightbox-content" 
                @click.stop 
                @contextmenu.prevent 
                @dragstart.prevent
            >
                <button class="close-btn" @click="closeLightbox">&times;</button>
                
                <!-- 大圖防護容器 -->
                <div class="large-img-container">
                    <img 
                        :src="selectedPhoto.url" 
                        :alt="selectedPhoto.title" 
                        class="no-download"
                        @contextmenu.prevent
                        @dragstart.prevent
                    />
                    <!-- 透明保護遮罩層（防止右鍵另存圖片） -->
                    <div class="protect-overlay"></div>
                </div>

                <div class="lightbox-caption">
                    <span class="caption-cat">{{ selectedPhoto.category }}</span>
                    <h3>{{ selectedPhoto.title }}</h3>
                    <p>{{ selectedPhoto.description }}</p>
                </div>
            </div>
        </div>
    </Transition>

    <!-- 頁腳 -->
    <footer class="copyright">
        <p>Copyright © 2026 Xiaoxuan. All Rights Reserved.</p>
    </footer>
</template>

<style scoped>
/* 🛡️ 防下載核心設定 */
.no-download {
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    pointer-events: none;
}

.large-img-container {
    position: relative;
    display: inline-block;
}

.protect-overlay {
    position: absolute;
    inset: 0;
    background: transparent;
    z-index: 10;
}

/* 🎨 Banner 區塊設計 */
.gallery-banner {
    background-image: linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8)), url(../assets/ProjectBg.jpg);
    background-size: cover;
    background-position: center;
    height: 48vh;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    padding: 0 20px;
}

.banner-content .sub-title {
    font-size: 13px;
    letter-spacing: 5px;
    color: var(--accent-blue, #38bdf8);
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
}

.banner-content h2 {
    font-size: 52px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.banner-content p {
    font-size: 16px;
    color: #cbd5e1;
    margin: 0;
    letter-spacing: 1px;
}

/* 容器與分類選單 */
.gallery-container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 40px 25px 80px 25px;
}

.filter-bar {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    background: transparent;
    border: 1px solid #cbd5e1;
    color: #64748b;
    padding: 8px 22px;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
}

.filter-btn:hover,
.filter-btn.active {
    background: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
}

/* 📷 飛機相片網格 (16:9 比例) */
.photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.photo-card {
    background: #0f172a;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
}

.photo-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

/* 16:9 相片比例最適合飛機姿態 */
.img-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.photo-card:hover .img-wrapper img {
    transform: scale(1.08);
}

/* 照片 Hover 遮罩效果 */
.photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.3) 65%, transparent 100%);
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #ffffff;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.photo-card:hover .photo-overlay {
    opacity: 1;
}

.category-tag {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent-blue, #38bdf8);
    font-weight: 600;
    margin-bottom: 4px;
}

.photo-title {
    font-size: 19px;
    margin: 0 0 6px 0;
    font-weight: 500;
}

.photo-desc {
    font-size: 13px;
    color: #cbd5e1;
    margin: 0 0 10px 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.zoom-hint {
    font-size: 12px;
    color: #94a3b8;
    letter-spacing: 1px;
}

/* 🖼️ 放大預覽 (Lightbox) */
.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(10, 15, 29, 0.92);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
    backdrop-filter: blur(8px);
}

.lightbox-content {
    position: relative;
    max-width: 92vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 78vh;
    border-radius: 6px;
    object-fit: contain;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.lightbox-caption {
    color: white;
    text-align: center;
    margin-top: 16px;
}

.caption-cat {
    font-size: 12px;
    color: var(--accent-blue, #38bdf8);
    letter-spacing: 2px;
    text-transform: uppercase;
}

.lightbox-caption h3 {
    margin: 4px 0 6px 0;
    font-size: 22px;
    font-weight: 500;
}

.lightbox-caption p {
    margin: 0;
    color: #94a3b8;
    font-size: 14px;
}

.close-btn {
    position: absolute;
    top: -45px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 36px;
    cursor: pointer;
    line-height: 1;
    z-index: 20;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.close-btn:hover {
    opacity: 1;
}

/* 動畫設定 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.stagger-move, .stagger-enter-active, .stagger-leave-active {
    transition: all 0.4s ease;
}
.stagger-enter-from, .stagger-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
.stagger-leave-active { position: absolute; }

/* 頁腳 */
.copyright {
    background-color: #0f172a;
    color: #64748b;
    font-size: 13px;
    letter-spacing: 1px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #1e293b;
}

/* 📱 響應式：平板與手機斷點優化 */

/* 平板電腦 (iPad Pro / iPad Air / iPad Mini) */
@media screen and (max-width: 1024px) {
    .photo-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .gallery-banner h2 {
        font-size: 42px;
    }
}

/* 手機版 (~768px 以下) */
@media screen and (max-width: 768px) {
    .gallery-banner {
        height: 35vh;
        min-height: 260px;
    }

    .banner-content h2 {
        font-size: 34px;
    }

    .gallery-container {
        padding: 25px 15px 60px 15px;
    }

    /* 手機改為單欄大圖 */
    .photo-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    /* 手機端照片資訊常駐顯示，免點擊免 Hover */
    .photo-overlay {
        opacity: 1;
        background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.25) 75%, transparent 100%);
        padding: 16px;
    }

    .photo-title {
        font-size: 18px;
    }

    .zoom-hint {
        display: none;
    }
}
</style>