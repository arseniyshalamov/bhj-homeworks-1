const loader = document.querySelector(".loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");

        const val = JSON.parse(xhr.responseText).response.Valute;
        const valute = Object.values(val);

        valute.forEach(elem => {
            items.insertAdjacentHTML(
                'beforeEnd',
                `<div class="item"><div class="item__code">${elem.CharCode}</div><div class="item__value">${elem.Value}</div><div class="item__currency">руб.</div></div>`
            )
        });
    }
});