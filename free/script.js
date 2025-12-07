/ 這裡放 Free 13 張卡的圖片路徑
// 如果你的檔名不同，記得改成正確的檔名
const freeCards = [
  "../images/free/free01.png",
  "../images/free/free02.png",
  "../images/free/free03.png",
  "../images/free/free04.png",
  "../images/free/free05.png",
  "../images/free/free06.png",
  "../images/free/free07.png",
  "../images/free/free08.png",
  "../images/free/free09.png",
  "../images/free/free10.png",
  "../images/free/free11.png",
  "../images/free/free12.png",
  "../images/free/free13.png"
];

// 如果你有為每張 Free 卡取標題，可以填在這裡
// 目前先用簡單「Free 卡 1」這樣，你之後可以改
const freeTitles = [
  "Free 卡 1",
  "Free 卡 2",
  "Free 卡 3",
  "Free 卡 4",
  "Free 卡 5",
  "Free 卡 6",
  "Free 卡 7",
  "Free 卡 8",
  "Free 卡 9",
  "Free 卡 10",
  "Free 卡 11",
  "Free 卡 12",
  "Free 卡 13"
];

function drawFreeCard() {
  const imgEl = document.getElementById("cardImage");
  const titleEl = document.getElementById("cardTitle");

  // 從 13 張裡面隨機抽一張
  const index = Math.floor(Math.random() * freeCards.length);

  imgEl.src = freeCards[index];
  titleEl.textContent = freeTitles[index];
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawButton");
  const img = document.getElementById("cardImage");

  // 點按鈕可以抽
  btn.addEventListener("click", drawFreeCard);

  // 也可以設定點圖片就抽
  img.addEventListener("click", drawFreeCard);
});
