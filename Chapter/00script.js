function btnClick() {
    const tb = document.getElementById("textBox")
    tb.value = `Привет, ${tb.value}!`;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", btnClick);