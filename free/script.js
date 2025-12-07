unction drawFreeCard() {
    // 13 張 Free 卡的路徑
    const cards = [
        "./images/free/free1.png",
        "./images/free/free2.png",
        "./images/free/free3.png",
        "./images/free/free4.png",
        "./images/free/free5.png",
        "./images/free/free6.png",
        "./images/free/free7.png",
        "./images/free/free8.png",
        "./images/free/free9.png",
        "./images/free/free10.png",
        "./images/free/free11.png",
        "./images/free/free12.png",
        "./images/free/free13.png"
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // 直接把區域換成出現抽到的卡
    document.getElementById("cardArea").innerHTML =
        `<img src="${selectedCard}" class="card-img">`;
}
