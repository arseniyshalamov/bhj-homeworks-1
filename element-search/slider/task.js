const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");

const remove = () => {
    sliderItems.forEach(elm => elm.classList.remove("slider__item_active"));
}

const add = (i) => {
    sliderItems[i].classList.add("slider__item_active");
}

sliderArrowNext.onclick = () => {
    let showSlide = sliderItems.findIndex(elm => elm.classList.contains("slider__item_active"));
    if (showSlide == sliderItems.length - 1) {
        showSlide = - 1;
    }
    remove();
    add(showSlide + 1);
}

sliderArrowPrev.onclick = () => {
    let showSlide = sliderItems.findIndex(elm => elm.classList.contains("slider__item_active"));
    if (showSlide <= 0) {
        showSlide += 1;
    }
    remove();
    add(showSlide + 1);
}


// slider__item_active

// slider__dot_active