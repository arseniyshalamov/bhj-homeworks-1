const interestCheck = document.querySelectorAll(".interest__check");

addEventListener('change', elem => {
    const interest = elem.target.closest(".interest");
    const interestCheck = interest.querySelectorAll(".interest__check");

    if (elem.target.checked === true) {
        interestCheck.forEach(check => check.checked = true)
    } else {
        interestCheck.forEach(check => check.checked = false)
    }
})