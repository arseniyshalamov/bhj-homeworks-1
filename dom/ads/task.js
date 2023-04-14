const rotator = document.querySelector(".rotator").lastElementChild.classList;

setInterval(() => {
    const rotatorCaseActive = document.querySelector(".rotator__case_active");

    if (rotator.contains("rotator__case_active")) {
        rotator.remove("rotator__case_active");
        document.querySelector(".rotator").firstElementChild.classList.add("rotator__case_active");
    } else {
        rotatorCaseActive.classList.remove("rotator__case_active");
        rotatorCaseActive.nextElementSibling.classList.add("rotator__case_active")
    }
}, 1000);