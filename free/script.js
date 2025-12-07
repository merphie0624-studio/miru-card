/ Free 系列 13 張卡片圖片路徑
// 檔案目前放在專案根目錄：miru-card/free1.png ~ free13.png
const freeCards = [
  "../free1.png",
  "../free2.png",
  "../free3.png",
  "../free4.png",
  "../free5.png",
  "../free6.png",
  "../free7.png",
  "../free8.png",
  "../free9.png",
  "../free10.png",
  "../free11.png",
  "../free12.png",
  "../free13.png"
];

// 暫時的標題（之後你可以改成真正的主題句）
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

  const index = Math.floor(Math.random() * freeCards.length);

  imgEl.src = freeCards[index];
  titleEl.textContent = freeTitles[index];
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("drawButton");
  const img = document.getElementById("cardImage");

  if (btn) btn.addEventListener("click", drawFreeCard);
  if (img) img.addEventListener("click", drawFreeCard);
});

  // 也可以設定點圖片就抽
  img.addEventListener("click", drawFreeCard);
});
