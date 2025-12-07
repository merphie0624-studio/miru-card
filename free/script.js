/ Free 系列 13 張卡的圖片路徑
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

// 點卡片時才會抽一張
function drawFreeCard() {
const randomIndex = Math.floor(Math.random() * freeImages.length);
const container = document.getElementById("cardContainer");

container.innerHTML = `
<img
src="${freeImages[randomIndex]}"
class="card-img"
alt="Miru Free Card"
/>
`;
}
