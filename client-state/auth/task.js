const signinForm = document.getElementById("signin__form");
const btn = document.querySelector(".btn");
const control = Array.from(document.querySelector(".control"));
const signin = document.querySelector(".signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

btn.addEventListener('click', elem => {
    elem.preventDefault();

    let formDate = new formDate(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formDate);

    xhr.addEventListener('readystatechange', () => {
        //описывает состояние загрузки и сравнивает xhr.readyState === xhr.DONE
        if (xhr.readyState === xhr.DONE) {
            localStorage.setItem('id', control[0].value);
            localStorage.setItem('password', control[1].value);
            localStorage.getItem('id');
            let response = JSON.parse(xhr.response);

            if (!response.success) {
                alert("Неверный логин/пароль");
                localStorage.clear();
                control[0].value = "";
                control[1].value = "";
            } else {
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
                userId.textContent = localStorage.getItem("id");
            }
        }
    })
})

if (localStorage.getItem("id")) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.textContent = localStorage.getItem("id");
}