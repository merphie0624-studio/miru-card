// Free 13 張卡的圖片路徑
const freeCards = [
"../images/free/free1.png",
"../images/free/free2.png",
"../images/free/free3.png",
"../images/free/free4.png",
"../images/free/free5.png",
"../images/free/free6.png",
"../images/free/free7.png",
"../images/free/free8.png",
"../images/free/free9.png",
"../images/free/free10.png",
"../images/free/free11.png",
"../images/free/free12.png",
"../images/free/free13.png"
];

// 點卡片後抽一張 Free 卡
function drawFreeCard() {
const coverView = document.getElementById("coverView");
const cardImage = document.getElementById("cardImage");
const howTo = document.getElementById("howTo");

// 隨機抽一張
const index = Math.floor(Math.random() * freeCards.length);
const src = freeCards[index];

// 顯示卡片、隱藏封面
cardImage.src = src;
cardImage.classList.remove("hidden");
coverView.classList.add("hidden");

// 顯示「抽牌小提醒」
howTo.classList.remove("hidden");
}
