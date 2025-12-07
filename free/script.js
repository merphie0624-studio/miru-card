// Free 系列 13 張卡的圖片路徑
const freeImages = [
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

// 按下「抽一張 Free 卡」後才會抽
function drawFreeCard() {
    const randomIndex = Math.floor(Math.random() * freeImages.length);
    const img = document.getElementById("cardImage");
    const placeholder = document.getElementById("placeholder");

    // 設定圖片來源為隨機卡片
    img.src = freeImages[randomIndex];

    // 顯示圖片、隱藏文字
    img.style.display = "block";
    placeholder.style.display = "none";
}
