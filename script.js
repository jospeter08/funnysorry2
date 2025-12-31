const decline = document.getElementById("decline");

decline.addEventListener("mouseover", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 50;

    decline.style.left = x + "px";
    decline.style.top = y + "px";
});

function accepted() {
    document.getElementById("result").innerHTML =
        "Yayyy 🥹💖 Thank you for forgiving me! <br><br>" ;
}
