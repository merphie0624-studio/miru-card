/ Free 系列卡片路徑（13 張）
const freeCards = [];
for (let i = 1; i <= 13; i++) {
freeCards.push(`../images/free/free${i}.png`);
}

// 金色背面（進頁面時顯示）
const GOLD_BACK = "../images/gold-header.png";

// 取得圖片元素
const cardImage = document.getElementById("cardImage");

// 點卡片時，隨機抽一張 Free 卡
function drawFreeCard() {
const randomIndex = Math.floor(Math.random() * freeCards.length);
const randomSrc = freeCards[randomIndex];
cardImage.src = randomSrc;
}

// 一進頁面先顯示金色背面（保險用，雖然 HTML 已經先設好了）
window.addEventListener("DOMContentLoaded", () => {
cardImage.src = GOLD_BACK;
});

// 監聽點擊事件：點卡片就抽牌
cardImage.addEventListener("click", drawFreeCard);
