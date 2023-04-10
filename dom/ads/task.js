const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
    let active = rotatorCase.findIndex(elem => elem.className.includes("rotator__case_active"));
    rotatorCase[active].classList.remove("rotator__case_active");
    active++;
    rotatorCase[active].classList.add("rotator__case_active");
    if (active === (rotatorCase.length - 1)) {
        active = 0;
        rotatorCase[active].classList.add("rotator__case_active");
    }
}, 1000);

//rotator__case_active