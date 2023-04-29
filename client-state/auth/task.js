const signinForm = document.getElementById("signin__form");
const btn = document.querySelector(".btn");
const control = Array.from(document.querySelectorAll(".control"));
const signin = document.querySelector(".signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

btn.addEventListener('click', elem => {
    elem.preventDefault();

    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json'; 
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            localStorage.setItem('id', control[0].value);
            localStorage.setItem('password', control[1].value);
            userId.textContent = localStorage.getItem("id");
            signin.classList.remove("signin_active");
            welcome.classList.add("welcome_active");
        } else {
            alert("Неверный логин/пароль");
            signinForm.reset();
        }
    })
})

if (localStorage.getItem("id")) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.textContent = localStorage.getItem("id");
}