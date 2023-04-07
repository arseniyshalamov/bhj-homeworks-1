let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
    
});

let dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"));

dropdownLink.forEach((value) => {
    value.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = value.textContent
        dropdownList.classList.toggle('dropdown__list_active');
    })
})

// dropdown__list_active

// dropdown__value