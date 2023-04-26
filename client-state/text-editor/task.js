const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clear_btn");

editor.value = localStorage.text;
editor.oninput = () => localStorage.text = editor.value;
clearBtn.onclick = () => {
    editor.value = "";
    localStorage.text = editor.value;
}