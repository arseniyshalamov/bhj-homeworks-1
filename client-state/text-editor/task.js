const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clear_btn");


editor.value = localStorage.getItem("text");
editor.oninput = () => localStorage.setItem("text", editor.value);
clearBtn.onclick = () => {
    editor.value = "";
    localStorage.removeItem("text");
}