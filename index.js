
const txt = "hello world";

const container = document.getElementById("container");


txt.split("").forEach(ragac => {
    const div = document.createElement("div");
    div.classList.add("char");
    div.textContent = ragac;
    container.appendChild(div);
});