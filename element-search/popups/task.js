const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");
const modalClose = Array.from(document.querySelectorAll("div.modal__close"));

modalMain.className = "modal modal_active";

showSuccess.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}

modalClose.forEach(btn => btn.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
})