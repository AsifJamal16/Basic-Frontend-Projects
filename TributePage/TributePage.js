document.getElementById("moreBtn").addEventListener("click", function () {
    const text = document.getElementById("moreText");
    if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        this.textContent = "Show Less";
    } else {
        text.classList.add("hidden");
        this.textContent = "Click to Know More";
    }
});

