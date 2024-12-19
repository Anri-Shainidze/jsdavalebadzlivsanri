
const text = "hello world";

const container = document.getElementById("container");


text.split("").forEach(char => {
    const div = document.createElement("div");
    div.classList.add("char");
    div.textContent = char;
    container.appendChild(div);
});