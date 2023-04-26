const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

const split = document.cookie.split("; ");
const coockie = split.find(i => i.startsWith('subscribeModal', '='));

if (!coockie) {
    subscribeModal.classList.add("modal_active");
} else {
    subscribeModal.classList.remove("modal_active");
}

modalClose.addEventListener('click', elem => {
    subscribeModal.classList.remove("modal_active");
    document.cookie = 'subscribeModal=close';
    elem.preventDefault();
})